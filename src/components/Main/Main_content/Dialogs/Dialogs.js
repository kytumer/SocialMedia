import './Dialogs.css';
import { NavLink } from 'react-router-dom';
import React from 'react';




const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className='Dialogs__container__users__user'>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className='Dialogs__container__messages__message'>
            {props.messageData}
        </div>
    )
}





const Dialogs = (props) => {

    let newMessageElement = React.createRef(); //Создаем Ref в TextAREA

    let addMessage = () => {                  //
        let text=newMessageElement.current.value;
        props.addMessage(text);
        props.updateNewMessage(''); // Обнуление после ввода
    }

    let dialogsElemetns = props.dialogsData.map (
        (dialog) => {
            return (
                <Dialog name={dialog.name} id={dialog.id}/>
            )
        }
    )

    let messageElements = props.messageData.map (
        (message) => {
            return (
                <Message messageData={message.message} id={message.id}/>
            )
        }
    )

    let onChangeMessage = () => {             //Обрабочтик событий в TextArea
        let text=newMessageElement.current.value;
        props.updateNewMessage(text);
    }

    return (
        <div className='Dialogs'>
            <div className='Dialogs__container'>
                <div className='Dialogs__container__users'>
                    {dialogsElemetns}
                </div>
                <div className='Dialogs__container__messages'>

                    {messageElements}

                    <textarea onChange={onChangeMessage} ref={newMessageElement} value={props.newMessegeText}/>
                    

                    <button  onClick={addMessage}  type='button'>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;




