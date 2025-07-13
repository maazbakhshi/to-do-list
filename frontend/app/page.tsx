"use client"

import { useEffect, useState, useMemo } from "react"
import {
  fetchTasks,
  addTask as saveTaskToDB,
  deleteTask as deleteTaskFromDB,
  toggleBoth,
} from "@/lib/api"
import { TaskInput } from "@/components/TaskInput"
import { TaskList } from "@/components/TaskList"
import type { Task, CompletionStyle } from "@/types/task"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [completionStyle, setCompletionStyle] = useState<CompletionStyle>("checkbox-and-strikethrough")

  useEffect(() => {
    fetchTasks().then(setTasks)
  }, [])

  const addTask = async (text: string) => {
    const task = await saveTaskToDB(text)
    setTasks((prev) => [task, ...prev])
  }

  const toggleTask = async (id: string) => {
    const task = tasks.find((t) => t.id === id)
    if (!task) return
    const updated = {
      ...task,
      completed: !task.completed,
    }
    setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)))
    await toggleBoth(id, updated.completed, task.strikethrough)
  }

  const deleteTask = async (id: string) => {
    await deleteTaskFromDB(id)
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const taskCounts = useMemo(
    () => ({
      all: tasks.length,
      completed: tasks.filter((task) => task.completed).length,
    }),
    [tasks],
  )

  return (
    <div className="min-h-screen bg-gray-950 py-8 px-4 text-gray-100">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-50 mb-2">My To-Do List</h1>
          <p className="text-gray-400">Stay organized and get things done</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs bg-gray-800 text-gray-50 border-gray-700 hover:bg-gray-700"
                >
                  Completion Style <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-gray-800 text-gray-50 border-gray-700">
                <DropdownMenuLabel className="text-gray-300">Choose Style</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem
                  onClick={() => setCompletionStyle("checkbox-and-strikethrough")}
                  className={
                    completionStyle === "checkbox-and-strikethrough"
                      ? "font-semibold text-gray-50 bg-gray-700"
                      : "text-gray-300 hover:bg-gray-700"
                  }
                >
                  Checkbox + Strike-through
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setCompletionStyle("checkbox-only")}
                  className={
                    completionStyle === "checkbox-only"
                      ? "font-semibold text-gray-50 bg-gray-700"
                      : "text-gray-300 hover:bg-gray-700"
                  }
                >
                  Checkbox Only
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setCompletionStyle("strikethrough-only")}
                  className={
                    completionStyle === "strikethrough-only"
                      ? "font-semibold text-gray-50 bg-gray-700"
                      : "text-gray-300 hover:bg-gray-700"
                  }
                >
                  Strike-through Only
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-6 mb-6">
          <TaskInput onAddTask={addTask} />
          <TaskList
            tasks={tasks}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
            completionStyle={completionStyle}
          />
        </div>

        {tasks.length > 0 && (
          <div className="text-center mt-6 text-sm text-gray-400">
            {taskCounts.completed} of {taskCounts.all} tasks completed
          </div>
        )}
      </div>
    </div>
  )
}