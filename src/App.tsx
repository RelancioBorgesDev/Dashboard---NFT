import Sidebar from "./components/Sidebar";
import Home from "./pages/Home/Home";
import GlobalStyles from "./styles/GlobalStyles";


function App() {
  return (
    <>
      <GlobalStyles />
      <Sidebar/>
      <Home/>
    </>
  );
}

export default App;
