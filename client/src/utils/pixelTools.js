export function applyTool(pixelArray, index, tool, color) {
    if (tool === 'pencil') {
        return pixelArray.map((c, i) => (i === index ? color : c));
    } else if (tool === 'eraser') {
        return pixelArray.map((c, i) => (i === index ? '#fff' : c));
    } else if (tool === 'fillBucket') {
        return Array(pixelArray.length).fill(color);
    }
    
    return pixelArray;
}