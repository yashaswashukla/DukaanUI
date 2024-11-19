import "./App.css";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import TableTop from "./components/TableTop";
import Table from "./components/Table";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="bg-white-50">
      <Sidebar />
      <div className="sm:pl-64 border-b border-black-150 bg-white-500">
        <Navbar />
      </div>
      <div className="p-7 m-5 m-5 sm:ml-64">
        <Overview />
        <TableTop />
        <Table />
      </div>
    </div>
  );
}

export default App;
