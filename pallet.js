'use strict';



class Pallet extends THREE.Object3D {

  constructor(width, depth, height) {
    super();

    // box size
    var size = 28;
    var text = 'ALTERNATORS XPTO\n MY COMPANY INC';

    // box geometry
    var boxGeometry = new THREE.BoxGeometry(width, height, depth, 16, 16, 16);
    boxGeometry.translate = new THREE.Vector3(width/2, height/2, -depth/2)
  
    var boxSideTexture = new THREE.TextureLoader().load('../images/darker_wood.jpg');
    var boxTopTexture = new THREE.TextureLoader().load('../images/alternator.png');
    boxTopTexture.wrapS = THREE.RepeatWrapping;
    boxTopTexture.wrapT = THREE.RepeatWrapping;
    boxTopTexture.repeat.set(4, 2);
    const boxMaterial = [
        new THREE.MeshBasicMaterial({ map: boxSideTexture }), //right side
        new THREE.MeshBasicMaterial({ map: boxSideTexture }), //left side
        new THREE.MeshBasicMaterial({ map: boxTopTexture }), //top side
        new THREE.MeshBasicMaterial({ map: boxSideTexture }), //bottom side
        new THREE.MeshBasicMaterial({ map: boxSideTexture }), //front side
        new THREE.MeshBasicMaterial({ map: boxSideTexture }), //back side
    ];
    // box mesh
    var cubeMesh = new THREE.Mesh(boxGeometry, boxMaterial);

    new THREE.FontLoader().load('../images/helvetiker_regular.typeface.json', 
      function (font) {
        var textGeometry = new THREE.TextGeometry(text, { font: font, size: 1, height: 0.1 });
        var textMaterial = new THREE.MeshPhongMaterial({ color: 'red' });
        var textMesh = new THREE.Mesh(textGeometry, textMaterial)
        var textMesh1 = new THREE.Mesh(textGeometry, textMaterial)
        var textMesh2 = new THREE.Mesh(textGeometry, textMaterial)
        var textMesh3 = new THREE.Mesh(textGeometry, textMaterial)
        textMesh.translateY(width/3);
        textMesh.translateX(width/2);
        textMesh.translateZ(width/4);
        textMesh.rotateY(Math.PI/2)

        textMesh1.translateY(width/3);
        textMesh1.translateX(-width/2);
        textMesh1.translateZ(-width/4);
        textMesh1.rotateY(-Math.PI/2)
        
        textMesh2.translateY(depth/3);
        textMesh2.translateX(depth/4);
        textMesh2.translateZ(depth/2);
        textMesh2.rotateY(Math.PI)
        textMesh2.rotateX(-2*Math.PI)

        textMesh3.translateY(depth/3);
        textMesh3.translateX(depth/4);
        textMesh3.translateZ(-depth/2);
        textMesh3.rotateY(Math.PI)

        cubeMesh.add(textMesh);
        cubeMesh.add(textMesh1);
        cubeMesh.add(textMesh2);
        cubeMesh.add(textMesh3);
      }
    );
    
    

    this.add(cubeMesh);
  }

  
}