// Any JS code in here is automatically ran for us

// Import React library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

// Creat a component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }

  componentWillMount(){
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(response => this.setState({images: response.data.data}));
  }
  render(){
    return (
      <div>
        <h1>Image List</h1>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

Meteor.startup(() => {
  // Render this component to the screen
  ReactDOM.render(<App />, document.querySelector('.container'));



});
