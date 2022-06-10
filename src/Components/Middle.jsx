import { metalTile } from "../imgData";


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
