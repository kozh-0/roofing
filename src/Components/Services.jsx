import { services } from "../imgData";
import { metalTile } from "../imgData";

export default function Services() {
    const {montecristo, monterei, monterrosa, tramontana} = metalTile;
    // console.log(monterei);
  return (
    <section>
        <div className="middle_services">
            <div className="container">
                <h3>Металлочерепица</h3>
                <p className="b_y_block">Полиэстер, Viking, VALORI, PURMAN, Puretan, Norman, Cloudy, Agneta.</p>
                <div className="cards">
                    <div className="cards_italy">
                        <h5>Монтерей <span>(360 руб.м.кв.)</span></h5>
                        <div className="cards_italy_inner">
                            {monterei.map((el, i) => (
                                <div 
                                style={{background: `url(${el}) center center/cover no-repeat`}} 
                                key={i}></div>
                            ))}
                        </div>
                    </div>  
                    <div className="cards_italy">
                        <h5>Трамонтана</h5>
                        <div className="cards_italy_inner">
                            {tramontana.map((el, i) => (
                                <div 
                                style={{background: `url(${el}) center center/cover no-repeat`}} 
                                key={i}></div>
                            ))}
                        </div>
                    </div>  
                    <div className="cards_italy">
                        <h5>Монтерроса</h5>
                        <div className="cards_italy_inner">
                            {monterrosa.map((el, i) => (
                                <div 
                                style={{background: `url(${el}) center center/cover no-repeat`}} 
                                key={i}></div>
                            ))}
                        </div>
                    </div>  
                    <div className="cards_italy">
                        <h5>Монтекристо</h5>
                        <div className="cards_italy_inner">
                            {montecristo.map((el, i) => (
                                <div 
                                style={{background: `url(${el}) center center/cover no-repeat`}} 
                                key={i}></div>
                            ))}
                        </div>
                    </div>  
                </div>
            </div>


            <h3 className="container" style={{margin: '20px auto', padding: '0 0 7px 7px'}}>Услуги</h3>
            <div className="middle_services_cards">
                {services.map((el, i) => (
                    <div key={el.id} className="middle_services_cards_item">
                        <div className="middle_services_cards_item_imgdiv"
                            style={{background: `url(${el.img}) center center/cover no-repeat`}}
                        >    
                            <div><h5>{el.descr}</h5></div>
                        </div>
                        <p className="middle_services_cards_item_text">{i+1}. {el.body}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>  
  )
}
