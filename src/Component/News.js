import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    pagesize: 8,
    category: "general"
    
  }
  static propTypes= {
    pagesize: PropTypes.number,
    category : PropTypes.string
   }
  articles = [];
  constructor(props){
    super(props);
    this.state={
      article : this.articles,
      loading : false,
      page: 1,
      totalResults: 0
      
    };
    document.title= `${this.props.category !== 'general'? this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1):"Home" } - DevNews`;
  }
  async updatepage(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=58d255eaf6654370ab7aaf13ef0c11a5&language=en&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({loading: true});
     let data = await fetch(url);
     this.props.setProgress(50);
     let parseddata = await data.json();
     this.props.setProgress(70);
     this.setState({article:  parseddata.articles,
       totalResults: parseddata.totalResults >= 100?100:parseddata.totalResults,
       loading: false
     });
     this.props.setProgress(100);
  }
  async componentDidMount(){
  // 
  this.updatepage();
  };

   handlenextclick = async()=>{
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=58d255eaf6654370ab7aaf13ef0c11a5&language=en&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    this.setState({loading: true});
     let data = await fetch(url);
     this.props.setProgress(50);
     let parseddata = await data.json();
     this.props.setProgress(70);
     this.setState({article:  parseddata.articles,
       totalResults: parseddata.totalResults >= 100?100:parseddata.totalResults,
       loading: false
     });
     this.props.setProgress(100);
      this.setState({
        page:this.state.page+1
      });
   }

      handleprevclick = async()=>{
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=58d255eaf6654370ab7aaf13ef0c11a5&language=en&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
        this.setState({loading: true});
         let data = await fetch(url);
         this.props.setProgress(50);
         let parseddata = await data.json();
         this.props.setProgress(70);
         this.setState({article:  parseddata.articles,
           totalResults: parseddata.totalResults >= 100?100:parseddata.totalResults,
           loading: false
         });
         this.props.setProgress(100);
      this.setState({
        page:this.state.page-1
      });
    }

   
  render() {
    return (
      
      <div className="container">
        <h1 className = " text-center " style= {{marginTop: '85px'}}>
        <small className="text-body-secondary">DevNews-Top Headlines  {this.props.category !== 'general'? 'on ' +this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1):"" }<strong></strong></small>
        </h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {this.state.article&&!this.state.loading&&this.state.article.map((element)=>{
          return <div className="col-sm-4 mb-4 my-5"  key = {element.url} ><NewsItem title ={element.title?element.title.slice(0,51):""} description={element.description?element.description.slice(0,100):""} author = {element.author} date = {element.publishedAt} source = {element.source.name} image =  {element.urlToImage?element.urlToImage:"https://t3.ftcdn.net/jpg/03/27/55/60/240_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"} url = {element.url} /></div>

        })}
        </div>
         <div className="container d-flex justify-content-between" style={{marginBottom:'50px'}}>
         <button type="button" disabled={this.state.page <= 1} className="btn btn-secondary" onClick={this.handleprevclick}>&larr; Previous</button>
         <button type="button" disabled ={((this.state.totalResults/this.props.pagesize) < this.state.page) }className="btn btn-secondary" onClick={this.handlenextclick}>Next &rarr;</button>
         </div>
      </div>
    )
  }
}

