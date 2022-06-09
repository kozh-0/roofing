import Montereiy from './img/Монтерей.jpg';
import Monterosa from './img/Монтероса.jpg';
import Tramontana from './img/Трамонтана.jpg';
import Montekristo from './img/Монтекристо.jpg';

class Materials {
    constructor(material, img) {
        this.material = material;
        this.img = img;
        this.id = Math.random()
    }
}

export const data = [
    new Materials('Монтерей', Montereiy),
    new Materials('Монтерроса', Monterosa),
    new Materials('Трамонтана', Tramontana),
    new Materials('Монтекристо', Montekristo),
]