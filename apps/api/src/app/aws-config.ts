import { AwsSdkModule } from 'nest-aws-sdk';
import { Lambda } from 'aws-sdk';

export const AWS_MODULE = AwsSdkModule.forRoot({
  defaultServiceOptions: {
    region: 'eu-west-3',
  },
  services: [Lambda],
});
