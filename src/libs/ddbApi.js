import AWS from 'aws-sdk'
import moment from 'moment/moment';
import awsConfig from 'config/awsConfig';

const REGION = "ap-northeast-2"

// AWS.config.update({ region: REGION })
AWS.config.update({ ...awsConfig.aws_remote_config })

const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

const create = async (params) => {
  try {
    const data = await ddb.putItem(params)
    console.log("Success", data);
  } catch (err) {
    console.log("Error", err);
  }
}

const readLine = async (params) => {
  try {
    const data = await ddb.getItem(params)
    console.log("Success", data);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
}

// const query = awync (params)=>{
//   try{
//     ddb.query
//   }
// }

export { ddb, create, readLine };