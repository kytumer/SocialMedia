import './Profile.css';

const Profile = () => {
    return (
        <div className="Main__Content">
            <div className='Content'>
                <div className="Content__container">
                    <img src='https://sun9-82.userapi.com/impg/p8B_ZYm85KdCOm0319vD84i2DkYISG3-hi9HFA/LK2u08UlGAM.jpg?size=320x419&quality=96&sign=52324fc59f9bba857d1b991c090852f1&c_uniq_tag=XeBsYhTOJhL0egY7RqFGsodE5D5uSMpGwz6atG5V948&type=album' alt='picture of prof'></img>
                    <span>Name</span>
                    <span>Возраст 20</span>
                    <span>Статус</span>
                </div>
                <div className="Content__container">ТУТ ЕЩЕ НЕ ПРИДУМАЛ </div>
            </div>

            <div className='Content posts'>
                <div className="Content__container">ПОСТЫ?</div>
            </div>
        </div>
    )
}

export default Profile;