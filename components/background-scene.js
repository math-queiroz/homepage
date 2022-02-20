import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { chakra, shouldForwardProp, Spinner } from '@chakra-ui/react'
import BackgroundShapes from './model/background-shapes'

const StyledBox = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const BackgroundScene = props => {
  const refContainer = useRef(null)
  const [loading, setLoading] = useState(true)

  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [initialCameraPosition] = useState(new THREE.Vector3(0, .35, 8))
  const [scene] = useState(new THREE.Scene())

  const [shapes] = useState(BackgroundShapes)

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer

    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      _camera.aspect = scW / scH
      _camera.updateProjectionMatrix()

      renderer.setSize(scW, scH)
    }
  }, [_camera, renderer])

  useEffect(() => {
    const { current: container } = refContainer
    
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      /* Renderer */
      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      /* Camera */
      const scale = scW / scH
      const camera = new THREE.PerspectiveCamera(65, scale)
      camera.position.copy(initialCameraPosition)
      setCamera(camera)

      // /* Light */
      // const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      // scene.add(ambientLight)

      /* Objects */
      /* eslint-disable */
      const solidMaterial = new THREE.MeshBasicMaterial({ color: 0xab3b3b })
      const dashedLineMaterial = new THREE.LineDashedMaterial({
        color: 0x454545,
        dashSize: 0.1,
        gapSize: 0.05
      })
      for (var s of shapes) {
        if (s.isDashed) {
          s.mesh = new THREE.LineSegments(
            new THREE.EdgesGeometry(s.geometry),
            dashedLineMaterial
          )
          s.mesh.computeLineDistances()
        } else s.mesh = new THREE.Mesh(s.geometry, solidMaterial)
        s.initialConfig(s.mesh)
        scene.add(s.mesh)
      }

      setLoading(false)

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)
        frame += 0.025

        for (var s of shapes) s.animate(s.mesh, frame)

        renderer.render(scene, camera)
      }
      animate()

      return () => {
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => window.removeEventListener('resize', handleWindowResize, false)
  }, [renderer, handleWindowResize])

  return (
    <StyledBox
      ref={refContainer}
      className="background-scene"
      style={{ position: 'absolute', top: -104, zIndex: -1, ...props.style }}
      width="100%"
      height="100vh"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75, type: 'easyInOut' }}
    >
      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="30%"
          ml="calc(0px - var(--spinner-size) / 2)"
          mt="calc(0px - var(--spinner-size) / 2)"
        ></Spinner>
      )}
    </StyledBox>
  )
}

export default BackgroundScene
