import React from 'react';
import styles from './Daily.module.scss';

interface DailyPost {
  id: string;
  title: string;
  content: string;
  mood: '😊' | '🤔' | '😅' | '🔥' | '😴' | '🎯' | '💭';
  category: 'Life' | 'Work' | 'Learning' | 'Hobby' | 'Travel' | 'Random';
  date: string;
  tags: string[];
  readTime: number;
  likes: number;
}

const Daily: React.FC = () => {
  const posts: DailyPost[] = [
    {
      id: '1',
      title: '개발자로서의 번아웃과 회복',
      content: '최근 몇 주간 정말 힘든 시간을 보냈다. 새로운 프로젝트가 시작되면서 요구사항이 계속 변경되고, 일정은 촉박해지고... 어느 순간 코드를 보는 것만으로도 스트레스가 쌓였다. 그래서 주말에는 아예 컴퓨터를 만지지 않고 등산을 다녀왔다. 맑은 공기를 마시며 정상에서 내려다본 풍경은 정말 마음을 편안하게 해주었다. 때로는 멈춰서 쉬는 것도 앞으로 나아가는 방법이라는 걸 다시 한번 느꼈다.',
      mood: '😴',
      category: 'Work',
      date: '2024-01-20',
      tags: ['번아웃', '회복', '등산', '휴식'],
      readTime: 3,
      likes: 12
    },
    {
      id: '2',
      title: '코드 리뷰에서 배운 것들',
      content: '오늘 시니어 개발자님과 함께 한 코드 리뷰에서 정말 많은 것을 배웠다. 단순히 동작하는 코드를 넘어서 "왜 이렇게 작성했는지", "나중에 유지보수할 때는 어떨지"를 고민하는 것이 얼마나 중요한지 알게 되었다. 특히 함수명 하나하나가 코드를 읽는 사람에게 얼마나 많은 정보를 전달하는지... 앞으로는 더 신중하게 코드를 작성해야겠다.',
      mood: '🤔',
      category: 'Learning',
      date: '2024-01-18',
      tags: ['코드리뷰', '학습', '성장', '네이밍'],
      readTime: 2,
      likes: 8
    },
    {
      id: '3',
      title: '첫 번째 개인 프로젝트 배포',
      content: '드디어 몇 달 동안 작업해온 개인 프로젝트를 배포했다! 처음에는 간단한 할 일 관리 앱이었는데, 만들다 보니 이것저것 기능을 추가하게 되었다. 배포 과정에서 예상치 못한 오류들이 많이 발생했지만, 하나씩 해결해나가는 과정이 정말 즐거웠다. 비록 사용자는 나 혼자지만, 내가 만든 것이 실제로 인터넷에서 동작한다는 게 신기하고 뿌듯하다.',
      mood: '🔥',
      category: 'Hobby',
      date: '2024-01-15',
      tags: ['개인프로젝트', '배포', '성취감', '할일관리'],
      readTime: 2,
      likes: 15
    },
    {
      id: '4',
      title: '새로운 프레임워크 러닝커브',
      content: '회사에서 새로운 프로젝트를 위해 Next.js를 도입하기로 했다. React는 어느 정도 익숙해졌다고 생각했는데, SSR과 SSG 개념을 이해하는 게 생각보다 어렵다. 문서를 읽어도 실제로 적용해보면 예상과 다르게 동작하는 경우가 많다. 하지만 이런 과정이 개발자로서 성장하는 길이라고 생각한다. 하나씩 차근차근 익혀나가자.',
      mood: '🎯',
      category: 'Learning',
      date: '2024-01-12',
      tags: ['Next.js', 'SSR', '학습', '러닝커브'],
      readTime: 2,
      likes: 6
    },
    {
      id: '5',
      title: '주말 카페 코딩의 즐거움',
      content: '오늘은 동네 카페에서 개인 프로젝트를 진행했다. 집에서 작업할 때와는 다른 집중력과 창의성이 생기는 것 같다. 커피 향과 은은한 배경음악, 그리고 창밖으로 보이는 풍경이 코딩에 대한 영감을 준다. 옆 테이블의 대학생들이 열심히 공부하는 모습을 보니 나도 더 열심히 하게 된다. 이런 소소한 일상의 변화가 때로는 큰 동기부여가 된다.',
      mood: '😊',
      category: 'Life',
      date: '2024-01-10',
      tags: ['카페코딩', '개인프로젝트', '일상', '집중'],
      readTime: 2,
      likes: 9
    },
    {
      id: '6',
      title: '팀 프로젝트에서의 소통의 중요성',
      content: '이번 주에 팀원들과 작업하면서 소통의 중요성을 다시 한번 느꼈다. 같은 기능을 개발하고 있다고 생각했는데, 알고 보니 완전히 다른 방향으로 가고 있었다. 다행히 중간에 발견해서 큰 문제는 없었지만, 처음부터 더 자세히 논의했다면 시간을 절약할 수 있었을 것이다. 개발자라고 해서 코딩만 잘하면 되는 게 아니라, 팀워크와 커뮤니케이션도 정말 중요한 스킬이다.',
      mood: '🤔',
      category: 'Work',
      date: '2024-01-08',
      tags: ['팀워크', '소통', '협업', '프로젝트관리'],
      readTime: 3,
      likes: 11
    },
    {
      id: '7',
      title: '오픈소스 첫 기여 경험',
      content: '드디어 오픈소스 프로젝트에 첫 기여를 했다! 작은 버그 수정이었지만, PR이 머지되는 순간의 기쁨은 말로 표현할 수 없었다. 처음에는 코드가 부족하다고 생각해서 망설였는데, 실제로 해보니 생각보다 많은 것을 배울 수 있었다. 특히 다른 개발자들의 코드 스타일을 보고, 리뷰 과정에서 받은 피드백들이 정말 값진 경험이었다. 앞으로도 꾸준히 오픈소스에 기여해보고 싶다.',
      mood: '🔥',
      category: 'Learning',
      date: '2024-01-05',
      tags: ['오픈소스', '기여', 'PR', '성장'],
      readTime: 3,
      likes: 18
    },
    {
      id: '8',
      title: '기술 블로그를 시작하며',
      content: '오늘부터 기술 블로그를 시작했다. 사실 글쓰기에는 자신이 없어서 계속 미뤄왔는데, 동료 개발자의 추천으로 용기를 내게 되었다. 내가 공부한 것들을 정리하고 공유하면서, 다른 사람들에게도 도움이 되고 나 자신도 더 깊이 이해할 수 있을 것 같다. 첫 포스트로는 React Hook에 대해 써볼 예정이다. 부족한 글이지만, 꾸준히 발전시켜 나가겠다.',
      mood: '🎯',
      category: 'Learning',
      date: '2024-01-03',
      tags: ['블로그', '글쓰기', '공유', '시작'],
      readTime: 2,
      likes: 7
    }
  ];

  const categories = ['All', 'Life', 'Work', 'Learning', 'Hobby', 'Travel', 'Random'];
  const moods = ['All', '😊', '🤔', '😅', '🔥', '😴', '🎯', '💭'];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedMood, setSelectedMood] = React.useState('All');

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesMood = selectedMood === 'All' || post.mood === selectedMood;
    return matchesCategory && matchesMood;
  });

  const getCategoryModifier = (category: string) => {
    switch (category) {
      case 'Life': return 'primary';
      case 'Work': return 'warning';
      case 'Learning': return 'success';
      case 'Hobby': return 'info';
      case 'Travel': return 'danger';
      case 'Random': return 'accent';
      default: return 'primary';
    }
  };

  return (
    <div className={styles.daily}>
      <header className={styles.daily__header}>
        <h1 className={styles.daily__title}>일상 & 생각</h1>
        <p className={styles.daily__subtitle}>
          개발자로 살아가며 느끼는 소소한 일상과 생각들을 기록합니다. 
          기술적인 내용부터 일상의 작은 깨달음까지, 진솔한 이야기를 담아요.
        </p>
      </header>

      <div className={styles.daily__filters}>
        <div className={styles['daily__filter-group']}>
          <label>카테고리</label>
          <div className={styles['daily__filter-buttons']}>
            {categories.map(category => (
              <button
                key={category}
                className={`${styles.daily__filter} ${selectedCategory === category ? styles['daily__filter--active'] : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className={styles['daily__filter-group']}>
          <label>기분</label>
          <div className={styles['daily__filter-buttons']}>
            {moods.map(mood => (
              <button
                key={mood}
                className={`${styles.daily__filter} ${selectedMood === mood ? styles['daily__filter--active'] : ''}`}
                onClick={() => setSelectedMood(mood)}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.daily__stats}>
        <div className={styles.daily__stat}>
          <span className={styles['daily__stat-number']}>{posts.length}</span>
          <span className={styles['daily__stat-label']}>총 포스트</span>
        </div>
        <div className={styles.daily__stat}>
          <span className={styles['daily__stat-number']}>{posts.reduce((sum, post) => sum + post.readTime, 0)}</span>
          <span className={styles['daily__stat-label']}>총 읽기 시간 (분)</span>
        </div>
        <div className={styles.daily__stat}>
          <span className={styles['daily__stat-number']}>{posts.reduce((sum, post) => sum + post.likes, 0)}</span>
          <span className={styles['daily__stat-label']}>총 좋아요</span>
        </div>
      </div>

      <div className={styles.daily__posts}>
        {filteredPosts.map((post, index) => (
          <article key={post.id} className={styles.daily__post} data-index={index}>
            <div className={styles['daily__post-header']}>
              <div className={styles['daily__post-meta']}>
                <span className={styles['daily__post-mood']}>{post.mood}</span>
                <span className={styles[`daily__post-category--${getCategoryModifier(post.category)}`]}>
                  {post.category}
                </span>
                <span className={styles['daily__post-date']}>
                  {new Date(post.date).toLocaleDateString('ko-KR')}
                </span>
                <span className={styles['daily__post-read-time']}>
                  {post.readTime}분
                </span>
              </div>
              <h2 className={styles['daily__post-title']}>{post.title}</h2>
            </div>

            <div className={styles['daily__post-content']}>
              <p className={styles['daily__post-text']}>{post.content}</p>
            </div>

            <div className={styles['daily__post-footer']}>
              <div className={styles['daily__post-tags']}>
                {post.tags.map(tag => (
                  <span key={tag} className={styles['daily__post-tag']}>#{tag}</span>
                ))}
              </div>

              <div className={styles['daily__post-actions']}>
                <button className={styles['daily__like-button']}>
                  ❤️ {post.likes}
                </button>
                <button className={styles['daily__share-button']}>
                  📤 공유
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className={styles.daily__empty}>
          <h3>해당하는 포스트가 없습니다</h3>
          <p>다른 필터로 다시 시도해보세요.</p>
        </div>
      )}

      <div className={styles.daily__inspiration}>
        <h2>일상에서 찾는 개발 영감</h2>
        <p>
          개발자의 삶은 코드만으로 이루어지지 않습니다. 
          일상의 소소한 경험들이 모여 더 나은 개발자로 성장하는 밑거름이 된다고 믿어요.
        </p>
        <a href="mailto:sungjae.kim@example.com" className={styles['daily__contact-button']}>
          이야기 나누기
        </a>
      </div>
    </div>
  );
};

export default Daily; 