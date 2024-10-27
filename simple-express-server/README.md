# Simple Express Server

This is a simple Express server that listens on port 8001. It does not have any endpoints defined.

## Prerequisites

- Node.js
- Yarn (optional)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/simple-express-server.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Start the server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

   The server will be running at [http://localhost:8001](http://localhost:8001).

## Docker

To run the server using Docker, follow these steps:

1. Build the Docker image:

   ```bash
   docker build -t simple-express-server .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 8001:8001 simple-express-server
   ```

   The server will be running at [http://localhost:8001](http://localhost:8001).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.