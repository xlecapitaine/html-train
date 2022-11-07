import './App.css';
import CardOverviewComponent from './components/CardOverviewComponent';
import CardSocials from './components/CardSocialsComponent';
import Container from './components/ContainerComponent';
import NavBar from './components/NavbarComponent';  
import SubNavBar from './components/SubNavBarComponent';



function App() {
  const data = [{
    title : "Page Views",
    number : 87,
    social : "facebook",
    benefits : "3%",
    status : "up"
  },
  {
    title : "Likes",
    number : 52,
    social : "facebook",
    benefits : "3%",
    status : "down"
  },
  {
    title : "Likes",
    number : 5462,
    social : "instagram",
    benefits : "2257%",
    status : "up"
  },
  {
    title : "Profile views",
    number : "52k",
    social : "instagram",
    benefits : "1375%",
    status : "up"
  },
  {
    title : "Retweets",
    number : 117,
    social : "twitter",
    benefits : "303%",
    status : "up"
  },
  {
    title : "Likes",
    number : 507,
    social : "twitter",
    benefits : "553%",
    status : "up"
  },
  {
    title : "Likes",
    number : 107,
    social : "youtube",
    benefits : "19%",
    status : "down"
  },
  {
    title : "Total views",
    number : 1407,
    social : "youtube",
    benefits : "12%",
    status : "down"
  }
]
  return (
    <div className="App">
      < NavBar title="Social Media Dashboard"/>
      <Container type="-cards-socials">
        <CardSocials social="facebook" user="@nathanf" number="1987" sub_type="followers" benefits="  12 Today" benefits_status="up"/>
        <CardSocials social="twitter" user="@nathanf" number="1044" sub_type="followers" benefits="99 Today" benefits_status="up"/>
        <CardSocials social="instagram" user="@realnathanf" number="11k" sub_type="followers" benefits="1099 Today" benefits_status="up"/>
        <CardSocials social="youtube" user="Nathan F." number="8239" sub_type="subscribers" benefits="144 Today" benefits_status="down"/>
      </Container>
      <SubNavBar title="Overview - Today"/>
      <Container type="-cards-overview">
      {
        data.map((item, index) => {
          return (<CardOverviewComponent title={item.title} number={item.number} 
            social={item.social} benefits={item.benefits} status={item.status}/>
        )})
      }
      </Container>
    </div>
  );
}

export default App;
