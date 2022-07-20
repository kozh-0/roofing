import emailjs from 'emailjs-com';
import { useState } from "react";
import Preloader from './Help/Preloader';

export default function Form() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const [isSent, setIsSent] = useState(false);
    const [preloader, setPreloader] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();

        setPreloader(true);
    
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, API_KEY)
          .then((result) => {
              console.log(result);
          }, (error) => {
              console.log(error);
          })
          .then(() => setIsSent(true))

      };


    return (
        <div className="container" style={{height: '100%'}}>
            { !isSent ? <form className="forma" onSubmit={sendEmail}>
                <h3>Заказать обратный звонок</h3>
                <div className="forma_fields">
                    <div className='flex_center'>
                        <i className="material-icons prefix" style={{marginRight: '10px'}}>account_circle</i>
                        <input 
                            required 
                            placeholder="Имя" 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name='name'
                        />
                    </div>
                    <div className='flex_center'>
                        <i className="material-icons prefix" style={{marginRight: '10px'}}>phone</i>
                        <input 
                            required 
                            placeholder="Телефон" 
                            type="tel" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            name='phone'
                        />

                    </div>
                    <div className='flex_center'>
                        <i className="material-icons prefix" style={{marginRight: '10px'}}>email</i>
                        <input 
                            placeholder="Email" 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name='email'
                        />

                    </div>
                </div>
                    <textarea 
                        placeholder="Сообщение"
                        type="text" 
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        name='message'
                    ></textarea>
                    { !preloader ? <button className="my_btn" style={{ display: 'block', marginLeft: 'auto' }}>Отправить</button> : <Preloader/> }
            </form> : <h2 style={{textAlign: 'center', padding: '70px 0'}}><span style={{color: 'green'}}>&#10004;</span>С вами скоро свяжутся!</h2>}
        </div>
    )
}
