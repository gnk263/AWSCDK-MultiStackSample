import * as AWS  from 'aws-sdk';

export async function handler(event: any) {

    console.log(event)

    return {
        statusCode: 200,
        body: 'hello world',
    }
}
