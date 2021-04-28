let container = document.getElementById('kinda-ermmm-cool');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 2, 0.1, 1000);
const renderer = new THREE.WebGLRenderer(
    {
        alpha: true
    }
);

renderer.setSize(container.offsetWidth, container.offsetHeight);
container.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial(
    {
        color: 0x000000
    }
);
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 3;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.render(scene, camera);
}

if (WEBGL.isWebGLAvailable()) {
    animate();

} else {
    const warning = WEBGL.getWebGLErrorMessage();
    container.appendChild(warning);
}