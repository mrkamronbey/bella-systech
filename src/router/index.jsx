import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { RouterData } from "./index-data"
import Logo from '../assets/header/bella-systech-hdr-logo.png'
import './style.css'
import ImageAnimation from "../common/image"

function RouterComponent() {

  return (
    <>

      <Routes>
        {RouterData.map(elem =>
          <Route key={elem.id} path={elem.path} element={
            <Suspense fallback={
              <div className="spin_wrapp">
                <img src={Logo} alt="" />
              </div>
            }>
              {elem.component}
            </Suspense>
          } />
        )}
      </Routes>
    </>
  )
}

export default RouterComponent