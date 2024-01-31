import { Route, Routes } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import useAuthRedirect from "./hooks/useAuthRedirect";

import Login from "./components/Login";
import Main from "./components/Main";
import Presentation from "./components/Presentation";
import Mobile from "./components/Mobile";

function App() {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  useAuthRedirect(user);

  return (
    <>
      <BrowserView>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/presentations/:presentationId/:slideId"
            element={<Presentation />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserView>
      <MobileView>
        <Mobile />
      </MobileView>
    </>
  );
}

export default App;
