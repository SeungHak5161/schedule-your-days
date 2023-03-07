import AWS from 'aws-sdk'
import awsConfig from 'config/awsConfig';


AWS.config.update({ ...awsConfig.aws_remote_config })

const ddbDocClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

export default ddbDocClient