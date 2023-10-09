import Home from "./pages/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signIn/signIn";
import SignUpEnterprise from "./pages/signUp/signUpEnterprise";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up-enterprise" element={<SignUpEnterprise />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
