import { metalTile } from "../imgData";


export default function Middle() {

  return (
    <section className="middle container">
        <div>
            <h3>О нас</h3>
            <div>
                <p style={{textIndent: '30px'}}>Мы комплектуем красивые крыши и фасады!
                Наша компания  занимается продажей и доставкой высококачественных кровельных/фасадных материалов, точными замерами, расчетом и профессиональным монтажом в Уфе.</p> 
                <div className="b_y_block">Для наших клиентов всегда СКИДКИ!!!</div>
            </div>
        </div>

        <div className="middle_roofing_materials">
            <h3>Материалы</h3>
            <p>В офисе продаж мы предлагаем большой выбор материалов от эконом до премиум класса, удачные варианты на примере фотографий наших готовых работ, помогаем с выбором наиболее подходящего для вас варианта.</p>

            <p>Мы работаем с ведущими производителями  и предоставляем гарантии на материалы, а так же работы, произведенные нашими мастерами.</p>
            <div className="b_y_block">
                Комплектация под ключ!

            </div>
        </div>

        <div>
            <h3>Металлочерепица</h3>
            <p className="b_y_block">Полиэстер, Viking, VALORI, PURMAN, Puretan, Norman, Cloudy, Agneta.</p>
            <div className="cards">
                {metalTile.map(el => (
                    <div className="cards_item" key={el.id}>
                        <img src={el.img} alt="img" />
                        <h5>{el.body}</h5>
                    </div>
                ))}
            </div>
        </div>

    </section>
  )
}
