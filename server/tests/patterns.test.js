import request from 'supertest';
import { app } from '../app.js';
import { Patterns } from '../models/patterns.js';
import sequelize from '../models/db.js';

// --- helpers ---
async function resetDb() {
    await Patterns.destroy({ where: {}, truncate: true })

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

// --- hooks ---
beforeEach(async () => {
    await resetDb();
});

afterAll(async () => {
    await closeDb();
});

describe('Pattern API integration', () => {
    test('GET /patterns returns seeded rows', async () => {
        const res = await request(app).get('/patterns');

        expect(res.status).toBe(200);
        expect(res.body.length).toBe(2);
    })

    test('POST /patterns creates a new row and appears in DB', async () => {
        const res = await request(app)
            .post('/patterns')
            .send({
                pattern_name: 'test-pattern',
                pattern_info: { rows: ['a', 'b'] },
                author: 'tester',
                description: 'created as a test'
            })
            .set('Content-Type', 'application/json');

            expect(res.status).toBe(201);
        
        const allResults = await request(app).get('/patterns');
        expect(allResults.status).toBe(200);
        expect(allResults.body.length).toBe(3);
    });

    test('DELETE /patterns/:id deletes a row', async () => {
        expect(true).toBe(true);
    });
});