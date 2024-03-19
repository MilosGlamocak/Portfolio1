import { MeshWobbleMaterial, OrbitControls, SpotLight } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { TorusGeometry } from "three";

const Cube = ({ position, args, color }) => {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y -= delta / 2;
    cubeRef.current.rotation.z -= delta / 2;
  });

  return (
    <mesh position={position} ref={cubeRef}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Sphere = ({ position, args, color }) => {
  const sphereRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state, delta) => {
    //const speed = isHovered ? 1 : 10;
    const speed = 10
    sphereRef.current.rotation.y += delta / speed;
    sphereRef.current.rotation.z += delta / speed;

    
  });

  return (
    <mesh
      position={position}
      ref={sphereRef}
      onPointerEnter={(e) => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <sphereGeometry args={args} />
      <MeshWobbleMaterial color={'white'} factor={3} />
    </mesh>
  );
};

function ReactThreeFiber() {
  return (
    <div style={{ width: "96%", height: "92vh", backgroundColor: 'black', zIndex: '1', overflowY: 'hidden', top: '50%', left: '50%', translate: '2% 4.3%' }}>
      <Canvas>
        <SpotLight position={[4, 1.5 ,2]} distance={6} angle={90} attenuation={10} anglePower={7} intensity={10}/>
        <Sphere color={"gray"} position={[-4, 0, 0]} args={[5, 300, 300]} />
        <ambientLight intensity={0.008}/>
        <OrbitControls enableZoom={false} enableRotate={false}/>
      </Canvas>
    </div>
  );
}

export default ReactThreeFiber;
