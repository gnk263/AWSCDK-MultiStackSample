export async function handler(event: any) {
    const id = event.pathParameters.id;

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `your request message id is ${id}`
        }),
    }
}
