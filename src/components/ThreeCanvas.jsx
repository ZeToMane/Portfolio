import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { easing } from 'maath'
import {gsap} from 'gsap';


function Suzanne(props) {
    const mesh = useRef()
    const { nodes } = useGLTF('./suzanne.glb')
    const [dummy] = useState(() => new THREE.Object3D())

      // Define the maximum rotation angles in radians
    const maxRotationX = Math.PI / 5 
    const maxRotationY = Math.PI / 5 
    const maxRotationZ = Math.PI / 5 

    useEffect(() => {
        const handleMouseMove = (event) => {
        const canvas = document.querySelector('canvas')
        const rect = canvas.getBoundingClientRect()
    
        const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1
        const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1
        dummy.lookAt(mouseX, mouseY, 1)
        }

        document.addEventListener('mousemove', handleMouseMove)

        return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    useFrame((state, dt) => {
        easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt)

        const euler = new THREE.Euler().setFromQuaternion(mesh.current.quaternion, 'XYZ')

        // Clamp the rotation angles
        euler.x = THREE.MathUtils.clamp(euler.x, -maxRotationX, maxRotationX)
        euler.y = THREE.MathUtils.clamp(euler.y, -maxRotationY, maxRotationY)
        euler.z = THREE.MathUtils.clamp(euler.z, -maxRotationZ, maxRotationZ)

        // Update the quaternion with the clamped angles
        mesh.current.quaternion.setFromEuler(euler)
    })

    return (
        <mesh ref={mesh} geometry={nodes.Suzanne.geometry} {...props}>
        <meshNormalMaterial />
        </mesh>
    )
}

export default function App() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            console.log('Page fully loaded');
            const tweens = gsap.getTweensOf('.scale-anim');

            if (tweens.length > 0) {
                const tween = tweens[0];
                console.log('Found tween:', tween);
                tween.eventCallback('onComplete', () => {
                    console.log('Animation complete');
                    setShow(true);
                });
            } else {
                console.log('No tweens found for .scale-anim');
            }
        };

        window.addEventListener('load', handleLoad); 

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        show && (
            <Canvas camera={{ position: [0, 0.1, 3] }}>
                <ambientLight />
                <directionalLight position={[10, 10, 10]} />
                <Suzanne />
            </Canvas>
        )
    )
}
