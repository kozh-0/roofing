import { useState } from "react";
import { quizData } from "./quizData";
import QuizForm from "./QuizForm";

export default function Quiz() {

    const [step, setStep] = useState(0)
    const [message, setMessage] = useState([]);
    const [answer, setAnswer] = useState('');
    const [thirdAnswer, setThirdAnswer] = useState('')
    const [DATA, setDATA] = useState({})
    // console.log(message.length);
    // console.log(DATA);


    const checkNextQuiz = () => {
        if (answer.length) {
            !thirdAnswer ? setMessage([...message, answer]) : setMessage([...message, answer, thirdAnswer]);
            if (answer === "Кровля" || answer === "Фасад") setDATA(quizData.find(el => el.path === answer));
            setAnswer('');
            setThirdAnswer('');
            setStep(step+1);
        }
    }

    return (
        <section className="quiz">
            <div className="container quiz_container">
                <h3>Получить расчет</h3>
                {!(step === 3) ? <form onSubmit={(e) => e.preventDefault()}>
                    {message.length === 0 ?
                        <>
                            <h4>{quizData[0].question}</h4>
                            {quizData[0].options.map(el => (
                                <p key={el}>
                                    <label>
                                        <input className="with-gap" name="group1" type="radio"
                                        onChange={(e) => setAnswer(e.target.labels[0].innerText) }/>
                                        <span>{el}</span>
                                    </label>
                                </p>
                            ))}
                        </> 
                    : (
                        message.length === 1 ? (
                            <>
                                <h4>{DATA.question}</h4>
                                {DATA.options.map(el => (
                                    <p key={el}>
                                        <label>
                                            <input className="with-gap" name="group2" type="radio"
                                            onChange={(e) => setAnswer(e.target.labels[0].innerText) }/>
                                            <span>{el}</span>
                                        </label>
                                    </p>
                                ))}
                            </>
                        ) : (
                            <>
                                <h4>{DATA.question}</h4>
                                <p>
                                    <label>
                                        <input className="with-gap" name="group3" type="text"
                                        onChange={(e) => setAnswer(e.target.value) }/>
                                        <span>{DATA.secondOptions[0]}</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input className="with-gap" name="group3" type="text"
                                        onChange={(e) => setThirdAnswer(e.target.value) }/>
                                        <span>{DATA.secondOptions[1]}</span>
                                    </label>
                                </p>
                            </>
                        )
                    )}
                    {!(step === 3) && <button className="btn orange" onClick={checkNextQuiz}>Далее</button>}
                </form> : <QuizForm message={message}/>}
                <h2 style={{textAlign: 'right'}}>{step+1}
                    <span style={{color: 'rgba(0, 0, 0, .35)'}}>/4</span>
                </h2>
            </div>
        </section>
    )
}