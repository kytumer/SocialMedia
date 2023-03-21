import './Dialogs.css';
import { NavLink } from 'react-router-dom';


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
            {props.message}
        </div>
    )

}


const Dialogs = () => {

    let dialogsData = [
        { name: 'Кирилл', id: 1 },
        { name: 'Арина', id: 2 },
        { name: 'Алексей', id: 3 },
        { name: 'Денис', id: 4 },
        { name: 'Ренат', id: 5 },
    ]

    let dialogsElemetns = dialogsData.map(
        (dialog) => {
            return (
                <Dialog name={dialog.name} id={dialog.id} />
            )
        })

    return (
        <div className='Dialogs'>
            <div className='Dialogs__container'>
                <div className='Dialogs__container__users'>
                    {dialogsElemetns}
                </div>
                <div className='Dialogs__container__messages'>
                    <Message message='Привет, как дела?' />
                    <Message message='Что делаешь?' />
                    <Message message='Почему игноришь?' />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;