import img from '../img/logo_new.png';


export default function Header() {
  return (
    <header>
        <div className="header container">
            <img src={img} alt="logo" />
            <a href="tel:89373146400">+7 (937) 314-64-00</a>
            <ul>
                <li>O нас</li>
                <li>Контакты</li>
            </ul>
        </div>
    </header>
    )
}

   