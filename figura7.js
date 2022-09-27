//escenario
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xB689FB)


//camara
const camara = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const render = new THREE.WebGLRenderer();
render.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( render.domElement );

//GEOMETRIAS 
const textureLoader = new THREE.TextureLoader()
const matcap = textureLoader.load('../img/metal.jpg')

// const cubeTextureLoader = new THREE.CubeTextureLoader()
// const evm = cubeTextureLoader.load([
//     "../img/.jpg"
// ])




const material = new THREE. MeshStandardMaterial()
material.matcap = matcap 
material.color.set('#124E91')
material.metalness = 1;
material.roughness = 0;
scene.background = new THREE.Color(0xB689FB)

 
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1000)
directionalLight.position.set(2, 4, 1)
scene.add(directionalLight)

const geometry = new THREE.TorusKnotGeometry( 10, 3, 64, 9, 12, 7 );
const torusKnot = new THREE.Mesh( geometry, material );
scene.background = new THREE.Color(0xBEBEBE)

camara.position.z = 40;
camara.position.x = 0;
camara.position.y = 0;

//animación 
function animate(){
    requestAnimationFrame( animate );
    torusKnot.rotation.y += 0.01;
    torusKnot.rotation.x += 0.01;
    
    render.render( scene, camara );
    scene.add( torusKnot );
    
}
animate();