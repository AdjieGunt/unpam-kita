import React, { Component } from 'react'
import './Article.scss'

class Article extends Component {
  props: {
    item: Object,

  }
  render () {
    const { item: { title, content, uploaded, author, comments, image } } = this.props
    const commentsLength = comments.length

    return (
      <div className='article-item-wrapper'>
        <div className='article-left-section'>
          <img src={image} className='article-list-image' />
        </div>
        <div className='article-right-section'>
          <div className='article-list-title'>
            <div>{title}</div>
          </div>
          <div className='article-list-content'>
            {content}
          </div>
          <div className='article-list-footer'>
            <span className='article-time-upload'> {uploaded} </span>
            || <span className='article-writen-by'> {author} </span>
            || <span className='artile-comments-count'> {commentsLength} </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Article
