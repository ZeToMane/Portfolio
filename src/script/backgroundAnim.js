// src/sketch.js
const createSketch = (p) => {
    let a = 40;
    let charArray = ["█", "░", "█", "░"];
    let specialChar = "▓"; 
    let radius = 300;
    let containerWidth; 
    let containerHeight;

    p.setup = () => {
        containerWidth = document.getElementById('background-canvas').clientWidth;
        containerHeight = document.getElementById('background-canvas').clientHeight;
        p.createCanvas(containerWidth, containerHeight).parent('background-canvas');
        p.textAlign(p.CENTER);
        p.noiseDetail(2, 1);
    };

    p.draw = () => {
        p.background(255);
        p.fill(0);
        p.noStroke();
        for (let x = 0; x <= p.width; x += a) {
            for (let y = 0; y <= p.height; y += a) {
                let distance = p.dist(p.mouseX, p.mouseY, x, y);
                let n = p.noise((x + p.mouseX * 0.1) * 0.001, (y + p.mouseY * 0.1) * 0.001, p.frameCount * 0.005) * 2;
                let noiseChar = charArray[Math.floor(n)];
                let t = p.constrain(p.map(distance, 0, radius, 1, 0), 0, 1);
                let blendedChar = lerpChar(noiseChar, specialChar, t);
                p.text(blendedChar, x, y + 12);
            }
        }
    };

    p.windowResized = () => {
        p.resizeCanvas(containerWidth, containerHeight);
    };

    const lerpChar = (a, b, t) => {
        let charCodeA = a.charCodeAt(0);
        let charCodeB = b.charCodeAt(0);
        let lerpedCharCode = (1 - t) * charCodeA + t * charCodeB;
        return String.fromCharCode(lerpedCharCode);
    };
};

const createSketch2 = (p) => {
    let containerWidth; 
    let containerHeight;
    
    p.setup = () => {
        containerWidth = document.getElementById('demo-canvas').clientWidth;
        containerHeight = document.getElementById('demo-canvas').clientHeight;
        p.createCanvas(containerWidth, containerHeight).parent('demo-canvas');
        p.background(0);
        p.frameRate(5);
        p.rectMode(p.CENTER);
        p.fill(255);
        p.strokeWeight(10);
        p.stroke(255);
    };

    p.draw = () => {
        p.rect(p.random(p.width), p.random(p.height), p.random(p.width), p.random(p.height));
        p.fill(p.random([0, 255]));
    };

    p.windowResized = () => {
        p.resizeCanvas(containerWidth, containerHeight);
    };
};

export { createSketch, createSketch2 };
