/*eslint-disable*/
import React from 'react';
import { map } from 'ramda';
import { pure } from 'recompose';

class Car extends React.PureComponent {
  render() {
    console.log('render Car');
    return (
      <div>
        {' '}
        {this.props.name} || {this.props.color}{' '}
      </div>
    );
  }
}

const PureCar = ({ name, color }) => {
  console.log('render Car');
  return (
    <div>
      {' '}
      {name} || {color}{' '}
    </div>
  );
};

const PureCar2 = pure(PureCar);

class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cars: [{ name: 'bmw', color: 'red' }, { name: 'ford', color: 'black' }] };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ cars: [...this.state.cars, { name: 'toyota', color: 'blue' }] }), 1000);
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    console.log('render Cars');
    return (
      <div>
        {map(
          car => (
            <PureCar2 key={car.name} {...car} />
          ),
          this.state.cars,
        )}
      </div>
    );
  }
}

export default Cars;
