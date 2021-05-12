import express from "express";
import Assignment from "../models/assignment";
import { assignmentById, assignments, deleteAssignment, pushAssignment, updateAssignment } from "../models/assignment-db";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.render("homepage", { assignments });
});

routes.get("/add", (req, res) => {
  res.render("assignment-form");
});

routes.post("/add", (req,res) => {
    let assignment: Assignment = {
        name: req.body.name,
        score: parseInt(req.body.score),
        total: parseInt(req.body.total),
        completed: !!req.body.completed
    };
    pushAssignment(assignment);
    res.render("assignment-result", {assignment})
});

routes.get("/:id/edit", (req,res) => {
    const id = parseInt(req.params.id);
    const assignment = assignmentById(id);
    res.render("edit-assignment", {assignment})
})

routes.post("/:id/edit-submit", (req,res) => {
    const assignment: Assignment = {
        id: parseInt(req.params.id),
        name: req.body.name,
        score: parseInt(req.body.score),
        total: parseInt(req.body.total),
        completed: !!req.body.completed
    }
    updateAssignment(assignment);
    res.render("edit-submit", {assignment} )
})

routes.get("/:id/delete", (req,res) => {
    const id = parseInt(req.params.id);
    const assignment = assignmentById(id);
    if (assignment) {
        deleteAssignment(id);
        res.render("assignment-deleted", {name: assignment.name})
    } else {
        res.status(404)
    }
})

export default routes;
