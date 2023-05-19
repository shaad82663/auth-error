# Event Booking REST API 

##  Steps to run the code (Windows OS)

You'll need to have node.js installed in the machine. Git Bash is suggested as a terminal

- After clonning the repository, Navigate to the project folder by running following command in terminal:
```sh
 cd event-booking-app/
```

- Run the following command to install the all the node.js packages that are used in the code.
```sh
npm install
```

- Run the server by running following command:
```sh
npm run start
```
id
- The ouput in the termnal will be :
>Listening Server over port 4000 in DEVELOMENT mode.
>
>mongoDB Database is connected with mongodb://localhost:27017/avtaar-mohd-shadab

# DATABASE

## TABLE-1 : USER 
     Schema : {name,age,gender,email,password} //All not null
     Primary Key : _id (auto generated)
     Methods/Functions : [getJwtToken(), comparePassword()]
     
## TABLE-2 : EVENT
     Schema : {name, description, uid, location, startDate, endDate} // All not null
     Primary Key : _id (auto generated)
     Foreign Key : uid (From User Table)

# REST API

The REST API used in the code is described below.

## Register User

### Request

`POST /api/v1/register`

     http://localhost:4000/api/v1/register

#### Sample Request (JSON)
  
    {
    "name" : "Mohd Shadab",
    "age" : 20,
    "gender" : "MALE",
    "email" : "shaad82663@gmail.com",
    "password" : "123456"
    }
    
### Response
  
    HTTP/1.1 200 OK
    success : true
    token : token
    user : {...user}
    
## Login User

### Request

`POST /api/v1/login`

     http://localhost:4000/api/v1/login

#### Sample Request (JSON)
  
    {
    "email" : "shaad82663@gmail.com",
    "password" : "123456"
    }
    
### Response
  
    HTTP/1.1 200 OK
    success : true
    token : token
    user : {...user}    
    
## Logout

### Request

`GET /api/v1/logout`

     http://localhost:4000/api/v1/logout

#### Sample Request (JSON)
  
    {}
    
### Response
  
    HTTP/1.1 200 OK
    success : true,
    message : "Logged Out"
    
## Add Event (Protected Route : Login first)

### Request

`POST /api/v1/event/new`

     http://localhost:4000/api/v1/event/new  


#### Sample Request (JSON)

    {
     "name" : "Cricket",
     "description" : "myDesc",
     "location" : "Delhi 12/32 Sk-col",
     "uid" : "61b4458d9bf1b284025e9987",
     "startDate" : "2021-12-13",
     "endDate" : "2021-12-15"
    }

### Response
  
        HTTP/1.1 200 OK
        success : true,
        event : {...event}
        
### Error (In case of not logged in user) //Same for other protected routes.
       {
       "success": false,
        "error": {
        "statusCode": 500
         },
         "errMessage": "Login first to access resourses.",
         "stack" : {error-stack}
       }
    
## Get all the events for today (Protected Route : Login first)

### Request

`GET /api/v1/events/today`

     http://localhost:4000/api/v1/events/today  
     
#### Sample Request (JSON) 
  
    {} //NO INPUT REQUIRED         

### Response
  
        HTTP/1.1 200 OK
        success : true,
        count : events.length,
        events : [...events]
    

        
## Get all users for list of uid  

### Request

`GET /api/v1/users`

     http://localhost:4000/api/v1/users

#### Sample Request (JSON)
  
    {
    "uid" : ["6193d55e635304f71aa4ea55", "6193d701f37175bbaa345a0f"]
    } 

### Response
  
         HTTP/1.1 200 OK
         success : true,
         users : {...users}
                 
         
## Get the all the events for given uid (Protected Route : Login first)

### Request

`GET /api/v1/events`

     http://localhost:4000/api/v1/events
     
#### Sample Request (JSON)
  
    {
    "uid" : "6193d55e635304f71aa4ea55"
    } 

### Response
  
         HTTP/1.1 200 OK
         success : true,
         count : eventsForUid.length,
         eventsForUid : {...eventsForUid}   
                   
         
## Get all events for the next 7 days

### Request

`GET /api/v1/events/week`

     http://localhost:4000/api/v1/events/week
     
#### Sample Request (JSON)
  
    {} //NO INPUT REQUIRED      
     
### Response
  
         HTTP/1.1 200 OK
        success : true,
        count : events.length,
        events : {...events}    


## Installation

Web App requires [Node.js](https://nodejs.org/) to run.
[Git Bash](https://git-scm.com/) is suggested as a terminal.

Install the dependencies and devDependencies.

```sh
cd <foler path>
npm install
```

Run the app

```sh
cd <foler path>
npm run dev //Running in Development mode
npm run prod //Running in Production mode
```



