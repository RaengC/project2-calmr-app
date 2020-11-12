import React, { Component } from 'react';
import axios from 'axios';
import Article from './Article'
import DisplayComments from './DisplayComments'
import ReactPlayer from 'react-player'
import ArticleForm from './ArticleForm'
import OptionsMarkup from '../ChatBot/WidgetsList/OptionsMarkup';
import MeditationWidget from '../ChatBot/Widgets/MeditationWidget';
import config from '../ChatBot/config'
import './Articles.css';

const user_id = 9
const SERVER_URL = `http://localhost:3000/users/${user_id}/articles.json`


class ArticleDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      href: '',
      searchResults: [],
    }
    this.savePodcast = this.savePodcast.bind(this)
    this.displayResults = this.displayResults.bind(this)
  }


  displayResults(results) {
    console.log(results)
  }

  savePodcast(response) {
    axios.post(SERVER_URL, {link: this.props.onSubmit, name: this.props.onSubmit.title_original, user_id: 9})
  }


  render() {
    console.log("props", this.props.onSubmit)
    const image = this.props.onSubmit.thumbnail
    if (this.props.onSubmit.length == 0) {
      return false
    }
    return (
<<<<<<< HEAD
      <div className="podcast-content">
        <h2>
          {this.props.onSubmit.title_original}
        </h2>
          <img src={image} className="podcast-img"></img>
        <div >
          <ReactPlayer
            url={this.props.onSubmit.audio}
            playing={false}
            controls={true}
            className="display-player"
            />
        </div>
        <div>
        <form onSubmit={this.savePodcast}>
          <button type="submit" value="Save Podcast" placeholder="button to save podcast">Save Podcast</button>
        </form>
        </div>
=======
      <div className='player-wrapper'>
        <p>
        {this.props.onSubmit.title_original}
          <ReactPlayer
          url={this.props.onSubmit.audio}
          playing={false}
          controls={true}
          />
        <img src={image}></img>

        </p>
>>>>>>> 0940f6de47c6d2d66d53ca889a132b23188c0484
      </div>

    )
  }
}

//
// {this.props.onSubmit.map((result) =>
// <p>{result}</p>)
// {console.log('props2', this.props.onSubmit)}
// }



export default ArticleDisplay;
