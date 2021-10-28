import React, { useEffect, useState } from "react";
import Styles from "./Slider.module.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { sliderImg } from "../../data";
import { useGlobalContext } from "../../context";

const Slider = () => {
  const { closeSubmenu } = useGlobalContext();
  // eslint-disable-next-line no-unused-vars
  const [people, setPeople] = useState(sliderImg);
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
    }, 10000);
    return () => clearInterval(slider);
  }, [index]);

  return (
      <div className={Styles.SliderSection} onMouseOver={closeSubmenu}>
        <div className={Styles.sliderCenter} id="container">
          {people.map((person, personIndex) => {
            const { id, name, image } = person;
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
                <img
                  src={image}
                  alt={name}
                  className={Styles.persomImg}
                  key={id}
                />
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
  );
};
export default Slider;
