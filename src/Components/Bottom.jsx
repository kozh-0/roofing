import { services } from "../imgData";


export default function Bottom() {
    console.log(services);
  return (
    <section>
        <div className="middle_services">
            <h5>Подберем и рассчитаем стройматериалы для вашего дома</h5>
            
            <div className="middle_services_cards">
                {services.map((el, i) => (
                    <div key={el.id} className="middle_services_cards_item">
                        <div 
                            style={{background: `url(${el.img}) center center/cover no-repeat`}}
                            className="middle_services_cards_item_imgdiv">
                        </div>
                        <p>{i+1}) {el.body}</p>
                    </div>
                ))}
            </div>

        </div>

        <div className="container">
            <h3>Акция</h3>
            <p>При покупке металлочерепицы скидка на водосточные системы 10-15%</p>
            <p>Скидка зависит от материала и его количества</p>
        </div>
    </section>
        
  )
}
