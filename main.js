import './style.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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

// Basic Houskeeping, setting pixel ratio and size to be the same as sceen size, also camera pos.

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene,camera);

// Making Geo to show, replace with Suzanne later!

const geometry = new THREE.DodecahedronGeometry(10,0);
  const material = new THREE.MeshStandardMaterial({color: 0xFF6347});
  const mesh = new THREE.Mesh(geometry,material);


scene.add(mesh);

// Lighting

const pointLight1 = new THREE.PointLight(0xffffff);
pointLight1.position.set(20,20,20);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight1, ambientLight);

const controls = new OrbitControls(camera,renderer.domElement); // Mouse Orbit

animate();



// Functions //
// This functin will basicly add stuff like animations, but the most important part is render once a frame.
function animate(){
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.005;

    controls.update(); // Updates controls

    renderer.render(scene,camera);
}

function addStar(){
  const geometry = new THREE.SphereGeometry(0.15,24,24);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff});
  const star = new THREE.Mesh(geometry,material);

  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x,y,z);
  scene.add(star)
}

Array(200).fill().forEach(addStar);

const backgroundTexture = new THREE.TextureLoader().load('images/bg2.jpg');
scene.background = backgroundTexture;