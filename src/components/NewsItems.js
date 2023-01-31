import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props 
    return (
        
      <div className='container my-3'>

        <div className="card" style={{width: "18rem"}}>
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
    {source}
    <span class="visually-hidden">unread messages</span>
  </span>
  <img className="card-img-top" src={!imageUrl?"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/03/0/0/biden-e1615910292669.jpg?ve=1&tl=1":imageUrl} alt="Card image cap"/>
  
  <div className="card-body">
    <h5 className="card-title">{title}....</h5>
    <p className="card-text">{description}.....</p>
    <p class="card-text"><small class="text-muted">By {author?author:"Unknown"} Last updated {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItems
