import styled from 'styled-components';
import bg from '../src/img/bg.png'
import { MainLayout } from './Styles/Layouts';

function App() {
  return (
    <AppStyled bg = {bg} className="App">
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
