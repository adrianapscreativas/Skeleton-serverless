import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway'
import { formatJSONResponse } from '@libs/api-gateway'
import { middyfy } from '@libs/lambda'
import { APIGatewayEvent } from 'aws-lambda'

import createUserController from './controller/createUserController'
import { CreateUserInterface } from './interface/interfaceCreateUser'
/**
 * Its a demos
 * 
 * @returns {string}
 */
const handler: ValidatedEventAPIGatewayProxyEvent<APIGatewayEvent> = async (event) => {
    
    const {firstName,lastName ,email,password} = event.body as CreateUserInterface;

    const data = {
        firstName,
        lastName,
        email,
        password
    }

    const retrieveData = await createUserController(data);

  return formatJSONResponse({
    success:true,
    message: "data created" ,
    data: retrieveData

  })
}

export const main = middyfy(handler);

