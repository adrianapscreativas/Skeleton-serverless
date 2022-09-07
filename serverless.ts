import type { AWS } from '@serverless/typescript';

// import hello from '@functions/hello';
import { createTodo,getTodo } from '@functions/index';

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
  functions: { createTodo,getTodo},
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
      dev: 'erp_admin',
      prod:''
     },
     databasePassword: {
      dev: '3rp_s3rv3rl3ss',
      prod: '',
     },
     databaseName: {
      dev: 'erp_database',
      prod:''
     },
     databasePort: {
      dev: '3306',
      prod: ''
     },
     databaseHost:{
      dev:'saperp.ckt3grwu03hi.us-east-2.rds.amazonaws.com',
      prod:''
     },
     databaseDialect:{
      dev:'mysql',
      prod:''
     }


  },
};

module.exports = serverlessConfiguration;
