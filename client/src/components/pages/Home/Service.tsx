import "./home.scss"
import text from "./text.json"
const Service = () => {
    return (
        <section id="Service">
            <div className="container">
                <div className="center">
                    <span>YÜKSƏK SƏVİYƏLLİ <b>XİDMƏT.</b></span>
                </div>
                <div className="row">
                    <div className="left">
                        <img src={text.bredimage} alt={text.bredimage} />
                    </div>
                    <div className="right">
                        <p className="p">İnsanlar bizim tam buğdalı çörəyimizi sevir, çünki, kəpəyi, rüşeymi yerində və təbii yolla havalandırılmış undan, balatı ilə hazırlanmış təbii çörəkdir. Yalnız onu yesəniz kökəlməyəcəksiniz istər səhər yeməyinə, istərsə də şam yeməyi olsun. Çünki, biz onu elə dizayn etmişik ki, onu çox yemək olmasın. Əhvalınıza uyğun giləmeyvələrlə və ya sadə əldə edə bilərsiniz.</p>
                        <br />
                        <p>Bəzi insanlar unudulmaz romanları yazmağı bacarırlar. Digərləri oxumağı bacarır və onların səsi və ötürdükləri emosiyalar adamın ruhunu titrədərək, tüklərini biz-biz edir. Bəziləri, heyrətamiz portretlər çəkir, bəziləri aktyorluq edir, baxanda mat-məətəl qalırsan. Elələri var ki, musiqi bəstələyir, digərləri mükəmməl heykəllər yaradırlar və ya fotolar çəkirlər hansılar ki,  insanı heyran qoyur və dalırsan düşüncələrə... Belə insanlara yaradıcı insanlar deyirlər. Məhz belə insanlar üçün biz təbii çörək bişiririk.  Bunu etməklə biz, o insanlara dünyanı yaşamaq üçün daha mükəmməl yer etdiklərinə görə öz minnətdarlığımızı ifadə edirik.</p>
                        <img src={text.alex} alt={text.alex} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service