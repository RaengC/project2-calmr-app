import React, { Component } from 'react';

// import Article from './Article'

class ArticleForm extends Component {
    constructor(){
        super();
        this.state = {
            query: ''
        }
        this._handleInput = this._handleInput.bind(this)
        this._handleSubmit = this._handleSubmit.bind(this)
    }

    _handleSubmit(event){
        event.preventDefault();
        // what are we searching for
        // go and get images . should show at page
        console.log('about to search for', this.state.query);
        this.props.onSubmit( this.state.query ); //call the event handler provied by parents
    }

    _handleInput(event){
        // console.log(event.target.value);
        this.setState({query: event.target.value});
    }

    render() {
      return (
        <div >
          <h2> Search for a podcast by entering your search criteria.</h2>
          <br></br>
            <div>
              <form onSubmit={ this._handleSubmit} className="podcast-form">
                <input type="search" placeholder="search podcast" required onInput={this._handleInput}/>
                <button type="submit" value="Search" placeholder="search button for podcast">Search for podcast</button>
              </form>
            </div>

          </div>
        )
    }
}


export default ArticleForm
