import { DynamoDBModule } from '@skypress/nestjs-dynamodb';

export const DYNAMO_DB_MODULE = DynamoDBModule.forRoot({
  AWSConfig: {
    region: 'local',
    accessKeyId: 'null',
    secretAccessKey: 'null',
  },
  dynamoDBOptions: {
    endpoint: 'localhost:8000',
    sslEnabled: false,
    region: 'local-env',
  },
});
