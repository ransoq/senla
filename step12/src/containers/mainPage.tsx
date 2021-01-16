import { useRef, FC } from "react";
import {useHistory} from 'react-router-dom';


type propsType = { 
    value?: string
};

const MainPage: FC<propsType> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null);
    const history = useHistory();

    const getData = (e: React.FormEvent) =>  {
        e.preventDefault();
        const enteredText = textInputRef.current!.value;
        history.push(enteredText);
    }

    return(
        <div>
            <h1>Введите имя пользователя, чтобы получить список его репозиториев</h1>
            <div className="wrap">
                <form onSubmit={getData}>
                    <input 
                        ref={textInputRef}
                        type="text" 
                        id="inp"
                        placeholder="Введите имя пользователя"
                        defaultValue={props.value}></input>
                    <button id="btn"
                            type="submit">Получить</button>
                </form>
            </div>
        </div>
    )
}

export default MainPage;