//escenarios
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xEFFF00)



//fondo
var loader = new THREE.TextureLoader();
loader.load("./img/papel.jpg", function(texture){
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

        const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );

        //textura
        const textureLoader = new THREE.TextureLoader();
        const matcap = textureLoader.load("../img/luna.jpg");
        //fin textura

        //material 
    
        const material = new THREE.MeshNormalMaterial( { color: 0x00000 } );
        material.matcap = matcap;
        material.flatShading = true;

        //fin material
        const torus = new THREE.Mesh( geometry, material );
        scene.add( torus );
        


//fin geometria
camera.position.z = 25;

// bordes
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

// fin bordes
function animate(){

    requestAnimationFrame( animate );
   torus.rotation.x += 0.02;  
    torus.rotation.y += 0.02;
     line.rotation.y += 0.02;
     line.rotation.x += 0.02;
    renderer.render( scene, camera );
}
animate();
