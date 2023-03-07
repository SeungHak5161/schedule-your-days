import { ReadAll } from "libs/ddbApi";
import { useEffect, useState } from "react";
import ddbDocClient from "libs/ddbDocClient";

export const Calendar = () => {
  const [data, setData] = useState([]);
  const test = [
    { POST_NUM: 2, POST_TIME: "2025-03-08" },
    { POST_NUM: 1, POST_TIME: "2023-03-07 00:32:22" },
  ];
  useEffect(() => {
    const init = async () => {
      try {
        const item = await ReadAll();
        console.log(item.Items);
        setData(item.Items);
      } catch (err) {
        console.error(err);
      }
    };
    init();
  }, []);

  return (
    <>
      <ul>
        {data !== undefined && data.length !== 0
          ? data.map((item, idx) => {
              return (
                <li
                  key={idx}
                  style={{
                    width: "100%",
                    height: "100px",
                    backgroundColor: "yellow",
                  }}
                >
                  {item.POST_NUM}
                </li>
              );
            })
          : null}
      </ul>
    </>
  );
};
export default Calendar;
