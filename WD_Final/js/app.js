// TUTORIAL WATCHED FOR setting up React:
// https://www.youtube.com/watch?v=h3LpsM42s5o&ab_channel=WittCode

// Bootstrap card component
function Card() {
  return (
    <div className="card" style={{width: "18rem;"}}>
   
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
    </div>
  )
} 

// Render Card
ReactDOM.render(<Card />, document.getElementById('root'));

// Incorporating react window scroll list
import React from 'react';
import ReactDOM from 'react-dom';
import { VariableSizeList as List } from 'react-window';

const rowHeights = [25,50,75,100]; 

const getItemSize = index => rowHeights[index];

const Row = ({ index, style }) => {
  return (
    <div style={style}>
      <Card /> // your card component
    </div>
  );
}

const Example = () => (
  <List 
    height={150}
    itemCount={5000} 
    itemSize={getItemSize}
    width={300}
  >
    {Row} 
  </List>
);