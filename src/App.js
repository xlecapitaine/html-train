import './App.css';
import CardSocials from './components/CardSocialsComponent';
import Container from './components/ContainerComponent';
import NavBar from './components/NavbarComponent';

function App() {
  return (
    <div className="App">
      < NavBar />
      <Container type="-cards-socials">
        <CardSocials social="facebook" user="@nathanf" number="1987" sub_type="followers" benefits="  12 Today" benefits_status="up"/>
        <CardSocials social="twitter" user="@nathanf" number="1044" sub_type="followers" benefits="99 Today" benefits_status="up"/>
        <CardSocials social="instagram" user="@realnathanf" number="11k" sub_type="followers" benefits="1099 Today" benefits_status="up"/>
        <CardSocials social="youtube" user="Nathan F." number="8239" sub_type="subscribers" benefits="144 Today" benefits_status="down"/>
      </Container>
    </div>
  );
}

export default App;
