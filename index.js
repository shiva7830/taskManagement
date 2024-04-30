const express = require('express');
const bodyParser = require('body-parser');
const taskController = require('./controllers/taskController');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Routes
app.post('/tasks', taskController.createTask);
app.get('/tasks', taskController.getAllTasks);
app.get('/tasks/:taskId', taskController.getTaskById);
app.put('/tasks/:taskId', taskController.updateTask);
app.delete('/tasks/:taskId', taskController.deleteTask);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

module.exports = app; // Export app for testing purposes
