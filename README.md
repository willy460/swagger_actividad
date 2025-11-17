# TASK API

## Overview
The TASK API is a RESTful API designed to manage tasks, projects, and people. It provides endpoints for creating, reading, updating, and deleting records related to these entities.

## Features
- Manage tasks with properties such as id, title, and status.
- Manage projects with properties such as id, title, and description.
- Manage people with properties such as id, name, and age.
- Swagger documentation for easy API exploration.

## Directory Structure
```
TASK-API
├── src
│   ├── people
│   │   ├── person.model.ts
│   │   ├── person.routes.ts
│   │   └── person.services.ts
│   ├── projects
│   │   ├── project.model.ts
│   │   ├── project.routes.ts
│   │   └── project.services.ts
│   ├── swagger
│   │   └── swagger.config.ts
│   ├── tasks
│   │   ├── task.model.ts
│   │   ├── task.routes.ts
│   │   └── task.services.ts
│   ├── app.ts
│   └── server.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.

## Usage
1. Start the server by running `npm start`.
2. Access the API at `http://localhost:3000`.

## API Documentation
The API documentation is available at `/api-docs` when the server is running. It is generated using Swagger.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.