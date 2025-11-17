// src/swagger/swagger.config.ts

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Task API",
    version: "1.0.0",
    description: "API para gestionar projects, tasks y people"
  },
  servers: [{ url: "http://localhost:3000", description: "Local server" }],
  tags: [
    { name: "Tasks", description: "Operaciones sobre tareas" },
    { name: "Projects", description: "Operaciones sobre proyectos" },
    { name: "People", description: "Operaciones sobre personas" }
  ],
  paths: {
    "/tasks": {
      get: {
        tags: ["Tasks"],
        summary: "Listar todas las tareas",
        responses: { "200": { description: "OK" } }
      },
      post: {
        tags: ["Tasks"],
        summary: "Crear una nueva tarea",
        requestBody: { content: { "application/json": { schema: { $ref: "#/components/schemas/TaskInput" } } } },
        responses: { "201": { description: "Creada" } }
      }
    },
    "/tasks/{id}": {
      get: { tags: ["Tasks"], summary: "Obtener tarea por id", parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }], responses: { "200": { description: "OK" } } },
      put: { tags: ["Tasks"], summary: "Actualizar tarea", parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }], responses: { "200": { description: "OK" } } },
      delete: { tags: ["Tasks"], summary: "Eliminar tarea", parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }], responses: { "204": { description: "Eliminado" } } }
    },

    "/projects": {
      get: { tags: ["Projects"], summary: "Listar proyectos", responses: { "200": { description: "OK" } } },
      post: { tags: ["Projects"], summary: "Crear proyecto", requestBody: { content: { "application/json": { schema: { $ref: "#/components/schemas/ProjectInput" } } } }, responses: { "201": { description: "Creado" } } }
    },
    "/projects/{id}": {
      get: { tags: ["Projects"], summary: "Obtener proyecto", parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }], responses: { "200": { description: "OK" } } },
      put: { tags: ["Projects"], summary: "Actualizar proyecto", parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }], responses: { "200": { description: "OK" } } },
      delete: { tags: ["Projects"], summary: "Eliminar proyecto", parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }], responses: { "204": { description: "Eliminado" } } }
    },

    "/people": {
      get: { tags: ["People"], summary: "Listar personas", responses: { "200": { description: "OK" } } },
      post: { tags: ["People"], summary: "Crear persona", requestBody: { content: { "application/json": { schema: { $ref: "#/components/schemas/PersonInput" } } } }, responses: { "201": { description: "Creada" } } }
    },
    "/people/{id}": {
      get: { tags: ["People"], summary: "Obtener persona", parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }], responses: { "200": { description: "OK" } } },
      put: { tags: ["People"], summary: "Actualizar persona", parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }], responses: { "200": { description: "OK" } } },
      delete: { tags: ["People"], summary: "Eliminar persona", parameters: [{ name: "id", in: "path", required: true, schema: { type: "integer" } }], responses: { "204": { description: "Eliminado" } } }
    }
  },
  components: {
    schemas: {
      Task: { type: "object", properties: { id: { type: "integer" }, title: { type: "string" } }, required: ["id", "title"] },
      TaskInput: { type: "object", properties: { title: { type: "string" }, description: { type: "string" } }, required: ["title"] },
      Project: { type: "object", properties: { id: { type: "integer" }, name: { type: "string" } }, required: ["id", "name"] },
      ProjectInput: { type: "object", properties: { name: { type: "string" }, description: { type: "string" } }, required: ["name"] },
      Person: { type: "object", properties: { id: { type: "integer" }, name: { type: "string" } }, required: ["id", "name"] },
      PersonInput: { type: "object", properties: { name: { type: "string" }, email: { type: "string" } }, required: ["name"] }
    }
  }
};

export default swaggerDocument;