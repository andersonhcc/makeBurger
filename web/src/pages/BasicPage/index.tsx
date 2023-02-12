import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import { FiLogOut } from "react-icons/fi";
import { HeaderContainer, Main } from "./styles";

export default function BasicPage() {
  const handleSignOut = () => {
    console.log("sair");
  };

  return (
    <>
      <HeaderContainer>
        <Link to="/dashboard">
          <img src={Logo} alt="Logo makeBurger" className="logo" />
        </Link>

        <nav>
          <Link to="/dashboard/nova-categoria">Nova categoria</Link>
          <Link to="/dashboard/cardapio">Cardápio</Link>
          <FiLogOut className="logout--button" onClick={handleSignOut} />
        </nav>
      </HeaderContainer>

      <Main>
        <Outlet />
      </Main>
    </>
  );
}
