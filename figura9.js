const scene = new THREE.Scene()
scene.background = new THREE.Color(0x000000)


//camara
const camara = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const render = new THREE.WebGLRenderer();
render.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( render.domElement );

//GEOMETRIAS 
const textureLoader = new THREE.TextureLoader()
const matcap = textureLoader.load('../img/metalizada.jpg')

const material = new THREE. MeshStandardMaterial()
material.matcap = matcap 
material.color.set('green')
material.metalness = 1;
material.roughness = 0;
 
const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1000)
directionalLight.position.set(2, 4, 1)
scene.add(directionalLight)

const geometria = new THREE.ConeGeometry( 5, 20, 32 );
const cone = new THREE.Mesh(geometria,material)

const geometria2 = new THREE.TorusKnotGeometry( 10, 3, 64, 9, 12, 7 );
const torusKnot = new THREE.Mesh( geometria2, material );

const geometria3 = new THREE.BoxGeometry( 1, 1, 1 );
const cube = new THREE.Mesh(geometria3, material)

const geometria4 = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const capsule = new THREE.Mesh(geometria4, material)


const object = [cone, torusKnot, cube, capsule,]
const controls = new THREE.DragControls(object, camara, render.domElement)

controls.addEventListener('hoveron', function (event){
    event.object.material.wireframe = true; 
    event.object.scale.y *=4;
})

controls.addEventListener('hoveroff', function (event){
    event.object.material.wireframe = false;
    event.object.scale.y /=4;
})

scene.background = new THREE.Color(0xffffff)

const flyControls = new THREE.FlyControls(camara, render.domElement)
flyControls.movementSpeed = 50;
flyControls.rollSpeed = 0.01;
flyControls.autoForward = false;
flyControls.dragToLock = false;

camara.position.z = 50;
camara.position.x = 0;
camara.position.y = 0;
cone.position.x = 60
torusKnot.position.x = -40
torusKnot.position.z = 5
cube.position.z = 40
capsule.position.x = 20
capsule.position.z = 20

//animación 
function animate(){
    requestAnimationFrame( animate );
    torusKnot.rotation.y += 0.01;
    torusKnot.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    capsule.rotation.y += 0.01;
    capsule.rotation.x += 0.01;
    cone.rotation.y += 0.01;
    cone.rotation.x += 0.01;
    flyControls.update(0.5);
    
    render.render( scene, camara );
    scene.add( torusKnot );
    scene.add(cube)
    scene.add(capsule)
    scene.add(cone)
    
}
animate();