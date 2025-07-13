// /types/task.ts
export interface Task {
  id: string
  text: string
  completed: boolean
  strikethrough: boolean
}

export type CompletionStyle =
  | "checkbox-only"
  | "strikethrough-only"
  | "checkbox-and-strikethrough"