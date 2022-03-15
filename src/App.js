import { Hands, VRCanvas } from "@react-three/xr"
import './App.css';
import React, { Suspense } from "react"
import { OrbitControls } from "@react-three/drei/core/OrbitControls";
import { useGLTF } from "@react-three/drei";


function Model(props) {
    const { scene } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/coronavirus/model.gltf')
    return <primitive object={scene} {...props} />
  }
function App() {
  return (
    <VRCanvas>

    <OrbitControls />
     <ambientLight /> 
     <pointLight position={[18, 16, 10]} />
     <Suspense fallback={null}>
      <Model position={[0,-1.5,-1.5]} />
     </Suspense>
     <Hands />
    </VRCanvas> 
  );
}

export default App;
