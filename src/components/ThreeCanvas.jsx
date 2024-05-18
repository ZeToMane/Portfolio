import * as THREE from 'three'
import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { easing } from 'maath'
import {gsap} from 'gsap';


function Pedro(props) {
    const mesh = useRef()
    const { nodes, materials } = useGLTF('./me-finished100px.glb')
    const [dummy] = useState(() => new THREE.Object3D())

    useEffect(() => {
        if (nodes.head.geometry) {
            nodes.head.geometry.center();
        }

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
    })

    return (
        <mesh ref={mesh} geometry={nodes.head.geometry} material={materials['Flo_Head']} {...props}>
        {/* <meshNormalMaterial /> */}
        </mesh>
    )
}

export default function App() {
    // const [show, setShow] = useState(false);

    // useEffect(() => {
    //     console.log('entering useEffect');
    //     const handleLoad = () => {
    //         console.log('Page fully loaded');
    //         const tweens = gsap.getTweensOf('.scale-anim');

    //         if (tweens.length > 0) {
    //             const tween = tweens[0];
    //             console.log('Found tween:', tween.isActive);
    //             if(tween.isActive){
    //                 console.log("je suis active moi")
    //             }
    //             tween.eventCallback('onComplete', () => {
    //                 console.log('Animation complete');
    //                 setShow(true);
    //                 window.dispatchEvent(new Event('resize'));
    //                 console.log("resizeeee")
    //             });
    //         } else {
    //             console.log('No tweens found for .scale-anim');
    //         }
    //     };

    //     window.addEventListener('load', handleLoad); 

    //     return () => {
    //         window.removeEventListener('load', handleLoad);
    //     };
    // }, []);

    const [show, setShow] = useState(false);

    useEffect(() => {
        
        const tween = gsap.fromTo(".scale-anim",
            { 
                scale: 0 
            },

            {
                scale: 1,
                stagger: 0.1,
                duration: 0.5,
                ease: 'power2.out',
                onComplete: () => {
                    console.log('Animation complete');
                    setShow(true);
                    window.dispatchEvent(new Event('resize'));
                }
            }
        );

        return () => {
            tween.kill();
        };
    }, []);

    return (
        // show && (
            <Canvas camera={{ position: [0, 0, 15] }}>
                {show && (
                    <Suspense>
                    <ambientLight />
                    <directionalLight position={[10, 10, 10]} />
                    <Pedro />
                    </Suspense>
                )}
            </Canvas>
        // )
    )
}
