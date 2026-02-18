// rabbits.routes.js
const express = require("express");
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();

const {
  listRabbits,
  getRabbit,
  editRabbit,
  addRabbit,
  deleteRabbit,
} = require("../controllers/rabbits.controllers");

const router = express.Router();

router.get("/", listRabbits);

router.get("/:id", getRabbit);

router.put("/:id", jsonParser, editRabbit);

router.post("/", jsonParser, addRabbit);

router.delete("/:id", deleteRabbit);

module.exports = router;
