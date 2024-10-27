import './App.css';
import CustomButton from './CustomButton';
import CustomCard from './CustomCard';
import CustomSocials from './CustomSocials';
import WebpageRate from './WebpageRate'; 

function App() {
  return (
    <>
    <div id="header">
      <h1 class='title'>Custom Components Practice</h1>
      <CustomButton class='button' text="Click Me" bgcolor="hsl(0, 0%, 20%)" alertMessage="you clicked me!" />
    </div>
<br></br>
    <div id="props">
      <CustomCard class='card' topic="Learning" date="26 Oct 2024" title="React.js Overview" 
      content="React.js is a popular JavaScript library for building dynamic user interfaces, enabling developers to create fast, reusable components efficiently." 
      author="Julien Toussaint Dang" pfpsrc="/default_profile.jpg" bgcolor="white"
      />

      <CustomSocials class='socials' pfpsrc="/default_profile.jpg" name="Julien Toussaint Dang" 
      location="New Haven, CT" bio="Currently studying Computer Science at Yale." 
      linkedin="https://www.linkedin.com/in/julien-toussaint-dang/"
      github="https://github.com/JulienTD23"
      insta="https://www.instagram.com/jul1en_td/" 
      />

      <WebpageRate class='rate' iconSrc="/icon-star.svg" title="How did we do?" 
      rateContent="Please let us know how we did with your support request. All feedback is appreciated to help us improve!" 
      thanksContent="We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!" 
      bgcolor="hsl(213, 19%, 18%)" 
      />

    </div>
    </>
  );
}

export default App;
