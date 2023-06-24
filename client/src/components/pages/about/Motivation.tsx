import text from "./text.json"
import "./index.scss"
const Motivation = () => {
    return (
        <section>
            <div id="Motivation">
                <div className="all">
                    <img src={text.img} alt={text.img} />
                    <div className="text">
                        <p><b>Bizi motivasiya</b> edən güc maddiyyat deyil, peşəyə olan sevginin gücüdür.</p>
                        <span>Sizi və əzizlərinizi sevindirmək üçün ən yaxşı <br /> şirniyyatçıları və aşpazları cəlb etdik.</span>
                    </div>

                </div>
            </div>


        </section>
    )
}

export default Motivation