import './style.css'

import * as THREE from 'three';
import { TorusBufferGeometry } from 'three';

const farClip = 1000;
const nearClip = 0.1;
const docwidth = window.innerWidth;
const docheight = window.innerHeight;


// SETUP //

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, nearClip, farClip);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#background'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene,camera);

const geometry = new THREE.DodecahedronGeometry(10,0);
  const material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe: true});
  const mesh = new THREE.Mesh(geometry,material);

scene.add(mesh);


animate();



// Functions // 
function animate(){
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.005;

    renderer.render(scene,camera);
}