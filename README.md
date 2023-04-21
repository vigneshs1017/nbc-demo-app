###### Run the application locally #######
 1. Clone the application repository onto your local computer in order to execute the application locally.
 2. Update the MYSQL_USER and MYSQL_PASS values in the docker-compose.yml file. 
 3. Change the corsOptions Origin in the server.js file to http://localhost:8080 
 4. Update the database HOST, USER, and PASS in the app/config/db-config.js file.
 4. To deploy the programme locally, please run the following command once it has finished.
     1. docker-compose up -d --- This will set up and run the Docker container on your local machine.
     2. docker ps --- To see the list of running containers.