// Металлочепепица
import Montereiy from './img/Металлочерепица/Монтерей.jpg';
import Monterosa from './img/Металлочерепица/Монтероса.jpg';
import Tramontana from './img/Металлочерепица/Трамонтана.jpg';
import Montekristo from './img/Металлочерепица/Монтекристо.jpg';

// Услуги
import Montazh1 from './img/Услуги/Монтаж1.jpg';
import Montazh2 from './img/Услуги/Монтаж2.jpg';
import Vodostok from './img/Услуги/Водосток.jpg';
import Cherepica from './img/Услуги/Черепица.jpg';
import Mansard from './img/Услуги/МансардныеОкна.jpg';
import Profnastil from './img/Услуги/Профнастил.jpg';
import SidingVinil from './img/Услуги/СайдингВиниловый.jpg';
import SidingMetall from './img/Услуги/СайдингМеталл.jpg';
import Snegoderzh from './img/Услуги/Снегодержатели.jpg';
import FasadPanel from './img/Услуги/ФасадныеПанели.jpg';
import ShtaketMetall from './img/Услуги/ШтакетникМеталл.jpg';

// Портфолио
import img1 from './img/Портфолио/img1.JPG';
import img2 from './img/Портфолио/img2.JPG';
import img3 from './img/Портфолио/img3.JPG';
import img4 from './img/Портфолио/img4.JPG';
import img5 from './img/Портфолио/img5.JPG';
import img6 from './img/Портфолио/img6.JPG';
import img7 from './img/Портфолио/img7.JPG';
import img8 from './img/Портфолио/img8.JPG';
import img9 from './img/Портфолио/img9.JPG';
import img10 from './img/Портфолио/img10.JPG';
import img11 from './img/Портфолио/img11.JPG';
import img12 from './img/Портфолио/img12.JPG';



class Card {
    constructor(body, img) {
        this.body = body;
        this.img = img;
        this.id = Math.random()
    }
}

export const metalTile = [
    new Card('Монтерей', Montereiy),
    new Card('Монтерроса', Monterosa),
    new Card('Трамонтана', Tramontana),
    new Card('Монтекристо', Montekristo),
]

export const services = [
    new Card('Монтаж кровли фасада снегозадержателей водосточных систем', Montazh1),
    new Card('Монтаж кровли фасада снегозадержателей водосточных систем', Montazh2),
    new Card('Водосточные системы пластик/металл', Vodostok),
    new Card('Гибкая черепица', Cherepica),
    new Card('Мансардные окна', Mansard),
    new Card('Профнастил', Profnastil),
    new Card('Сайдинг виниловый', SidingVinil),
    new Card('Сайдинг металлический', SidingMetall),
    new Card('Снегозадержатели', Snegoderzh),
    new Card('Фасадные панели', FasadPanel),
    new Card('Штакетник металлический', ShtaketMetall),
]


export const portfolio = [img1, img5, img3, img4, img2, img6, img7, img8, img9, img10, img11, img12];

// console.log('ШТАКЕТНИК МЕТАЛЛИЧЕСКИЙ'.toLowerCase());