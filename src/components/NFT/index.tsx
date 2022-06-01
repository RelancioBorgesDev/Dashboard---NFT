import { BoxNFT, BoxNFTInfo, Container, Descricao, HeartIcon, Imagem, VerifiedIcon } from "./style";
import macaco from "../../assets/macaco.webp";
import Ney from "../../assets/neymar.jpg";
import Card from "../Card";

export default function NFT() {
  return (
    <Container>
     <BoxNFT>
       <Imagem>
        <img src={macaco} alt="NFT de macaco" width="200px" height="200px"/>
       </Imagem>
        <Descricao>
          <h2>Neymar jr</h2>
          <span>
            <img src={Ney} alt="Neymar" />
            <VerifiedIcon/>
          </span>
        </Descricao>
      </BoxNFT>
      <BoxNFTInfo>
        <h1>Mutant Ape Yacht Club</h1>

        <div>
          <span>Preço Atual:</span>
          <h2>55 ETH</h2>
        </div>

        <div>
          <button>
            <HeartIcon />
          </button>
          <button>Ver arte</button>
        </div>
      </BoxNFTInfo>
    </Container>
  );
}
