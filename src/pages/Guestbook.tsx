import React from 'react';
import styles from './Guestbook.module.scss';

interface GuestbookEntry {
  id: string;
  name: string;
  email?: string;
  website?: string;
  message: string;
  date: string;
  avatar: string;
  isHighlighted?: boolean;
}

const Guestbook: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const guestbookEntries: GuestbookEntry[] = [
    {
      id: '1',
      name: '김개발',
      email: 'kim@example.com',
      website: 'https://kimdev.blog',
      message: '포트폴리오가 정말 인상적이네요! 특히 디자인 시스템 프로젝트가 매우 흥미로웠습니다. 혹시 시간 되실 때 경험담을 더 자세히 들어볼 수 있을까요?',
      date: '2024-01-22',
      avatar: '👨‍💻',
      isHighlighted: true
    },
    {
      id: '2',
      name: '이프론트',
      message: '블로그 글들이 정말 도움이 많이 됐어요. 특히 React 성능 최적화 관련 글이 실무에 바로 적용할 수 있어서 좋았습니다. 감사합니다!',
      date: '2024-01-20',
      avatar: '👩‍💻'
    },
    {
      id: '3',
      name: '박신입',
      email: 'newbie@example.com',
      message: '신입 개발자인데 많은 도움을 받고 있습니다. 멘토링이나 조언을 구할 수 있는 기회가 있을까요?',
      date: '2024-01-18',
      avatar: '🌱'
    },
    {
      id: '4',
      name: 'Sarah Johnson',
      website: 'https://sarahj.dev',
      message: 'Amazing work on your projects! I particularly love your approach to accessibility. Would love to connect and share experiences!',
      date: '2024-01-15',
      avatar: '🌍'
    },
    {
      id: '5',
      name: '최시니어',
      email: 'senior@company.com',
      message: 'TypeScript 관련 글을 보고 연락드립니다. 저희 팀에서 TypeScript 도입을 검토 중인데, 혹시 컨설팅이 가능한지 문의드립니다.',
      date: '2024-01-12',
      avatar: '🎯',
      isHighlighted: true
    },
    {
      id: '6',
      name: '정학생',
      message: '대학교에서 컴퓨터공학 전공하고 있는 학생입니다. 실무 경험담이 정말 도움이 되고 있어요. 앞으로도 좋은 글 부탁드립니다!',
      date: '2024-01-10',
      avatar: '📚'
    },
    {
      id: '7',
      name: 'Alex Chen',
      website: 'https://alexchen.tech',
      message: 'Your troubleshooting guides saved me hours of debugging! Thank you for sharing your knowledge with the community.',
      date: '2024-01-08',
      avatar: '🛠️'
    },
    {
      id: '8',
      name: '윤디자이너',
      email: 'designer@studio.com',
      message: '개발자 관점에서의 디자인 시스템 구축 이야기가 정말 흥미로웠습니다. 디자이너와 개발자 간의 협업에 대해 더 이야기 나누고 싶어요.',
      date: '2024-01-05',
      avatar: '🎨'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    
    // 실제 구현에서는 API 호출
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 폼 리셋
    setName('');
    setEmail('');
    setWebsite('');
    setMessage('');
    setIsSubmitting(false);
    
    alert('메시지가 성공적으로 전송되었습니다!');
  };

  return (
    <div className={styles.guestbook}>
      <header className={styles.guestbook__header}>
        <h1 className={styles.guestbook__title}>방명록 & 문의</h1>
        <p className={styles.guestbook__subtitle}>
          안녕하세요! 이곳에 자유롭게 메시지를 남겨주세요. 
          협업 제안, 기술 문의, 혹은 단순한 인사말까지 모든 메시지를 환영합니다.
        </p>
      </header>

      <div className={styles.guestbook__content}>
        <section className={styles['guestbook__message-form']}>
          <h2>메시지 남기기</h2>
          <form onSubmit={handleSubmit} className={styles.guestbook__form}>
            <div className={styles['guestbook__form-row']}>
              <div className={styles['guestbook__form-group']}>
                <label htmlFor="name">이름 *</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="이름을 입력해주세요"
                  required
                />
              </div>
              <div className={styles['guestbook__form-group']}>
                <label htmlFor="email">이메일</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일 주소 (선택사항)"
                />
              </div>
            </div>

            <div className={styles['guestbook__form-group']}>
              <label htmlFor="website">웹사이트</label>
              <input
                type="url"
                id="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="웹사이트 주소 (선택사항)"
              />
            </div>

            <div className={styles['guestbook__form-group']}>
              <label htmlFor="message">메시지 *</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="메시지를 입력해주세요..."
                rows={5}
                required
              />
              <div className={styles['guestbook__char-count']}>
                {message.length}/1000
              </div>
            </div>

            <button 
              type="submit" 
              className={styles['guestbook__submit-button']}
              disabled={isSubmitting || !name.trim() || !message.trim()}
            >
              {isSubmitting ? '전송 중...' : '메시지 보내기'}
            </button>
          </form>
        </section>

        <section className={styles['guestbook__contact-info']}>
          <h2>연락처 정보</h2>
          <div className={styles['guestbook__contact-cards']}>
            <div className={styles['guestbook__contact-card']}>
              <div className={styles['guestbook__contact-icon']}>📧</div>
              <h3>이메일</h3>
              <p>sungjae.kim@example.com</p>
              <a href="mailto:sungjae.kim@example.com" className={styles['guestbook__contact-link']}>
                이메일 보내기
              </a>
            </div>

            <div className={styles['guestbook__contact-card']}>
              <div className={styles['guestbook__contact-icon']}>💼</div>
              <h3>LinkedIn</h3>
              <p>전문적인 네트워킹</p>
              <a href="https://linkedin.com/in/sungjae-kim" className={styles['guestbook__contact-link']}>
                연결하기
              </a>
            </div>

            <div className={styles['guestbook__contact-card']}>
              <div className={styles['guestbook__contact-icon']}>🐱</div>
              <h3>GitHub</h3>
              <p>코드와 프로젝트</p>
              <a href="https://github.com/sungjae-kim" className={styles['guestbook__contact-link']}>
                방문하기
              </a>
            </div>

            <div className={styles['guestbook__contact-card']}>
              <div className={styles['guestbook__contact-icon']}>🐦</div>
              <h3>Twitter</h3>
              <p>일상과 기술 이야기</p>
              <a href="https://twitter.com/sungjae_kim" className={styles['guestbook__contact-link']}>
                팔로우하기
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className={styles['guestbook__guestbook-section']}>
        <h2>방명록</h2>
        
        <div className={styles.guestbook__stats}>
          <div className={styles.guestbook__stat}>
            <span className={styles['guestbook__stat-number']}>{guestbookEntries.length}</span>
            <span className={styles['guestbook__stat-label']}>총 메시지</span>
          </div>
          <div className={styles.guestbook__stat}>
            <span className={styles['guestbook__stat-number']}>{guestbookEntries.filter(e => e.isHighlighted).length}</span>
            <span className={styles['guestbook__stat-label']}>중요 문의</span>
          </div>
        </div>

        <div className={styles.guestbook__entries}>
          {guestbookEntries.map((entry) => (
            <div 
              key={entry.id} 
              className={`${styles.guestbook__entry} ${entry.isHighlighted ? styles['guestbook__entry--highlighted'] : ''}`}
            >
              <div className={styles['guestbook__entry-header']}>
                <div className={styles['guestbook__entry-avatar']}>{entry.avatar}</div>
                <div className={styles['guestbook__entry-info']}>
                  <div className={styles['guestbook__entry-name']}>
                    {entry.website ? (
                      <a href={entry.website} target="_blank" rel="noopener noreferrer">
                        {entry.name}
                      </a>
                    ) : (
                      entry.name
                    )}
                    {entry.isHighlighted && (
                      <span className={styles['guestbook__highlight-badge']}>⭐</span>
                    )}
                  </div>
                  <div className={styles['guestbook__entry-date']}>
                    {new Date(entry.date).toLocaleDateString('ko-KR')}
                  </div>
                </div>
              </div>
              <div className={styles['guestbook__entry-content']}>
                <p>{entry.message}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.guestbook__footer}>
        <h2>함께 소통해요</h2>
        <p>
          개발에 대한 이야기, 협업 제안, 또는 그냥 안부 인사까지 
          어떤 메시지든 환영합니다. 여러분의 소중한 연락을 기다리고 있어요!
        </p>
      </div>
    </div>
  );
};

export default Guestbook; 