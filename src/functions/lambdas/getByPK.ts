import getTodoController from "@functions/controllers/getTodoController";
import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { APIGatewayEvent } from "aws-lambda";
import TodoModel from "database/models/TodoModel";

/**
 * Its a demos for retrieve data item form db.
 *
 * @returns {string}
 */
const get: ValidatedEventAPIGatewayProxyEvent<APIGatewayEvent> = async (event) => {
    const { id } = event.pathParameters;

const rerieveData = await getTodoController(TodoModel,id);

  return formatJSONResponse({
    success: true,
    message: "data created",
    data: rerieveData
  });
};

export const main = middyfy(get);
