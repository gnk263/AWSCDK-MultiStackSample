import * as apigateway from '@aws-cdk/aws-apigateway';
import * as lambda from '@aws-cdk/aws-lambda';
import { Duration } from '@aws-cdk/core';
import cdk = require('@aws-cdk/core');

export class AwscdkMultiStackSampleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // Lambda
    const sampleLambda = new lambda.Function(this, 'multi-sample-Lambda', {
      code: lambda.Code.asset('src/lambda'),
      handler: 'app.handler',
      runtime: lambda.Runtime.NODEJS_10_X,
      timeout: Duration.seconds(3),
      environment: {
        SYSTEM_ENV: process.env.SYSTEM_ENV ? process.env.SYSTEM_ENV : 'dev',
      }
    });

    // API Gateway
    const api = new apigateway.RestApi(this, 'multi-sample-api', {
      restApiName: 'MultiSampleApi'
    });

    const integration = new apigateway.LambdaIntegration(sampleLambda, {
      proxy: true,
    });

    const messageResource = api.root.addResource('message');
    const idResource = messageResource.addResource('{id}');
    idResource.addMethod('GET', integration);
  }
}

const app = new cdk.App();
new AwscdkMultiStackSampleStack(app, 'AWS-CDK-Multi-Stack');
app.synth();
