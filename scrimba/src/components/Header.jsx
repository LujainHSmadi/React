import './Header.css'
export function Header() {
    return (
        <>
            <div className="nav">
                <div>

                <img src="logo192.png" alt=""  className='nav-logo' />
                </div>
                <ul className='nav__content'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>


        </>
    );
}