const { expect } = require('chai');
const sinon = require('sinon');
const Task = require('../models/Task');
const taskController = require('../../controllers/taskController');

describe('Task Controller', () => {
    describe('createTask', () => {
        it('should create a new task', async () => {
            const req = {
                body: {
                    title: 'Test Task',
                    description: 'This is a test task',
                    status: 'pending'
                }
            };
            const res = {
                status: sinon.stub().returnsThis(),
                json: sinon.spy()
            };
            await taskController.createTask(req, res);
            expect(res.status.calledWith(201)).to.be.true;
            expect(res.json.calledOnce).to.be.true;
            expect(res.json.firstCall.args[0].title).to.equal('Test Task');
        });
    });

    // Write more unit tests for other controller functions
});
