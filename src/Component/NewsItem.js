import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,image,url,author,date,source} = this.props;
    return (
      <div>
          <div className="card">
         <div style={{display:'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: 0
              }    }> 
          <span className="badge rounded-pill bg-danger" style ={{left: "89%" ,zIndex:"1"}}>
            {source}
          </span>
          </div>
          <img style={{maxHeight:'270px'}} src={image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">by {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={url} target ="_blank"  rel="noreferrer" className="btn btn-sm btn-dark">Read more..</a>
          </div>
        </div>
      </div>
    )
  }
}
