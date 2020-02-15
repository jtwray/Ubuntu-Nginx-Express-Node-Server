const compression =require('compression');
const express = require('express');
const app = express();
app.use(compression());

const port = 3000 || process.env.PORT;

app.get(`/`, (req,res) =>{
	res.send('Hello WizOrld');

});

app.listen(port, ()=> console.log(`Example app listening on port ${port}`));
