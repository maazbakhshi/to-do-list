import Note from "../models/Note.js"

// GET all notes
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 })
    res.json(notes)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// POST a new note
export const createNote = async (req, res) => {
  const { title, content } = req.body
  try {
    const newNote = await Note.create({ title, content })
    res.status(201).json(newNote)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// PATCH toggle completed / strikethrough / both
export const updateNoteStatus = async (req, res) => {
  const { id } = req.params
  const { completed, strikethrough } = req.body

  try {
    const note = await Note.findById(id)
    if (!note) return res.status(404).json({ message: "Note not found" })

    if (completed !== undefined) note.completed = completed
    if (strikethrough !== undefined) note.strikethrough = strikethrough

    await note.save()
    res.json(note)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// DELETE a note
export const deleteNote = async (req, res) => {
  const { id } = req.params
  try {
    const deleted = await Note.findByIdAndDelete(id)
    if (!deleted) return res.status(404).json({ message: "Note not found" })
    res.json({ message: "Note deleted" })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
