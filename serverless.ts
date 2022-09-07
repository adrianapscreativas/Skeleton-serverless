import type { AWS } from '@serverless/typescript';

// import hello from '@functions/hello';
import * as Functions from '@functions/index';

const serverlessConfiguration: AWS = {
  service: 'aws-serverless-Template-',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild','serverless-offline'],
  provider: {
    name: 'aws',  
    profile: 'default',
    runtime: 'nodejs16.x',
    stage: 'dev',
    region: 'us-east-2',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    tags:{
      Enterprise: 'skeleton-App',
      Project: 'skeleton-App',
      Cost_Center: 'sekeleton-App',
      Billing: 'skeleton-App',
    },
    environment:  {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      AWS_RDS_DATABASE_NAME: '${self:custom.databaseName.${self:provider.stage}}',
      AWS_RDS_USERNAME: '${self:custom.databaseUser.${self:provider.stage}}',
      AWS_RDS_PASSWORD: '${self:custom.databasePassword.${self:provider.stage}}',
      AWS_RDS_HOST: '${self:custom.databaseHost.${self:provider.stage}}',
      AWS_RDS_PORT: '${self:custom.databasePort.${self:provider.stage}}',
      AWS_RDS_DIALECT: '${self:custom.databaseDialect.${self:provider.stage}}',

    },
  },
  // import the function via paths
  functions: {...Functions},
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
    api_prefix: '/api/v1',
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
     },
     tags_global: {
        Enterprise: 'ERP-App',
        Project: 'ERP-App',
        Cost_Center: 'ERP-App',
        Billing: 'ERP-App',
     }

  },
};

module.exports = serverlessConfiguration;
