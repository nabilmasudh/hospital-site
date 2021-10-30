import React from 'react'
import HomeList from '../HomeList'
import HomeSlider from '../HomeSlider'
import HomePatient from '../HomePatient'
import HomeLaboratory from '../HomeLaboratory'
import HomeInfo from '../HomeInfo'
import HomeGallery from '../HomeGallery'
function Home() {
  return (
    <>
      <HomeList />
      <HomeSlider />
      <HomePatient />
      <HomeLaboratory />
      <HomeInfo />
      <HomeGallery />
    </>
  );
}

export default Home
