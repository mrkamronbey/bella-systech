import RouterComponent from "./router";
import { GlobalStyle } from "./style-app";
import Header from "./components/header";
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RouterComponent />
    </>
  );
}

export default App;
