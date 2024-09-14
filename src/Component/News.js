import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    pagesize: 15,
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
      totalResults: 0,
      start: 0,
      end: this.props.pagesize
    };
    document.title= `${this.props.category !== 'general'? this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1):"Home" } - DevNews`;
  }
  async updatepage(){
    this.props.setProgress(10);
    let url = `https://divyanshu-950.github.io/newsAPI/category/${this.props.category}.json`;
    this.setState({loading: true});
     let data = await fetch(url);
     this.props.setProgress(50);
     let parseddata = await data.json();
     this.props.setProgress(70);
     this.setState({article:  parseddata.articles.slice(this.state.start,this.state.end),
       totalResults:parseddata.articles.length,
       loading: false
     });

      this.props.setProgress(100);
  }
  async componentDidMount(){
  // 
  this.updatepage();
  };

   handlenextclick = async()=>{
  
     this.setState({
       start:this.state.start+ this.props.pagesize,
       end: this.state.end+this.props.pagesize 
     });
     this.updatepage();
     
    }

      handleprevclick = async()=>{
       
         this.setState({
           start: this.state.start < this.props.pagesize? 0:this.state.start - this.props.pagesize,
           end: this.state.end - this.props.pagesize
         });
         this.updatepage();
        }

   
  render() {
    return (
      
      <div className="container">
        <h1 className = " text-center " style= {{marginTop: '85px',fontFamily: 'math'}}>
        <small className="text-body-secondary"><strong>DevNews-Top Headlines  {this.props.category !== 'general'? 'on ' +this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1):"" }</strong></small>
        </h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {this.state.article&&!this.state.loading&&this.state.article.map((element)=>{
          return <div className={`col-sm-${this.props.items} mb-4 my-5 `} key = {element.url} ><NewsItem title ={element.title?element.title.slice(0,51):""} description={element.description?element.description.slice(0,100):""} author = {element.author} date = {element.publishedAt} source = {element.source.name} image =  {element.urlToImage?element.urlToImage:"https://t3.ftcdn.net/jpg/03/27/55/60/240_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"} url = {element.url} /></div>

        })}
        </div>
         <div className="container d-flex justify-content-between" style={{marginBottom:'50px'}}>
         <button type="button" disabled={this.state.start  < this.props.pagesize} className="btn btn-secondary" onClick={this.handleprevclick}>&larr; Previous</button>
         <button type="button" disabled ={this.state.end >= this.state.totalResults}className="btn btn-secondary" onClick={this.handlenextclick}>Next &rarr;</button>
         </div>
      </div>
    )
  }
}