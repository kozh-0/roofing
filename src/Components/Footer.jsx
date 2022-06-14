import whatsapp from '../img/whatsapp.png';

export default function Footer() {
  return (
    <footer>
        <div className="footer container">
          <div className="footer_contacts">
            E-mail: <a href="mailto:2665070@mail.ru">2665070@mail.ru</a> <br/>
            Телефон: <a href="tel:89373146400">+7 (937) 314-64-00</a> <br />
          </div>

          
          <a className='whatsapp' 
            style={{margin: '15px'}}
            target="_blank" rel="noreferrer" 
            href="https://web.whatsapp.com/send?phone=%2B79373146400&text&app_absent=0">
              <img src={whatsapp} alt="whatsapp" />WhatsApp</a>
           

          <p>г.Уфа, Индустриальное ш. 44/1</p>
        </div>
    </footer>
  )
}
// https://web.whatsapp.com/send?phone=%2B79373146400&text&app_absent=0