const express = require('express');
const tasksController = require('./controllers/tasks');
const app = express();
const port = 8000;

// Task 1
app.get("/task-1/I/want/title/", tasksController.getTitles);
// Task 2
app.get("/task-2/I/want/title/", tasksController.getTitlesAsync);
// Task 3
app.get("/task-3/I/want/title/", tasksController.getTitlesRSVP);

app.get("*", (req,res)=>{
    res.status(404).send('Not response');

   });
app.listen(port, ()=>{
    console.log(`Listening to the port ${port}`);
});