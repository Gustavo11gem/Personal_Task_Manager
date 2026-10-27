import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoverPage from "./pages/CoverPage";
import MyTask from "./pages/MyTask";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<CoverPage />} />
          <Route path="/tasks" element={<MyTask />} />
          <Route path="/new" element={<NewTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// client -> HTTP request -> server -> database -> Task.find() -> server(json) -> GET /api/tasks -> client

// 1. The user clicks something in the **client**
// 2. The client sends an **HTTP request** to the **server** (e.g. "give ma all task").
// 3. The server ask **MongoDB** for the data
// 4. The server sends the data back as **JSON**.
// 5. The client shows it on the page.
