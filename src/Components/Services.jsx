import { services } from "../imgData";
import Sales from '../img/Услуги/Sales.webp';

export default function Services() {
    // console.log(services);
    
  return (
    <section>
        <div className="middle_services">
            <div className="middle_services_title">
                <h5>Подберем и рассчитаем стройматериалы для вашего дома</h5>
                <span>Полная комплектация. Точный расчет. Доставка. Монтаж.</span>

            </div>
            
            <div className="middle_services_cards">
                {services.map((el, i) => (
                    <div key={el.id} className="middle_services_cards_item">
                        <div 
                            style={{background: `url(${el.img}) center center/cover no-repeat`}}
                            className="middle_services_cards_item_imgdiv">
                        </div>
                        <p className="middle_services_cards_item_text">{i+1}. {el.body}</p>
                    </div>
                ))}
            </div>

        </div>

        <div className="middle_sales container">
            <img className="pulsate" style={{borderRadius: '15%'}} src={Sales} alt="sale" />
            <div>
                <p>При покупке металлочерепицы скидка на водосточные системы 10-15%</p>
                <p>Скидка зависит от материала и его количества.</p>
                <div 
                    className="b_y_block b_y_block_call" 
                >Звоните - подберем под вас! <button className="my_btn"><a href="tel:89373146400">Позвонить</a></button></div>
            </div>
        </div>
    </section>
        
  )
}