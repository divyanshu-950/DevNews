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
     console.log(parseddata.articles.slice(start,end));
      props.setProgress(100);
  }
  useEffect(()=>{
  // 
  updatepage();
  },[]);

   const handlenextclick = async()=>{
     setstart(start+props.pagesize)
     setend(end+props.pagesize)
     updatepage();
     
    }

      const handleprevclick = async()=>{
        setstart(start < props.pagesize?0:start-props.pagesize)
        setend(end-props.pagesize)
        updatepage();
        }
    return (
      
      <div className="container">
        <h1 className = " text-center " style= {{marginTop: '85px',fontFamily: 'math'}}>
        <small className="text-body-secondary"><strong>DevNews-Top Headlines  {props.category !== 'general'? 'on ' +props.category.charAt(0).toUpperCase() + props.category.slice(1):"" }</strong></small>
        </h1>
        {loading && <Spinner/>}
        <div className="row">
        {articles&&!loading&&articles.map((element)=>{
          return <div className={`col-sm-${props.items} mb-4 my-5 `} key = {element.url} ><NewsItem title ={element.title?element.title.slice(0,51):""} description={element.description?element.description.slice(0,100):""} author = {element.author} date = {element.publishedAt} source = {element.source.name} image =  {element.urlToImage?element.urlToImage:"https://t3.ftcdn.net/jpg/03/27/55/60/240_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg"} url = {element.url} /></div>

        })}
        </div>
         <div className="container d-flex justify-content-between" style={{marginBottom:'50px'}}>
         <button type="button" disabled={start  < props.pagesize} className="btn btn-secondary" onClick={handleprevclick}>&larr; Previous</button>
         <button type="button" disabled ={end >= totalResults}className="btn btn-secondary" onClick={handlenextclick}>Next &rarr;</button>
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