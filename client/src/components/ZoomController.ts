import Phaser from 'phaser';

export default class ZoomController {
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.setupZoomControls();
  }
  private setupZoomControls() {
    this.scene.input.keyboard.on('keydown', (event: KeyboardEvent) => {
      if (event.key === '+') {
        this.scene.cameras.main.zoom += 0.1;
        this.scene.cameras.main.zoom = Phaser.Math.Clamp(this.scene.cameras.main.zoom, 0.5, 3);
      }
      if (event.key === '-') {
        this.scene.cameras.main.zoom -= 0.1;
        this.scene.cameras.main.zoom = Phaser.Math.Clamp(this.scene.cameras.main.zoom, 0.5, 3);
      }
  });
  }
}
