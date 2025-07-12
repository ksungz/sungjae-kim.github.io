import styles from './Profile.module.scss'

const Profile = () => {
  const skills = {
    frontend: ['HTML5', 'CSS3', 'SASS/SCSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'],
    design: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'],
    tools: ['Git', 'VS Code', 'Webpack', 'Vite', 'npm/yarn'],
    other: ['Responsive Design', 'Accessibility', 'Performance Optimization', 'SEO']
  }

  const experience = [
    {
      company: '11번가',
      position: 'UI 마크업 개발자',
      period: '2022 - 현재',
      description: '디자인시스템 구축 및 유지보수, 11키티즈 게임 서비스 개발',
      achievements: [
        '11번가 디자인시스템 구축 및 운영',
        '11키티즈 게임 서비스 프론트엔드 개발',
        '로스트아크 이벤트 페이지 제작',
        '반응형 웹 및 모바일 최적화'
      ]
    },
    {
      company: '이전 회사',
      position: '웹퍼블리셔',
      period: '2020 - 2022',
      description: '다양한 웹사이트 및 랜딩페이지 제작',
      achievements: [
        '기업 웹사이트 제작 및 유지보수',
        '랜딩페이지 및 마이크로사이트 제작',
        '크로스브라우징 및 접근성 개선'
      ]
    }
  ]

  return (
    <div className={styles.profile}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.hero__content}>
            <div className={styles.hero__avatar}>
              <div className={styles.hero__avatar__image}>
                <span>👨‍💻</span>
              </div>
            </div>
            <div className={styles.hero__info}>
              <h1 className={styles.hero__name}>김성재</h1>
              <p className={styles.hero__title}>UI 마크업 개발자</p>
              <p className={styles.hero__description}>
                5년간의 웹퍼블리싱 경험을 바탕으로 사용자 중심의 웹 경험을 만들어갑니다.
                HTML, CSS, JavaScript를 기반으로 한 프론트엔드 개발에 전문성을 가지고 있으며,
                최신 웹 기술과 트렌드를 지속적으로 학습하고 있습니다.
              </p>
              <div className={styles.hero__contact}>
                <a href="mailto:your.email@example.com" className="btn btn--primary">
                  이메일 보내기
                </a>
                <a href="/portfolio" className="btn btn--secondary">
                  포트폴리오 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skills}>
        <div className="container">
          <h2 className={styles.skills__title}>기술 스택</h2>
          <div className={styles.skills__grid}>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className={`${styles.skills__category} card card--padding`}>
                <h3 className={styles.skills__category__title}>
                  {category === 'frontend' && 'Frontend'}
                  {category === 'design' && 'Design'}
                  {category === 'tools' && 'Tools'}
                  {category === 'other' && 'Others'}
                </h3>
                <div className={styles.skills__category__list}>
                  {skillList.map((skill) => (
                    <span key={skill} className={styles.skills__skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.experience}>
        <div className="container">
          <h2 className={styles.experience__title}>경력 사항</h2>
          <div className={styles.experience__timeline}>
            {experience.map((exp, index) => (
              <div key={index} className={styles.experience__item}>
                <div className={styles.experience__item__header}>
                  <h3 className={styles.experience__item__company}>{exp.company}</h3>
                  <span className={styles.experience__item__period}>{exp.period}</span>
                </div>
                <h4 className={styles.experience__item__position}>{exp.position}</h4>
                <p className={styles.experience__item__description}>{exp.description}</p>
                <ul className={styles.experience__item__achievements}>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certificates */}
      <section className={styles.education}>
        <div className="container">
          <h2 className={styles.education__title}>학력 및 자격증</h2>
          <div className={styles.education__content}>
            <div className={`${styles.education__item} card card--padding`}>
              <h3 className={styles.education__item__title}>학력</h3>
              <p className={styles.education__item__detail}>
                웹디자인학과 졸업 (2018-2022)
              </p>
            </div>
            <div className={`${styles.education__item} card card--padding`}>
              <h3 className={styles.education__item__title}>자격증</h3>
              <ul className={styles.education__item__list}>
                <li>웹디자인기능사</li>
                <li>컴퓨터그래픽스운용기능사</li>
                <li>정보처리기사</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile 