export interface taskLists {
  id: Number;
  value: string;
}

export interface tasks {
  todo: taskLists[] | [];
  inProgress: taskLists[] | [];
  completed: taskLists[] | [];
}
