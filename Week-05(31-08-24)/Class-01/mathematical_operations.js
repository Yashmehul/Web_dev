const express = require("express");
const app = express();

app.get("/add/:a/:b", function(req, res) {
    let a = parseInt(req.params.a); // Get the query parameter as a string
    let b =parseInt(req.params.b); // Get the query parameter as a string
    
    // Check if both are valid numbers before adding
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid input: Both 'a' and 'b' must be numbers.");
    }

    const sum = a  + b ; // Implicitly convert strings to numbers using subtraction
    res.status(200).send(sum.toString()); // Send the result as a string
});

app.listen(3000, () => {
    console.log("The server is listening on port 3000");
});
