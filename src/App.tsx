import React from "react";
import ModalContainerForm from "./pages/ModalContainerForm";
import { SummaryTable } from "./pages/SummaryTable";
import "./App.css";
import { TableNoteList } from "./pages/TableNoteList";
import { TailwindModal } from "./pages/TailwindModal";

function App() {
  return (
    <div>
      <TailwindModal />
      <TableNoteList />
      <SummaryTable />
    </div>
  );
}

export default App;
