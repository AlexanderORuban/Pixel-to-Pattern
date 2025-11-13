// TODO: add tests for CRUD in controller.js here - this is for testing the req res objects NOT the actual database interaction, that will be in the model.test.js
import { jest } from '@jest/globals'; // import ESM Jest helpers

const mockModel = {
  getAllPatterns: jest.fn(),
  getPattern: jest.fn(),
  postPattern: jest.fn(),
  updatePattern: jest.fn(),
};

const mockPatterns = {
  sync:    jest.fn(),
  findAll: jest.fn(),
  findByPk: jest.fn(),
  create:  jest.fn(),
  update:  jest.fn(),
  destroy: jest.fn(),
};

await jest.unstable_mockModule('../../models/model.js', () => mockModel); 
await jest.unstable_mockModule('../../models/patterns.js', () => ({ Patterns: mockPatterns })); 

const { getAll, getSpecificPattern, uploadPattern, updatePatternController, deletePattern } = await import('../../controllers/controller.js');

describe("getAll", () => {
    let req, res;
    beforeEach(() => {
        req = {}
        res = { status: jest.fn().mockReturnThis(), json: jest.fn() }
    })

    test('getAll return 200 and data when DB works', async () => {
      const fakeData = [{ pattern_ID: 1, pattern_name: "test"}];
      mockModel.getAllPatterns.mockResolvedValue(fakeData);

      await getAll(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(fakeData);
    });

    test('getAll return 200 and handly empty DB array gracefully', async () => {
      const fakeData = [];
      mockModel.getAllPatterns.mockResolvedValue(fakeData);

      await getAll(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(fakeData);
    });

    test('getAll return 500 when DB fails', async () => {
      mockModel.getAllPatterns.mockRejectedValueOnce(new Error('DB down'));

      await getAll(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'DB down' });
    });
})

// TODO: Finish tests below

describe("UploadPattern", () => {
  test.todo("success 201 return patternID");
  test.todo("error 500, error: err.message");
});

describe("getSpecificPattern", () => {
  test.todo("return 200 and pattern");
  test.todo("return 200 and empty? ");
  test.todo("return 500 error when db fails");
});

describe("updatePatternController", () => {
  test.todo("successful input, 204");
  test.todo("db error 500");
});

describe("deletePattern tests", () => {
  test.todo("delete successful, 200 and message: 'Pattern deleted successfully'");
  test.todo("error 500, message: 'Error deleting pattern', and error object passed");
});
