
import './Header.css'

function Header({black}){

    return(
        <div>
            <header className={black ? 'black' : ''}>
                <div className="header--logo">
                    <a href="/">
                        <img src={require('../../images/logo.png')} alt="netflix"/>
                    </a>

                </div>
                <div className="header--user">
                    <a href="/">
                        <img src={require('../../images/avatar.png')} alt="usuario"/>
                    </a>
                    
                </div>
            </header>
        </div>
    )

}

export default Header