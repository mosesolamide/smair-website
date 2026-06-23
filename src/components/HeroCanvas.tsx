import { useEffect, useRef } from "react";
import * as THREE from "three";

const BRAND_COLORS = [0x2fe3c8, 0x7c5cff, 0x2859b6, 0x2fe3c8, 0x7c5cff];

type ShapeConfig = {
  geo: THREE.BufferGeometry;
  color: number;
  position: [number, number, number];
  rotationSpeed: [number, number, number];
  floatSpeed: number;
  floatAmp: number;
  floatOffset: number;
  scale: number;
};

function buildShapes(): ShapeConfig[] {
  return [
    {
      geo: new THREE.TorusGeometry(1, 0.3, 8, 24),
      color: BRAND_COLORS[0],
      position: [-5, 2, -4],
      rotationSpeed: [0.003, 0.005, 0.001],
      floatSpeed: 0.6,
      floatAmp: 0.4,
      floatOffset: 0,
      scale: 1.1,
    },
    {
      geo: new THREE.IcosahedronGeometry(1, 0),
      color: BRAND_COLORS[1],
      position: [5.5, -1, -5],
      rotationSpeed: [0.004, 0.002, 0.006],
      floatSpeed: 0.5,
      floatAmp: 0.5,
      floatOffset: 1.2,
      scale: 1.3,
    },
    {
      geo: new THREE.OctahedronGeometry(1, 0),
      color: BRAND_COLORS[2],
      position: [-4.5, -2.5, -3],
      rotationSpeed: [0.005, 0.003, 0.004],
      floatSpeed: 0.7,
      floatAmp: 0.3,
      floatOffset: 2.1,
      scale: 0.85,
    },
    {
      geo: new THREE.BoxGeometry(1.4, 1.4, 1.4),
      color: BRAND_COLORS[3],
      position: [4, 3, -6],
      rotationSpeed: [0.002, 0.006, 0.003],
      floatSpeed: 0.55,
      floatAmp: 0.45,
      floatOffset: 3.0,
      scale: 1.0,
    },
    {
      geo: new THREE.TorusGeometry(0.7, 0.25, 8, 20),
      color: BRAND_COLORS[4],
      position: [0, -3.5, -5],
      rotationSpeed: [0.006, 0.002, 0.005],
      floatSpeed: 0.65,
      floatAmp: 0.35,
      floatOffset: 0.7,
      scale: 0.9,
    },
    {
      geo: new THREE.IcosahedronGeometry(0.75, 0),
      color: BRAND_COLORS[2],
      position: [-7, 0, -7],
      rotationSpeed: [0.003, 0.007, 0.002],
      floatSpeed: 0.45,
      floatAmp: 0.55,
      floatOffset: 1.8,
      scale: 1.2,
    },
  ];
}

export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = containerRef.current!;
    const w = container.clientWidth;
    const h = container.clientHeight;

    /* Scene */
    const scene = new THREE.Scene();

    /* Camera */
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    camera.position.z = 8;

    /* Renderer — transparent background */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    /* Shapes */
    const configs = buildShapes();
    const meshes: Array<{ mesh: THREE.Mesh; config: ShapeConfig; baseY: number }> = [];

    for (const config of configs) {
      const mat = new THREE.MeshBasicMaterial({
        color: config.color,
        wireframe: true,
        transparent: true,
        opacity: 0.22,
      });
      const mesh = new THREE.Mesh(config.geo, mat);
      mesh.position.set(...config.position);
      mesh.scale.setScalar(config.scale);
      scene.add(mesh);
      meshes.push({ mesh, config, baseY: config.position[1] });
    }

    /* Mouse parallax */
    let mouseX = 0;
    let mouseY = 0;
    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    /* Resize */
    const onResize = () => {
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    /* Animation loop */
    let raf: number;
    const clock = new THREE.Clock();

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      for (const { mesh, config, baseY } of meshes) {
        mesh.rotation.x += config.rotationSpeed[0];
        mesh.rotation.y += config.rotationSpeed[1];
        mesh.rotation.z += config.rotationSpeed[2];
        mesh.position.y = baseY + Math.sin(t * config.floatSpeed + config.floatOffset) * config.floatAmp;
      }

      /* Subtle camera parallax on mouse */
      camera.position.x += (mouseX * 0.6 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 0.4 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
      for (const { mesh } of meshes) {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
  );
}
