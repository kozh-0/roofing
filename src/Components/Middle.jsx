
import { data } from "../data";

export default function Middle() {
    // console.log(data);

  return (
    <section className="container">
        <div className="middle_roofing_materials">
            <h3>Кровельные материалы</h3>
            <p>Для того, чтобы сохранить дом сухим и теплым, необходимо выбирать только качественные кровельные материалы. 
            Стоит отметить, что все зависит не только от цены, но и от фирмы и региона производства.</p>
            <p>Поэтому в покрытии мы используем лучшее: Полиэстер, Viking, VALORI, PURMAN, Puretan, Norman, Cloudy, Agneta.</p>
        </div>

        <div>
            <h3>Металлочерепица</h3>
            <div className="cards">
                {data.map(el => (
                    <div className="cards_item" key={el.id}>
                        <img src={el.img} alt="img" />
                        <h5>{el.material}</h5>
                    </div>
                ))}
            </div>
        </div>

        <div className="middle_services">
            <h5>Подберем и рассчитаем стройматериалы для вашего дома</h5>
            <ol>
                <li>Мансардные окна</li>
                <li>Сайдинг металлический</li>
                <li>Профнастил</li>
                <li>Гибкая черепица (мягкая кровля)</li>
                <li>Виниловый сайдинг</li>
                <li>Фасадные панели</li>
                <li>Водосточные системы</li>
                <li>Снегодержатели</li>
                <li>Монтаж</li>
            </ol>
        </div>

        <div>
            <h3>Акция</h3>
            <p>При покупке металлочерепицы скидка на водосточные системы 10-15%</p>
            <p>Скидка зависит от материала и его количества</p>
        </div>
        
    </section>
  )
}
