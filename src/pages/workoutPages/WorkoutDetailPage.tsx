// WorkoutDetailPage.tsx

import React from "react";
import { useParams } from "react-router-dom";
import { programs } from "../../data/programs.ts";
import Layout from "../../components/Layout.tsx";
import Button from "../../components/Button.tsx";
import WorkoutTable from "../../components/Table.tsx";
import * as XLSX from "xlsx";

export default function WorkoutDetailPage() {
  const { program } = useParams<{ program: string }>();

  const selectedProgram = programs.find(
    (p) => p.title.toLowerCase().replace(/ /g, "-") === program
  );

  if (!selectedProgram) {
    return <div>Program bulunamadı!</div>;
  }

  const weeklyProgram = selectedProgram.weeklyProgram || [];

  const handleDownloadExcel = () => {
    const headers = [
      "Gün",
      ...Array.from({ length: 6 }, (_, i) => `Egzersiz ${i + 1}`),
    ];

    const wsData = [
      headers,
      ...weeklyProgram.map((day) => [
        day.day,
        ...day.exercises,
        ...Array(6 - day.exercises.length).fill(""),
      ]),
    ];

    const ws = XLSX.utils.aoa_to_sheet(wsData);

    ws["!cols"] = [{ wch: 35 }, ...Array(6).fill({ wch: 25 })];
    ws["!rows"] = Array(wsData.length).fill({ hpt: 25 });

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, selectedProgram.title);
    XLSX.writeFile(wb, `${selectedProgram.title}.xlsx`);
  };

  return (
    <Layout>
      <div className="text-center">
        <div>
          <h1 className="text-4xl font-bold text-primary">
            {selectedProgram.title}
          </h1>
          <p className="mt-4 text-gray-700">{selectedProgram.description}</p>
        </div>

        <div className="mt-8">
          <WorkoutTable
            title={selectedProgram.title}
            weeklyProgram={weeklyProgram}
            svg={true}
            columns={6}
          />
        </div>
        <div className="flex items-center justify-end">
          <Button
            onClick={handleDownloadExcel}
            text="Excell Olarak İndir"
            className="px-6 py-3 flex items-center gap-2 bg-primary text-primary font-semibold rounded-lg shadow transition group"
          >
            {/* SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-green-500 group-hover:text-white"
            >
              <path d="M7 17h10v-2H7zm5-3l4-4l-1.4-1.4l-1.6 1.55V6h-2v4.15L9.4 8.6L8 10zm0 8q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8" />
            </svg>
          </Button>
        </div>
      </div>
      <div className="mt-12 text-center">
        <a href="#" className="text-primary underline">
          Başa Dön
        </a>
      </div>
    </Layout>
  );
}
