"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2 } from "lucide-react"
import type { Task, CompletionStyle } from "@/types/task"

interface TaskItemProps {
  task: Task
  onToggleTask: (id: string) => void
  onDeleteTask: (id: string) => void
  completionStyle: CompletionStyle
}

export function TaskItem({ task, onToggleTask, onDeleteTask, completionStyle }: TaskItemProps) {
  return (
    <div className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg shadow-sm border border-gray-600 hover:shadow-md transition-shadow">
      <Checkbox
        id={task.id}
        checked={task.completed}
        onCheckedChange={() => onToggleTask(task.id)}
        className="border-gray-500 data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
      />
      <label
        htmlFor={task.id}
        className={`flex-1 cursor-pointer select-none ${
          task.completed || task.strikethrough
            ? completionStyle === "checkbox-only"
              ? "text-gray-500"
              : completionStyle === "strikethrough-only"
                ? "line-through text-gray-200"
                : "line-through text-gray-500"
            : "text-gray-200"
        }`}
      >
        {task.text}
      </label>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDeleteTask(task.id)}
        className="text-gray-500 hover:text-red-400 shrink-0"
      >
        <Trash2 className="h-4 w-4" />
        <span className="sr-only">Delete task</span>
      </Button>
    </div>
  )
}