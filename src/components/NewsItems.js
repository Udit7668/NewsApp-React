import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title,description}=this.props
    return (
        
      <div className='container my-3' >
        <h2>MonkeyNews-Top Headline</h2>
        <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c8e3b3fe0595dfbab3656a5ba0e06e2c.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="/newsItems" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItems
