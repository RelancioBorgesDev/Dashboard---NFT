import CardShop from '../../components/CardShop';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar/index';
import { Container, Grid } from './style';

export default function Favorite() {
  return (
    <div>
      <Sidebar/>
      <Container>
        <Header/>
        <h1>Your favorites NFTS</h1>
        <Grid>
          <CardShop/>
          <CardShop/>
          <CardShop/>
          <CardShop/>
          <CardShop/>
        </Grid>
      </Container>
    </div>
  )
}
