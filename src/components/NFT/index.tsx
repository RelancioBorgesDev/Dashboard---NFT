import { BoxNFT, BoxNFTInfo, HeartIcon, Container } from './style';
import macaco from "../../assets/macaco.webp";
import Ney from "../../assets/neymar.jpg";

export default function NFT() {
  return (
    <Container>
      <BoxNFT>
        <img src={macaco} alt="NFT de macaco" />
        <div>
          <h2>Neymar JR</h2>
          <span>
            <img src={Ney} alt="Neymar" />
          </span>
        </div>
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
