import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { RouterData } from "./index-data"
import Logo from '../assets/header/bella-systech-hdr-logo.png'
import './style.css'

function RouterComponent() {

  return (
    <>

      <Routes>
        {RouterData.map(elem =>
          <Route key={elem.id} path={elem.path} element={
            <Suspense fallback={
              <div className="spin_wrapp">
                <div className='loader'></div>
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