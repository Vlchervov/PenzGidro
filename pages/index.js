import { AboutUs } from "../components/AboutUs";
import Header from "../components/Header";
import { Navbar } from "../components/Navbar";
import { SideBar } from "../components/SideBar";
import { Transport } from "../components/Transport";
import GlobalStyle from "../styles/globalStyle";

const Index = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <SideBar />
      <Header />
      {/* <AboutUs />
      <Transport /> */}
    </>
  );
};

export default Index;
