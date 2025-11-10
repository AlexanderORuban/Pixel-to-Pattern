// TODO: add tests for CRUD in controller.js here - this is for testing the req res objects NOT the actual database interaction, that will be in the model.test.js

// Model layer mocks MUST be created before importing the controller
jest.mock('../models/model.js', () => ({
  getAllPatterns: jest.fn(),
  getPattern: jest.fn(),
  postPattern: jest.fn(),
  updatePattern: jest.fn(),
}));

jest.mock('../models/patterns.js', () => ({
  Patterns: {
    destroy: jest.fn(),
  },
}));

// AFTER mocks, import controller functions
import { getAll, getSpecificPattern, uploadPattern, updatePatternController, deletePattern } from './controller.js';

// SAMPLE SIMPLE TEST
test('always true', () => {
  expect(true).toBe(true);
});

// set up mock req/res objects 

// uploadPattern test

// getAll test
describe("getAll", () => {
    // before each test, clear req and res
    let req, res;
    beforeEach(() => {
        req = {}
        res = { status: jest.fn().mockReturnThis(), json: jest.fn() }
    })

    test('getAll return 200 and data when DB works', () => {expect(true).toBe(true);});
    test('getAll return 200 and handly empty DB array gracefully', () => {expect(true).toBe(true);});
    test('getAll return 500 when DB fails', () => {expect(true).toBe(true);});
})

// getSpecificPattern test

// updatePatternController test

// deletePattern test
