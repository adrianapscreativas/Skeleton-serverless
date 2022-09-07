import getTodoController from "@functions/controllers/getTodoController";
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";
import TodoModel from "database/models/TodoModel";

/**
 * Its a demos
 *
 * @returns {string}
 */

const get: ValidatedEventAPIGatewayProxyEvent<APIGatewayEvent> = async () => {
console.log(typeof TodoModel , "mira el tipo");

const rerieveData = await getTodoController(TodoModel);

  return formatJSONResponse({
    success: true,
    message: "data created",
    data: rerieveData
  });
};

export const main = middyfy(get);
