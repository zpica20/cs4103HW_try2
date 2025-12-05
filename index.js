const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

// Needed to read POST form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.post("/", (req, res) => {

    const {
        noun1,
        verb1,
        adjective1,
        animal1,
        verb2,
        place1,
        adjective2
    } = req.body;

    const story = `One day a ${adjective1} ${noun1} decided to ${verb1}. Suddenly, a ${adjective2} ${animal1} appeared and started to ${verb2} at the ${place1}.`;

    res.send(story);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

