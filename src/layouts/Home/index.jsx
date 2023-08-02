import React, {useEffect} from 'react'
import HomeComponentent from '../../components/home';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HomeComponentent />
    </>
  )
}

export default Home