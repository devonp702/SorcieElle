import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import facebook from "./components/files/facebook40x40.png";
import youtube from "./components/files/youtube40x40.png";
import insta from "./components/files/instagram40x40.png";
import spotify from "./components/files/Spotify-icon.png";
import itunes from "./components/files/iTunes-icon.png";
import Carousel from 'react-bootstrap/Carousel';
import pic1 from "./components/files/se1.jpg";
import pic2 from "./components/files/se2.jpg";
import pic3 from "./components/files/se3.jpg";
import pic4 from "./components/files/se4.jpg";

function App() {
  return (
    <Container>
      <Row>
      <Col xs={6} md={3}>
        <h1>Sorcie Elle</h1>
        <span id="icons">
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/sorcie.elle.music/"> <img src={facebook} alt="the facebook logo."/> </a>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UChkWMHz0HqTm-K-sYL-tMIQ/featured"> <img src={youtube} alt="the youtube logo."/> </a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sorcie.elle.music/"> <img src={insta} alt="the instagram logo."/> </a>
        <a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/7KvgBfStpEfwpT7TPXQiFf"> <img src={spotify} alt="the spotify logo."/> </a>
        <a target="_blank" rel="noreferrer" href="https://music.apple.com/us/artist/sorcie-elle/1501922511"> <img src={itunes} alt="the itunes logo."/> </a>
        </span>
      </Col>
      <Col xs={6} md={6}>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Sorcie Elle</h3>
      <p>Local Las Vegas singer and songwriter.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Gone for Good</h3>
      <p>The darkness is as empty as it should be now....</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>The Calling</h3>
      <p>New album being created now.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic4}
      alt="Fourth slide"
    />

    <Carousel.Caption>
      <h3>For the Fans</h3>
      <p>Sign up to get the latest info.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Col>
      <Col xs={12} md={3}>
        <h2>Who am I?</h2>
      <p>Music is the force that fulfills me. I’m so grateful to every person that I’m able to share it with. The drive to create, perform and experience music is my lifeblood. It calls to me every moment. My dream is to share the joy and intensity of my musical journey globally. Welcome and stay tuned!</p>
      <Signup />
      </Col>
      </Row>
    </Container>
  );
}

export default App;
