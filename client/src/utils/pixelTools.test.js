import { applyTool } from './pixelTools';

describe('applyTool', () => {
    test('pencil changes only the targeted pixel to the chosen color', () => {
        const pixels = ['#fff', '#fff', '#fff'];
        const result = applyTool(pixels, 1, 'pencil', '#000000')
        expect(result).toEqual(['#fff', '#000000', '#fff']);
    });

    test('eraser sets the targeted pixel back to white', () => {
        const pixels = ['#000000', '#ff8d2fff', '#5381ffff'];
        const result = applyTool(pixels, 1, 'eraser', '#000000');
        expect(result).toEqual(['#000000', '#fff', '#5381ffff']);
    })

    test.todo('fillBucket replaces all pixels with the selected color')

    test.todo('returns the same array if tool is unrecognized')
})