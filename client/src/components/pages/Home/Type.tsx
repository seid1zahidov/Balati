import './home.scss'
import text from "./text.json"
const Type = () => {
    return (
        <section id='Type'>
            <div className="container">
                <div className="center">
                    <p>{text['type-center']}</p>
                    <div className="circle"><img src={text.cricle} alt={text.cricle} /></div>
                </div>
                <div className="row">
                    <div className="all">
                        <div className="text">
                            <p> <img src={text.type} alt="" /> uğdanın 30 000-dən çox növü var və yalnız az miqdarı seleksiya olunmamış növlərdir. Biz tamamilə orqanik şəraitdə 7 növünü becərməyə başlamışıq. Təbii buğda torpağı gücdən salır və olduqca az məhsuldarlığı var deyə 99.5% ölkələrdə becərilmir. </p>
                        </div>
                        <div className="bred">
                            <img src={text.bred} alt={text.bred} />
                        </div>
                        <div className="piza">
                            <img src={text.pizza} alt={text.pizza} />
                        </div>
                        <div className="organic">
                        <p>
                    Biz nadir buğdaları tam orqanik şəraitdə becərməyə başlamışıq. Bu maddi cəhətdən faydasız bir işdir, lakin, bizi motivasiya edən güc maddiyyat deyil, peşəyə olan sevginin gücüdür. Bir çoxları “qədim buğda”, “dədə baba buğdası” adı ilə adi buğdanı satırlar. Səbəblər çoxdur və növbəti postlarda biz bunları incələyəcəyik. Bizimlə qalın, sağlam qidalanın.

                        </p>
                    </div>
                    </div>
                    
                </div>
            </div>
        </section >
    )
}

export default Type