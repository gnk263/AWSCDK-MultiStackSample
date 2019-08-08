#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { AwscdkMultiStackSampleStack } from '../lib/awscdk-multi_stack_sample-stack';

const app = new cdk.App();
new AwscdkMultiStackSampleStack(app, 'AwscdkMultiStackSampleStack');
