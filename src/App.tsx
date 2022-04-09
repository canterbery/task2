import React from "react";
import ModalContainerForm from "./ components/ModalContainerForm";
import NoteTable from "./ components/NoteTable";
import { SummaryTable } from "./ components/SummaryTable";
import "./App.css";

function App() {
  return (
    <div>
      <ModalContainerForm />
      <NoteTable />
      <SummaryTable />
    </div>
  );
}

export default App;
