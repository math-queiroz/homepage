import * as THREE from 'three'
import { SceneShape } from './scene-shapes'

const shapes = [
  new SceneShape(
    new THREE.BoxGeometry(1, 1, 1),
    m => m.position.set(-4, 0, 0),
    (m, f) => {
      m.rotation.x += 0.01
      m.rotation.y += 0.003
      m.position.y = 1.5 + Math.sin(f) / 4
    },
    true
  ),
  new SceneShape(
    new THREE.IcosahedronGeometry(1.2),
    m => m.position.set(4, 0, 0),
    (m, f) => {
      m.rotation.x -= 0.008
      m.rotation.y += 0.002
      m.position.y = 1.9 + Math.sin(f * 1.6 + 4) / 4
    },
    true
  ),
  new SceneShape(
    new THREE.ConeGeometry(0.7, 1, 3),
    m => {
      m.position.set(3, 0, 0)
      m.rotation.z = Math.PI / 2
    },
    (m, f) => {
      m.rotation.x += 0.01
      m.position.y = -0.5 + Math.sin(f * 0.6 - 4) / 4
    },
    true
  ),
  new SceneShape(
    new THREE.SphereGeometry(0.05),
    m => m.position.set(-1.3, 0, 0),
    (m, f) => (m.position.y = 1.75 + Math.sin(f + 3) / 10)
  ),
  new SceneShape(
    new THREE.BoxGeometry(0.1, 0.1, 0.1),
    m => m.position.set(1, 0, 0),
    (m, f) => {
      m.rotation.z += 0.01
      m.rotation.x += 0.006
      m.position.y = -1.25 + Math.sin(f * 0.8) / 5
    }
  ),
  new SceneShape(
    new THREE.BoxGeometry(0.25, 0.05, 0.05),
    m => m.position.set(-3, 0, 0),
    (m, f) => {
      m.rotation.z += 0.01
      m.rotation.x += 0.006
      m.position.y = -0.75 + Math.sin(f + 2) / 10
    }
  ),
  new SceneShape(
    new THREE.BoxGeometry(0.05, 0.25, 0.05),
    m => m.position.set(-3, 0, 0),
    (m, f) => {
      m.rotation.z += 0.01
      m.rotation.x += 0.006
      m.position.y = -0.75 + Math.sin(f + 2) / 10
    }
  )
]

export default shapes