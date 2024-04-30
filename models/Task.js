const Sequelize = require('sequelize');
const sequelize = require('../database');

const Task = sequelize.define('task', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT
    },
    creationDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    status: {
        type: Sequelize.ENUM('pending', 'in progress', 'completed'),
        defaultValue: 'pending'
    }
});

module.exports = Task;
