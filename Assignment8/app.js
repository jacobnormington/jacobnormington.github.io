'use strict';
const express = require('express');
const app = express();


// define all endpoints here
app.get('/hello', function (req, res) {
    res.type('text');
    res.send('Hello World!');
});

/**
 *  Given a mandatory parameter r, the radius of a circle, 
 *  returns a JSON object with the area and circumference
 *  of the given circle. 
 */
app.get('/math/circle/:r', function (req, res) {
    let radius = parseInt(req.params.r);
    if (radius <= 0)
    {
        res.type('text');
        res.status(400).send('Error, Radius Must Be Positive');
    }
    else
    {
        res.type('json');
        res.json({
            area: Math.PI * radius * radius,
            circumference: Math.PI * 2 * radius
        });
    }
});

/**
 *  Given a mandatory parameter r, the radius of a circle, 
 *  returns a JSON object with the area and circumference
 *  of the given circle. 
 */
app.get('/hello/name', function (req, res) {
    let fname = req.query['first'];
    let lname = req.query['last'];

    if (fname && lname) //query parameters are supplied correctly
    {
        res.type('text');
        res.send('Hello ' + fname + ' ' + lname);
    }
    else if (fname) //last name is undefined
    {
        res.type('text');
        res.status(400).send('Missing Required GET parameters: last');
    }
    else if (lname) //first name is undefined
    {
        res.type('text');
        res.status(400).send('Missing Required GET parameters: first');
    }
    else //both are undefined
    {
        res.type('text');
        res.status(400).send('Missing Required GET parameters: first, last');
    }
});


app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);