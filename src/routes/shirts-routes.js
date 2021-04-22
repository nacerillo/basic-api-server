"use strict";

const express = require("express");
const Shirt = require("../models/clothes.js");
const shirt = new Shirt();

const router = express.Router();
// shirt
//shirt
// RESTful routes
// http://localhost:3000/shirt

router.get("/shirt", getShirt);
router.get("/shirt/:id", getOneShirt);
router.post("/shirt", createShirt);
router.put("/shirt/:id", updateShirt);
router.delete("/shirt/:id", deleteShirt);

// RESTful route handlers

function getShirt(req, res) {
  let getAllThings = shirt.read();
  res.status(200).json(getAllThings);
}

function getOneShirt(req, res) {
  const id = parseInt(req.params.id);
  let theshirt = shirt.read(id);
  res.status(200).json(theshirt);
}

function createShirt(req, res) {
  let content = req.body;
  let createdshirt = shirt.create(content);
  res.status(201).json(createdshirt);
}

function updateShirt(req, res) {
  // placeholder for now
  let newshirtItem = req.body;
  const id = parseInt(req.params.id);
  let updatedshirt = shirt.update(id, newshirtItem);
  res.status(200).json(updatedshirt);
}

function deleteShirt(req, res) {
  const id = parseInt(req.params.id);
  let shirtDeleted = shirt.delete(id);
  console.log("deleted", shirtDeleted);
  res.status(200).json(shirtDeleted);
  // placeholder for now
}

module.exports = router;
