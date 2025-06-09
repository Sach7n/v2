import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import WorkCard1 from "./WorkCard1";
import data from "./data";
export default function WorkSwiper() {
  return (
    <Swiper slidesPerView={1.1}>
      {data &&
        data.map((item, index) => (
          <SwiperSlide>
            <WorkCard1 {...item} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
