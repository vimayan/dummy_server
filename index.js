const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config();

app.use(cors({ origin: "*" }));

app.use(morgan("dev"));
app.use(express.json());

const data = {lineData:{user:[30, 40, 25, 50, 49, 21, 70],guest:[15, 20, 35, 40, 39, 31, 60]},pieData: [44, 55, 13]};

app.get("/", (req, res) => res.json(data));
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`server listeing on port ${PORT}`));
