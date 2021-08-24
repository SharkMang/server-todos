import { TODOS_STATUS } from "../constants";

export interface Todo {
  name: string
  id: number
  status: TODOS_STATUS
  userId: number
}