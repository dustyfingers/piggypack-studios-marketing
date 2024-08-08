"use client";
import * as THREE from "three";
import { useRef, useState } from "react";
import {
  Canvas,
  useFrame,
  useThree,
  extend,
  ReactThreeFiber,
} from "@react-three/fiber";
import {
  Image,
  ScrollControls,
  Scroll,
  useScroll,
  ImageProps,
} from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import { easing } from "maath";
import styled from "styled-components";

import ContentContainer from "@/app/components/ContentContainer/ContentContainer";
import style from "./component.module.css";

const material = new THREE.LineBasicMaterial({ color: "white" });
const geometry = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, -0.5, 0),
  new THREE.Vector3(0, 0.5, 0),
]);

// line error workaround
extend({ Line_: THREE.Line });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      line_: ReactThreeFiber.Object3DNode<THREE.Line, typeof THREE.Line>;
    }
  }
}

interface IState {
  clicked: number | null;
  urls: string[];
}
const initialState: IState = {
  clicked: null,
  urls: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7, 5, 3, 1, 8, 6, 2].map(
    (url) => `/images/workGallery/${url}.jpg`
  ),
};
const state = proxy(initialState);

const Minimap = () => {
  const ref = useRef<THREE.Group>(null);
  const scroll = useScroll();
  const { urls } = useSnapshot(state);
  const { height } = useThree((state) => state.viewport);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.children.forEach((child: THREE.Object3D, index: number) => {
        const y = scroll.curve(
          index / urls.length - 1.5 / urls.length,
          4 / urls.length
        );
        easing.damp(child.scale, "y", 0.15 + y / 6, 0.15, delta);
      });
    }
  });
  return (
    <group ref={ref}>
      {urls.map((_, i) => (
        <line_
          key={i}
          geometry={geometry}
          material={material}
          position={[i * 0.06 - urls.length * 0.03, -height / 2 + 0.6, 0]}
        />
      ))}
    </group>
  );
};
interface IItem {
  index: number;
  position: THREE.Vector3;
  scale: [number, number];
  color: THREE.Color;
  url: string;
}
const Item = ({ index, position, scale, color, url }: IItem) => {
  const ref = useRef<
    ImageProps &
      THREE.Mesh<
        THREE.BufferGeometry<THREE.NormalBufferAttributes>,
        THREE.Material | THREE.Material[],
        THREE.Object3DEventMap
      >
  >(null);
  const scroll = useScroll();
  const { clicked, urls } = useSnapshot(state);
  const [hovered, setHovered] = useState(false);
  const handleClick = () => (state.clicked = index === clicked ? null : index);
  const over = () => setHovered(true);
  const out = () => setHovered(false);
  useFrame((state, delta) => {
    if (ref.current) {
      const y = scroll.curve(
        index / urls.length - 1.5 / urls.length,
        4 / urls.length
      );
      easing.damp3(
        ref.current.scale,
        [clicked === index ? 4.7 : scale[0], clicked === index ? 5 : 4 + y, 1],
        0.15,
        delta
      );
      // ref.current.material.scale[0] = ref.current.scale.x;
      // ref.current.material.scale[1] = ref.current.scale.y;
      if (clicked !== null && index < clicked)
        easing.damp(ref.current.position, "x", position.x - 2, 0.15, delta);
      if (clicked !== null && index > clicked)
        easing.damp(ref.current.position, "x", position.x + 2, 0.15, delta);
      if (clicked === null && index === clicked)
        easing.damp(ref.current.position, "x", position.x, 0.15, delta);
      easing.damp(
        ref.current.material,
        "grayscale",
        hovered || clicked === index ? 0 : Math.max(0, 1 - y),
        0.15,
        delta
      );
      // easing.dampC(
      //   ref.current.material.color,
      //   hovered || clicked === index ? "white" : "#aaa",
      //   hovered ? 0.3 : 0.15,
      //   delta
      // );
    }
  });
  return (
    <Image
      ref={ref}
      url={url}
      position={position}
      scale={scale}
      onClick={handleClick}
      onPointerOver={over}
      onPointerOut={out}
    />
  );
};

interface IItems {
  w: number;
  gap: number;
}

const Items = ({ w, gap }: IItems) => {
  const { urls } = useSnapshot(state);
  const { width } = useThree((state) => state.viewport);
  const xW = w + gap;
  const color = new THREE.Color();
  return (
    <ScrollControls
      horizontal
      damping={0.1}
      pages={(width - xW + urls.length * xW) / width}
    >
      <Minimap />
      <Scroll>
        {urls.map((url, i) => (
          <Item
            key={i}
            index={i}
            position={new THREE.Vector3(i * xW, 0, 0)}
            scale={[w, 4]}
            url={url}
            color={color}
          />
        ))}
      </Scroll>
    </ScrollControls>
  );
};

const StyledCanvas = styled(Canvas)`
  canvas {
    border: 1px solid blue;
    height: 450px;
  }
`;

const WorkCarousel = () => {
  return (
    <StyledCanvas
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
      onPointerMissed={() => (state.clicked = null)}
    >
      <Items w={0.7} gap={0.15} />
    </StyledCanvas>
  );
};

const WorkGallery = () => {
  return (
    <section className={style.workGallery}>
      <ContentContainer>
        <h3>Web Design and Development</h3>
        <WorkCarousel />
        <h3>Branding and Print Design</h3>
        <WorkCarousel />
        <h3>Social Media Marketing and Management</h3>
        <WorkCarousel />
      </ContentContainer>
    </section>
  );
};

export default WorkGallery;
