import ddbDocClient from 'libs/ddbDocClient';
import moment from 'moment/moment';
import { useState } from 'react';

const createItem = async (params) => {
  const data = await ddbDocClient.put({ ...params, POST_TIME: moment().format('YYYY-MM-DD HH-mm-SS') }, (err, data) => {
    if (err) {
      console.error("Error", err);
    } else {
      console.log('create succeeded:', JSON.stringify(data, null, 2));
    }
  })
  return data;
}

const readItem = async (params) => {
  const data = await ddbDocClient.get(params, (err, data) => {
    if (err) {
      console.error("Error", err);
    } else {
      console.log('read succeeded:', JSON.stringify(data, null, 2));
    }
  })
  return data;
}

const ReadAll = async () => {
  let item;
  try {
    item = ddbDocClient.scan({
      TableName: "SCHEDULES_TB",
    }).promise()
  } catch (err) {
    console.err("Error", err)
  }

  return item
}

const updateItem = async (params) => {
  const data = await ddbDocClient.update(params, (err, data) => {
    if (err) {
      console.error("Error", err);
    } else {
      console.log('update succeeded:', JSON.stringify(data, null, 2));
    }
  })
  return data;
}

const deleteItem = async (params) => {
  const data = await ddbDocClient.delete(params, (err, data) => {
    if (err) {
      console.error("Error", err);
    } else {
      console.log('delete succeeded:', JSON.stringify(data, null, 2));
    }
  })
  return data;
}

export { createItem, readItem, ReadAll, updateItem, deleteItem };