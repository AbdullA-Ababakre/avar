import { Engine, Scene } from "babylonjs";
import React, { useEffect, useRef, useState } from "react";

const BabylonScene = (props) => {
    const reactCanvas = useRef(null);
    const {
        antialias,
        engineOptions,
        adaptToDeviceRatio,
        sceneOptions,
        onRender,
        onSceneReady,
        ...rest
    } = props;

    const [loaded, setLoaded] = useState(false);
    const [scene, setScene] = useState(null);

    useEffect(() => {
        if (window) {
            const resize = () => {
                if (scene) {
                    scene.getEngine().resize();
                }
            };
            window.addEventListener("resize", resize);

            return () => {
                window.removeEventListener("resize", resize);
            };
        }
    }, [scene]);

    useEffect(() => {
        if (!loaded) {
            setLoaded(true);
            const engine = new Engine(
                reactCanvas.current,
                antialias,
                engineOptions,
                adaptToDeviceRatio
            );
            const scene = new Scene(engine, sceneOptions);
            setScene(scene);
            if (scene.isReady()) {
                props.onSceneReady(scene);
            } else {
                scene.onReadyObservable.addOnce((scene) => props.onSceneReady(scene));
            }

            engine.runRenderLoop(() => {
                if (typeof onRender === "function") {
                    onRender(scene);
                }

                scene.render();

            });
        }

        return () => {
            if (scene !== null) {
                scene.dispose();
            }
        };
    }, [reactCanvas]);

    return (
        <canvas
            style={{ width: "100%", height: "100%" }}
            ref={reactCanvas}
            {...rest}
        />
    );
};

export default BabylonScene;