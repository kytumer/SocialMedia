import './Header.css'

const Header = () => {
    return (
        <header >
            <div className="header__container _container">
                <div className="header__container__logo">
                    <a href='#'>
                        <img src='https://free-png.ru/wp-content/uploads/2022/02/free-png.ru-311.png' alt="logo"></img>
                    </a>
                </div>
                <div className="header__container__nav"></div>
            </div>
        </header>
    )
}

export default Header;