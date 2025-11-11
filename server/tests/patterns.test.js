import request from 'supertest';
import { app } from '../app.js';
import { Patterns } from '../models/patterns.js';

// utility functions
async function resetDb() {
    await Patterns.destroy({ where: {}, truncate: true })

    // seed two rows of data into test db
    await Patterns.create({
        pattern_name: 'seed-1',
        pattern_info: { rows: ['r1', 'r2']},
        author: 'tester',
        description: 'first seed',
    })

    await Patterns.create({
        pattern_name: 'seed-2',
        pattern_info: { rows: ['x', 'y']},
        author: 'tester',
        description: 'second seed',
    })
};

async function closeDb() {
    await sequelize.close();
}

// hooks
beforeEach(async () => {
    await resetDb();
});

afterAll(async () => {
    await closeDb();
});

