import mongoose from "mongoose"

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      default: "",
    },
    completed: {
      type: Boolean,
      default: false,
    },
    strikethrough: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const Note = mongoose.model("Note", noteSchema)
export default Note
