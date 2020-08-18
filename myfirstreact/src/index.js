import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const look=(
  <table>
  <tr>
   <th>school</th>
  <td> muranga university</td>
  <td> nairobi university</td>
  <td> meru university</td>
  </tr>
<tr>
   <td>department</td>
   <th> applied sciences</th>
   <th> mathematics</th>
   <th> it</th>
  </tr>

  </table>

)


ReactDOM.render(look
  , document.getElementById('root'));

  const myelement = <h1>I Love JSX! DO I?</h1>;

  ReactDOM.render(myelement, document.getElementById('root'));
  const LOVE = (
  <ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>ANITA</li>
  <li>POLLY</li>
  <li>DAVID</li>
  <li>ALEX</li>
</ul>

);

ReactDOM.render(LOVE, document.getElementById('root'));
const bird=(
  <div>
  <h2>the call of the most pathetic dimenstion of all times</h2>
  <h2>What could be worst than failing to achieve what you want in this damp life</h2>
  <h3>THe divine power of purpose is so ultimate .</h3>
<h4>Don't give such clamp.</h4>
  </div>
);


ReactDOM.render(bird, document.getElementById('root'));

class car extends React.Component {
  render(){
    return <h1>I have to start earning now for sure.</h1>;
  }
}
ReactDOM.render(<car />, document.getElementById('root'));
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a human you know!</h2>;
  }
}

ReactDOM.render(<Car />, document.getElementById('root'));