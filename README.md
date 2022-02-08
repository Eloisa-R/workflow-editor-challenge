# Workflow Editor Challenge

## Project Setup

1. Server side

    1.1 Environment variables: create a .env file and copy the values from the .environment-example file in it. The .env file is picked up by `dotenv` in `app.js`.
    1.2 Database setup: the project uses MongoDB Atlas. You can create an account here https://www.mongodb.com/es/cloud/atlas/register and then input your username (`DB_USER_NAME`) and password (`DB_PASSWORD`) in the .env file.
    1.3 The `NODE_ENV` variable is used in the logger setup: if it is set to `production` the logs will be saved to files.
    1.4 Install the dependecies with `npm install`.
    1.5 Run the project with `npm start` (or in development mode with nodemon with `npm run dev`).

2. Client side

    2.1 Environment variables: create a .env file and copy the values from the .environment-example file in it.
    2.2 Install the dependecies with `npm install`.
    2.3 Run the project with `npm start`.


## Scope of the Solution

    1. Server side
    
    1.1 Structure: the project follows a common variation of the MVC pattern that consists of routes (API endpoints), controllers (request parameter validation, sending responses with the correct codes), services (database queries) and models (schema definition). However in this case I omitted the service layer since the database queries are already abstracted away by mongoose and it seemed unnecessary.
    
    1.2 API: the server has two endpoints, a `GET` endpoint that fetches the workflow data by description: `/workflow/:workflowDesc` (since the frontend cannot know the document id beforehand), and `POST` endpoint that finds the workflow document by id and updates it (`/workflow/:workflowId`). The `POST` endpoint also validates the request body against the schema before trying to perform the update.

    1.3 Error responses: the error descriptions the server sends are quite generic. In a production application I would have provided more detailed descriptions.

    1.4 Logging: I added logging with winston to emulate the behaviour of a production application. 
    
    1.5 Unit testing: I added a couple of unit tests as an example of the kind of behaviour that I would be testing in the application. Of course ideally all the code should be covered with tests.


    2. Client side

    2.1 Routing: I decided not to use React Router because the application would only have one route.

    2.2 Redux/Context API: I decided to pass data simply as props instead of using a store management system or the Context API since the application is quite small and only two components need access to the data.

    2.3 react-flow-renderer: I decided to use an external library to create the flowchart; however in an actual production application it should be considered if a library offers enough room for customisation or if it's worth building an in-house solution that could be reused accross all of the frontend projects (which would provide style consistency).

    2.4 "Save" button in the Workflow component: I added a button that calls the `POST` endpoint in the server. With more time, I would have added editing functionality so that the endpoint can be properly used (right now the data sent back to the server is the same that was fetched). 

    2.5 Unit testing: also here I added a couple of unit tests as an example of the kind of behaviour that I would be testing in the application. Of course ideally all the code should be covered with tests.

