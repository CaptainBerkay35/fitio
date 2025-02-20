import React from "react";

interface WorkoutTableProps {
  title: string;
  schedule: { day: string; muscleGroup: string }[];
}

export default function Table({ title, schedule }: WorkoutTableProps) {
  return (
    <div className="mb-8 font-roboto">
      <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Gün</th>
              <th className="border border-gray-300 px-4 py-2">Çalışılacak Bölge</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{item.day}</td>
                <td className="border border-gray-300 px-4 py-2">{item.muscleGroup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
