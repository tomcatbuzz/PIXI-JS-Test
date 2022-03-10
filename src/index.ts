import { Application, Sprite, Container, Graphics, TextStyle, Text, filters } from 'pixi.js'

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

const conty: Container = new Container();
conty.x = 200;
conty.y = 0;

app.stage.addChild(conty)

const clampy: Sprite = Sprite.from("clampy.png");

clampy.anchor.set(0.5);

clampy.x = app.screen.width / 2;
clampy.y = app.screen.height / 2;

app.stage.addChild(clampy);

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