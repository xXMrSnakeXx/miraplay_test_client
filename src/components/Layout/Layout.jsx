import { Suspense } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
