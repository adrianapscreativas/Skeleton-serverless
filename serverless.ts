import type { AWS } from '@serverless/typescript';

// import hello from '@functions/hello';
import { createTodo } from '@functions/index';

const serverlessConfiguration: AWS = {
  service: 'aws-serverless-typescript-api',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild','serverless-offline'],
  provider: {
    name: 'aws',  
    runtime: 'nodejs16.x',
    stage: 'dev',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment:  {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      AWS_RDS_DATABASE_NAME:  '${self:custom.databaseName.${self:provider.stage}}',
      AWS_RDS_USERNAME: '${self:custom.databaseUser.${self:provider.stage}}',
      AWS_RDS_PASSWORD: '${self:custom.databasePassword.${self:provider.stage}}',
      AWS_RDS_HOST: '${self:custom.databaseHost.${self:provider.stage}}',
      AWS_RDS_PORT:  '${self:custom.databasePort.${self:provider.stage}}',
      AWS_RDS_DIALECT:  '${self:custom.databaseDialect.${self:provider.stage}}',

    },
  },
  // import the function via paths
  functions: { createTodo},
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
    stages:['dev','prod'],
     databaseUser: {
      dev: '',
      prod:''
     },
     databasePassword: {
      dev: '',
      prod: '',
     },
     databaseName: {
      dev: '',
      prod:''
     },
     databasePort: {
      dev: '',
      prod: ''
     },
     databaseHost:{
      dev:'',
      prod:''
     },
     databaseDialect:{
      dev:'',
      prod:''
     }


  },
};

module.exports = serverlessConfiguration;
