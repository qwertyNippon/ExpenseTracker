import styled from 'styled-components';
import bg from '../src/img/bg.png'
import { MainLayout } from './Styles/Layouts';
import Orb from './Components/Orb/Orb'

function App() {
  return (
    <AppStyled bg = {bg} className="App">
      <Orb />
      <MainLayout>

      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relaive;
`;

export default App;
