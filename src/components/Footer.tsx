import React from 'react'
import { styles } from '@/styles/styles'

const Footer: React.FC = () => {
  return (
    <footer className="grid place-items-center bg-primary py-5">
      <div className="flex">
        <span className={styles.sectionSubText}>
          {new Date().getFullYear().toString()}&nbsp;&nbsp;&nbsp;
        </span>
        <p className={styles.sectionSubText}>
          <span>&#169;</span>&nbsp;copyright
        </p>
      </div>
    </footer>
  )
}

export default Footer
