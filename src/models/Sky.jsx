import { useGLTF } from "@react-three/drei";

import skyScene from "../assets/sky.glb";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

useGLTF.setDecoderPath("draco/");

const Sky = ({ isRotating }) => {
  const ref = useRef();
  const sky = useGLTF(skyScene, true);

  useFrame((_, delta) => {
    if (isRotating) {
      ref.current.rotation.y += 0.5 * delta;
    }
  });

  return (
    <mesh ref={ref}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;
