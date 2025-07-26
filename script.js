// Canvas + Three.js background
const canvas = document.getElementById('bg-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas, antialias:true});
renderer.setSize(innerWidth,innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const geom = new THREE.PlaneGeometry(20,20,64,64);
const mat = new THREE.MeshBasicMaterial({color:0x111111, wireframe:true});
const plane = new THREE.Mesh(geom, mat);
scene.add(plane);
camera.position.z = 10;

window.addEventListener('resize',()=>{ camera.aspect=innerWidth/innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth,innerHeight); });
gsap.ticker.add(()=>{ plane.rotation.x += 0.0005; plane.rotation.y += 0.001; renderer.render(scene, camera); });

// Hero animation
gsap.fromTo('.hero-text h1',{y:50,opacity:0},{y:0,opacity:1,duration:1.6,ease:'power2.out',delay:0.5});
gsap.fromTo('.hero-text p',{y:30,opacity:0},{y:0,opacity:1,duration:1.2,ease:'power2.out',delay:1});

// Smooth scroll
document.querySelectorAll('header nav a').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    const tgt = document.querySelector(link.getAttribute('href'));
    window.scrollTo({top:tgt.offsetTop, behavior:'smooth'});
  });
});

// Cursor effect
const cursor = document.getElementById('cursor');
window.addEventListener('mousemove',e=>{
  cursor.style.top = e.clientY+'px';
  cursor.style.left = e.clientX+'px';
});
document.querySelectorAll('a, .card').forEach(el=>{
  el.addEventListener('mouseenter',()=>cursor.style.transform='translate(-50%,-50%) scale(2)');
  el.addEventListener('mouseleave',()=>cursor.style.transform='translate(-50%,-50%) scale(1)');
});