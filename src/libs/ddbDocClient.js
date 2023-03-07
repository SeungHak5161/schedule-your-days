import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { ddbClient } from "libs/ddbClient";
import awsConfig from 'config/awsConfig';

const marshallOptions = {
  // Whether to automatically convert empty strings, blobs, and sets to `null`.
  convertEmptyValues: false, // false, by default.
  // Whether to remove undefined values while marshalling.
  removeUndefinedValues: true, // false, by default.
  // Whether to convert typeof object to map attribute.
  convertClassInstanceToMap: false, // false, by default.
};

const unmarshallOptions = {
  // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
  wrapNumbers: false, // false, by default.
};

const translateConfig = { marshallOptions, unmarshallOptions };

// Create the DynamoDB document client.
export const ddbDocClient = DynamoDBDocumentClient.from(ddbClient, translateConfig);

// export const create = async () => {
//   await awsClient.send(params).then((res) => {
//     console.log(res)
//   }).catch((err) => {
//     console.log(err)
//   })
// }