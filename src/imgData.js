// Металлочепепица
import Montereiy from './img/Металлочерепица/monterei.webp';
import Monterosa from './img/Металлочерепица/monterosa.webp';
import Tramontana from './img/Металлочерепица/tramontana.webp';
import Montekristo from './img/Металлочерепица/montekristo.webp';
// Услуги
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
// Портфолио
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
    constructor(body, img) {
        this.body = body;
        this.img = img;
        this.id = Math.random();
    }
}
class ServiceCard extends Card {
    constructor(body, img, descr) {
        super(body, img);
        this.descr = descr;
    }
}


export const metalTile = [
    new Card('Монтерей', Montereiy),
    new Card('Монтерроса', Monterosa),
    new Card('Трамонтана', Tramontana),
    new Card('Монтекристо', Montekristo),
];
export const services = [
    new ServiceCard('Монтаж', Montazh, 'собака'),
    new ServiceCard('Водосточные системы (пластик/металл)', Vodostok, 'черепаха'),
    new ServiceCard('Гибкая черепица', Cherepica, 'горилла'),
    new ServiceCard('Мансардные окна', Mansard, 'розовый'),
    new ServiceCard('Профнастил', Profnastil, 'малина'),
    new ServiceCard('Сайдинг виниловый', SidingVinil, 'яблоко'),
    new ServiceCard('Сайдинг металлический', SidingMetall, 'дом'),
    new ServiceCard('Снегозадержатели', Snegoderzh, 'сталин'),
    new ServiceCard('Фасадные панели', FasadPanel, 'кошка'),
    new ServiceCard('Штакетник металлический', ShtaketMetall, 'телевизор'),
];
export const portfolio = [img1, img5, img3, img4, img2, img6, img7, img8, img9, img10, img11, img12];

// console.log('ШТАКЕТНИК МЕТАЛЛИЧЕСКИЙ'.toLowerCase());