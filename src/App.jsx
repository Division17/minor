import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Pages from "./Components/LandingComponents/Pages/Pages";
import AppContext from "./Components/SharedComponents/Context/AppContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppContext>
          <Pages />
        </AppContext>
      </BrowserRouter>
    </>
  );
};
export default App;
