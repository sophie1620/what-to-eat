import './App.scss';

import Form from './components/Form.js';

function App() {

  // copy and paste the array for restaurant list here

  // create a form element within the main section
    // the form element will have a function that will house if/else statements
    
    // one submit button is clicked, redirect to a new route to show results

  const restaurants = {
    european: [
      {
        place: 'Eataly',
        taste: 'spicy',
        price: '$$$'
      },
      {
        place: 'Terroni',
        taste: 'spicy',
        price: '$$',
      },
      {
        place: 'Piri Piri Grillhouse',
        taste: 'spicy',
        price: '$$'
      },
      {
        place: 'Paramount Fine Foods',
        taste: 'spicy',
        price: '$'
      },
      {
        place: 'Bar Koukla',
        taste: 'richAndCreamy',
        price: '$$$'
      },
      {
        place: '3 Brewers',
        taste: 'richAndCreamy',
        price: '$$'
      },
      {
        place: 'Sugo',
        taste: 'richAndCreamy',
        price: '$$'
      },
      {
        place: 'Wurst',
        taste: 'richAndCreamy',
        price: '$$'
      },
      {
        place: 'Izba',
        taste: 'richAndCreamy',
        price: '$'
      },
      {
        place: 'Patria',
        taste: 'light',
        price: '$$$'
      },
      {
        place: 'Bylbos Downtown',
        taste: 'light',
        price: '$$$'
      },
      {
        place: 'Fat Pasha',
        taste: 'light',
        price: '$$'
      },
      {
        place: 'Shook',
        taste: 'light',
        price: '$$'
      },
      {
        place: 'Jimmy the Greek',
        taste: 'light',
        price: '$'
      }
    ],
    northAmerican: [
      {
        place: 'El Catrin Destileria',
        taste: 'spicy',
        price: '$$$'
      },
      {
        place: 'La Carnita',
        taste: 'spicy',
        price: '$$'
      },
      {
        place: 'Duff\'s Famous Wings',
        taste: 'spicy',
        price: '$$'
      },
      {
        place: 'Albert\'s Real Jamaican Foods',
        taste: 'spicy',
        price: '$$'
      }, {
        place: 'Daves Hot Chicken',
        taste: 'spicy',
        price: '$'
      },
      {
        place: 'The Keg',
        taste: 'richAndCreamy',
        price: '$$$'
      },
      {
        place: 'The Carbon Bar',
        taste: 'richAndCreamy',
        price: '$$'
      },
      {
        place: 'Descendent Detroit Style Pizza',
        taste: 'richAndCreamy',
        price: '$$'
      },
      {
        place: 'Smoke\'s Poutinerie',
        taste: 'richAndCreamy',
        price: '$'
      },
      {
        place: 'Mira\'s Restaurant',
        taste: 'light',
        price: '$$$'
      },
      {
        place: 'Joey\'s',
        taste: 'light',
        price: '$$'
      },
      {
        place: 'Chipotle',
        taste: 'light',
        price: '$'
      }
    ],
    asian: [
      {
        place: 'Pukka',
        taste: 'spicy',
        price: '$$$'
      },
      {
        place: 'Pai',
        taste: 'Spicy',
        price: '$$'
      },
      {
        place: 'The Fry',
        taste: 'spicy',
        price: '$'
      },
      {
        place: 'Buk Chang Dong Soon Tofu',
        taste: 'spicy',
        price: '$'
      },
      {
        place: 'Pukka',
        taste: 'richAndCreamy',
        price: '$$$'
      },
      {
        place: 'Banjara Bloor',
        taste: 'richAndCreamy',
        price: '$$'
      },
      {
        place: 'Soos',
        taste: 'richAndCreamy',
        price: '$$'
      },
      {
        place: 'Ramen Isshin',
        taste: 'richAndCreamy',
        price: '$$'
      },
      {
        place: 'Roti Cuisine of India',
        taste: 'richAndCreamy',
        price: '$'
      },
      {
        place: 'Ajisen Ramen',
        taste: 'richAndCreamy',
        price: '$'
      },
      {
        place: 'Yasu Toronto',
        taste: 'light',
        price: '$$$'
      },
      {
        place: 'Nome Izakaya',
        taste: 'light',
        price: '$$'
      },
      {
        place: 'Pho Tien Tan',
        taste: 'light',
        price: '$'
      },
      {
        place: 'Juicy Dumpling',
        taste: 'light',
        price: '$'
      }
    ]
  }; // end of restaurants array


  return (
    <div className="App">
      <header className="App-header">
        <h1>What to Eat?</h1>
      </header>

      <main>
        <Form
          restaurants={restaurants}  
        />
      </main>
    </div>
  );
}

export default App;
