//escenario

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xA9A9A9);
var loader = new THREE.TextureLoader()
loader.load('../imagenes/flor.jpg', function(Texture){
    scene.background = Texture
});


//camara

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrias
const geometry = new THREE.BoxGeometry( 5, 5, 5 );
const material2 = new THREE.MeshNormalMaterial();
const TextureLoader = new THREE.TextureLoader();
const geometrys = new THREE.ConeGeometry( 100, 100, 100 );
const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
material2.flatShading = true;


const cube = new THREE.Mesh(geometry, material2)
scene.add(cube);
scene.add(line);
camera.position.z = 10;
camera.position.x = 1;
camera.position.y = 0.2;


//annimacion

function animate() {
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();