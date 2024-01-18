import styles from "./ServiceCard.module.css";
import { FaDatabase, FaFileCode, FaGreaterThanEqual, FaLayerGroup } from "react-icons/fa";
import { AiFillContainer } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";


const ServiceCard = () => {
    const cardData = [
        {
          logo: <FaLayerGroup />,
          header: "UI Design",
          data: [
            "Landing Pages",
            "User Flow",
            "Wireframing",
            "Prototyping",
            "Mobile App",
          ],
          link:"/about"
        },
        {
          logo: <FaFileCode />,
          header: "Development",
          data: [
            "HTML/CSS",
            "Javascript",
            "React JS",
            "Next JS",
            "Node JS",
            
          ],
          link:"/service"
        },
        {
          logo: <AiFillContainer />,
          header: "CMS",
          data: [
            "Wordpress",
            "Theme Customization",
            "Plugin Customization",
            "Full Web Development",
            "Any Design clone",
          ],
          link:"/about"
        },
        {
          logo: <FaLayerGroup />,
          header: "UI Design",
          data: [
            "Landing Pages",
            "User Flow",
            "Wireframing",
            "Prototyping",
            "Mobile App",
          ],
          link:"/about"
        },
        {
          logo: <FaDatabase />,
          header: "Database",
          data: [
            "Firebase",
            "MongoDB",
            "MySQL",
            "Prototyping",
            "Mobile App",
          ],
        },
      ];
    
      return (
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          isLocked={true}
          //   onAutoplayTimeLeft={onAutoplayTimeLeft}
          breakpoints= {{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            // when window width is >= 640px
            740: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            750:{
                slidesPerView: 3,
                spaceBetween: 0,
            }
          }}
    
          className="container"
        >
          {cardData.map((value, i) => {
            return (
              <SwiperSlide key={i.toString()}>
                <Link to={value.link}><div className={styles.mainCard}>
                  <div className={styles.logo}>{value.logo}</div>
                  <h2 className={styles.h2}> {value.header}</h2>
                  <table>
                    {value.data.map((valu, index) => {
                      return (
                        <tr key={index.toString}>
                          <td>
                            <FaGreaterThanEqual color="white" size={"15px"} />
                          </td>
                          <td className={styles.td}>{valu}</td>
                        </tr>
                      );
                    })}
                  </table>
                </div></Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      );
};

export default ServiceCard;
