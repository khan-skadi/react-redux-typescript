import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

// Union type
export type Action = FetchTodosAction | DeleteTodoAction;
