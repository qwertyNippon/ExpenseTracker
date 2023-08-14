import styled from 'styled-components';
import bg from '../src/img/bg.png'
import { MainLayout } from './Styles/Layouts';
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(1)

  return (
    <AppStyled bg = {bg} className="App">
      <Orb />
      <MainLayout>
        <Navigation active = {active} setActive = {setActive} />
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
