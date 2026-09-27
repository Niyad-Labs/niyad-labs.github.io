// import { EffectComposer, Bloom } from "@react-three/postprocessing";
export default function LightRings() {
  const rings = 13;

  return (
    <group>
      {Array.from({ length: rings }).map((_, i) => {
        const z = -5 - i * 8;

        return (
          <group key={i}>
            <mesh position={[0, 0, z]} scale={[1, 1, 5]} rotation={[0, 0, 0]}>
              <torusGeometry args={[13, 0.08, 16, 128]} />

              {/* <EffectComposer>
                <Bloom
                  intensity={0.2}
                  luminanceThreshold={0.1}
                  luminanceSmoothing={0.5}
                />
              </EffectComposer> */}
              <meshStandardMaterial
                color="#ffffff"
                emissive="#ffffff"
                emissiveIntensity={8}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
