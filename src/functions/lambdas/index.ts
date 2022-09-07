/**
 * Index where lambda event,paths and custom.
 */

import { handlerPath } from '@libs/handler-resolver';
export const createTodo= {
  handler: `${handlerPath(__dirname)}/create.main`,
  description: 'lambda for create item',
  events: [
    {
      http: {
        method: 'post',
        path:  '${self:custom.api_prefix}/create-todo',
      },
    },
  ],
};

export const getTodo={
  handler: `${handlerPath(__dirname)}/get.main`,
  description: 'lambda for create item',
  tags: {
    Enterprise: 'skeleton-App',
    Project: 'skeleton-App',
    Cost_Center: 'sekeleton-App',
    Billing: 'skeleton-App',
  },
  events: [
    {
      http: {
        method: 'get',
        path: '${self:custom.api_prefix}/all-todo',
      },
    },
  ],
}