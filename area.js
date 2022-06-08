'use strict';


class Area extends THREE.Object3D {

  constructor() {
    super();

    // plane geometry
    // plane geometry
    var geometry = new THREE.PlaneGeometry(); 

    // plane texture
    var texture = new THREE.TextureLoader().load('../images/map.png', 
      //scale/translate geometry depending on texture size
      function (texture) {
        geometry.scale(texture.image.width, texture.image.height, 0);
        geometry.translate(texture.image.width/2, texture.image.height/2, 0);
      } 
    );

    // plane material
    var material = new THREE.MeshBasicMaterial({ map: texture });

    // plane mesh
    var mesh = new THREE.Mesh(geometry, material);
    
    this.add(mesh);
  }

  

}