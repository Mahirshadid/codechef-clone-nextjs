import Image from 'next/image'
import styles from './page.module.css'
import { Browsecat, Courses, Firstlook, Slidingsection } from '@/components'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='motherdiv'>
        <Firstlook />
        <Courses />
        <Browsecat />
        <Slidingsection />
      </div>
    </main>
  )
}
