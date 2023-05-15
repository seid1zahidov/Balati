import "./home.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import data from "../../../data/data.json"
import "swiper/css"
import CartSlide from "./CartSlide"
import { Root2 } from "../../../types"

const Cart = () => {
    return (
        <section id="Card">
            <div className="container">
                <div className="row">
                    <Swiper
                        onSlideChange={() => console.log('slide change')}
                        spaceBetween={50}
                        slidesPerView={3}
                        onSwiper={(swiper) => console.log(swiper)}>
                        {data.cardData.card.map((data:Root2 , index) => {
                            return (
                                <SwiperSlide key={index} className="">
                                    <CartSlide data={data} />
                                </SwiperSlide>
                            )
                        })

                        }
                    </Swiper>

                </div>
            </div>
        </section>
    )
}

export default Cart