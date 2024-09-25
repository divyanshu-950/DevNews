import React, { useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


const News=(props)=> {
 const[articles,setarticles] = useState();
 const[loading,setloading] = useState(false);
 const[start,setstart] = useState(0);
 const[totalResults,settotalResults] = useState(0);
 const[end,setend] = useState(props.pagesize);

  const updatepage=async()=>{
    props.setProgress(10);
    let url = `https://divyanshu-950.github.io/newsAPI/category/${props.category}.json`;
    setloading(true)
     let data = await fetch(url);
     props.setProgress(50);
     let parseddata = await data.json();
     props.setProgress(70);
     setarticles(parseddata.articles.slice(start,end))
     settotalResults(parseddata.articles.length)
     setloading(false)
      props.setProgress(100);
  }
  useEffect(()=>{
  // 
  updatepage();
  },[]);

   const handlenextclick = async()=>{
    props.setProgress(10);
    let url = `https://divyanshu-950.github.io/newsAPI/category/${props.category}.json`;
    setloading(true)
     let data = await fetch(url);
     props.setProgress(50);
     let parseddata = await data.json();
     props.setProgress(70);
     setarticles(articles.concat(parseddata.articles.slice(start+props.pagesize,end+props.pagesize)))
     settotalResults(parseddata.articles.length)
     setloading(false)
      props.setProgress(100);
     setstart(start+props.pagesize)
     setend(end+props.pagesize)
     
    }

    return (
      
      <div className="container">
        <h1 className = " text-center " style= {{marginTop: '85px',fontFamily: 'math'}}>
        <small className="text-body-secondary"><strong>  {props.category !== 'general'?props.category.charAt(0).toUpperCase() + props.category.slice(1) +' News':"Top Headlines" } </strong></small>
        </h1>
        <hr />
        {loading && <Spinner/>}
        <div className="row">
        {articles&&articles.map((element,i)=>{
          return<><NewsItem  index = {i}title ={element.title?element.title.slice(0,51):""} description={element.description?element.description.slice(0,100):""} author = {element.author} date = {element.publishedAt} source = {element.source.name} image =  {element.urlToImage?element.urlToImage:"https://t3.ftcdn.net/jpg/03/27/55/60/240_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"} url = {element.url} /></>

        })}
        </div>
         <div className="container d-flex justify-content-center" style={{marginBottom:'50px'}}>
         <button type="button"style={end >= totalResults?{display:'none'}:{}}className="btn btn-primary" onClick={handlenextclick}>Load More  <i class="fa-solid fa-chevron-down"></i></button>
         </div>
      </div>
    )
}
News.defaultProps = {
  pagesize: 15,
  category: "general"
  
}
News.propTypes= {
  pagesize: PropTypes.number,
  category : PropTypes.string
 }

export default News