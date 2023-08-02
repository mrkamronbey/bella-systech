import RouterComponent from "./router";
import { GlobalStyle } from "./style-app";
import Header from "./components/header";
import { motion, useScroll, useSpring } from "framer-motion";
import "./App.css";
import Footer from "./components/footer";

function App() {
  const { scrollYProgress } = useScroll(0);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <GlobalStyle />
      <Header />
      <RouterComponent />
      <Footer/>
    </>
  );
}

export default App;
