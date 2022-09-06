import type { AWS } from '@serverless/typescript';

// import hello from '@functions/hello';
import { demo, handler } from '@functions/index';

const serverlessConfiguration: AWS = {
  service: 'aws-serverless-typescript-api',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild','serverless-offline','serverless-modular'],
  provider: {
    name: 'aws',  
    runtime: 'nodejs16.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment:  {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      AWS_RDS_DATABASE_NAME: '',
      AWS_RDS_USERNAME: '',
      AWS_RDS_PASSWORD: '',
      AWS_RDS_HOST: '',
      AWS_RDS_PORT: '3306',
      AWS_RDS_DIALECT: 'mysql'

    },
  },
  // import the function via paths
  functions: { demo, handler},
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
