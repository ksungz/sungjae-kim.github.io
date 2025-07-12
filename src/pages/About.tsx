import styles from './About.module.scss'

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__content}>
          <h1 className={styles.about__title}>About</h1>
          <div className={styles.about__description}>
            <p>
              안녕하세요, 프론트엔드 개발자 성재입니다.
            </p>
            <p>
              React, TypeScript, Next.js를 주로 사용하며, 사용자 경험을 개선하고 
              성능을 최적화하는 것에 관심이 많습니다.
            </p>
            <p>
              이 블로그에서는 개발 과정에서 배운 것들과 경험을 공유합니다.
              새로운 기술과 트렌드, 그리고 실무에서 마주한 문제 해결 과정을 기록합니다.
            </p>
          </div>
          
          <div className={styles.about__skills}>
            <h2 className={styles.about__skills__title}>기술 스택</h2>
            <div className={styles.about__skills__list}>
              <span className={styles.about__skill}>React</span>
              <span className={styles.about__skill}>TypeScript</span>
              <span className={styles.about__skill}>Next.js</span>
              <span className={styles.about__skill}>SCSS</span>
              <span className={styles.about__skill}>Node.js</span>
              <span className={styles.about__skill}>GraphQL</span>
            </div>
          </div>

          <div className={styles.about__contact}>
            <h2 className={styles.about__contact__title}>연락처</h2>
            <div className={styles.about__contact__links}>
              <a 
                href="https://github.com/sungjae-kim" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.about__contact__link}
              >
                GitHub
              </a>
              <a 
                href="mailto:your.email@example.com"
                className={styles.about__contact__link}
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 