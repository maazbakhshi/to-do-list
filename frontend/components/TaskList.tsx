"use client"

import type { Task, CompletionStyle } from "@/types/task"
import { TaskItem } from "./TaskItem"

interface TaskListProps {
  tasks: Task[]
  onToggleTask: (id: string) => void
  onDeleteTask: (id: string) => void
  completionStyle: CompletionStyle
}

export function TaskList({ tasks, onToggleTask, onDeleteTask, completionStyle }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-lg">No tasks yet</p>
        <p className="text-sm">Add a task above to get started!</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          completionStyle={completionStyle}
        />
      ))}
    </div>
  )
}
