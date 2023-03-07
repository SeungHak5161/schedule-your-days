import { ddbDocClient } from 'libs/ddbDocClient'
import { ddbClient } from "libs/ddbClient";
import moment from 'moment/moment';
import { PutCommand } from "@aws-sdk/lib-dynamodb";

const params = {
  TableName: "SCHEDULES_TB",
  Item: {
    "POST_NUM": 1,
    "POST_TIME": moment().format('YYYY-MM-DD HH:mm:ss'),
  },
}

export const create = async () => {
  try {
    const data = await ddbDocClient.send(new PutCommand(params));
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};