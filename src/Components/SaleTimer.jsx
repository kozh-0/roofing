import { useEffect } from 'react';
import { useState } from 'react';
import Sales from '../img/Услуги/Sales.webp';
import { setCurrentTimer } from './Help/TimerHelper';

const defaultRemainingTime = {
    d: '00',
    h: '00',
    m: '00',
    s: '00',
}

export default function SaleTimer() {

    const [{d, h, m, s}, setRemainingTime] = useState(defaultRemainingTime);
    const [date, setDate] = useState(new Date("8/13/2022 20:00:00").valueOf());
    // new Date("2022-8-20").valueOf()
    console.log((date - new Date().valueOf()) <= 0);
    function updateTimer(countdown) {
        setRemainingTime(setCurrentTimer(countdown));
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateTimer(date)
        }, 1000);
        
        (function() {
            if ((date - new Date().valueOf()) <= 0) {
                setDate(new Date().valueOf() + 432000000);
            }
        })()
        
        return () => clearInterval(intervalId);
    }, [date])

    return (
        <section className='sales'>
            <h3 className='container'>Акции</h3>
            <div className="sales_offer container">
                <img style={{borderRadius: '15%'}} src={Sales} alt="sale" />
                <ul className="collection">
                    <li className="collection-item">При покупке металлочерепицы скидка на водосточные системы 10-15%</li>
                    <li className="collection-item">Скидка на снегозадержатели 10%</li>
                    <li className="collection-item">Скидка на доборные элементы 7%</li>
                </ul>
            </div>
                
            <h4>Акция заканчивается через...</h4>
            <div className='sales_timer container'>
                <div className='sales_timer_item'>
                    <span>{d}</span>
                    <p>Дней</p>
                </div>
                <div className='sales_timer_item'>
                    <span>{h}</span> 
                    <p>Часов</p> 
                </div>
                <div className='sales_timer_item'>
                    <span>{m}</span> 
                    <p>Минут</p> 
                </div>
                <div className='sales_timer_item'>
                    <span>{s}</span> 
                    <p>Секунд</p> 
                </div>
            </div>

                <div className="b_y_block b_y_block_call">
                    <div>
                        Скидка зависит от материала и его количества. <br />
                        Звоните - подберем под вас! 
                    </div>
                    <button className="my_btn pulsate"><a href="tel:89373146400">Позвонить</a></button>
                </div>
        </section>
     )
}