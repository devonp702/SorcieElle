import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "./components/ControlledCarousel";
import facebook from "./components/files/facebook40x40.png";
import youtube from "./components/files/youtube40x40.png";
import insta from "./components/files/instagram40x40.png";
import spotify from "./components/files/Spotify-icon.png";
import itunes from "./components/files/iTunes-icon.png";


function App() {
  return (
    <Container>
      <Row>
      <Col>
        <h1>Sorcie Elle</h1>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/sorcie.elle.music/"> <img src={facebook} alt="the facebook logo."/> </a>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UChkWMHz0HqTm-K-sYL-tMIQ/featured"> <img src={youtube} alt="the youtube logo."/> </a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sorcie.elle.music/"> <img src={insta} alt="the instagram logo."/> </a>
        <a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/7KvgBfStpEfwpT7TPXQiFf"> <img src={spotify} alt="the spotify logo."/> </a>
        <a target="_blank" rel="noreferrer" href="https://music.apple.com/us/artist/sorcie-elle/1501922511"> <img src={itunes} alt="the itunes logo."/> </a>
      </Col>
      <Col>
        <Carousel />
        <p>Pictures here!</p>
      </Col>
      <Col>
      <p>News here!</p>
      <Signup />
      </Col>
      </Row>
    </Container>
  );
}

export default App;
