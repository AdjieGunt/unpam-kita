import React from 'react'
import Nav from '../../../components/Nav'
import dummypic from '../assets/img.jpg'
import Article from './../../../components/Article'
import './HomeView.scss'
const items = [
  {
    title: 'news 1',
    content: 'content 1 this is contetn 1 news',
    image: dummypic,
    author: 'writer1',
    uploaded: '3 hours ago',
    comments: [
      {
        username: 'user1',
        comment: 'this is first comment',
      },
      {
        username: 'user2',
        comment: 'this is second comment',
      },
    ],
  },
  {
    title: 'news 2',
    content: 'content 2 this is contetn 2 news',
    image: dummypic,
    author: 'writer2',
    uploaded: '4 hours ago',
    comments: [],
  },
  {
    title: 'news 3',
    content: 'content 3 this is contetn 3 news',
    image: dummypic,
    author: 'writer3',
    uploaded: '5 hours ago',
    comments: [
      {
        username: 'user1',
        comment: 'this is first comment',
      },

    ]
  },
]

export const HomeView = () => (
  <div>
    <Nav />
    {
      items.map((item, index) => {
        return (
          <div className='article-wrapper' key={`article-${index}`}>
            <Article item={item} />
          </div>
        )
      })
    }
  </div>
)

export default HomeView
