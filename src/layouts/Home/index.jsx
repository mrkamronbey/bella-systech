import React, {useEffect} from 'react'
import HomeComponentent from '../../components/home/index';

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