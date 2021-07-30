import logo from './logo.svg';
import Header from "./Header";
import Intro from "./Intro";
import WaveUP from './WaveUp';
import WaveDown from './WaveDown';
import Component from './Component';
import Fearures from './Features';
import Uses from './Uses';
import './App.css';
import Users from './Users';
import GetPage from './GetPage'

function App() {
  const uses=["One page for all your links & content",
              "Connect audiences to all of your content with just one link — videos, social accounts, podcasts, blogs and everywhere you are online."
            ]
  const theams=["Beautiful Themes",
                "Customise your page to match your identity. Easily choose from beautiful themes, backgrounds, fonts and more in just a few clicks."
              ]
  const track=["Track visitors & engagement",
               "Measure pageviews, link clicks & conversions right inside your dashboard with built-in easy to read analytics."
            ]

  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
      <WaveUP color="#ddd"></WaveUP>
      <Component name='uses' uses={uses} img="https://superpage.to/home/one-page-for-all-links.png"></Component>
      <WaveDown color="#ddd"></WaveDown> 
      <Fearures></Fearures>
      <WaveUP color="#6610f2"></WaveUP>
      <Component name='theams' uses={theams} img="https://superpage.to/home/themes.png"></Component>
      <WaveDown color="#6610f2"></WaveDown>
      <Component name='track' uses={track} img="https://superpage.to/home/analytics.svg"></Component>
      <WaveUP color="#ddd"></WaveUP>
      <Users></Users>
      <WaveDown color="#ddd"></WaveDown> 
      <GetPage></GetPage>
    </div>
  );
}

export default App;
