import React from "react";
import ModalContainerForm from "./pages/ModalContainerForm";
import NoteTable from "./pages/NoteTable";
import { SummaryTable } from "./pages/SummaryTable";
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
