
import './Header.css'

function Header({black}){

    return(
        <div>
            <header className={black ? 'black' : ''}>
                <div className="header--logo">
                    <a href="/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="netflix"/>
                    </a>

                </div>
                <div className="header--user">
                    <a href="/">
                        <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="usuario"/>
                    </a>
                    
                </div>
            </header>
        </div>
    )

}

export default Header