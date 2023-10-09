import Image from 'next/image'
import styles from './page.module.css'
import { Courses, Firstlook } from '@/components'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='motherdiv'>
        <Firstlook />
        <Courses />
      </div>
    </main>
  )
}
