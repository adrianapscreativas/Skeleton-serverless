// import { TodoController } from "@functions/controllers/|todo.controller";
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";
// import TodoModel from "database/models/todo";

/**
 * Its a demos
 *
 * @returns {string}
 */
// const todo = new TodoController();

const createTodo: ValidatedEventAPIGatewayProxyEvent<APIGatewayEvent> = async () => {
  // const { name, description } =JSON.parse(event.body as string);

  // const data = new TodoModel();
  //  data.name = name;
  //     data.description = description;
  // const newTodo = await todo.create(data);

  return formatJSONResponse({
    success: true,
    message: "data created",
  });
};

export const main = middyfy(createTodo);
