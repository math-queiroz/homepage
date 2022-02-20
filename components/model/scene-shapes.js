export class SceneShape {
  mesh = null
  constructor(geometry, initialConfigCallback = null, animateCallback = null, isDashed = false) {
    this.geometry = geometry
    this.animate = animateCallback
    this.initialConfig = initialConfigCallback
    this.isDashed = isDashed
  }
}

