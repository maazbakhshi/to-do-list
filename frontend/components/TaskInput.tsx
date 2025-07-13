"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus } from "lucide-react"

interface TaskInputProps {
  onAddTask: (text: string) => void
}

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onAddTask(inputValue.trim())
      setInputValue("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Input
        type="text"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        className="flex-1 bg-gray-700 text-gray-50 border-gray-600 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
      />
      <Button type="submit" size="icon" className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white">
        <Plus className="h-4 w-4" />
        <span className="sr-only">Add task</span>
      </Button>
    </form>
  )
}