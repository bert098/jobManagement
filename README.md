# Setup instructions
1. Make sure you are on the most current version of Node
2. run npm install
3. run cd ./client 
4. run npm install again 
5. run cd ..
6. now run npm start 

# API Docs 
1. Create a Job
Endpoint: POST /jobs
Description: Creates a new job with the provided details.

Request Body:
{
  "customerName": "string",
  "jobType": "string",
  "status": "string",
  "appointmentDate": "string (ISO 8601 format)",
  "technician": "string"
}
Response:
201 Created: Successfully created the job.
400 Bad Request: Invalid request body.

2. Get a Job
Endpoint: Get /jobs/:id
Description: Gets an existing job by Id.
Request Parameters:
id: The ID of the job to get (integer).
Response:

200 OK: Successfully got the job.
404 Not Found: Job not found.

3. Retrieve Jobs
Endpoint: GET /jobs
Description: Retrieves a list of all jobs.
Response:
200 OK: Returns a list of jobs.

4. Update a Job
Endpoint: PUT /jobs/:id
Description: Updates the details of an existing job.
Request Parameters:
id: The ID of the job to update (integer).

Request Body:
{
  "customerName": "string",
  "jobType": "string",
  "status": "string",
  "appointmentDate": "string (ISO 8601 format)",
  "technician": "string"
}

Response:
200 OK: Successfully updated the job.
400 Bad Request: Invalid request body.

5. Delete a Job
Endpoint: DELETE /jobs/:id
Description: Deletes an existing job.
Request Parameters:
id: The ID of the job to delete (integer).

Response:
200 OK: Successfully deleted the job.
404 Not Found: Job not found.

# Architecture 
For my front end I went with a simple Vite and React app, I chose Vite for it's great support and Libraries and the same goes for React
Vite is simply a build Tool so the front end is all in React, I have a large amount of experience with Reactso that is why I chose it 

For the back end I used Node and Express since those are two very good tools for supporting API requests and creating a robust back end 

# Front End 
I split my Front End into a few components, Mainly the itemList to see all the Jobs and then the card to add new jobs, These are in the "CardDisply" folder
then there is the "Popup" Folder which has all the PopUp components you see when changing or viewing Jobs 

# Back end
For the back end I split everything up into a standard Model, Router, Services, Controller setup which is very common for robust backends 
The Router class takes the different services in the Services folder and feeds them into the Controller class which then initializes tehm with Express when the app starts 
The Model folder would normally be used to determine the Database tables but here I used to to ensure data integraty when changing the list of JSON objects

