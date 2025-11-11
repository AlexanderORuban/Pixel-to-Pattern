import { applyTool } from './pixelTools';

describe('applyTool', () => {
    test('pencil changes only the targeted pixel to the chosen color', () => {
        const pixels = ['#fff', '#fff', '#fff'];
        const result = applyTool(pixels, 1, 'pencil', '#000000')
        expect(result).toEqual(['#fff', '#000000', '#fff']);
    });

    test.todo('eraser sets the targeted pixel back to white')

    test.todo('fillBucket replaces all pixels with the selected color')

    test.todo('returns the same array if tool is unrecognized')
})