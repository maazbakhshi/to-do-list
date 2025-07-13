import express from "express"
import {
  getNotes,
  createNote,
  updateNoteStatus,
  deleteNote,
} from "../controllers/noteController.js"

const router = express.Router()

// GET /api/notes
router.get("/", getNotes)

// POST /api/notes
router.post("/", createNote)

// PATCH /api/notes/:id
router.patch("/:id", updateNoteStatus)

// DELETE /api/notes/:id
router.delete("/:id", deleteNote)

export default router
