function makeImage(canvas) {
    var ctx = canvas.getContext("2d"), centerWidth, centerHeight, maxDim;
    centerWidth = canvas.width / 2;
    centerHeight = canvas.height / 2;
    maxDim = canvas.width;
    if (canvas.height > maxDim) {
        maxDim = canvas.height;
    }

    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.moveTo(canvas.width, 0);
    ctx.lineTo(0, canvas.height);

    ctx.stroke();
}

function makeAllImagePlaceholders() {
    var imagePlaceholders = document.querySelectorAll('canvas.placeholderImage'), ii;
    for (ii = 0; ii < imagePlaceholders.length; ii = ii + 1) {
        makeImage(imagePlaceholders[ii]);
    }
}

makeAllImagePlaceholders();
