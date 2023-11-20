import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const useAnimate = (callback: (time: number) => void) => {

}

export default function BackgroundVisualization() {

    const rootElRef = useRef<HTMLDivElement | null>(null);

    const scene = useRef<THREE.Scene | null>(null);

    const camera = useRef<THREE.PerspectiveCamera | null>(null);

    const options = useRef({
        cubeSize: 0.8,
        m: 10,
        n: 8
    });

    // const [time, setTime] = useState(0);

    const makeCubes = () => {
        const geometry = new THREE.BoxGeometry(options.current.cubeSize, options.current.cubeSize, 10);
        // const material = new THREE.MeshNormalMaterial();
        const material = new THREE.MeshLambertMaterial();

        const makeMesh = () => new THREE.Mesh(geometry, material);

        const cubes = new THREE.Group();

        for (let i = 0; i < options.current.m; i++) {
            for (let j = 0; j < options.current.n; j++) {
                const mesh = makeMesh();
                mesh.position.x = j * options.current.cubeSize;
                mesh.position.y = -i * options.current.cubeSize;
                cubes.add(mesh);
            }
        }

        return cubes;
    };

    useEffect(() => {
        if (rootElRef.current === null) return;

        let width = rootElRef.current.offsetWidth, height = rootElRef.current.offsetHeight;

        const setRendererDims = () => {
            width = rootElRef.current.offsetWidth
            height = rootElRef.current.offsetHeight;
            renderer.setSize(width, height);
            camera.current.aspect = width / height;
            camera.current?.updateProjectionMatrix();
            renderer.render(scene.current!, camera.current!);
        }


        scene.current = new THREE.Scene();

        camera.current = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
        // const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 100);
        camera.current.position.z = 7;


        const cubes = makeCubes();

        cubes.position.x = -2.8;//-m*CUBE_SIZE;

        // cubes.forEach(c => scene.add(c));
        scene.current.add(cubes);
        const light = new THREE.PointLight(0x40404a, 1000, 100); // soft white light
        const light2 = new THREE.PointLight(0x40404a, 10000, 100); // soft white light
        light.position.x += 3;
        light2.position.y -= 10;
        // const hemiLight = new THREE.HemisphereLight( 0x40404a, 0xffffff, 0.01);
        scene.current.add(light, light2);


        // animation

        camera.current.rotation.x = -0.5;
        camera.current.rotation.y = 0.5;
        camera.current.rotation.z = 0.5;


        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);

        window.addEventListener('resize', setRendererDims);

        renderer.render(scene.current!, camera.current!);
        function animation(time) {

            cubes.children.forEach((c, idx) => c.position.z = (Math.sin(time / 2000 + idx / 10) + Math.cos(idx) / 10) / 5);
            // mesh.rotation.x = time / 2000;
            // mesh.rotation.y = time / 1000;

            renderer.render(scene.current!, camera.current!);

        }
        renderer.setAnimationLoop(animation);
        if (rootElRef.current)
            rootElRef.current.appendChild(renderer.domElement);

        return () => {
            rootElRef.current?.removeChild(renderer.domElement);
            window.removeEventListener('resize', setRendererDims);
        }
    })



    return (
        <div className="w-full h-full fixed pointer-events-none !z-[-1] theme-responsive-bg" ref={rootElRef}></div>
    )
};