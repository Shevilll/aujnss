import { useEffect } from "react";

const Cursor = ({
    color = "rgb(21, 44, 73)",
    alternateColor = "rgb(238, 196, 70)",
}) => {
    useEffect(() => {
        let canvas;
        let context;
        let animationFrame;
        let width = window.innerWidth;
        let height = window.innerHeight;
        let cursor = { x: -10, y: -10 };
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        class Dot {
            position;
            width;
            lag;
            color;
            constructor(x, y, width, lag, color) {
                this.position = { x, y };
                this.width = width;
                this.lag = lag;
                this.color = color;
            }
            moveTowards(x, y, context) {
                this.position.x += (x - this.position.x) / this.lag;
                this.position.y += (y - this.position.y) / this.lag;

                context.clearRect(0, 0, width, height);

                // Detect background color
                const elementUnderCursor = document.elementFromPoint(x, y);
                const bgColor = elementUnderCursor
                    ? window.getComputedStyle(elementUnderCursor)
                          .backgroundColor
                    : null;
                // Change cursor color if it matches the background color
                this.color =
                    bgColor && bgColor === color ? alternateColor : color;

                context.fillStyle = "transparent"; // Transparent fill
                context.strokeStyle = this.color; // Border color
                context.lineWidth = 2; // Border width
                context.beginPath();
                context.arc(
                    this.position.x,
                    this.position.y,
                    this.width,
                    0,
                    2 * Math.PI
                );
                context.fill();
                context.stroke();
                context.closePath();
            }
        }

        const dot = new Dot(-10, -10, 10, 10, color);

        const onMouseMove = (e) => {
            cursor.x = e.clientX;
            cursor.y = e.clientY;
        };

        const onWindowResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            if (canvas) {
                canvas.width = width;
                canvas.height = height;
            }
        };

        const updateDot = () => {
            if (context) {
                dot.moveTowards(cursor.x, cursor.y, context);
            }
        };

        const loop = () => {
            updateDot();
            animationFrame = requestAnimationFrame(loop);
        };

        const init = () => {
            if (prefersReducedMotion.matches) {
                console.log("Reduced motion enabled, cursor effect skipped.");
                return;
            }
            canvas = document.createElement("canvas");
            context = canvas.getContext("2d");
            canvas.style.position = "fixed";
            canvas.style.top = "0";
            canvas.style.left = "0";
            canvas.style.pointerEvents = "none";
            canvas.style.zIndex = "999999";
            canvas.width = width;
            canvas.height = height;
            document.body.appendChild(canvas);

            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("resize", onWindowResize);

            loop();
        };

        const destroy = () => {
            if (canvas) canvas.remove();
            cancelAnimationFrame(animationFrame);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", onWindowResize);
        };

        prefersReducedMotion.onchange = () => {
            if (prefersReducedMotion.matches) {
                destroy();
            } else {
                init();
            }
        };

        init();

        return () => {
            destroy();
        };
    }, [color, alternateColor]);

    return null;
};

export default Cursor;
