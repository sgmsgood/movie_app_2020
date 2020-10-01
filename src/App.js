import React from 'react';
import PropTypes from 'prop-types'

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  )

}

const foodILike = [
  {
    id: 1,
    name: 'Gopchang',
    image: 'https://postfiles.pstatic.net/20150804_178/s__sseunga_1438656361978V6eRo_JPEG/IMG_7859.jpg?type=w2',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://postfiles.pstatic.net/MjAxOTEyMjdfNzQg/MDAxNTc3MzgxMDQwOTEw.qtYADZhlPIHnFUSICv7FwSiwic1SPOUGDU4F16_EaZ8g.RQHHJyMrWtOOXIgr0QGGv-uhQDeETIP5eSL-Xjbp3qwg.JPEG.baboo2080/19.JPG?type=w966',
    rating: 4.9,
  }
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}

function App() {
  return (
    <div>
      <h1> Hallo@!!! </h1>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
      {/* {foodILike.map(renderFood)} */}
    </div>
  );
}

Food.prototype = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default App;
