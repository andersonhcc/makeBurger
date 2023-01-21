import { FiRefreshCw } from "react-icons/fi";
import pedidos from "./data";
import { Container, Item } from "./styles";

export default function Pedidos() {

  const handleRefresh = () => {
    console.log("trazer novos prdidos");
  };

  const handleOpenModal = ()=> {
    console.log("abrir modal");
  };

  return (
    <>
      <Container>
        <h2>
          Pedidos
          <button onClick={handleRefresh}>
            <FiRefreshCw id="icon" />
          </button>
        </h2>

        {
          pedidos.map((item, index) => (
            <Item onClick={handleOpenModal} key={item.id}>
              Mesa {item.numeroDaMesa}
            </Item>
          ))
        }

      </Container>
    </>
  );
}
