import "./App.css";

import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import SubHeader from "./Header/SubHeader";
import Slide from "./Main/Slide";
import Main from "./Main/Main";
//import Main from "./Main/Main";

function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Slide />
      <Main />
    </div>
  );
}

export default App;
