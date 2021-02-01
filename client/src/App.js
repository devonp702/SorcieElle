import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Carousel from "./components/ControlledCarousel"

function App() {
  return (
    <Container>
      <Row>
      <Col>
        <h1>Sorcie Elle</h1>
        <p> I am on 
          <a href="https://www.facebook.com/sorcie.elle.music/"> facebook</a>, 
          <a href="https://www.youtube.com/channel/UChkWMHz0HqTm-K-sYL-tMIQ/featured"> youtube</a>, 
          <a href="https://www.instagram.com/sorcie.elle.music/"> instagram</a>, 
          <a href="https://open.spotify.com/artist/7KvgBfStpEfwpT7TPXQiFf"> spotify</a>, 
          <a href="https://music.apple.com/us/artist/sorcie-elle/1501922511"> apple music</a>.
        </p>
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
