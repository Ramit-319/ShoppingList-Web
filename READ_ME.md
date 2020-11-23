Okay so this the creation of the shopping list application using MERN

So first head over to the cmd prompt and run "npm init"
then we do "npm i express body-parser mongoose concurrently"
followed by "npm i -D nodemon"
head over to package.json and add the two scripts start and server

next we create our server.js file and import all our modules that we installed
first app.use(BodyParser) to enable taking requests from the body of our React and HTML component

we then create a config folder that holds a keys.js file which stores our database URI
we store this URI in a variable called db

next we use mongoose to connect our file to MongoDB database through the URI stored in db
next we make the express app to listen for a particular port and to start the server at that port

we then create a models folder that holds are schemas for entering data into our database

Next we want to create the API which will get, post and delete items from our front end




client folder:
npm i -g create-react-app
create-react-app . (in client folder)

To run both front end and back end servers at the same time:
concurrently
