import './style.css'

import * as THREE from 'three';

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