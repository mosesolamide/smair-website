import { useEffect, useRef } from "react";
import * as THREE from "three";

/* ─── Brand palette ───────────────────────────────────── */
const CYAN   = 0x2fe3c8;
const VIOLET = 0x7c5cff;
const BLUE   = 0x2859b6;
const WHITE  = 0xffffff;
const DARK   = 0x111133;

/* ─── Robot factory ───────────────────────────────────── */
type RobotRig = {
  root: THREE.Group;
  headPivot: THREE.Group;
  leftArm: THREE.Group;
  rightArm: THREE.Group;
};

function buildRobot(color: number): RobotRig {
  const root = new THREE.Group();

  const body  = new THREE.MeshPhongMaterial({ color, shininess: 30 });
  const white = new THREE.MeshBasicMaterial({ color: WHITE });
  const dark  = new THREE.MeshBasicMaterial({ color: DARK });
  const glow  = new THREE.MeshBasicMaterial({ color: WHITE });

  const add = (geo: THREE.BufferGeometry, mat: THREE.Material, px = 0, py = 0, pz = 0, parent: THREE.Object3D = root) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(px, py, pz);
    parent.add(m);
    return m;
  };

  /* FEET */
  add(new THREE.BoxGeometry(0.34, 0.14, 0.42), body, -0.27, -1.17,  0.06);
  add(new THREE.BoxGeometry(0.34, 0.14, 0.42), body,  0.27, -1.17,  0.06);

  /* LEGS */
  add(new THREE.BoxGeometry(0.28, 0.58, 0.28), body, -0.27, -0.78, 0);
  add(new THREE.BoxGeometry(0.28, 0.58, 0.28), body,  0.27, -0.78, 0);

  /* BODY */
  add(new THREE.BoxGeometry(1.08, 0.88, 0.58), body, 0, -0.11, 0);

  /* chest screen */
  add(new THREE.BoxGeometry(0.46, 0.34, 0.06), white, 0, -0.08, 0.30);
  add(new THREE.CylinderGeometry(0.06, 0.06, 0.07, 8), new THREE.MeshBasicMaterial({ color }), 0, -0.08, 0.34);

  /* NECK */
  add(new THREE.CylinderGeometry(0.11, 0.15, 0.18, 8), body, 0, 0.44, 0);

  /* HEAD PIVOT — allows head to look left/right */
  const headPivot = new THREE.Group();
  headPivot.position.set(0, 0.53, 0);
  root.add(headPivot);

  /* head box */
  add(new THREE.BoxGeometry(0.70, 0.60, 0.54), body, 0, 0.30, 0, headPivot);

  /* pixel eyes — two whites with dark pupils + glint */
  for (const ex of [-0.175, 0.175]) {
    add(new THREE.BoxGeometry(0.17, 0.14, 0.05), white, ex,        0.35, 0.28, headPivot);
    add(new THREE.BoxGeometry(0.08, 0.09, 0.04), dark,  ex,        0.34, 0.31, headPivot);
    add(new THREE.BoxGeometry(0.03, 0.03, 0.02), glow,  ex + 0.03, 0.38, 0.33, headPivot);
  }

  /* pixel mouth — 5 dots forming a smile */
  const smileXY: [number, number][] = [
    [-0.13, 0.17], [-0.07, 0.13], [0, 0.12], [0.07, 0.13], [0.13, 0.17],
  ];
  for (const [mx, my] of smileXY) {
    add(new THREE.BoxGeometry(0.05, 0.05, 0.03), white, mx, my, 0.28, headPivot);
  }

  /* antenna */
  add(new THREE.CylinderGeometry(0.03, 0.03, 0.30, 6), body, 0, 0.75, 0, headPivot);
  add(new THREE.SphereGeometry(0.08, 8, 8), new THREE.MeshBasicMaterial({ color: WHITE }), 0, 0.92, 0, headPivot);

  /* ARMS — pivot at shoulder so rotation swings arm forward/back */
  const leftArm = new THREE.Group();
  leftArm.position.set(-0.68, 0.06, 0);
  root.add(leftArm);
  add(new THREE.BoxGeometry(0.26, 0.52, 0.26), body,  0, -0.26, 0, leftArm);
  add(new THREE.BoxGeometry(0.24, 0.20, 0.24), body,  0, -0.56, 0, leftArm);

  const rightArm = new THREE.Group();
  rightArm.position.set(0.68, 0.06, 0);
  root.add(rightArm);
  add(new THREE.BoxGeometry(0.26, 0.52, 0.26), body, 0, -0.26, 0, rightArm);
  add(new THREE.BoxGeometry(0.24, 0.20, 0.24), body, 0, -0.56, 0, rightArm);

  return { root, headPivot, leftArm, rightArm };
}

/* ─── Compute how wide the scene is at z=0 ─────────────── */
function visibleWidthAtZ0(camera: THREE.PerspectiveCamera) {
  const h = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
  return h * camera.aspect;
}

/* ─── Main canvas component ────────────────────────────── */
export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = containerRef.current!;
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;

    /* Scene */
    const scene = new THREE.Scene();

    /* Camera */
    const camera = new THREE.PerspectiveCamera(58, w / h, 0.1, 100);
    camera.position.z = 8;

    /* Renderer — fully transparent bg */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    /* Lighting — warm top + cool fill */
    scene.add(new THREE.AmbientLight(WHITE, 0.55));
    const sun = new THREE.DirectionalLight(WHITE, 1.1);
    sun.position.set(3, 6, 5);
    scene.add(sun);
    const fill = new THREE.DirectionalLight(0xaaccff, 0.25);
    fill.position.set(-3, -2, 3);
    scene.add(fill);

    /* ── Build 3 robots ── */
    const rigs: Array<RobotRig & {
      baseY: number;
      baseX: number;
      phase: number;
      patrolAmp: number;
      patrolSpd: number;
      facing: number;
    }> = [];

    const cfgs = [
      { color: CYAN,   phase: 0.0,  facing:  0.35, patrolAmp: 0.7, patrolSpd: 0.22, scale: 0.88, zPos:  0.0 },
      { color: VIOLET, phase: 2.1,  facing: -0.35, patrolAmp: 0.7, patrolSpd: 0.20, scale: 0.88, zPos:  0.0 },
      { color: BLUE,   phase: 1.05, facing:  0.10, patrolAmp: 0.4, patrolSpd: 0.18, scale: 0.52, zPos: -3.5 },
    ];

    const vw = visibleWidthAtZ0(camera);
    const yBase = [0.2, 0.1, -0.5];
    const xBase = [-vw * 0.38, vw * 0.38, 0]; // left, right, center-back

    for (let i = 0; i < cfgs.length; i++) {
      const cfg = cfgs[i];
      const rig = buildRobot(cfg.color);
      rig.root.position.set(xBase[i], yBase[i], cfg.zPos);
      rig.root.rotation.y = cfg.facing;
      rig.root.scale.setScalar(cfg.scale);
      scene.add(rig.root);
      rigs.push({ ...rig, baseY: yBase[i], baseX: xBase[i], phase: cfg.phase, patrolAmp: cfg.patrolAmp, patrolSpd: cfg.patrolSpd, facing: cfg.facing });
    }

    /* Mouse parallax target */
    let mx = 0, my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    /* Resize */
    const onResize = () => {
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
      /* recompute x bases to stay in frame */
      const nvw = visibleWidthAtZ0(camera);
      rigs[0].baseX = -nvw * 0.38;
      rigs[1].baseX =  nvw * 0.38;
    };
    window.addEventListener("resize", onResize);

    /* ── Animation loop ── */
    let raf: number;
    const clock = new THREE.Clock();

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      for (const rig of rigs) {
        const { root, headPivot, leftArm, rightArm, baseX, baseY, phase, patrolAmp, patrolSpd, facing } = rig;

        /* Float */
        root.position.y = baseY + Math.sin(t * 0.65 + phase) * 0.22;

        /* Patrol left/right */
        root.position.x = baseX + Math.sin(t * patrolSpd + phase) * patrolAmp;

        /* Body gentle sway */
        root.rotation.z = Math.sin(t * 0.65 + phase) * 0.035;
        root.rotation.y = facing + Math.sin(t * 0.38 + phase + 1.2) * 0.10;

        /* Arm swing — opposite phases like walking */
        const swing = Math.sin(t * 1.5 + phase) * 0.38;
        leftArm.rotation.x  =  swing;
        rightArm.rotation.x = -swing;

        /* Head look side to side */
        headPivot.rotation.y = Math.sin(t * 0.45 + phase + 0.6) * 0.28;
        headPivot.rotation.z = Math.sin(t * 0.55 + phase) * 0.04;
      }

      /* Smooth camera parallax */
      camera.position.x += (mx * 0.45 - camera.position.x) * 0.04;
      camera.position.y += (-my * 0.28 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    /* Cleanup */
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          (Array.isArray(obj.material) ? obj.material : [obj.material]).forEach((m) => m.dispose());
        }
      });
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
