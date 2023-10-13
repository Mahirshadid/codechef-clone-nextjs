import Image from 'next/image'
import styles from './page.module.css'
import { Bluepicsection, Browsecat, Courses, Firstlook, Gifsection, Slidingsection } from '@/components'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className='motherdiv'>
        <Firstlook />
        <Courses />
        <Browsecat />
        <Slidingsection />
        <Gifsection />
        <Bluepicsection />
      </div>
    </main>
  )
}
