import axios from "axios";
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from "date-fns";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import useLocalStorage from "src/common/hooks/useLocaleStorage";
import { ClientData, reservationData } from "src/models";

import "./calendar.form.component.css";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const SalleCalendar = ({ showCalendar, closeCalendar, salleId }: any) => {
  const { storedValue: user} = useLocalStorage<ClientData>("user");
  const [reservationDates, setReservationDates] = useState<Array<Date>>([]);

  const salleReservations = async () => {
    await axios
      .post(
        "http://localhost/mon_organisateur/reservations/getReservationDates",
        salleId
      )
      .then((res) => {
        setReservationDates([
          ...res.data.map((dates: any) => new Date(dates.date)),
        ]);
      });
  };

  useEffect(() => {
    salleReservations();
  }, [salleId]);

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

  const reserveSalleRequest = async (reservationData: reservationData) => {
    const response = await axios.post(
      "http://localhost/mon_organisateur/reservations/reserveSalle",
      reservationData
    );
    return response;
  };

  const MySwal = withReactContent(Swal);

  const reserveSalle = () => {
    let reservation: reservationData = {
      clientId: user.id,
      salleId: salleId,
      date: format(selectedDay, "yyy/MM/dd"),
    };
    reserveSalleRequest(reservation).then((res) => {
      closeCalendar();
      MySwal.fire(
        "La Salle a été réservée avec succès",
        "le billet est va telecharger dans votre navigateur",
        "success"
      );
    });
  };

  return (
    <div className={` ${showCalendar && "openCalendar"}`}>
      <div
        className="exit cursor-pointer "
        onClick={() => {
          closeCalendar();
        }}
      ></div>
      <div className="modal_calendar">
        <div className="content_calendar">
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
                          disabled={
                            reservationDates!.some((date: Date) =>
                              isEqual(date, day)
                            )
                              ? true
                              : false
                          }
                          onClick={() => setSelectedDay(day)}
                          className={classNames(
                            reservationDates.map(
                              (date: Date) =>
                                isEqual(date, day) && " disable_date "
                            ),
                            isEqual(day, selectedDay) && " text-white ",
                            !isEqual(day, selectedDay) &&
                              isToday(day) &&
                              " text-red-500 ",
                            !isEqual(day, selectedDay) &&
                              !isToday(day) &&
                              isSameMonth(day, firstDayCurrentMonth) &&
                              " text-gray-900 ",
                            !isEqual(day, selectedDay) &&
                              !isToday(day) &&
                              !isSameMonth(day, firstDayCurrentMonth) &&
                              " text-gray-400 ",
                            isEqual(day, selectedDay) &&
                              isToday(day) &&
                              " bg-red-500 ",
                            isEqual(day, selectedDay) &&
                              !isToday(day) &&
                              "bg-gray-900",
                            !isEqual(day, selectedDay) && " hover:bg-gray-200 ",
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
                    className=" rounded px-4 pb-2 my-3 mt-5 overflow-hidden group bg-[#BA9672] relative hover:bg-gradient-to-r hover:from-[#BA9672] hover:to-[#d4b18d] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#d4b18d] transition-all ease-out duration-300"
                    onClick={() => {
                      reserveSalle();
                    }}
                  >
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative text-2xl">Reserver</span>
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

export default SalleCalendar;
