
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xEFFF00)


var loader = new THREE.TextureLoader();
loader.load("./img/madera.jpg", function(texture){
    scene.background = texture;
});

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


    const geometry = new THREE.SphereGeometry( 15, 32, 16 );

        const textureLoader = new THREE.TextureLoader();
        const matcap = textureLoader.load('./img/papel.jpg');

            const material = new THREE.MeshMatcapMaterial();
            material.metalness = 30;
            material.roughness = 10; 
            material.color.set("blue");    
            material.matcap = matcap
            
            
            const sphere = new THREE.Mesh( geometry, material );
            scene.add( sphere );

        var control = new THREE.OrbitControls( camera, renderer.domElement );
        control.minDistance = 50,
        control.maxDistance = 100,
camera.position.z = 50;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );

function animate(){

    requestAnimationFrame( animate );
   sphere.rotation.x += 0.01;  
    sphere.rotation.y += 0.01;
     line.rotation.y += 0.01;
     line.rotation.x += 0.01;
    renderer.render( scene, camera );
}
animate();