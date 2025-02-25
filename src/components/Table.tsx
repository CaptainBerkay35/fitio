import React from "react";

interface WorkoutTableProps {
  title: string;
  weeklyProgram: { day: string; exercises: string[] }[];
  svg: boolean;
  columns: number;
}

export default function Table({
  title,
  weeklyProgram,
  svg,
  columns,
}: WorkoutTableProps) {
  return (
    <div className="mb-8 font-montserrat">
      <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>

      {/* Büyük ekranlarda tabloyu göster, küçük ekranlarda listeyi göster */}
      <div className="lg:block hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 table-fixed">
            <thead>
              <tr className="bg-primary text-white">
                <th className="border border-r-4 border-gray-300 p-2 md:px-4 py-2 w-1/6">
                  Gün
                </th>
                <th className="border border-gray-300 px-4 py-2 w-5/6">
                  Egzersizler
                </th>
              </tr>
            </thead>
            <tbody>
              {weeklyProgram.map((item, index) => (
                <tr key={index} className="text-center">
                  <td
                    className={`border border-r-4 border-gray-300 p-2 md:p-4 text-base md:text-lg ${
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-[#00d172] bg-opacity-40"
                    }`}
                  >
                    {item.day}
                  </td>
                  <td className="border border-gray-300 p-1 md:p-2">
                    <div className={`grid grid-cols-6 gap-2`}>
                      {item.exercises.map((exercise, idx) => (
                        <div
                          key={idx}
                          className={`text-gray-700 text-center flex items-center justify-center h-24 ${
                            idx < item.exercises.length - 1 ? "border-r-2" : ""
                          }`}
                        >
                          <span>{exercise}</span>
                          {svg && idx < item.exercises.length && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              className="w-6 h-6 pr-1 flex-shrink-0"
                            >
                              <path
                                fill="00d172"
                                d="M7.5 19.5v-5l4 2.5zM13 10q-1.25 0-2.125-.875T10 7t.875-2.125T13 4h1.25v1.5H13q-.625 0-1.062.438T11.5 7t.438 1.063T13 8.5h1.25V10zm2.75 0V8.5H17q.625 0 1.063-.437T18.5 7t-.437-1.062T17 5.5h-1.25V4H17q1.25 0 2.125.875T20 7t-.875 2.125T17 10zM13 7.75v-1.5h4v1.5zM16.1 14v-2H21V3H9v9H7V3q0-.825.588-1.412T9 1h12q.825 0 1.413.588T23 3v9q0 .825-.587 1.413T21 14zM3 23q-.825 0-1.412-.587T1 21v-8q0-.825.588-1.412T3 11h12q.825 0 1.413.588T17 13v8q0 .825-.587 1.413T15 23zm0-2h12v-8H3zm6-4"
                              />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Küçük ekranlarda listeyi göster */}
      <div className="lg:hidden text-left mt-4 space-y-6">
        {weeklyProgram.map((day, index) => (
          <div key={index} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-bold text-primary">{day.day}</h2>
            <ul className="mt-2 space-y-1 text-gray-700">
              {day.exercises.map((exercise, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-primary font-semibold mr-2">•</span>
                  {exercise}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
