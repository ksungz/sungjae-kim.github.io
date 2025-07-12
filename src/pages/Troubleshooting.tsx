import React from 'react';
import styles from './Troubleshooting.module.scss';

interface TroubleshootingPost {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  date: string;
  views: number;
  helpful: number;
}

const Troubleshooting: React.FC = () => {
  const posts: TroubleshootingPost[] = [
    {
      id: '1',
      title: 'React 컴포넌트 리렌더링 최적화',
      category: 'React Performance',
      problem: 'useState가 변경될 때마다 하위 컴포넌트들이 불필요하게 리렌더링되어 성능이 저하되는 문제',
      solution: 'React.memo, useMemo, useCallback을 적절히 활용하여 의존성 최적화. 특히 객체/배열 props의 경우 참조 동일성 유지가 핵심',
      tags: ['React', 'Performance', 'Optimization', 'Hooks'],
      difficulty: 'Intermediate',
      date: '2024-01-15',
      views: 1240,
      helpful: 89
    },
    {
      id: '2',
      title: 'SCSS 모듈에서 전역 변수 참조 오류',
      category: 'CSS/SCSS',
      problem: 'SCSS 모듈에서 @import로 변수 파일을 불러와도 변수가 인식되지 않는 문제',
      solution: 'Vite 설정에서 css.preprocessorOptions.scss.additionalData를 통해 전역 변수 자동 주입 설정',
      tags: ['SCSS', 'Vite', 'CSS Modules', 'Build Tool'],
      difficulty: 'Beginner',
      date: '2024-01-10',
      views: 856,
      helpful: 67
    },
    {
      id: '3',
      title: 'TypeScript 제네릭 타입 추론 문제',
      category: 'TypeScript',
      problem: 'API 응답 데이터를 제네릭으로 타이핑했지만 타입 추론이 제대로 되지 않아 any 타입으로 추론되는 문제',
      solution: 'conditional types와 mapped types를 활용한 정확한 타입 가드 구현. extends keyof 패턴 활용',
      tags: ['TypeScript', 'Generics', 'Type Inference', 'API'],
      difficulty: 'Advanced',
      date: '2024-01-08',
      views: 2145,
      helpful: 156
    },
    {
      id: '4',
      title: '모바일 Safari에서 100vh 문제',
      category: 'Mobile Web',
      problem: 'iOS Safari에서 100vh가 주소창 높이를 포함하여 스크롤이 생기는 문제',
      solution: 'CSS env() 함수와 JavaScript의 visualViewport API를 조합하여 실제 뷰포트 높이 계산',
      tags: ['CSS', 'Mobile', 'Safari', 'Viewport'],
      difficulty: 'Intermediate',
      date: '2024-01-05',
      views: 1834,
      helpful: 142
    },
    {
      id: '5',
      title: 'Webpack Bundle 크기 최적화',
      category: 'Build Optimization',
      problem: '프로덕션 빌드 시 번들 크기가 과도하게 커져서 초기 로딩 시간이 길어지는 문제',
      solution: 'webpack-bundle-analyzer로 분석 후 code splitting, tree shaking, 동적 import 적용',
      tags: ['Webpack', 'Bundle Size', 'Performance', 'Code Splitting'],
      difficulty: 'Advanced',
      date: '2024-01-03',
      views: 1967,
      helpful: 134
    },
    {
      id: '6',
      title: 'Next.js에서 Hydration Mismatch 해결',
      category: 'Next.js',
      problem: 'SSR과 클라이언트 렌더링 결과가 달라 Hydration mismatch 경고가 발생하는 문제',
      solution: 'useEffect와 useState를 활용한 클라이언트 전용 렌더링 분리. suppressHydrationWarning 적절한 사용',
      tags: ['Next.js', 'SSR', 'Hydration', 'React'],
      difficulty: 'Intermediate',
      date: '2023-12-28',
      views: 1456,
      helpful: 98
    }
  ];

  const categories = ['All', 'React Performance', 'CSS/SCSS', 'TypeScript', 'Mobile Web', 'Build Optimization', 'Next.js'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || post.difficulty === selectedDifficulty;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const getDifficultyModifier = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'danger';
      default: return 'primary';
    }
  };

  return (
    <div className={styles.troubleshooting}>
      <header className={styles.troubleshooting__header}>
        <h1 className={styles.troubleshooting__title}>문제해결 & 노하우</h1>
        <p className={styles.troubleshooting__subtitle}>
          개발하면서 마주한 문제들과 해결 과정을 공유합니다. 
          실무에서 겪은 경험을 바탕으로 한 실용적인 해결책들을 소개해요.
        </p>
      </header>

      <div className={styles.troubleshooting__controls}>
        <div className={styles.troubleshooting__search}>
          <input
            type="text"
            placeholder="제목이나 태그로 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles['troubleshooting__search-input']}
          />
        </div>

        <div className={styles.troubleshooting__filters}>
          <div className={styles['troubleshooting__filter-group']}>
            <label>카테고리</label>
            <div className={styles['troubleshooting__filter-buttons']}>
              {categories.map(category => (
                <button
                  key={category}
                  className={`${styles.troubleshooting__filter} ${selectedCategory === category ? styles['troubleshooting__filter--active'] : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className={styles['troubleshooting__filter-group']}>
            <label>난이도</label>
            <div className={styles['troubleshooting__filter-buttons']}>
              {difficulties.map(difficulty => (
                <button
                  key={difficulty}
                  className={`${styles.troubleshooting__filter} ${selectedDifficulty === difficulty ? styles['troubleshooting__filter--active'] : ''}`}
                  onClick={() => setSelectedDifficulty(difficulty)}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.troubleshooting__stats}>
        <div className={styles.troubleshooting__stat}>
          <span className={styles['troubleshooting__stat-number']}>{filteredPosts.length}</span>
          <span className={styles['troubleshooting__stat-label']}>해결책</span>
        </div>
        <div className={styles.troubleshooting__stat}>
          <span className={styles['troubleshooting__stat-number']}>{posts.reduce((sum, post) => sum + post.views, 0).toLocaleString()}</span>
          <span className={styles['troubleshooting__stat-label']}>총 조회수</span>
        </div>
        <div className={styles.troubleshooting__stat}>
          <span className={styles['troubleshooting__stat-number']}>{posts.reduce((sum, post) => sum + post.helpful, 0)}</span>
          <span className={styles['troubleshooting__stat-label']}>도움됨</span>
        </div>
      </div>

      <div className={styles.troubleshooting__posts}>
        {filteredPosts.map((post, index) => (
          <article key={post.id} className={styles.troubleshooting__post} data-index={index}>
            <div className={styles['troubleshooting__post-header']}>
              <div className={styles['troubleshooting__post-meta']}>
                <span className={styles['troubleshooting__post-category']}>{post.category}</span>
                <span className={styles[`troubleshooting__post-difficulty--${getDifficultyModifier(post.difficulty)}`]}>
                  {post.difficulty}
                </span>
                <span className={styles['troubleshooting__post-date']}>{new Date(post.date).toLocaleDateString('ko-KR')}</span>
              </div>
              <h2 className={styles['troubleshooting__post-title']}>{post.title}</h2>
            </div>

            <div className={styles['troubleshooting__post-content']}>
              <div className={styles['troubleshooting__post-problem']}>
                <h3>🚨 문제</h3>
                <p>{post.problem}</p>
              </div>

              <div className={styles['troubleshooting__post-solution']}>
                <h3>✅ 해결</h3>
                <p>{post.solution}</p>
              </div>
            </div>

            <div className={styles['troubleshooting__post-footer']}>
              <div className={styles['troubleshooting__post-tags']}>
                {post.tags.map(tag => (
                  <span key={tag} className={styles['troubleshooting__post-tag']}>#{tag}</span>
                ))}
              </div>

              <div className={styles['troubleshooting__post-stats']}>
                <span className={styles['troubleshooting__post-stat']}>
                  👀 {post.views.toLocaleString()}
                </span>
                <span className={styles['troubleshooting__post-stat']}>
                  👍 {post.helpful}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className={styles.troubleshooting__empty}>
          <h3>검색 결과가 없습니다</h3>
          <p>다른 키워드나 필터로 다시 시도해보세요.</p>
        </div>
      )}

      <div className={styles.troubleshooting__contribute}>
        <h2>문제 해결에 도움이 필요하신가요?</h2>
        <p>
          막다른 길에 다다른 문제가 있다면 언제든 연락해 주세요. 
          함께 해결책을 찾아보고, 이곳에 정리해서 다른 개발자들에게도 도움이 되도록 하겠습니다.
        </p>
        <a href="mailto:sungjae.kim@example.com" className={styles['troubleshooting__contact-button']}>
          문제 공유하기
        </a>
      </div>
    </div>
  );
};

export default Troubleshooting; 