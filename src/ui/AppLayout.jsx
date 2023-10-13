import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto-1fr]">
      <Header />
      <Main>
        <Outlet />
      </Main>
      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
