import React, {Component} from 'react'
import ArticleDisplay from './ArticleDisplay'
import ArticleForm from './ArticleForm'
import unirest from 'unirest'

const query = 'starwars'



class Article extends Component {
  constructor(){
    super()
    this.state = {
      query: [],
      searchResults: ''
    }

    async function listenNotes(){
    const response = await unirest.get(`https://listen-api.listennotes.com/api/v2/search?q=${query}&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0`)
      .header('X-ListenAPI-Key', 'c553d29fdd154bc3a22678b4f2f3350d').then((results) => {
    results.body.results.map((result) => (
      // this.setState({searchResults: result})
      console.log(result)
    ))


    })


    }
    listenNotes()
  }
// api call there - podcast api

  render() {
    return (
        <div>
      </div>
    )
  }
}

export default Article
