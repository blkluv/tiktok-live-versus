import './App.css'
import {useState} from "react";
import rose from './assets/ttrose.png'

function App() {
    const [counter1, setCounter1] = useState<number>(0);
    const [counter2, setCounter2] = useState<number>(0);

    return (
        <>
            <div className={'display-background-container'}>
                <div className={'title-line'}>Würdest du eher ?</div>
                <div className={'background-red'}>
                    <div className={'question'}>deine Google-Suchhistorie allen zeigen</div>
                    <div className={'counter'}>{counter1}</div>
                </div>
                <div className={'or-line'}>
                    <div><img src={rose} alt={'rose'} className={'gifts'}/></div>
                    <div>ODER</div>
                    <div></div>
                </div>
                <div className={'background-blue'}>
                    <div className={'question'}>deine Chatverläufe</div>
                    <div className={'counter'}>{counter2}</div>
                </div>
            </div>
        </>
    )
}

export default App
