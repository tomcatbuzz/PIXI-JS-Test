import { Container, AnimatedSprite, Loader, Texture, Ticker } from 'pixi.js'

export class Scene extends Container {
  private readonly screenWidth: number;
  private readonly screenHeight: number;

  private anim : AnimatedSprite
  private val: any
  // private frames: [];

  constructor(screenWidth: number, screenHeight: number) {
    super()

    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    Loader.shared
      .add('static/fighter.json')
      .load(this.onAssetsLoaded)
    
    
    this.anim = AnimatedSprite.from(frames);

    this.anim.anchor.set(0.5);
    this.anim.x = this.screenWidth / 2;
    this.anim.y = this.screenHeight / 2;
    this.anim.animationSpeed = 0.5
    this.anim.play()
    this.addChild(this.anim);

    // Animate the rotation
    Ticker.shared.add(() => {
      this.anim.rotation += 0.01;
    });
  }

  onAssetsLoaded() {
    const frames = []

    for(let i = 0; i < 30; i++) {
      this.val = i < 10 ? `0${i}` : i;

      frames.push(Texture.from(`rollSequence00${this.val}.png`))
    }
  }
}