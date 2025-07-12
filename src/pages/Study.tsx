import React from 'react';
import styles from './Study.module.scss';

interface StudyPost {
  id: string;
  title: string;
  category: string;
  description: string;
  status: 'In Progress' | 'Completed' | 'Planned';
  startDate: string;
  endDate?: string;
  duration: string;
  topics: string[];
  resources: string[];
  outcomes: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  progress: number;
}

const Study: React.FC = () => {
  const studies: StudyPost[] = [
    {
      id: '1',
      title: 'React 18의 Concurrent Features 심화 연구',
      category: 'React',
      description: 'React 18에서 도입된 Concurrent Features(Suspense, useTransition, useDeferredValue)의 내부 동작 원리와 실제 활용 방안 연구',
      status: 'In Progress',
      startDate: '2024-01-01',
      duration: '3개월',
      topics: ['Concurrent Rendering', 'Suspense', 'Time Slicing', 'Scheduler'],
      resources: ['React 공식 문서', 'React Conf 2021 영상', 'Kent C. Dodds 블로그'],
      outcomes: [
        'Concurrent Rendering의 내부 동작 이해',
        '실제 프로젝트에 적용 가능한 패턴 정리',
        '성능 측정 방법론 습득'
      ],
      difficulty: 'Advanced',
      progress: 65
    },
    {
      id: '2',
      title: 'Web Performance Optimization 종합 가이드',
      category: 'Performance',
      description: '현대 웹 애플리케이션의 성능 최적화를 위한 모든 기법들을 체계적으로 학습하고 실습',
      status: 'Completed',
      startDate: '2023-10-01',
      endDate: '2023-12-31',
      duration: '3개월',
      topics: ['Core Web Vitals', 'Bundle Optimization', 'Network Optimization', 'Runtime Performance'],
      resources: ['web.dev', 'Google DevTools', 'Lighthouse', 'WebPageTest'],
      outcomes: [
        'LCP 40% 개선 달성',
        'Bundle 크기 30% 감소',
        '성능 모니터링 시스템 구축',
        '팀 성능 가이드라인 제작'
      ],
      difficulty: 'Advanced',
      progress: 100
    },
    {
      id: '3',
      title: 'TypeScript 고급 타입 시스템 마스터하기',
      category: 'TypeScript',
      description: 'TypeScript의 고급 타입 기능들을 활용한 타입 안전성 극대화 및 DX 향상 방안 연구',
      status: 'Completed',
      startDate: '2023-08-01',
      endDate: '2023-10-31',
      duration: '3개월',
      topics: ['Conditional Types', 'Mapped Types', 'Template Literal Types', 'Type Guards'],
      resources: ['TypeScript Handbook', 'Type Challenges', 'Matt Pocock YouTube'],
      outcomes: [
        '100% 타입 안전성 확보',
        '런타임 에러 90% 감소',
        'API 타입 자동 생성 시스템 구축',
        '팀 TypeScript 컨벤션 정립'
      ],
      difficulty: 'Advanced',
      progress: 100
    },
    {
      id: '4',
      title: 'CSS Container Queries와 미래의 반응형 디자인',
      category: 'CSS',
      description: 'Container Queries를 중심으로 한 차세대 반응형 디자인 패턴 연구 및 실험',
      status: 'In Progress',
      startDate: '2023-12-01',
      duration: '4개월',
      topics: ['Container Queries', 'Logical Properties', 'CSS Grid Subgrid', 'CSS Layers'],
      resources: ['MDN Web Docs', 'Miriam Suzanne 블로그', 'CSS Working Group Specs'],
      outcomes: [
        '컴포넌트 기반 반응형 시스템 구축',
        '브라우저 호환성 가이드 제작',
        '실제 프로덕션 적용 사례 정리'
      ],
      difficulty: 'Intermediate',
      progress: 45
    },
    {
      id: '5',
      title: 'Accessibility 완벽 가이드 - WCAG 2.1 기준',
      category: 'Accessibility',
      description: 'WCAG 2.1 가이드라인을 기준으로 한 웹 접근성 구현 방법론 연구 및 실무 적용',
      status: 'Planned',
      startDate: '2024-03-01',
      duration: '2개월',
      topics: ['Screen Reader', 'ARIA', 'Keyboard Navigation', 'Color Contrast'],
      resources: ['WCAG 2.1 Guidelines', 'WebAIM', 'Deque University'],
      outcomes: [
        'WCAG 2.1 AA 등급 달성',
        '접근성 자동 테스트 시스템 구축',
        '팀 접근성 체크리스트 제작'
      ],
      difficulty: 'Intermediate',
      progress: 0
    },
    {
      id: '6',
      title: 'Design System Architecture 심화 연구',
      category: 'Design System',
      description: '대규모 조직에서의 디자인 시스템 설계, 구축, 운영에 대한 종합적 연구',
      status: 'In Progress',
      startDate: '2023-11-01',
      duration: '6개월',
      topics: ['Token System', 'Component API Design', 'Documentation', 'Versioning'],
      resources: ['Design Systems Handbook', 'Brad Frost 블로그', 'Storybook Docs'],
      outcomes: [
        '확장 가능한 토큰 시스템 설계',
        '컴포넌트 라이브러리 문서화 자동화',
        '디자인-개발 워크플로우 최적화'
      ],
      difficulty: 'Advanced',
      progress: 75
    }
  ];

  const categories = ['All', 'React', 'Performance', 'TypeScript', 'CSS', 'Accessibility', 'Design System'];
  const statuses = ['All', 'In Progress', 'Completed', 'Planned'];
  
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedStatus, setSelectedStatus] = React.useState('All');

  const filteredStudies = studies.filter(study => {
    const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || study.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  const getStatusModifier = (status: string) => {
    switch (status) {
      case 'Completed': return 'success';
      case 'In Progress': return 'warning';
      case 'Planned': return 'info';
      default: return 'primary';
    }
  };

  const getDifficultyModifier = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'success';
      case 'Intermediate': return 'warning';
      case 'Advanced': return 'danger';
      default: return 'primary';
    }
  };

  return (
    <div className={styles.study}>
      <header className={styles.study__header}>
        <h1 className={styles.study__title}>스터디 & 연구</h1>
        <p className={styles.study__subtitle}>
          지속적인 학습을 통해 기술 역량을 발전시키고 있습니다. 
          새로운 기술 트렌드를 연구하고 실무에 적용하는 과정을 공유해요.
        </p>
      </header>

      <div className={styles.study__filters}>
        <div className={styles['study__filter-group']}>
          <label>카테고리</label>
          <div className={styles['study__filter-buttons']}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.study__filter} ${selectedCategory === category ? styles['study__filter--active'] : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className={styles['study__filter-group']}>
          <label>상태</label>
          <div className={styles['study__filter-buttons']}>
            {statuses.map(status => (
              <button
                key={status}
                className={`${styles.study__filter} ${selectedStatus === status ? styles['study__filter--active'] : ''}`}
                onClick={() => setSelectedStatus(status)}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.study__stats}>
        <div className={styles.study__stat}>
          <span className={styles['study__stat-number']}>{filteredStudies.length}</span>
          <span className={styles['study__stat-label']}>학습 프로젝트</span>
        </div>
        <div className={styles.study__stat}>
          <span className={styles['study__stat-number']}>{studies.filter(s => s.status === 'Completed').length}</span>
          <span className={styles['study__stat-label']}>완료됨</span>
        </div>
        <div className={styles.study__stat}>
          <span className={styles['study__stat-number']}>{studies.filter(s => s.status === 'In Progress').length}</span>
          <span className={styles['study__stat-label']}>진행중</span>
        </div>
        <div className={styles.study__stat}>
          <span className={styles['study__stat-number']}>{Math.round(studies.reduce((sum, s) => sum + s.progress, 0) / studies.length)}%</span>
          <span className={styles['study__stat-label']}>평균 진행률</span>
        </div>
      </div>

      <div className={styles.study__studies}>
        {filteredStudies.map((study, index) => (
          <article key={study.id} className={styles['study__study-card']} data-index={index}>
            <div className={styles['study__study-header']}>
              <div className={styles['study__study-meta']}>
                <span className={styles['study__study-category']}>{study.category}</span>
                <span className={styles[`study__study-status--${getStatusModifier(study.status)}`]}>
                  {study.status}
                </span>
                <span className={styles[`study__study-difficulty--${getDifficultyModifier(study.difficulty)}`]}>
                  {study.difficulty}
                </span>
              </div>
              <h2 className={styles['study__study-title']}>{study.title}</h2>
              <p className={styles['study__study-description']}>{study.description}</p>
            </div>

            <div className={styles['study__study-content']}>
              <div className={styles['study__study-info']}>
                <div className={styles['study__info-item']}>
                  <strong>기간:</strong> {study.duration}
                </div>
                <div className={styles['study__info-item']}>
                  <strong>시작일:</strong> {new Date(study.startDate).toLocaleDateString('ko-KR')}
                </div>
                {study.endDate && (
                  <div className={styles['study__info-item']}>
                    <strong>완료일:</strong> {new Date(study.endDate).toLocaleDateString('ko-KR')}
                  </div>
                )}
              </div>

              <div className={styles.study__progress}>
                <div className={styles['study__progress-header']}>
                  <span>진행률</span>
                  <span>{study.progress}%</span>
                </div>
                <div className={styles['study__progress-bar']}>
                  <div 
                    className={styles['study__progress-fill']}
                    style={{ width: `${study.progress}%` }}
                  />
                </div>
              </div>

              <div className={styles.study__topics}>
                <h3>주요 학습 주제</h3>
                <div className={styles['study__topic-list']}>
                  {study.topics.map(topic => (
                    <span key={topic} className={styles.study__topic}>{topic}</span>
                  ))}
                </div>
              </div>

              <div className={styles.study__resources}>
                <h3>학습 자료</h3>
                <ul className={styles['study__resource-list']}>
                  {study.resources.map((resource, idx) => (
                    <li key={idx} className={styles.study__resource}>{resource}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.study__outcomes}>
                <h3>예상 성과</h3>
                <ul className={styles['study__outcome-list']}>
                  {study.outcomes.map((outcome, idx) => (
                    <li key={idx} className={styles.study__outcome}>{outcome}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredStudies.length === 0 && (
        <div className={styles.study__empty}>
          <h3>해당하는 학습 프로젝트가 없습니다</h3>
          <p>다른 필터로 다시 시도해보세요.</p>
        </div>
      )}

      <div className={styles.study__motivation}>
        <h2>지속적인 성장을 향해</h2>
        <p>
          "배움에는 끝이 없다"는 마음가짐으로 새로운 기술과 방법론을 탐구하고 있습니다. 
          학습한 내용을 실무에 적용하고, 팀과 공유하며 함께 성장하는 것이 목표입니다.
        </p>
        <a href="mailto:sungjae.kim@example.com" className={styles['study__contact-button']}>
          함께 학습하기
        </a>
      </div>
    </div>
  );
};

export default Study; 