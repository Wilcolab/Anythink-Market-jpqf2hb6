# Python Server
This project contains a Node.js server implemented with Express. It provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `simple-express-server/src/index.js`: This file contains the implementation of the Express server with two routes. It handles adding a task to a list and retrieving the list.

- `simple-express-server/src/__init__.js`: This file is an empty file that marks the `src` directory as a Node.js module.

- `simple-express-server/package.json`: This file lists the dependencies required for the Express server and other dependencies.

- `simple-express-server/Dockerfile`: This file is used to build a Docker image for the Express server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Migration Details

The project was migrated from a FastAPI server to a Node.js server with Express. The following changes were made:

- The FastAPI server implementation in `python-server/src/main.py` was replaced with an Express server implementation in `simple-express-server/src/index.js`.
- The Python dependencies listed in `python-server/requirements.txt` were replaced with Node.js dependencies listed in `simple-express-server/package.json`.
- The Dockerfile for the FastAPI server (`python-server/Dockerfile`) was replaced with a Dockerfile for the Express server (`simple-express-server/Dockerfile`).

## Getting Started

To run the Express server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the Express server and start the containers defined in the `docker-compose.yml` file.

- The Express server should now be running. You can access it at port `8001`.

## API Routes

The Express server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.
