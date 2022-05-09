import React from "react";
import { SceneLoader } from "babylonjs";
import "babylonjs-loaders";
import BabylonScene from "./BabylonScene";

const onSceneReady = async (scene) => {
    scene.createDefaultCamera(true);

    // const [{ localUri }] = await Asset.loadAsync(
    //     require('../public/models/wing.glb')
    // );

    SceneLoader.Append(
        "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoomBox/glTF/",
        "BoomBox.gltf",
        scene,
        (meshes) => {
            scene.activeCamera = meshes.cameras[1];
        }
    );

    // SceneLoader.Append("https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/BoomBox/glTF/", "BoomBox.gltf", scene, function (scene) {
    // }, null, function (scene) {
    //     // alert("error");
    //     scene.activeCamera = meshes.cameras[1];
    // });

    return scene;
};

// SceneLoader.ImportMeshAsync("model1", "/relative path/", "myFile"); //Name of the model loads one model

const onRender = (scene) => { };

const CafeBanner = () => {
    return (
        <BabylonScene
            antialias
            onSceneReady={onSceneReady}
            onRender={onRender}
            id="my-canvas"
        />
    );
};

export default CafeBanner;