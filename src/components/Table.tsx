import React, { useState } from "react";
import VideoModal from "./VideoModal.tsx"; // Modal bileşenini import ettik

interface WorkoutTableProps {
  title: string;
  weeklyProgram: {
    day: string;
    exercises: { name: string; setreps: string; videoUrl: string }[];
  }[];
  svg: boolean;
  columns: number;
}

export default function Table({
  title,
  weeklyProgram,
  svg,
  columns,
}: WorkoutTableProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [exerciseTitle, setExerciseTitle] = useState("");

  const handleOpenModal = (url: string, title: string) => {
    setVideoUrl(url);
    setExerciseTitle(title);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
  };

  return (
    <div className="mb-8 font-montserrat">
      <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>

      <VideoModal
        isOpen={isModalOpen}
        videoUrl={videoUrl}
        exerciseTitle={exerciseTitle} 
        onClose={handleCloseModal}
      />

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
    <tr
      key={index}
      className={`text-center ${
        index % 2 === 0 ? "bg-white" : "bg-gray-100"
      }`} // Tüm satıra arka plan rengi ekledik
    >
      <td className="border border-r-4 border-gray-300 p-2 md:p-4 text-base md:text-lg">
        {item.day}
      </td>
      <td className="border border-gray-300 p-1 md:p-2">
        <div className="grid grid-cols-6 gap-2">
          {item.exercises.map((exercise, idx) => (
            <div
              key={idx}
              className="text-gray-700 text-center flex items-center justify-center h-24 border-r-2 last:border-r-0"
            >
              <div className="flex flex-col text-center">
                <span className="font-medium">{exercise.name}</span>
                <span>{exercise.setreps}</span>
              </div>
              {svg && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 pr-1 flex-shrink-0 cursor-pointer hover:scale-110 transition"
                  onClick={() => handleOpenModal(exercise.videoUrl, exercise.name)}
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
                <li key={idx} className="flex items-start justify-between">
                  <div>
                    <span className="text-primary font-semibold mr-2">•</span>
                    <span className="font-semibold">
                      {exercise.name}
                    </span> - {exercise.setreps}
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 pr-1 flex-shrink-0 cursor-pointer hover:scale-110 transition "
                      onClick={() =>
                        handleOpenModal(exercise.videoUrl, exercise.name)
                      } 
                    >
                      <path
                        fill="00d172"
                        d="M7.5 19.5v-5l4 2.5zM13 10q-1.25 0-2.125-.875T10 7t.875-2.125T13 4h1.25v1.5H13q-.625 0-1.062.438T11.5 7t.438 1.063T13 8.5h1.25V10zm2.75 0V8.5H17q.625 0 1.063-.437T18.5 7t-.437-1.062T17 5.5h-1.25V4H17q1.25 0 2.125.875T20 7t-.875 2.125T17 10zM13 7.75v-1.5h4v1.5zM16.1 14v-2H21V3H9v9H7V3q0-.825.588-1.412T9 1h12q.825 0 1.413.588T23 3v9q0 .825-.587 1.413T21 14zM3 23q-.825 0-1.412-.587T1 21v-8q0-.825.588-1.412T3 11h12q.825 0 1.413.588T17 13v8q0 .825-.587 1.413T15 23zm0-2h12v-8H3zm6-4"
                      />
                    </svg>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
