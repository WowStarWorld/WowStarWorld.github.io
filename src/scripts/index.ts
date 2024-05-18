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
			i--; // Adjust index after splice
		} else {
			heart.y--;
			heart.scale += 0.004;
			heart.alpha -= 0.013;
			heart.el.style.cssText = `left:${heart.x}px;top:${heart.y}px;opacity:${heart.alpha};transform:scale(${heart.scale},${heart.scale}) rotate(45deg);background:${heart.color};z-index:99999`;
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
	const heartDiv = document.createElement("div");
	heartDiv.className = "heart";
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

const colors = ["#EEAA50", "#0EEAA5", "#AAEE50", "#0AAEE5"];

function getRandomColor(): string {
	return colors[Math.floor(Math.random() * colors.length)];
}

addCSS(`
.heart {
    width: 10px;
    height: 10px;
    position: fixed;
    background: #f00;
    transform: rotate(45deg);
}
.heart:after, .heart:before {
    content: '';
    width: inherit;
    height: inherit;
    background: inherit;
    border-radius: 50%;
    position: fixed;
}
.heart:after {
    top: -5px;
}
.heart:before {
    left: -5px;
}
`);

addClickListener();
animateHearts();
