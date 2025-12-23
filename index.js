const express = require("express");

const app = express();

const PORT = 3000;

app.get("/route", (req, res) => {
    res.json([
        {
            id: 1,
            employeeName: "Lokesh Vasnik",
            employeeSalary: 80000,
        },
        {
            id: 2,
            employeeName: "Bablu Vasnik",
            employeeSalary: 8200,
        },
        {
            id: 3,
            employeeName: "Shongo",
            employeeSalary: 25000,
        },
    ]);
});

app.listen(PORT, () => console.log(`App is running on Port No: ${PORT}`));
