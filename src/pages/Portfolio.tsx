import React from 'react';
import styles from './Portfolio.module.scss';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  duration: string;
  achievements: string[];
  image?: string;
  link?: string;
  github?: string;
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: '11번가 디자인 시스템',
      category: 'Design System',
      description: '11번가 전체 서비스의 일관된 사용자 경험을 위한 통합 디자인 시스템 구축 및 운영',
      technologies: ['React', 'TypeScript', 'SCSS', 'Storybook', 'Figma'],
      duration: '2022.03 ~ 현재',
      achievements: [
        '40+ 재사용 가능한 컴포넌트 라이브러리 구축',
        '개발 효율성 60% 향상',
        '디자인-개발 협업 프로세스 표준화',
        'Cross-platform 일관성 확보'
      ]
    },
    {
      id: '2',
      title: '11키티즈 게임 서비스',
      category: 'Web Game',
      description: 'SK텔레콤과의 콜라보 프로젝트로 키티 캐릭터를 활용한 인터랙티브 게임 서비스',
      technologies: ['React', 'TypeScript', 'Canvas API', 'WebGL', 'PWA'],
      duration: '2023.06 ~ 2023.10',
      achievements: [
        '월간 활성 사용자 100만+ 달성',
        '게임 로딩 속도 70% 개선',
        '모바일 최적화로 접근성 향상',
        'PWA 적용으로 앱-like 경험 제공'
      ]
    },
    {
      id: '3',
      title: 'Lost Ark 이벤트 페이지',
      category: 'Event Landing',
      description: 'Lost Ark 게임 이벤트를 위한 인터랙티브 랜딩 페이지 시리즈 개발',
      technologies: ['React', 'GSAP', 'Three.js', 'WebGL', 'Responsive'],
      duration: '2023.01 ~ 2023.05',
      achievements: [
        '10+ 이벤트 페이지 성공적 런칭',
        '페이지 체류시간 150% 증가',
        '모바일 사용자 경험 최적화',
        '3D 애니메이션으로 몰입감 제공'
      ]
    },
    {
      id: '4',
      title: '11번가 모바일 앱 웹뷰',
      category: 'Mobile Web',
      description: '11번가 모바일 앱 내 웹뷰 영역의 성능 최적화 및 사용자 경험 개선',
      technologies: ['React Native WebView', 'JavaScript', 'CSS3', 'Webpack'],
      duration: '2021.09 ~ 2022.02',
      achievements: [
        '웹뷰 로딩 속도 50% 개선',
        '앱-웹 브릿지 통신 최적화',
        '메모리 사용량 30% 감소',
        '사용자 이탈률 25% 감소'
      ]
    },
    {
      id: '5',
      title: '어드민 대시보드 리뉴얼',
      category: 'Dashboard',
      description: '11번가 내부 관리자를 위한 대시보드 시스템 전면 리뉴얼',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Material-UI', 'GraphQL'],
      duration: '2021.03 ~ 2021.08',
      achievements: [
        '관리자 업무 효율성 80% 향상',
        '실시간 데이터 시각화 구현',
        '반응형 디자인으로 다양한 디바이스 지원',
        '사용자 친화적 인터페이스 설계'
      ]
    },
    {
      id: '6',
      title: '개인 프로젝트 - React 컴포넌트 라이브러리',
      category: 'Open Source',
      description: '재사용 가능한 React 컴포넌트들을 모은 오픈소스 라이브러리',
      technologies: ['React', 'TypeScript', 'Rollup', 'Jest', 'Storybook'],
      duration: '2020.06 ~ 현재',
      achievements: [
        'NPM 다운로드 1000+ 달성',
        '100% 테스트 커버리지 유지',
        '완전한 TypeScript 지원',
        '상세한 문서화 및 예제 제공'
      ],
      github: 'https://github.com/sungjae-kim'
    }
  ];

  const categories = ['All', 'Design System', 'Web Game', 'Event Landing', 'Mobile Web', 'Dashboard', 'Open Source'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className={styles.portfolio}>
      <header className={styles.portfolio__header}>
        <h1 className={styles.portfolio__title}>포트폴리오</h1>
        <p className={styles.portfolio__subtitle}>
          UI 개발자로서 다양한 프로젝트를 통해 쌓아온 경험과 성과를 소개합니다.
        </p>
      </header>

      <div className={styles.portfolio__filters}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.portfolio__filter} ${selectedCategory === category ? styles['portfolio__filter--active'] : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles.portfolio__projects}>
        {filteredProjects.map((project, index) => (
          <article key={project.id} className={styles.portfolio__project} data-index={index}>
            <div className={styles['portfolio__project-header']}>
              <div className={styles['portfolio__project-meta']}>
                <span className={styles['portfolio__project-category']}>{project.category}</span>
                <span className={styles['portfolio__project-duration']}>{project.duration}</span>
              </div>
              <h2 className={styles['portfolio__project-title']}>{project.title}</h2>
              <p className={styles['portfolio__project-description']}>{project.description}</p>
            </div>

            <div className={styles['portfolio__project-content']}>
              <div className={styles.portfolio__technologies}>
                <h3>주요 기술</h3>
                <div className={styles['portfolio__tech-list']}>
                  {project.technologies.map(tech => (
                    <span key={tech} className={styles.portfolio__tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className={styles.portfolio__achievements}>
                <h3>주요 성과</h3>
                <ul className={styles['portfolio__achievement-list']}>
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className={styles.portfolio__achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles['portfolio__project-actions']}>
              {project.link && (
                <a 
                  href={project.link} 
                  className={styles['portfolio__project-link']}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  프로젝트 보기
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  className={styles['portfolio__project-github']}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className={styles.portfolio__contact}>
        <h2>프로젝트 문의</h2>
        <p>
          새로운 프로젝트나 협업에 관심이 있으시다면 언제든 연락해 주세요.
        </p>
        <a href="mailto:sungjae.kim@example.com" className={styles['portfolio__contact-button']}>
          이메일 보내기
        </a>
      </div>
    </div>
  );
};

export default Portfolio; 