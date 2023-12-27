import React, { useState } from "react";

const UIComponent = ({ notificationsList }) => {
  const [activeItemID, setActiveItemID] = useState(notificationsList);

  const handleClick = (item) => {
    setActiveItemID((prevState) =>
      prevState.map((notification) =>
        notification.id === item.id ? { ...notification, id: 0 } : notification
      )
    );
  };

  const handleClickMarkAll = () => {
    setActiveItemID((cur) => cur.map((item) => ({ ...item, id: 0 })));
  };

  console.log(activeItemID);
  return (
    <div className="main flex justify-center items-center">
      <div className="p-8 rounded-2xl font-bold h-6/6 w-3/5 flex  flex-col shadow-xl bg-white">
        <div className="flex justify-between">
          <div className="flex">
            <p className="text-xl">Notifications</p>
            <div className="w-8 ml-5 h-6 text-center rounded-md bg-blue-900 font-bold text-white">
              <p>
                {
                  activeItemID.filter((notification) => notification.id !== 0)
                    .length
                }
              </p>
            </div>
          </div>
          <div>
            {activeItemID.some((item) => item.id > 0) && (
              <button
                onClick={handleClickMarkAll}
                className="text-gray-500 hover:text-blue-700 font-thin"
              >
                Mark all as read
              </button>
            )}
          </div>
        </div>
        {activeItemID.map((item) => (
          <div key={item.name}>
            <div
              onClick={() => handleClick(item)}
              className={` ${
                item.id > 0 ? "cursor-pointer" : ""
              }  items-center mt-5 h-20 w-full flex rounded-lg ${
                item.id === 0 ? " bg-white" : "bg-gray-100 "
              }
              )}`}
            >
              <div>
                <img
                  alt="Profile picture"
                  className="h-16 ml-8"
                  src={item.icon}
                />
              </div>
              <div
                className={`ml-5 h-1/2 flex  ${
                  item.name === "Kimberly Smith" ? "" : ""
                } flex-col items-start`}
              >
                <div className="flex">
                  <p className="cursor-pointer hover:text-blue-600">
                    {item.name}
                  </p>

                  <span className="ml-4 text-gray-400 tracking-wider font-thin text-sm">
                    <p>{item.action}</p>
                  </span>
                  <span className="ml-4">
                    <button className="tracking-wider text-gray-500 cursor-pointer hover:text-blue-600">
                      {item.event}
                    </button>
                  </span>

                  <div
                    className={`w-2 h-2 mt-2 ml-2 ${
                      item.name === "Kimberly Smith" || item.id === 0
                        ? "bg-white"
                        : "bg-red-400"
                    }  rounded-full`}
                  ></div>
                </div>
                <div>
                  <p className={`text-gray-400 font-thin text-sm`}>
                    {item.date}
                  </p>
                </div>
              </div>
              {item.name === "Kimberly Smith" && (
                <div className="w-auto items-start flex justify-end">
                  <img
                    alt="Girl playing chess"
                    className="cursor-pointer h-11"
                    src={item?.eventImg}
                  />
                </div>
              )}
            </div>
            {item.id === 0 && item.name === "Rizky Hasanuddin" ? (
              <div className="h-28 flex w-full ">
                <div className=" w-3/6 h-full border flex items-center px-5 font-thin text-gray-700 border-gray-300 ml-28">
                  <p>
                    Hello, thanks for setting up the Chess Club. I've been a
                    member for a few weeks now and I'm already having a lots of
                    fun and improving my game.
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UIComponent;
