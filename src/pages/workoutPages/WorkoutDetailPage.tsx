import React from "react";
import { useParams } from "react-router-dom";
import { programs } from "../../data/programs.ts";
import Layout from "../../components/Layout.tsx";
import WorkoutTable from "../../components/Table.tsx";

export default function WorkoutDetailPage() {
  const { program } = useParams<{ program: string }>();

  const selectedProgram = programs.find(
    (p) => p.title.toLowerCase().replace(/ /g, "-") === program
  );

  if (!selectedProgram) {
    return <div>Program bulunamadı!</div>;
  }

  const weeklyProgram = selectedProgram.weeklyProgram || [];

  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary">
          {selectedProgram.title}
        </h1>
        <p className="mt-4 text-gray-700">{selectedProgram.description}</p>

        <div className="mt-8">
          <div>
            <WorkoutTable
              title={selectedProgram.title}
              weeklyProgram={weeklyProgram}
              svg={true}
              columns={6}
            />
          </div>
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
