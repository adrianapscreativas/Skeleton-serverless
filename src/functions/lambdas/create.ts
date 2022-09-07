import createTodoController from "@functions/controllers/createTodoController";
import { TodoInterface } from "@functions/interfaces/TodoInterface";
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";

/**
 * Its a demos
 *
 * @returns {string}
 */

const create: ValidatedEventAPIGatewayProxyEvent<APIGatewayEvent> = async (event) => {
  const { name, description } =event.body as TodoInterface ;
  const data = {
    name, description
}

const rerieveData = await createTodoController(data)

  return formatJSONResponse({
    success: true,
    message: "data created",
    data: rerieveData
  });
};

export const main = middyfy(create);
