// /lib/api.ts
import axios from "axios"
import type { Task } from "@/types/task"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/notes"

export async function fetchTasks(): Promise<Task[]> {
  const res = await axios.get(API_URL)
  return res.data.map((item: any) => ({
    id: item._id,
    text: item.title,
    completed: item.completed || false,
    strikethrough: item.strikethrough || false,
  }))
}

export async function addTask(text: string): Promise<Task> {
  const res = await axios.post(API_URL, { title: text, content: "" })
  return {
    id: res.data._id,
    text: res.data.title,
    completed: res.data.completed || false,
    strikethrough: res.data.strikethrough || false,
  }
}

export async function deleteTask(id: string): Promise<void> {
  await axios.delete(`${API_URL}/${id}`)
}

export async function toggleTask(id: string, completed: boolean): Promise<void> {
  await axios.patch(`${API_URL}/${id}`, { completed })
}

export async function toggleStrikethrough(id: string, strikethrough: boolean): Promise<void> {
  await axios.patch(`${API_URL}/${id}`, { strikethrough })
}

export async function toggleBoth(id: string, completed: boolean, strikethrough: boolean): Promise<void> {
  await axios.patch(`${API_URL}/${id}`, { completed, strikethrough })
}