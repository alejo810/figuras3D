//escenarios
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xEFFF00)
scene.fog = new THREE.Fog( 0xffffff, 2, 9);


//fondo
var loader = new THREE.TextureLoader();
loader.load("./img/godofwar.jpg", function(texture){
    scene.background = texture;
});


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometría

    //const geometry = new THREE.CircleGeometry( 2, 20 );

        const geometry = new THREE.BoxGeometry( 1, 1, 1 );

        //textura
        const textureLoader = new THREE.TextureLoader();
        const matcap = textureLoader.load('./img/Cara2.PNG');
        //fin textura

        //ORBIT CONTROLS
        

        //material 
            const material = new THREE.MeshMatcapMaterial();
            material.matcap = matcap;
            material.flatShading = true;
            
        //fin material
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        var control = new THREE.OrbitControls( camera, renderer.domElement );
        control.minDistance = 3,
        control.maxDistance = 10,
//fin geometria
camera.position.z = 4;

// bordes
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

// fin bordes
function animate(){

    requestAnimationFrame( animate );
   cube.rotation.x += 0.01;  
    cube.rotation.y += 0.01;
     line.rotation.y += 0.01;
     line.rotation.x += 0.01;
    renderer.render( scene, camera );
}
animate();