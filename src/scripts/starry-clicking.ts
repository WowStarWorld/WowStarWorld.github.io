interface Heart {
	el: HTMLElement;
	x: number;
	y: number;
	scale: number;
	alpha: number;
	color: string;
}

const hearts: Heart[] = [];

function animateHearts() {
	for (let i = 0; i < hearts.length; i++) {
		const heart = hearts[i];
		if (heart.alpha <= 0) {
			document.body.removeChild(heart.el);
			hearts.splice(i, 1);
			i--;
		} else {
			heart.y--;
			heart.scale += 0.004;
			heart.alpha -= 0.013;
			heart.el.textContent = " ";
			heart.el.style.cssText = `
			left: ${heart.x}px;
			top: ${heart.y}px;
			opacity: ${heart.alpha};
			transform: scale(${heart.scale}, ${heart.scale});
			z-index: 17976931348623157
			`;
			heart.el.style.color = heart.color;
		}
	}
	requestAnimationFrame(animateHearts);
}

function addClickListener() {
	const originalClick = window.onclick as any;
	window.onclick = function (event: MouseEvent) {
		if (originalClick) originalClick(event);
		addHeart(event);
	};
}

function addHeart(event: MouseEvent) {
	const heartDiv = document.createElement("i");
	heartDiv.className = "heart fa fa-star";
	const heart: Heart = {
		el: heartDiv,
		x: event.clientX - 5,
		y: event.clientY - 5,
		scale: 1,
		alpha: 1,
		color: getRandomColor()
	};
	hearts.push(heart);
	document.body.appendChild(heartDiv);
}

function addCSS(css: string) {
	const style = document.createElement("style");
	try {
		style.appendChild(document.createTextNode(css));
	} catch (e) {
		style.style.cssText = css;
	}
	const head = document.getElementsByTagName("head")[0];
	if (head) {
		head.appendChild(style);
	}
}

function getRandomColor(): string {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return "rgb(" + r + "," + g + "," + b + ")";
}

addCSS(`
.heart {
	user-select: none;
    width: 10px;
    height: 10px;
    position: fixed;
}
.heart:after, .heart:before {
    width: inherit;
    height: inherit;
    border-radius: 50%;
    position: fixed;
}
`);

addClickListener();
animateHearts();
