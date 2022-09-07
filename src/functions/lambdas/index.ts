import { handlerPath } from '@libs/handler-resolver';
export const createTodo= {
  handler: `${handlerPath(__dirname)}/create.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'create-todo',
      },
    },
  ],
};

export const getTodo={
  handler: `${handlerPath(__dirname)}/get.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'all-todo',
      },
    },
  ],
}