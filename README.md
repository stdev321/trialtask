# Read Me

## Starting the Backend

Follow these steps to start the backend of the project:

### Step 1
Navigate to the backend directory:
```sh
cd Backend
```

### Step 2
Install the necessary packages:
```sh
npm install
```

### Step 3
Create a `.env` file and add your PostgreSQL connection URL. For example:
```plaintext
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/trialtask-Database?schema=public"
```
Here, `postgresql://<User Name>:<Database Password>@<Host>/<Database Name>?schema=public` should be replaced with your actual connection details.

### Step 4
Start the server:
```sh
node server.js
```

The backend should now be running.

## Starting the Frontend

Follow these steps to start the frontend of the project:

### Step 1
Navigate to the frontend directory:
```sh
cd frontend
```

### Step 2
Install the necessary packages:
```sh
npm install
```

### Step 3
If the port changes, update the API URL in `src/Services/UserRequest.js`.

### Step 4
Start the frontend server:
```sh
npm start
```
If prompted to change the port, press Yes.

### Step 5
Open your browser and navigate to:
```plaintext
http://localhost:3001
```
Note: The port `3001` can be changed based on your system configuration.

The frontend should now be running.

For more detailed information, you can check out the [video tutorial](https://www.loom.com/share/01f116446a444b6ba63dafafddffe1be?sid=344943fb-ca17-4ab3-90a2-627c9ca3db61).