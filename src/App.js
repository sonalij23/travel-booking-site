import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Tours from "./Components/Tours";
import Login from "./Components/Login";
import Register from "./Components/Register";
import UserAuthContextProvider from "./context/UserAuthContext";
import BookingPage from "./Components/BookingPage";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import ThankYouPage from "./Components/ThankYouPage";

function App() {
  return (
    <div className="App">
      <Router>
        <UserAuthContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/book" element={<BookingPage />} />
            <Route
              path="/booked"
              element={
                <ProtectedRoutes>
                  <ThankYouPage />
                </ProtectedRoutes>
              }
            />
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
