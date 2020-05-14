import React from 'react'
import Photo from './Photo'
import Comments from './Comments'

const Single = React.createClass({
  render() {
    console.log(this.props)
    const i = this.props.posts.findIndex((post) => post.code === this.props.params.pathId)
    const post = this.props.posts[i]
    const postComments = this.props.comments[this.props.params.pathId] || []

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props}/>
      </div>
    )
  }
})

export default Single