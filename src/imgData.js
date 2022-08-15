// Металлочепепица =============================================================
import Montereiy from './img/Металлочерепица/monterei/monterei.webp';
import Montereiy1 from './img/Металлочерепица/monterei/monterei1.webp';
import Montereiy2 from './img/Металлочерепица/monterei/monterei2.webp';

import Monterrosa from './img/Металлочерепица/monterrosa/monterrosa.webp';
import Monterrosa1 from './img/Металлочерепица/monterrosa/monterrosa1.webp';
import Monterrosa2 from './img/Металлочерепица/monterrosa/monterrosa2.webp';

import Tramontana from './img/Металлочерепица/tramontana/tramontana.webp';
import Tramontana1 from './img/Металлочерепица/tramontana/tramontana1.webp';
import Tramontana2 from './img/Металлочерепица/tramontana/tramontana2.webp';

import Montecristo from './img/Металлочерепица/montecristo/montecristo.webp';
import Montecristo1 from './img/Металлочерепица/montecristo/montecristo1.webp';
import Montecristo2 from './img/Металлочерепица/montecristo/montecristo2.webp';
// Услуги =============================================================
import Montazh from './img/Услуги/montazh.webp';
import Vodostok from './img/Услуги/vodostok.webp';
import Cherepica from './img/Услуги/cherepica.webp';
import Mansard from './img/Услуги/mansardnieokna.webp';
import Profnastil from './img/Услуги/profnastil.webp';
import SidingVinil from './img/Услуги/sidingvinil.webp';
import SidingMetall from './img/Услуги/sidingmetall.webp';
import Snegoderzh from './img/Услуги/snegoderzhateli.webp';
import FasadPanel from './img/Услуги/fasadniepaneli.webp';
import ShtaketMetall from './img/Услуги/shtaketnikmetall.webp';
// Портфолио =============================================================
import img1 from './img/Портфолио/img1.webp';
import img2 from './img/Портфолио/img2.webp';
import img3 from './img/Портфолио/img3.webp';
import img4 from './img/Портфолио/img4.webp';
import img5 from './img/Портфолио/img5.webp';
import img6 from './img/Портфолио/img6.webp';
import img7 from './img/Портфолио/img7.webp';
import img8 from './img/Портфолио/img8.webp';
import img9 from './img/Портфолио/img9.webp';
import img10 from './img/Портфолио/img10.webp';
import img11 from './img/Портфолио/img11.webp';
import img12 from './img/Портфолио/img12.webp';



class Card {
    constructor(body, img, price) {
        this.body = body;
        this.img = img;
        this.price = price;
        this.id = Math.random();
    }
}
class ServiceCard extends Card {
    constructor(body, img, descr) {
        super(body, img);
        this.descr = descr;
    }
}


// new Card('Монтерей (360 руб.м.кв.)', Montereiy, '360 руб.м.кв.'),
// new Card('Монтерроса', Monterrosa),
// new Card('Трамонтана', Tramontana),
// new Card('Монтекристо', Montekristo),
export const metalTile = {
    monterei: [Montereiy, Montereiy1, Montereiy2],
    monterrosa: [Monterrosa, Monterrosa1, Monterrosa2],
    tramontana: [Tramontana, Tramontana1, Tramontana2],
    montecristo: [Montecristo, Montecristo1, Montecristo2]
};

export const services = [
    new ServiceCard('Монтаж', Montazh, 'Работы по устройству кровель зданий и сооружений из кровельных материалов. Выполняется на этапе строительства здания или его капитального ремонта.'),
    new ServiceCard('Водосточные системы', Vodostok, 'Предназначена для защиты кровли, фасада и фундамента здания от негативного воздействия атмосферных осадков.'),
    new ServiceCard('Гибкая черепица', Cherepica, 'Эти материалы имеют практически нулевое водопоглощение, что исключает коррозию и гниение. Можно применять для кровель любой сложности.'),
    new ServiceCard('Мансардные окна', Mansard, 'Располагаются в скате кровли и пропускают больше света, а дневное освещение полезно как для здоровья, так и для зрения.'),
    new ServiceCard('Профнастил', Profnastil, 'Облицовочный стеновой или кровельный материал, используется при возведении наружных ограждений, стен и крыш.'),
    new ServiceCard('Сайдинг виниловый', SidingVinil, 'Материал для облицовки фасада, имитирующий деревянную обшивку или натуральный камень. Имеет матовую поверхность, не требующую дополнительной покраски.'),
    new ServiceCard('Сайдинг металлический', SidingMetall, 'Металлосайдинг схож с виниловым сайдингом, но устойчивее к огню. Материал остается барьером между зданием и очагом возгорания.'),
    new ServiceCard('Снегозадержатели', Snegoderzh, 'Предотвращают сход больших масс снега и льда с кровель. Удерживают снежный покров, обеспечивая теплоизоляции.'),
    new ServiceCard('Фасадные панели', FasadPanel, 'Преимущества фасадных панелей заключаются в их доступности, отличных эксплуатационных и технических свойствах.'),
    new ServiceCard('Штакетник металлический', ShtaketMetall, 'Материал для возведения ограждения рядом с жилыми и промышленными объектами.'),
];
export const portfolio = [img1, img5, img3, img4, img2, img6, img7, img8, img9, img10, img11, img12];

// console.log('ШТАКЕТНИК МЕТАЛЛИЧЕСКИЙ'.toLowerCase());