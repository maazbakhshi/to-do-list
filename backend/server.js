import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import noteRoutes from "./routes/notes.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use("/api/notes", noteRoutes)

app.get("/", (req, res) => {
  res.send("✅ Notes API running")
})

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected")
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
  })
  .catch((err) => {
    console.error("❌ Mongo connection failed:", err.message)
    process.exit(1)
  })
