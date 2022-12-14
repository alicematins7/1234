import { FcReuse } from "react-icons/fc";
import { GrLogout } from "react-icons/gr";
import * as S from "./styles";
import logo from "../../assets/img/logo.png"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "hooks/authHooks";
const Menu = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate();
  async function logout() {
    await signOut()
    navigate('/login')
  }
  return (
    <S.Cabecalho>
      <picture>
        <Link to="/">
        <img src={logo} alt="Imagens principais" />
        </Link>
      </picture>
      <nav>
        {
          user ? (
            <ul>
              <li>
                <Link to="/adm/message">Mensagem</Link>
              </li>
              <li>
                <button onClick={logout}>{user.name} <GrLogout /></button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/cadastrar">Cadastrar</Link>
              </li>
            </ul>
          )
        }
      </nav>
    </S.Cabecalho >
  );
};
export default Menu;
