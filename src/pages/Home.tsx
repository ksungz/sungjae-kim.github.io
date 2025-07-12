import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './Home.module.scss';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
}

const posts: Post[] = [
  {
    id: '1',
    title: '첫 번째 블로그 포스트',
    excerpt: '안녕하세요! 이것은 샘플 블로그 포스트입니다. 여기에는 포스트의 간단한 요약이 들어갑니다.',
    date: '2024-01-15',
    category: 'General',
    readTime: '3분',
    slug: 'first-blog-post'
  },
  {
    id: '2',
    title: 'HTML 기초 문법 정리',
    excerpt: 'HTML의 기본 태그들과 구조에 대해 알아봅시다. 웹 개발의 첫 걸음을 시작해보세요.',
    date: '2024-01-10',
    category: 'HTML',
    readTime: '5분',
    slug: 'html-basics'
  },
  {
    id: '3',
    title: 'CSS 레이아웃 마스터하기',
    excerpt: 'Flexbox와 Grid를 활용한 모던 CSS 레이아웃 기법들을 소개합니다.',
    date: '2024-01-05',
    category: 'CSS',
    readTime: '7분',
    slug: 'css-layout-mastery'
  }
];

const categories = ['All', 'General', 'HTML', 'CSS'];

const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    } else {
      setSelectedCategory('All');
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__filters}>
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.home__filter} ${
                selectedCategory === category ? styles['home__filter--active'] : ''
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.home__posts}>
          {filteredPosts.map(post => (
            <article key={post.id} className={styles.home__post}>
              <div className={styles.home__post__meta}>
                <time className={styles.home__post__date}>{post.date}</time>
                <span className={styles.home__post__category}>{post.category}</span>
              </div>
              <h2 className={styles.home__post__title}>
                <Link to={`/post/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <p className={styles.home__post__excerpt}>{post.excerpt}</p>
              <div className={styles.home__post__footer}>
                <span className={styles.home__post__read_time}>{post.readTime} 읽기</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 