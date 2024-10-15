const express = require("express");
const app = express();

app.use(express.json());

// Initial user data
let users = [{
    id: 1,
    name: "Yash",
    age: 22,
    kidneys: [{
        healthy: false
    }]
}];

// GET user information
app.get('/info/:id', (req, res) => {
    const user_id = parseInt(req.params.id);
    if (user_id < 1 || user_id > users.length) {
        return res.status(404).json({ message: "User not found" });
    }

    const kidn = users[user_id - 1].kidneys;
    const no_of_kidney = kidn.length;
    let noOfHealthyKidneys = 0;

    for (let i = 0; i < no_of_kidney; i++) {
        if (kidn[i].healthy) {
            noOfHealthyKidneys++;
        }
    }

    const numberOfUnhealthyKidney = no_of_kidney - noOfHealthyKidneys;
    res.json({
        no_of_kidney,
        noOfHealthyKidneys,
        numberOfUnhealthyKidney
    });
});

// POST new user
app.post('/send', (req, res) => {
    const { name, age, kidneys } = req.body;
    const processed_kidneys = [];
    const new_id = users.length + 1;

    if (kidneys && kidneys.length > 0) {
        for (let i = 0; i < kidneys.length; i++) {
            processed_kidneys.push(kidneys[i]);
        }
    }

    const new_user = {
        id: new_id,
        name: name || "Unnamed",
        age: age,
        kidneys: processed_kidneys
    };

    users.push(new_user);
    res.status(200).json({
        message: "New user successfully added",
        user: new_user
    });
});

// PUT update user
app.put('/update/:id', (req, res) => {
    const user_id = parseInt(req.params.id);
    const { name, age, kidneys } = req.body;
    const loc = users.findIndex(item => item.id === user_id);

    if (loc !== -1) {
        users[loc].name = name || "Unnamed user";
        users[loc].age = age;
        users[loc].kidneys = kidneys || users[loc].kidneys;
        res.status(200).json({
            message: "User updated",
            user: users[loc]
        });
    } else {
        res.status(404).json({
            message: "User not found"
        });
    }
});

// DELETE user
app.delete('/del/:id', (req, res) => {
    const user_id = parseInt(req.params.id);
    const loc = users.findIndex(item => item.id === user_id);

    if (loc !== -1) {
        const removedUser = users.splice(loc, 1)[0];
        res.status(200).json({
            user: removedUser,
            message: "Successfully removed"
        });
    } else {
        res.status(404).json({
            message: "User not found"
        });
    }
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000 (:)");
});
