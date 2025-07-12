import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Blog.module.scss'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const blogPosts = [
    {
      id: 'react-18-features',
      title: 'React 18의 새로운 기능들과 실무 적용 방법',
      excerpt: 'React 18에서 추가된 Concurrent Features와 Suspense의 개선사항들을 실제 프로젝트에 어떻게 적용할 수 있는지 알아봅니다.',
      category: 'React',
      date: '2024.01.15',
      readTime: '8분',
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      id: 'scss-bem-methodology',
      title: 'SCSS와 BEM으로 관리하기 쉬운 CSS 작성하기',
      excerpt: '확장 가능하고 유지보수하기 쉬운 CSS 아키텍처를 구축하는 방법과 실제 사용 경험을 공유합니다.',
      category: 'CSS',
      date: '2024.01.10',
      readTime: '6분',
      tags: ['CSS', 'SCSS', 'BEM']
    },
    {
      id: 'typescript-5-migration',
      title: 'TypeScript 5.0 새로운 기능과 마이그레이션 가이드',
      excerpt: 'TypeScript 5.0의 주요 변경사항과 기존 프로젝트를 안전하게 업그레이드하는 방법을 단계별로 설명합니다.',
      category: 'TypeScript',
      date: '2024.01.05',
      readTime: '10분',
      tags: ['TypeScript', 'JavaScript']
    },
    {
      id: 'web-performance-optimization',
      title: '웹 성능 최적화: Core Web Vitals 개선 전략',
      excerpt: 'LCP, FID, CLS 등 Core Web Vitals 지표를 개선하여 사용자 경험을 향상시키는 구체적인 방법들을 소개합니다.',
      category: 'Performance',
      date: '2023.12.28',
      readTime: '12분',
      tags: ['Performance', 'Web Vitals', 'Optimization']
    },
    {
      id: 'react-testing-best-practices',
      title: 'React 테스팅 라이브러리로 효과적인 테스트 작성하기',
      excerpt: 'React Testing Library를 활용하여 유지보수 가능하고 의미 있는 테스트를 작성하는 방법을 알아봅니다.',
      category: 'Testing',
      date: '2023.12.20',
      readTime: '9분',
      tags: ['Testing', 'React', 'Jest']
    },
    {
      id: 'nextjs-13-app-router',
      title: 'Next.js 13 App Router 완전 가이드',
      excerpt: 'Next.js 13의 새로운 App Router 기능을 활용하여 더 나은 사용자 경험과 개발자 경험을 만드는 방법을 소개합니다.',
      category: 'Next.js',
      date: '2023.12.15',
      readTime: '15분',
      tags: ['Next.js', 'React', 'Frontend']
    }
  ]

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))]
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className={styles.blog}>
      {/* 참고 사이트처럼 단순한 헤더 */}
      <section className={styles.header}>
        <div className="container">
          <div className={styles.header__content}>
            <h1 className={styles.header__title}>개발 블로그</h1>
            <p className={styles.header__subtitle}>
              프론트엔드 개발 경험과 배움을 기록합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 카테고리 필터 */}
      <section className={styles.filters}>
        <div className="container">
          <div className={styles.filters__container}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filters__button} ${selectedCategory === category ? styles['filters__button--active'] : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 포스트 목록 - 참고 사이트처럼 깔끔하게 */}
      <section className={styles.posts}>
        <div className="container">
          <div className={styles.posts__grid}>
            {filteredPosts.map((post) => (
              <article key={post.id} className={styles.post}>
                <div className={styles.post__meta}>
                  <time className={styles.post__date}>{post.date}</time>
                  <span className={styles.post__category}>{post.category}</span>
                </div>
                <h2 className={styles.post__title}>
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                <p className={styles.post__excerpt}>{post.excerpt}</p>
                <div className={styles.post__tags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.post__tag}>#{tag}</span>
                  ))}
                </div>
                <div className={styles.post__footer}>
                  <span className={styles.post__read_time}>{post.readTime} 읽기</span>
                  <Link to={`/blog/${post.id}`} className={styles.post__link}>
                    더 읽기 →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog 