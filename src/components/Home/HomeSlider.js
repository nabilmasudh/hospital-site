import React, { useEffect, useState } from "react";
import Styles from "./HomeSlider.module.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { doctors } from "../../data";
import { useGlobalContext } from "../../context";

const HomeSlider = () => {
  const { closeSubmenu } = useGlobalContext();
  // eslint-disable-next-line no-unused-vars
  const [people, setPeople] = useState(doctors);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className={Styles.HomeSliderSection} id="container">
      <div className={Styles.SliderSection} onMouseOver={closeSubmenu}>
        <div className={Styles.sliderCenter}>
          {people.map((person, personIndex) => {
            const { image, name, title, location, number } = person;
            //more slide image coming up
            let position = `${Styles.nextSlide}`;
            if (personIndex === index) {
              position = `${Styles.activeSlide}`;
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = `${Styles.lastSlide}`;
            }
            return (
              <article className={position} key={personIndex}>
                <div className={Styles.persomImg}>{image}</div>
                <h4>{name}</h4>
                <p>{title}</p>
                <p>{location}</p>
                <p>{number}</p>
              </article>
            );
          })}
          <button className={Styles.prev} onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className={Styles.next} onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};
export default HomeSlider;
