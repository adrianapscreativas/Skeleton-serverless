import { handlerPath } from '@libs/handler-resolver';

export const createTodo= {
  handler: `${handlerPath(__dirname)}/todo.lambdas.create`,
  events: [
    {
      http: {
        method: 'post',
        path: 'create-todo',
      },
    },
  ],
};

