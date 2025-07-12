import { useParams, Link } from 'react-router-dom'
import styles from './Post.module.scss'

const Post = () => {
  const { slug } = useParams<{ slug: string }>()

  // 실제로는 slug를 기반으로 포스트 데이터를 가져와야 함
  const post = {
    id: slug || 'sample-post',
    title: '[리액트 쿼리 시리즈] 1. 쿼리 생성 및 데이터 관리',
    date: 'June 29, 2025',
    category: 'React',
    readTime: '8분',
    content: `
# 리액트 쿼리 시리즈 시작

웹에서 서버 데이터를 다루는 일은 언제나 '이 데이터가 최신일까?'라는 고민을 동반한다. React Query는 이러한 고민을 줄여주기 위해 탄생했으며, 캐싱부터 자동 갱신, 초기 데이터 주입까지 서버 상태를 관리한다.

## React Query란?

React Query는 React 애플리케이션에서 서버 상태를 관리하기 위한 라이브러리입니다. 기존의 상태 관리 라이브러리들이 클라이언트 상태에 집중했다면, React Query는 서버 상태에 특화되어 있습니다.

### 주요 특징

1. **자동 캐싱**: 한 번 가져온 데이터는 자동으로 캐싱됩니다.
2. **백그라운드 업데이트**: 사용자가 모르는 사이에 데이터를 최신 상태로 유지합니다.
3. **로딩 상태 관리**: 로딩, 에러, 성공 상태를 쉽게 관리할 수 있습니다.

## 기본 사용법

\`\`\`typescript
import { useQuery } from '@tanstack/react-query'

function Posts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error occurred</div>

  return (
    <div>
      {data?.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
\`\`\`

이처럼 React Query를 사용하면 복잡한 상태 관리 없이도 서버 데이터를 효율적으로 관리할 수 있습니다.

## 마무리

다음 포스트에서는 React Query의 더 고급 기능들에 대해 알아보겠습니다.
    `
  }

  return (
    <div className={styles.post}>
      <div className={styles.post__container}>
        <article className={styles.post__article}>
          {/* Header */}
          <header className={styles.post__header}>
            <div className={styles.post__meta}>
              <time className={styles.post__date}>{post.date}</time>
              <span className={styles.post__category}>{post.category}</span>
              <span className={styles.post__read_time}>{post.readTime} 읽기</span>
            </div>
            <h1 className={styles.post__title}>{post.title}</h1>
          </header>

          {/* Content */}
          <div className={styles.post__content}>
            {post.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return (
                  <h1 key={index} className={styles.post__h1}>
                    {line.replace('# ', '')}
                  </h1>
                )
              }
              if (line.startsWith('## ')) {
                return (
                  <h2 key={index} className={styles.post__h2}>
                    {line.replace('## ', '')}
                  </h2>
                )
              }
              if (line.startsWith('### ')) {
                return (
                  <h3 key={index} className={styles.post__h3}>
                    {line.replace('### ', '')}
                  </h3>
                )
              }
              if (line.startsWith('```')) {
                return null // 코드 블록은 별도 처리 필요
              }
              if (line.trim() === '') {
                return <br key={index} />
              }
              return (
                <p key={index} className={styles.post__paragraph}>
                  {line}
                </p>
              )
            })}
          </div>

          {/* Navigation */}
          <nav className={styles.post__nav}>
            <Link to="/" className={styles.post__nav__link}>
              ← 홈으로 돌아가기
            </Link>
          </nav>
        </article>
      </div>
    </div>
  )
}

export default Post 