import { useParams } from 'react-router-dom'

const Post = () => {
  const { slug } = useParams()

  return (
    <div className="post">
      <h1>Post: {slug}</h1>
      <div className="post-content">
        {/* 블로그 포스트 내용이 여기에 들어갈 예정 */}
      </div>
    </div>
  )
}

export default Post 