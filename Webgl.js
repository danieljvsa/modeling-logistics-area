'use strict';

class Webgl {

  constructor() {
    
    
    this.clock = new THREE.Clock();

    // create a render and set the size
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0xEEEEEE);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.scene = new THREE.Scene();     

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    // position and point the camera to the center of the scene
    this.camera.position.x = 1000;
    this.camera.position.y = 1000;
    this.camera.position.z = 1000;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    
    this.orbitControls()

    // add subtle ambient lighting
    this.ambientLight = new THREE.AmbientLight(0x878787);
    this.scene.add(this.ambientLight);

    // add the output of the renderer to the html element
    $("#WebGL-output").append(this.renderer.domElement);

    
  }

 

  
  orbitControls () {
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.autoRotate = false;
  }
 

 

  render () {
    
    let delta = this.clock.getDelta();
    this.controls.update(delta);
    
    
    //render the scene
    this.renderer.render(this.scene, this.camera);
  }
  
}
