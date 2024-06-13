import { useState } from "react";
import './App.css';
import { menu } from './constants';
import TableScreen from "./screens/TableScreen";
import ClaimScreen from "./screens/ClaimScreen";

function App() {
  const [showClaimsTable, setShowClaimsTable] = useState(true);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  return (
    <>
      <TableScreen selectedEmployee={selectedEmployee} setShowClaimsTable={setShowClaimsTable} setSelectedEmployee={setSelectedEmployee} />
    </>
  );
}

export default App;
