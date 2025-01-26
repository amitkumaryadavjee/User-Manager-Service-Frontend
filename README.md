# Address Book UI - React TypeScript Project

This is the frontend UI for a user management system, developed using React and TypeScript. It connects with a Spring Boot backend to manage user data in the Address Book. This project uses Redux for state management and Axios for API requests.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- User management interface with CRUD operations (Create, Read, Update, Delete).
- Built with React, TypeScript, Redux, and Redux-Saga.
- Styled using Bootstrap 5.
- Axios for making HTTP requests to the backend.
- Route handling with React Router.

## Tech Stack

- **Frontend**: React, TypeScript, Redux, Axios, React Bootstrap
- **Backend**: Spring Boot (Not included in this repo, but interacts with this UI)

## Installation

Follow these steps to get the project up and running:

1. Clone the repository to your local machine:
   git clone https://github.com/amitkumaryadavjee/User-Manager-Service-Frontend.git


## Install the dependencies:

npm install
This will install the necessary packages listed in package.json.

Make sure the Spring Boot backend is running and the API is available. Update the axios base URL in your code to match the backend server URL.

## Running the Application
To run the development server, execute:
npm start
This will start the app on http://localhost:3000.

## Scripts
npm start: Runs the application in development mode.
npm run build: Builds the app for production to the build folder.
npm test: Runs the test suite using Jest.
npm run eject: Ejects the create-react-app configuration if you want to customize it.

## Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature-name).
Create a pull request.