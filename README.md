# AcadBee Backend 
## About
A reference book app which makes suggesting books easy for professors / instructors and help organizing lectures notes and e-material predominant in the online teaching environment.

### Libraries
* Mongoose
* Express
* Bcrypt
* Nodemon
* Mongoose
* Morgan
* DotEnv


## Environment Variables

Environment variable is a way to store/pass some sensitive/config information that is required by the software. This can include passwords, secret keys, config variables.

To setup environment variables, create a `.env` file at conf directory of project containing following information:
```
ENVIRONMENT (.env)
PORT=<The port to be used: optional>
CONNECTION_STRING=<Connection string of local database>
```
NOTE: Before proceeding further, ensure that your local .env file is present with above configuration variables.

## Setup Instructions

**Clone the repo**
```
git clone https://github.com/pravesh00/acadbee-backend.git<br/>
cd acadbee-backend
```

**To start server**
```
1.npm install
2.nodemon start
```

## Components

* `routes`: It contains different routes to different apis like profile, user, book, rating, course, etc.

* `models`: It contains all the models and schema classes of objects.

* `index`: The default app runs on index.js which connects all other routes and middleware.

* `utils`: It contains logic for verifying JsonWebToken.

## Figma UI link 
https://www.figma.com/file/zySMHK1BjTmsOblP4F27Oy/Reference-book-case-study?node-id=0%3A1





