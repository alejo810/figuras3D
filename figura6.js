//escenarios
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xEFFF00)


//fondo
var loader = new THREE.TextureLoader();
loader.load("./img/madera.jpg", function(texture){
    scene.background = texture;
});


//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//geometría

const geometry = new THREE.PlaneGeometry( 1, 1 );

        

        //textura
        const textureLoader = new THREE.TextureLoader();
        const matcap = textureLoader.load("/img/luna.jpg");
        //fin textura

        //material 
    
        const material = new THREE.MeshBasicMaterial( {color: 0x023EA1, side: THREE.DoubleSide} );
        material.matcap = matcap;
        material.flatShading = true;
            
        //fin material
        const plane = new THREE.Mesh( geometry, material );
        scene.add( plane );
//fin geometria
camera.position.z = 4;

// bordes
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

// fin bordes
function animate(){

    requestAnimationFrame( animate );
   plane.rotation.x += 0.02;  
    plane.rotation.y += 0.02;
     line.rotation.y += 0.02;
     line.rotation.x += 0.02;
    renderer.render( scene, camera );
}
animate();