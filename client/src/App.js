import { Container, Button } from 'reactstrap';
import AppNavbar from './components/AppNavbar';
import ColourList from './components/ColourList';
import {Provider} from 'react-redux';
import store from './store';
import MountainsImage from './media/images/mountains.jpg';

function App() {
  return (
    <Provider store={store}>
    <AppNavbar />
    <Container className="text-center">
      <article style={{backgroundImage: `url(${MountainsImage})`, backgroundSize: "cover", backgroundPositionY: "50%"}} className=" text-white rounded py-5 px-3 my-3 shadow">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Integer sit amet ligula leo. Praesent fringilla convallis ex et dapibus. Morbi lacinia sollicitudin quam. Maecenas nec egestas velit. Praesent eu diam ut quam aliquet. Integer sit amet ligula leo. Praesent fringilla convallis ex et dapibus. Morbi lacinia sollicitudin quam. Maecenas nec egestas velit. Praesent eu diam ut quam aliquet.</p>
        <Button color='primary'>Click me, goddamn it!</Button>
      </article>

      <article className="bg-dark text-white rounded my-3 p-3 shadow">
        <h1>Violet you glad I didn't say banana</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies faucibus odio et rhoncus. Vivamus sit amet nunc sed sem mattis consequat eu at lacus. Integer ac facilisis ex, non sagittis elit. In luctus quam urna, eget interdum arcu egestas quis. Ut vel posuere tortor. Vivamus quis elit ac velit imperdiet dictum at ac ante. Nullam fringilla molestie faucibus. Vivamus nulla est, ultrices quis lacus ac, mollis viverra sapien. Vivamus et velit justo. </p>
      </article>
      <ColourList />
    </Container>
    </Provider>
  );
}

export default App;
