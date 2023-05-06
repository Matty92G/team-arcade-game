import { register } from "swiper/element/bundle";
import "../styles/Homepage.css";
import Gamepage from "./Gamepage";

register();

const Homepage = () => {
  // make reusable component and pass in props to make the indivdual slides for games
  // put game data (title description) in .json pull in and pass into gamepage as props
  return (
    <main className="homepage">
      <h2>Homepage Component</h2>
      <h3>log in component</h3>
      <div className="homepage__swiper">
        <swiper-container
          class="homepage__swiper-container"
          slides-per-view="1"
          navigation="true"
          //   pagination="true"
          thumbs-swiper=".homepage__thumbs"
        >
          <swiper-slide>
            <Gamepage />
          </swiper-slide>
          <swiper-slide>Game 2</swiper-slide>
          <swiper-slide>Game 3</swiper-slide>
          <swiper-slide>Game 4</swiper-slide>
        </swiper-container>
        <swiper-container
          class="homepage__thumbs"
          slides-per-view="4"
          watch-slides-progress="true"
          space-between={10}
        >
          <swiper-slide>Thumb 1</swiper-slide>
          <swiper-slide>Thumb 2</swiper-slide>
          <swiper-slide>Thumb 3</swiper-slide>
          <swiper-slide>Thumb 4</swiper-slide>
        </swiper-container>
      </div>
    </main>
  );
};

export default Homepage;
