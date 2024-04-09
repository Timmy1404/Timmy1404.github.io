// Find the latest version by visiting https://unpkg.com/three.

import * as THREE from 'https://unpkg.com/three@0.163.0/build/three.module.js';
//import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';
//console.log(scene);  //checking if the orbit controls import worked

const scene = new THREE.Scene()  //declaring the thingys
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
const renderer = new THREE.WebGLRenderer()
console.log(scene);  //checking the thingys work
console.log(camera);
console.log(renderer);

renderer.setSize(window.innerWidth, window.innerHeight)  //make it take up the full screen
renderer.setPixelRatio(devicePixelRatio)  //fix sharp edges
document.body.appendChild(renderer.domElement)

const boxGeometry = new THREE.BoxGeometry(1, 1, 1) //create the box geometry
const material = new THREE.MeshBasicMaterial({color: 0x00FF00})  //create the box material
console.log(boxGeometry);
console.log(material);

const mesh = new THREE.Mesh(boxGeometry, material)  //create the box mesh using the geometry and material
console.log(mesh);

scene.add(mesh)  //check box mesh

camera.position.x = 0  //move camera away from origin to see the box
camera.position.y = 0 
camera.position.z = 5 
camera.lookAt(0, 0, 0);

//const controls = new OrbitControls(camera, renderer.domElement);

function animate() {  //animation loop
  renderer.render(scene, camera)
  
  mesh.rotation.x += 0.01 
  mesh.rotation.y += 0.01 
  mesh.rotation.z += 0.01 
  
  requestAnimationFrame(animate)
}

animate()
