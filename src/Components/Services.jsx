import { services } from "../imgData";

export default function Services() {
    // console.log(services);
  return (
    <section>
        <div className="middle_services">
            {/* <div className="middle_services_title">
                <h5>Подберем и рассчитаем стройматериалы для вашего дома</h5>
                <span>Полная комплектация. Точный расчет. Доставка. Монтаж.</span>
            </div> */}
            
            <div className="middle_services_cards">
                {services.map((el, i) => (
                    <div key={el.id} className="middle_services_cards_item">
                        <div className="middle_services_cards_item_imgdiv"
                            style={{background: `url(${el.img}) center center/cover no-repeat`}}
                        >    
                            {/* <div><h1>{el.descr}</h1></div> */}
                        </div>
                        <p className="middle_services_cards_item_text">{i+1}. {el.body}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>  
  )
}
