import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
    let {title,description,imageUrl,newsUrl}=this.props 
    return (
        
      <div className='container my-3'>
        <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={!imageUrl?"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/03/0/0/biden-e1615910292669.jpg?ve=1&tl=1":imageUrl} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}....</h5>
    <p className="card-text">{description}.....</p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItems
