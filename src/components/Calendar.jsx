import { useEffect, useState } from "react";
import moment from "moment";
import ddbDocClient from "libs/ddbDocClient";
import { useContext } from "react";
import { AppContext } from "./Layout";
import { deleteItem } from "libs/ddbApi";

export const Calendar = () => {
  const context = useContext(AppContext);
  const page = context.page;
  const active = context.active;
  const setActive = context.setActive;
  const data = context.data;
  const fetch = context.fetch;
  const setItemDetail = context.setItemDetail;

  const [thisWeek, setThisWeek] = useState([]);
  const [week, setWeek] = useState([]);

  useEffect(() => {
    const datum = [-1, 0, 1, 2, 3, 4, 5];
    setThisWeek(
      datum.map((e) => {
        const day = moment().add(7 * page + e, "d");
        return {
          idx: e + 1,
          full: day.format("YYYY-MM-DD"),
          month: day.format("MM").replace(/(^0+)/, ""),
          day: day.format("DD"),
          data: [],
        };
      })
    );
  }, [page, data]);

  useEffect(() => {
    console.log("called");
    setWeek(thisWeek);
    data.map((e) => {
      const match = thisWeek.find((day) => {
        return day.full === e.DATE;
      });
      if (match) {
        let tempWeek = thisWeek.map((e) => {
          return { ...e };
        });
        const tempDay = thisWeek[match.idx];
        tempDay.data.push(e);
        tempWeek[match.idx] = tempDay;
        setWeek(tempWeek);
      }
    });
  }, [thisWeek]);

  return (
    <>
      <div id="weekWrapper">
        {week?.map((day, idx) => {
          return (
            <div
              key={day.full}
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
                <div className="dateAreaMonth">{day.month}</div>
                <div className="dateAreaDay">{day.day}</div>
              </div>
              <div className="contentArea">
                <ul>
                  {day.data.map((e) => {
                    return (
                      <li key={e.POST_NUM}>
                        <div
                          className="todoItem"
                          onClick={(click) => {
                            click.stopPropagation();
                            setItemDetail(e);
                          }}
                        >
                          {e.NAME}
                        </div>
                        <div
                          className="delItem"
                          onClick={(click) => {
                            click.stopPropagation();
                            deleteItem(e).then(() => fetch());
                          }}
                        >
                          X
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Calendar;
