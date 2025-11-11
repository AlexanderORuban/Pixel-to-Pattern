// TODO: add tests for CRUD in controller.js here - this is for testing the req res objects NOT the actual database interaction, that will be in the model.test.js
import { jest } from '@jest/globals'; // import ESM Jest helpers

// Fake model that matches content in ../models/model.js
const mockModel = {
  getAllPatterns: jest.fn(),
  getPattern: jest.fn(),
  postPattern: jest.fn(),
  updatePattern: jest.fn(),
};
// Fake pattern model that matches content in ../models/patterns.js
const mockPatterns = {
  sync:    jest.fn(),
  findAll: jest.fn(),
  findByPk: jest.fn(),
  create:  jest.fn(),
  update:  jest.fn(),
  destroy: jest.fn(),
};

// BEFORE imports, mock model.js and patterns.js with the mocks defined above
await jest.unstable_mockModule('../models/model.js', () => mockModel); 
await jest.unstable_mockModule('../models/patterns.js', () => ({ Patterns: mockPatterns })); 

// Force import to wait until mocks (above) happen
const { getAll, getSpecificPattern, uploadPattern, updatePatternController, deletePattern } = await import('./controller.js');

// SAMPLE SIMPLE TEST
test('always true', () => {
  expect(true).toBe(true);
});

// uploadPattern test
// - success 201 return patternID
// - error 500, error: err.message

// getAll tests
describe("getAll", () => {
    // before EACH test, clear req and res
    let req, res;
    beforeEach(() => {
        req = {}
        res = { status: jest.fn().mockReturnThis(), json: jest.fn() }
    })

    test('getAll return 200 and data when DB works', async () => {
      // Arrange: mock model layer behavior
      const fakeData = [{ pattern_ID: 1, pattern_name: "test"}];
      mockModel.getAllPatterns.mockResolvedValue(fakeData);

      // Act: Call controller
      await getAll(req, res);

      // Assert
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(fakeData);
    });

    // TODO: Complete these tests
    test('getAll return 200 and handly empty DB array gracefully', () => {expect(true).toBe(true);});
    test('getAll return 500 when DB fails', () => {expect(true).toBe(true);});
})

// getSpecificPattern tests
// - return 200 and pattern
// - return 200 and empty? 
// - return 500 error when db fails

// updatePatternController tests
// - successful input, 204
// - db error 500

// deletePattern tests
// - delete successful, 200 and message: "Pattern deleted successfully"
// - error 500, message: "Error deleting pattern", and error object passed
