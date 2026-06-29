import { useEffect, useRef } from "react";
import * as THREE from "three";

/* Subtle animated particle field — dots + connection lines in brand colors.
   Stays light enough not to distract from the real photos in the hero. */
export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = containerRef.current!;
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 200);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    /* ── Particles ────────────────────────────────────── */
    const COUNT    = 80;
    const positions: Float32Array = new Float32Array(COUNT * 3);
    const velocities: THREE.Vector3[] = [];
    const sizes = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      const spread = 30;
      positions[i * 3]     = (Math.random() - 0.5) * spread * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.025,
          (Math.random() - 0.5) * 0.018,
          0,
        ),
      );
      sizes[i] = Math.random() * 2.5 + 1.0;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("size",     new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.35,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.45,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    /* ── Connection lines ─────────────────────────────── */
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x3563e9,
      transparent: true,
      opacity: 0.12,
    });

    const lineGeo  = new THREE.BufferGeometry();
    const lineMax  = COUNT * COUNT * 3 * 2; // worst case
    const linePos  = new Float32Array(lineMax);
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePos, 3));
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    /* Mouse parallax */
    let mx = 0, my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth  - 0.5);
      my = (e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMouse);

    const onResize = () => {
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    /* ── Animation ────────────────────────────────────── */
    const LINK_DIST = 10;
    let raf: number;

    const animate = () => {
      raf = requestAnimationFrame(animate);

      /* Move particles */
      for (let i = 0; i < COUNT; i++) {
        positions[i * 3]     += velocities[i].x;
        positions[i * 3 + 1] += velocities[i].y;

        /* Wrap */
        if (positions[i * 3]     >  35) positions[i * 3]     = -35;
        if (positions[i * 3]     < -35) positions[i * 3]     =  35;
        if (positions[i * 3 + 1] >  20) positions[i * 3 + 1] = -20;
        if (positions[i * 3 + 1] < -20) positions[i * 3 + 1] =  20;
      }
      geo.attributes.position.needsUpdate = true;

      /* Build connection lines */
      let li = 0;
      for (let a = 0; a < COUNT; a++) {
        for (let b = a + 1; b < COUNT; b++) {
          const dx = positions[a * 3]     - positions[b * 3];
          const dy = positions[a * 3 + 1] - positions[b * 3 + 1];
          if (Math.sqrt(dx * dx + dy * dy) < LINK_DIST) {
            linePos[li++] = positions[a * 3];
            linePos[li++] = positions[a * 3 + 1];
            linePos[li++] = positions[a * 3 + 2];
            linePos[li++] = positions[b * 3];
            linePos[li++] = positions[b * 3 + 1];
            linePos[li++] = positions[b * 3 + 2];
          }
        }
      }
      (lineGeo.attributes.position as THREE.BufferAttribute).array = linePos;
      lineGeo.attributes.position.needsUpdate = true;
      lineGeo.setDrawRange(0, li / 3);

      /* Gentle camera drift */
      camera.position.x += (mx * 3 - camera.position.x) * 0.03;
      camera.position.y += (-my * 2 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      geo.dispose();
      mat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
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
