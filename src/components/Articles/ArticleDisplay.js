import React, { Component } from 'react';
import axios from 'axios';
import Article from './Article'
import DisplayComments from './DisplayComments'
import ReactPlayer from 'react-player'

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
    axios.post(SERVER_URL, {link: this.props.onSubmit, name: this.props.onSubmit.title_original, user_id: this.props.user.id})
  }

  render() {
    console.log("props onSubmit", this.props.onSubmit)
    console.log("props user", this.props.user_id)

    const image = this.props.onSubmit.thumbnail
    if (this.props.onSubmit.length == 0) {
      return false
    }
    return (
      <div >
        {this.props.onSubmit.title_original}
          <ReactPlayer
          url={this.props.onSubmit.audio}
          playing={false}
          controls={true}
          />
        <img src={image}></img>
        <div>
        <form onSubmit={this.savePodcast}>
          <input type="submit" value="Save Podcast" />
        </form>
        </div>
        // <p>{this.props.user}</p>
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
