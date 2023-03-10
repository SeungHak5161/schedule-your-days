import { ReadAll } from "libs/ddbApi";
import { useEffect, useState } from "react";
import moment from "moment";
import ddbDocClient from "libs/ddbDocClient";
import { useContext } from "react";
import { AppContext } from "./Layout";

export const Calendar = () => {
  const context = useContext(AppContext);
  const [data, setData] = useState([]);
  const page = context.page;
  const test = [
    { POST_NUM: 2, POST_TIME: "2025-03-08" },
    { POST_NUM: 1, POST_TIME: "2023-03-07 00:32:22" },
  ];
  useEffect(() => {
    const fetch = async () => {
      try {
        const item = await ReadAll();
        console.log(item.Items);
        setData(item.Items);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  const datum = [-1, 0, 1, 2, 3, 4, 5];
  const week = datum.map((e) => {
    const day = moment().add(7 * page + e, "d");
    return {
      month: day.format("MM").replace(/(^0+)/, ""),
      day: day.format("DD"),
    };
  });
  return (
    <>
      <div id="weekWrapper">
        {/* {data !== undefined && data.length !== 0
          ? data.map((item) => {
              return (
                <div key={item.POST_NUM} className="weekItem normalStatus">
                  {item.POST_NUM}
                </div>
              );
            })
          : null} */}
        {week.map((e) => {
          return (
            <div key={e.month + e.day} className="weekItem normalStatus">
              <div className="dateArea">
                <div className="dateAreaMonth">{e.month}</div>
                <div className="dateAreaDay">{e.day}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Calendar;
