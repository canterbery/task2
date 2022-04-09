import React from "react";
import NoteForm from "./ components/NoteForm";
import NoteTable from "./ components/NoteTable";
import { SummaryTable } from "./ components/SummaryTable";
import "./App.css";

function App() {
  return (
    <div>
      <NoteForm />
      <NoteTable />
      <SummaryTable />
    </div>
  );
}

export default App;
