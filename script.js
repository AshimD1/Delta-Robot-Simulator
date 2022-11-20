var scene = new THFEE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1,1,1,1);
var material = new THFEE.MeshBasicMaterial( {color: 0x00ff00} );

camera.position.z=200;

var controls = new THREE.orbitControls(camera, renderer.domElement);
controls.enableDamoing = true;
controls.campingFactor = 0.25;
controls.enableZoom = true;

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30,100%,75%)'),1.0);
keyLight.position.set(-100,0,100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240,100%,75%)'),0.75);
fillLight.position.set(100,0,100);

var backLight = new THREE.DirectionalLight(0xffffff,1.0);
backLight.position.set(100,0,-100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

var objLoader = new THREE.OBJLoader();
objLoader.setPath('C:\Users\ashim\Downloads\V.robot simulator');
objLoader.load('model.obj',function(object){
    object.position.y -=60;
    scene.add(object);
});


var animate = function(){
    requestAnimationFrame( animate );

    controls.update();


    renderer.render(scene, camera);
};

animate();