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
  const active = context.active;
  const setActive = context.setActive;

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
    // fetch();
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
        {week.map((e, idx) => {
          return (
            <div
              key={idx + 1}
              className={`weekItem ${
                !active
                  ? "normalStatus"
                  : active === idx + 1
                  ? "expandStatus"
                  : "contractStatus"
              }`}
              onClick={() =>
                active === idx + 1 ? setActive(null) : setActive(idx + 1)
              }
            >
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
