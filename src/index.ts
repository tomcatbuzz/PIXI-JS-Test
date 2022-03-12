import { Application, Graphics, TextStyle, Text, filters } from 'pixi.js'
import { Scene } from './scenes/Scene'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	// width: 640,
	// height: 480
	width: 1024,
	height: 1280
});

const graphy: Graphics = new Graphics();

graphy.beginFill(0xff00ff);
graphy.lineStyle(10, 0x00ff00);
graphy.drawCircle(0, 0, 25);
graphy.endFill();

app.stage.addChild(graphy);

graphy.x = 600;
graphy.y = 600;

const style: TextStyle = new TextStyle({
	fill: "#f25050",
	fontFamily: "Verdana, Geneva, sans-serif",
	fontSize: 40,
	fontWeight: "bold"
});
const texty: Text = new Text('Hello World', style);
texty.text = 'What the hell bobby'

app.stage.addChild(texty)

const myBlurFilter = new filters.BlurFilter()
graphy.filters = [myBlurFilter]

const sceny: Scene = new Scene(app.screen.width, app.screen.height)
app.stage.addChild(sceny)