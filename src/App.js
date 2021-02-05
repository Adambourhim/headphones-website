import "./App.css";

import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import SubHeader from "./Header/SubHeader";
import Slide from "./Main/Slide";
import Main from "./Main/Main";
import Slide2 from "./Main/Slide2";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Slide />
      <Main />
      <Slide2 />
      <Footer />
    </div>
  );
}

export default App;
