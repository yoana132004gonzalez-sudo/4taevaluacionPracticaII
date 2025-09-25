import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div className='holder'>
                <img src="img/logo.jpg" width="150px" style={{ borderRadius: "50%", height:"150px" }} alt="Corazones Peludos" />
                <h1>Corazones Peludos</h1>
            </div>
        </header>
    );
}
export default Header;