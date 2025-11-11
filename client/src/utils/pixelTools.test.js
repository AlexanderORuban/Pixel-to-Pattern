import { applyTool } from './pixelTools';

describe('applyTool', () => {
    test('pencil changes only the targeted pixel to the chosen color', () => {
        const pixels = ['#fff', '#fff', '#fff'];
        const result = applyTool(pixels, 1, 'pencil', '#000000');
        expect(result).toEqual(['#fff', '#000000', '#fff']);
    });

    test('eraser sets the targeted pixel back to white', () => {
        const pixels = ['#000000', '#ff8d2fff', '#5381ffff'];
        const result = applyTool(pixels, 1, 'eraser', '#000000');
        expect(result).toEqual(['#000000', '#fff', '#5381ffff']);
    });

    test('fillBucket replaces all pixels with the selected color', () => {
        const pixels = ['#ff0000ff', '#ffae00ff', '#002fffff'];
        const result = applyTool(pixels, 0, 'fillBucket', 'rgba(33, 201, 165, 1)');
        expect(result).toEqual(['rgba(33, 201, 165, 1)', 'rgba(33, 201, 165, 1)', 'rgba(33, 201, 165, 1)']);
    });

    test('returns the same array if tool is unrecognized', () => {
        const pixels = ['#ff0000ff', '#ffae00ff']
        const result = applyTool(pixels, 0, 'sprayGun', '#000000');
        expect(result).toEqual(pixels);
    });
})