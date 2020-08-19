## MERN-ሸጋ Entertaient Project with Admin-Panel

## Features
* Login-page and Basic layout design done by using Bootstrap
* JWT and Passport for Authentication
* Datatable with Client-side & Server Side Pagination
* Multi-sort
* Filters
* Minimal design
* Fully controllable via optional props and callbacks
* and component manuplation 

## Available Script

Install Mongoos DB and run into your Machine First 

To start server and client simultaneously

`npm run dev` or if you want to run concurrently `npm run dev` 

Since ther is no Registration page, You should be post admin signup schema to the database using

Postman Or somthing. The schema would be

Post: `http://localhost:3000/api/admin-add`

`{"name": "","email": "","password": "","password2":""}`

To Build react application

cd client and run

`npm run build`

## deploying the project
After installation and creation of heroku account,

need to install heroku cli

`heroku login`

and then from the existing account coppy heroku git 
`heroku git:remote -a vast-taiga-35599` and

push to heroku

`git push heroku master`



#### መልካም Codding! ;)



