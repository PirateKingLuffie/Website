const canvas = document.getElementById("webgl-canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
camera.position.z = 1;

const uniforms = {
  u_time: { value: 0.0 },
  u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
};

const material = new THREE.ShaderMaterial({
  uniforms,
  vertexShader: document.getElementById("vertexShader").textContent,
  fragmentShader: document.getElementById("fragmentShader").textContent
});

const geometry = new THREE.PlaneGeometry(2, 2);
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

function animate(t) {
  requestAnimationFrame(animate);
  uniforms.u_time.value = t * 0.001;
  renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
  uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

window.addEventListener("load", () => {
  setTimeout(() => {
    gsap.to(".title", { opacity: 1, duration: 1.5, ease: "power2.out", delay: 0.5 });
    gsap.to(".subtitle", { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 1 });
  }, 1000);
});
