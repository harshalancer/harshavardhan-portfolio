'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Scene3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // Group to hold all 3D components for coordinated rotation & parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Inner Metallic Polyhedron (The Core)
    const coreGeometry = new THREE.IcosahedronGeometry(1.6, 0);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x0e0e16,
      metalness: 0.9,
      roughness: 0.18,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // 2. Electric Cyan Outer Holographic Wireframe Cage
    const cageGeometry = new THREE.IcosahedronGeometry(1.9, 1);
    const wireframe = new THREE.WireframeGeometry(cageGeometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const cageLines = new THREE.LineSegments(wireframe, lineMaterial);
    mainGroup.add(cageLines);

    // 3. Ultraviolet Orbital Rings
    const ringGeometry = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeometry, ringMaterial);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4;
    ring2.scale.set(0.85, 0.85, 0.85);
    mainGroup.add(ring2);

    // 4. Subtle Ambient Floating Node Points
    const particlesCount = 40;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = 2.8 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particlePoints = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particlePoints);

    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0x0a0a14, 2.5);
    scene.add(ambientLight);

    // Cyan Directional Key Light
    const cyanLight = new THREE.DirectionalLight(0x00f0ff, 4.0);
    cyanLight.position.set(4, 5, 4);
    scene.add(cyanLight);

    // Ultraviolet Fill Light
    const violetLight = new THREE.PointLight(0xa855f7, 3.5, 10);
    violetLight.position.set(-4, -3, 2);
    scene.add(violetLight);

    // Top White Specular Rim
    const rimLight = new THREE.DirectionalLight(0xffffff, 2.0);
    rimLight.position.set(0, -5, -3);
    scene.add(rimLight);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = mouseX * 0.7;
      targetRotationX = -mouseY * 0.7;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Responsive Resize Listener
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 400;
      const newHeight = container.clientHeight || 400;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth idle rotation
      coreMesh.rotation.y = elapsedTime * 0.25;
      coreMesh.rotation.x = elapsedTime * 0.15;

      cageLines.rotation.y = -elapsedTime * 0.2;
      cageLines.rotation.z = elapsedTime * 0.1;

      ring1.rotation.z = elapsedTime * 0.3;
      ring2.rotation.z = -elapsedTime * 0.25;

      particlePoints.rotation.y = elapsedTime * 0.05;

      // Mouse Parallax Lerping
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coreGeometry.dispose();
      coreMaterial.dispose();
      cageGeometry.dispose();
      wireframe.dispose();
      lineMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    // Elegant CSS/SVG 3D Fallback for non-WebGL devices
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-cyan-500/30 flex items-center justify-center animate-pulse">
          <div className="absolute inset-2 rounded-full border border-violet-500/25 rotate-45" />
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-400/40 backdrop-blur-md flex items-center justify-center shadow-glow-cyan">
            <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-widest">
              HV
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[340px] sm:min-h-[420px] md:min-h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D Personal Monogram"
    />
  );
};