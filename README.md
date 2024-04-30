# Task Management System API

This is a RESTful API for managing tasks. It allows users to create, retrieve, update, and delete tasks.

## Setup

1. Clone this repository:

2. Install dependencies:


3. Set up the database:
   
   - Create a MySQL database.
   - Update the database connection settings in `database.js` with your MySQL credentials.

4. Run the server:



The server will start on http://localhost:3000 by default.

## API Endpoints

### Create a Task

- Endpoint: `POST /tasks`
- Request Body: 
  ```json
  {
    "title": "Task title",
    "description": "Task description",
    "status": "pending"
  }
- Response:  

{
  "id": 1,
  "title": "Task title",
  "description": "Task description",
  "creationDate": "2024-04-25T00:00:00.000Z",
  "status": "pending"
}


Retrieve All Tasks
Endpoint: GET /tasks
Response:

[
  {
    "id": 1,
    "title": "Task 1",
    "description": "Description of Task 1",
    "creationDate": "2024-04-25T00:00:00.000Z",
    "status": "pending"
  },
  {
    "id": 2,
    "title": "Task 2",
    "description": "Description of Task 2",
    "creationDate": "2024-04-25T00:00:00.000Z",
    "status": "in progress"
  }
]

Retrieve a Single Task
Endpoint: GET /tasks/:taskId
Response:
{
  "id": 1,
  "title": "Task 1",
  "description": "Description of Task 1",
  "creationDate": "2024-04-25T00:00:00.000Z",
  "status": "pending"
}


Update a Task
Endpoint: PUT /tasks/:taskId
Request Body:

{
  "title": "Updated Task Title",
  "description": "Updated task description",
  "status": "completed"
}

Response:

{
  "id": 1,
  "title": "Updated Task Title",
  "description": "Updated task description",
  "creationDate": "2024-04-25T00:00:00.000Z",
  "status": "completed"
}


Delete a Task
Endpoint: DELETE /tasks/:taskId
Response: Status 204 No Content