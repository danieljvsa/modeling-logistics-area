'use strict';



class Webgl {

  constructor() {
    
    
    this.clock = new THREE.Clock();

    // create a render and set the size
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0xEEEEEE);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    
    this.scene = new THREE.Scene();     

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 3000);
    // position and point the camera to the center of the scene
    this.camera.position.x = 1000;
    this.camera.position.y = 1000;
    this.camera.position.z = 1000;
    this.camera.lookAt(this.scene.position);
    
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.autoRotate = false;

    // add subtle ambient lighting
    this.ambientLight = new THREE.AmbientLight(0x878787);
    this.scene.add(this.ambientLight);

    let map = new Area();
    map.rotation.x = -1.5708;
    this.scene.add(map);
   

    let box1 = createBox(370, 15, -548)
    box1.rotation.y = -0.5678;
    this.scene.add(box1)

    let box2 = createBox(510, 15, -455)
    box2.rotation.y = -0.5678;
    this.scene.add(box2)
    
    
    function createBox(x, y, z){
      var box = new Pallet();

      box.translateX(x);
      box.translateY(y);
      box.translateZ(z);

      return box;
    }
    
    // add the output of the renderer to the html element
    $("#WebGL-output").append(this.renderer.domElement);

    
  }

 

  
  
 

 

  render () {
    
    let delta = this.clock.getDelta();
    this.controls.update(delta);
    
    
    //render the scene
    this.renderer.render(this.scene, this.camera);
  }
  
}
