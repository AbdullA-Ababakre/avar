import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import GLTFLoader from 'three-gltf-loader';

class ThreeRender {
    loader = null;
    render = null;
    scene = null;
    camera = null;
    // 初始化渲染器属性
    constructor() {
        const backgroundColor = 0xcccccc;
        let renderCalls = [];
        function render() {
            requestAnimationFrame(render);
            renderCalls.forEach((callback) => {
                callback();
            });
        }
        render();

        let scene = new THREE.Scene();

        // 1. 初始化相机
        let camera = new THREE.PerspectiveCamera(
            80,
            window.innerWidth / window.innerHeight,
            0.1,
            800
        );
        camera.position.set(-1, -1, -1);
        // camera.position.set(0, 0, 0);

        // 2. 初始化并且设置渲染器
        let renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);

        let container = document.querySelector('#modelBox');
        renderer.setSize(container.offsetWidth, container.offsetHeight - 100);

        // window上渲染  111
        // renderer.setSize(document.body.offsetWidth, document.body.offsetHeight);

        renderer.setClearColor(backgroundColor); //0x );

        renderer.toneMapping = THREE.LinearToneMapping;
        renderer.toneMappingExposure = Math.pow(0.94, 5.0);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFShadowMap;


        // 3. 当网页大小改变的时候，同时也要改变渲染画布的大小
        window.addEventListener(
            "resize",
            function () {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                let container = document.querySelector('#modelBox');
                renderer.setSize(container.offsetWidth, container.offsetHeight);
                // renderer.setSize(window.innerWidth, window.innerHeight);
            },
            false
        );

        // 4. 将渲染节点放到dom树中
        let element = document.querySelector('#modelBox');
        element.appendChild(renderer.domElement);

        // window 111
        // document.body.appendChild(renderer.domElement);


        function renderScene() {
            renderer.render(scene, camera);
        }
        renderCalls.push(renderScene);

        /* ////////////////////////////////////////////////////////////////////////// */
        // 5. 初始化鼠标控制器
        let controls = new OrbitControls(camera, renderer.domElement);

        controls.rotateSpeed = 0.3;
        controls.zoomSpeed = 0.9;

        controls.minDistance = 3;
        controls.maxDistance = 20;

        controls.minPolarAngle = 0; // radians
        controls.maxPolarAngle = Math.PI / 2; // radians

        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        renderCalls.push(function () {
            controls.update();
        });

        /* ////////////////////////////////////////////////////////////////////////// */

        // 6. 放置一个点光源
        let light = new THREE.PointLight(0xffffcc, 20, 200);
        light.position.set(4, 30, -20);
        scene.add(light);

        // 7. 放置一个环境光源
        let light2 = new THREE.AmbientLight(0x20202a, 20, 100);
        light2.position.set(30, -10, 30);
        scene.add(light2);

        this.loader = new GLTFLoader();
        this.render = render;
        this.scene = scene;
        this.camera = camera;
    }

    // 将模型注入到渲染器中
    load(resource_path) {
        this.loader.load(resource_path, (data) => {
            // let object = data.scene;
            // object.position.set(0, 0, 0);
            // this.scene.add(object);
            let model = data.scene;
            // model.position.set(2, -3, 1);
            model.position.set(0, -2, 0);
            model.scale.set(2, 2, 2);
            this.scene.add(model);

            mixer = new THREE.AnimationMixer(model);
            mixer.clipAction(data.animations[0]).play();
        });
    }
}


export default ThreeRender;