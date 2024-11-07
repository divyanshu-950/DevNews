import React, { Component } from 'react'
import { Fade } from 'react-awesome-reveal';
export default class NewsItem extends Component {
  render() {
    let {title,index,image,url,author} = this.props;
    return (

      <>
                 
      <div className="col-6 col-md-4 col-sm-4 my-4"  key={url}>
      <Fade delay={(index%12)*60} triggerOnce direction="right">
        <a className='alink' href={url} target="_blank" rel="noreferrer" style={{textDecoration:'none',color:'inherit'}}>
        <div
          className="card mb-3 mx-2 my-2"
          style={{ backgroundColor: "inherit", border: "none" }}
        >
           
          <div className="row g-0">
            
            <div className="col-md-4 pt-3">
              <img
                style={{ aspectRatio: 2 / 1 }}
                src={image}
                className="img-fluid rounded-start"
                alt="img"
              />
            </div>
            <div className="col-md-8">
              <div
                className="card-body alink mx-1"
                style={{ padding: "0px" }}
              >
               
                  <p
                    className="card-title fs-5"
                    style={{ textAlign: "left" }}
                  >
                    {" "}
                    <strong>
                      {title.length > 60
                        ? title.slice(0, 50) + "..."
                        : title}
                    </strong>
                  </p>
                
                <p className="card-text">
                  <small className="text-body-secondary">
                    by {author}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        </a>
      </Fade>
      </div>
      </>

    )
  }
}
