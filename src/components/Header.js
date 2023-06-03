import logo from "../images/Vector.svg";

const Header = () => {
    return (
        <>
        <header className="header">
            <img src={logo} alt="Logo Around the U.S." className="title" />
        </header>
        </>
    );
};

export default Header;