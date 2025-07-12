import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import styles from './Header.module.scss'

const Header = () => {
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => location.pathname === path

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/categories', label: 'Categories' }
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 검색 기능 구현
    console.log('Search:', searchQuery)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        {/* Logo */}
        <Link to="/" className={styles.header__logo}>
          <span className={styles.header__logo__text}>Nothing is trivial</span>
        </Link>

        {/* Navigation */}
        <nav className={`${styles.header__nav} ${isMenuOpen ? styles['header__nav--open'] : ''}`}>
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.header__nav__link} ${isActive(item.path) ? styles['header__nav__link--active'] : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Search */}
        <div className={styles.header__search}>
          <form onSubmit={handleSearch} className={styles.header__search__form}>
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.header__search__input}
            />
            <button type="submit" className={styles.header__search__button}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </form>
        </div>

        {/* Menu Toggle */}
        <button
          className={`${styles.header__toggle} ${isMenuOpen ? styles['header__toggle--open'] : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
