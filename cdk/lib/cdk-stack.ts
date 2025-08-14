import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CdkStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const nodejsFunction = new cdk.aws_lambda_nodejs.NodejsFunction(
			this,
			'NodejsFunction',
			{
				runtime: cdk.aws_lambda.Runtime.NODEJS_22_X,
				entry: '../src/index.ts',
				handler: 'handler',
				architecture: cdk.aws_lambda.Architecture.ARM_64,
				bundling: {
					forceDockerBundling: false,
				},
			},
		);

		nodejsFunction.addFunctionUrl({
			authType: cdk.aws_lambda.FunctionUrlAuthType.NONE,
		});
	}
}
