const request = require('supertest');
const app = require('../index');

describe('API Endpoints', () => {
    it('should create a new task', async () => {
        const res = await request(app)
            .post('/tasks')
            .send({
                title: 'Test Task',
                description: 'This is a test task',
                status: 'pending'
            });
        expect(res.status).to.equal(201);
        expect(res.body.title).to.equal('Test Task');
    });

    // Write more integration tests for other endpoints
});
