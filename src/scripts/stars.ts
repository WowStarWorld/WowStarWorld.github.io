interface IStar {
	id: number;
	x: number;
	y: number;
	r: number;
	color: string;
	
	draw (ctx: CanvasRenderingContext2D): void;
	
	move (): void;
	
	die (): void;
}

class Stars implements IStar {
	id: number;
	
	x: number;
	
	y: number;
	
	r: number;
	
	color: string;
	
	constructor (id: number, x: number, y: number) {
		this.id = id;
		this.x = x;
		this.y = y;
		this.r = Math.floor(Math.random() * 2) + 1;
		const alpha = (Math.floor(Math.random() * 10) + 1) / 20;
		this.color = `rgba(255, 255, 255, ${ alpha })`;
	}
	
	draw (ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = this.color;
		ctx.shadowBlur = this.r * 2;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
		ctx.closePath();
		ctx.fill();
	}
	
	move () {
		this.y -= 0.15;
		if (this.y <= -10) this.y = document.documentElement.clientHeight + 10;
		this.draw(ctx!!);
	}
	
	die () {
		delete stars[this.id];
	}
}

const stars: Stars[] = [];
let ctx: CanvasRenderingContext2D | null;

document.addEventListener("readystatechange", ready);

function ready () {
	const canvas: HTMLCanvasElement | null = document.getElementById('star-canvas') as HTMLCanvasElement | null;
	
	if (!canvas) {
		console.error('Canvas element with id "star-canvas" not found.');
	} else {
		ctx = canvas.getContext('2d');
		if (!ctx) {
			console.error('Unable to get 2D context for canvas element.');
		} else {
			const WIDTH: number = canvas.clientWidth;
			const HEIGHT: number = canvas.clientHeight;
			
			// eslint-disable-next-line no-inner-declarations
			function initStars (): void {
				for (let i = 0; i < 200; i++) {
					const star = new Stars(i, Math.floor(Math.random() * WIDTH), Math.floor(Math.random() * HEIGHT));
					stars.push(star);
				}
			}
			
			// eslint-disable-next-line no-inner-declarations
			function animate (): void {
				ctx!!.clearRect(0, 0, WIDTH, HEIGHT);
				
				stars.forEach(star => {
					star.move();
					star.draw(ctx!!);
				});
				
				if (stars.length <= 0) initStars();
				
				requestAnimationFrame(animate);
			}
			
			initStars();
			animate();
		}
	}
	
}
