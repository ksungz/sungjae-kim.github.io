import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.scss';

interface Category {
  name: string;
  count: number;
  description: string;
}

const categories: Category[] = [
  {
    name: 'General',
    count: 1,
    description: '일반적인 블로그 포스트들',
  },
  {
    name: 'HTML',
    count: 1,
    description: 'HTML 관련',
  },
  {
    name: 'CSS',
    count: 1,
    description: 'CSS 관련',
  },
  
];

const Categories: React.FC = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.categories__container}>
        <h1 className={styles.categories__title}>Categories</h1>
        <p className={styles.categories__description}>
          카테고리별로 정리된 포스트들을 확인해보세요.
        </p>

        <div className={styles.categories__grid}>
          {categories.map(category => (
            <Link
              key={category.name}
              to={`/?category=${category.name}`}
              className={styles.categories__card}
            >
              <div className={styles.categories__card__header}>
                <h2 className={styles.categories__card__name}>{category.name}</h2>
                <span className={styles.categories__card__count}>
                  {category.count}개
                </span>
              </div>
              <p className={styles.categories__card__description}>
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories; 