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


// console.log('ШТАКЕТНИК МЕТАЛЛИЧЕСКИЙ'.toLowerCase());