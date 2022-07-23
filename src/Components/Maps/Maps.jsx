import Yandex from '../../img/Maps/Yandex.webp';
import Google from '../../img/Maps/google.webp';
import TwoGis from '../../img/Maps/2gis.svg';
import LeafletMAP from './LeafletMAP';

export default function Maps() {

    const toGoogle = 'https://www.google.com/maps/place/%D0%98%D0%BD%D0%B4%D1%83%D1%81%D1%82%D1%80%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F+%D1%88.,+44%2F1,+%D0%A3%D1%84%D0%B0,+%D0%A0%D0%B5%D1%81%D0%BF.+%D0%91%D0%B0%D1%88%D0%BA%D0%BE%D1%80%D1%82%D0%BE%D1%81%D1%82%D0%B0%D0%BD,+450027/data=!4m2!3m1!1s0x43d938010101a0f1:0x2d285192ff70d87d?utm_source=mstt_1&entry=gps';
    const to2Gis = 'https://2gis.ru/ufa/firm/70000001017209504/56.095256%2C54.801387?m=56.096965%2C54.801078%2F16.97';
    const toYandex = 'https://yandex.ru/maps/172/ufa/?ll=56.098380%2C54.800863&mode=poi&poi%5Bpoint%5D=56.094639%2C54.801176&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1092131723&z=17';

  return (
    <>
    <section className='maps container'>
        <h4>Нас можно найти в...</h4>
        <div className='maps_imgs'>
            
            <a target="_blank" rel="noreferrer" href={toYandex}>
                <img src={Yandex} alt="YandexMaps" /></a>
            
            <a target="_blank" rel="noreferrer" href={toGoogle}>
                <img src={Google} alt="GoogleMaps" /></a>

            <a target="_blank" rel="noreferrer" href={to2Gis}>
                <img src={TwoGis} alt="2Gis" /></a>
            
        </div>

    </section>
        <LeafletMAP/>
    </>
  )
}
