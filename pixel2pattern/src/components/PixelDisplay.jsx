"use client"
import {useEffect, useRef} from "react";

// Takes patternInfo object, desired displayWidth, and desired displayHeight for the component
export default function PixelDisplay({ patternInfo, displayWidth, displayHeight }){
    const { width: patternWidth, height: patternHeight, colorConfig} = patternInfo;
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = patternWidth;
        canvas.height = patternHeight;
        const context = canvas.getContext('2d');
        const canvasData = context.getImageData(0, 0, patternWidth, patternHeight);
        changeCanvas(canvasData.data);

        context.putImageData(canvasData, 0, 0);
    }, [patternWidth, patternHeight, colorConfig]); 


    const changeCanvas = (canvasData) => {
        let j = 0;
        for (let i = 0; i < canvasData.length; i+= 4){
            const hexColor = colorConfig[j];
            const [ r, g, b ] = hexToRGB(hexColor);
            canvasData[i] = r;
            canvasData[i + 1] = g;
            canvasData[i + 2] = b;
            canvasData[i + 3] = 255;

            j++;
        }
    }

    function hexToRGB(h) {
        let r = 0, g = 0, b = 0;

        // 3 digits
        if (h.length == 4) {
            r = "0x" + h[1] + h[1];
            g = "0x" + h[2] + h[2];
            b = "0x" + h[3] + h[3];

            // 6 digits
        } else if (h.length == 7) {
            r = "0x" + h[1] + h[2];
            g = "0x" + h[3] + h[4];
            b = "0x" + h[5] + h[6];
        }

        return [r, g, b];
    }


    return(<>
        <canvas ref={canvasRef} style={{ imageRendering: "pixelated", width: displayWidth, height: displayHeight}}></canvas>
    </>)
}