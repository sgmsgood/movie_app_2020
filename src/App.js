import React from 'react';

function Food({name, picture}) {
  return (
  <div>
    <h2>I like {name}</h2>
    <img src={picture}/>
  </div>
  )

}

const foodILike = [
  {
    name: 'Gopchang',
    image: 'https://postfiles.pstatic.net/20150804_178/s__sseunga_1438656361978V6eRo_JPEG/IMG_7859.jpg?type=w2'
  },
  {
    name: 'Samgyeopsal',
    image: 'https://postfiles.pstatic.net/MjAxOTEyMjdfNzQg/MDAxNTc3MzgxMDQwOTEw.qtYADZhlPIHnFUSICv7FwSiwic1SPOUGDU4F16_EaZ8g.RQHHJyMrWtOOXIgr0QGGv-uhQDeETIP5eSL-Xjbp3qwg.JPEG.baboo2080/19.JPG?type=w966'
  }
];

function App() {
  return( 
  <div>
    <h1> Hallo@!!! </h1>
    {foodILike.map(dish => (
      <Food name={dish.name} picture={dish.image}/>
    ))}
  </div>
    );
}

export default App;
