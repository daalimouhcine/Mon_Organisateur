/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";

import "./calendar.form.component.css";

const meetings = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    start: "1:00 PM",
    startDatetime: "2022-01-21T13:00",
    end: "2:30 PM",
    endDatetime: "2022-01-21T14:30",
  },
  // More meetings...
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const SalleCalendar = ({ showCalendar, closeCalendar }: any) => {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  );

  return (
    <div className={` ${showCalendar && "openCalendar"}`}>
      <div
        className="exit cursor-pointer "
        onClick={() => {
          closeCalendar();
        }}
      ></div>
      <div className="modal">
        <div className="content">
          <div className=" bg-white m-auto w-fit flex justify-center p-5">
            <div className=" px-4 sm:px-7 md:px-6">
              <div className="md:grid w-fit md:divide-gray-200">
                <div className="">
                  <div className="flex items-center">
                    <h2 className="flex-auto font-semibold text-gray-900">
                      {format(firstDayCurrentMonth, "MMMM yyyy")}
                    </h2>
                    <button
                      type="button"
                      onClick={previousMonth}
                      className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Previous month</span>
                      <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                    </button>
                    <button
                      onClick={nextMonth}
                      type="button"
                      className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Next month</span>
                      <ChevronRightIcon
                        className="w-5 h-5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
                    <div>S</div>
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>T</div>
                    <div>F</div>
                    <div>S</div>
                  </div>
                  <div className="grid grid-cols-7 mt-2 text-sm">
                    {days.map((day, dayIdx) => (
                      <div
                        key={day.toString()}
                        className={classNames(
                          dayIdx === 0 && colStartClasses[getDay(day)],
                          "py-1.5"
                        )}
                      >
                        <button
                          type="button"
                          onClick={() => setSelectedDay(day)}
                          className={classNames(
                            isEqual(reservation, selectedDay) && "bg-green-300",
                            isEqual(day, selectedDay) && "text-white",
                            !isEqual(day, selectedDay) &&
                              isToday(day) &&
                              "text-red-500",
                            !isEqual(day, selectedDay) &&
                              !isToday(day) &&
                              isSameMonth(day, firstDayCurrentMonth) &&
                              "text-gray-900",
                            !isEqual(day, selectedDay) &&
                              !isToday(day) &&
                              !isSameMonth(day, firstDayCurrentMonth) &&
                              "text-gray-400",
                            isEqual(day, selectedDay) &&
                              isToday(day) &&
                              "bg-red-500",
                            isEqual(day, selectedDay) &&
                              !isToday(day) &&
                              "bg-gray-900",
                            !isEqual(day, selectedDay) && "hover:bg-gray-200",
                            (isEqual(day, selectedDay) || isToday(day)) &&
                              "font-semibold",
                            "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                          )}
                        >
                          <time dateTime={format(day, "yyyy-MM-dd")}>
                            {format(day, "d")}
                          </time>
                        </button>
                      </div>
                    ))}
                  </div>
                  <button
                    className="bg-red-300"
                    onClick={() => {
                      console.log(selectedDay);
                    }}
                  >
                    hello
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

let reservation = new Date("Thu Jun 16 2022");
// const reservations = [
//   "Thu Jun 16 2022",
//   "Fri Jun 24 2022",
//   "Sat Jun 25 2022",
// ];

export default SalleCalendar;
