# Code Snippet Web Application

## Tech Stack

- Express
- React
- MySQL
- Redis

## Description

This project aims to create a web application that facilitates the submission and display of code snippets. The application will consist of two pages:

1. **Form Page**: Construct a form to gather the following fields:
   - Username
   - Preferred code language (C++, Java, JavaScript, Python)
   - Source code
   - Standard input (stdin)

2. **Submission Display Page**: Present all submitted entries in a tabular format, showcasing:
   - Username
   - Code language
   - Stdin
   - Timestamp of submission
   - Source code (display limited to the initial 100 characters)

The application must function seamlessly with data stored in MySQL tables. Both the frontend and backend applications need to be hosted.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Abhi0049k/TUF.git
   ```

2. Install dependencies for frontend and backend:

   ```bash
   cd frontend
   yarn 
   ```

   ```bash
   cd ../backend
   yarn 
   ```

3. Configure MySQL database and Redis server.

4. Start the frontend and backend servers:

   ```bash
   cd frontend
   yarn run start
   ```

   ```bash
   cd ../backend
   yarn run start
   ```

## Project Structure

- **frontend**: Contains the React application for the frontend.
- **backend**: Contains the Express application for the backend.
