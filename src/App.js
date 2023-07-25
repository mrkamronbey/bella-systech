import RouterComponent from "./router";
import { GlobalStyle } from "./style-app";
import Header from "./components/header";
import { motion, useScroll, useSpring } from "framer-motion";
import ParticleRing from "./components/particlering";
import "./App.css";

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
      {/* <ParticleRing /> */}
      <RouterComponent />
    </>
  );
}

export default App;
