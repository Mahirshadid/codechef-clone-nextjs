import Image from 'next/image'
import styles from './page.module.css'
import { Bluepicsection, Browsecat, Courses, Firstlook, Footer, Gifsection, Linksection, Pro, Slidingsection, Startlearning } from '@/components'

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
        <Startlearning />
        <Pro />
        <Linksection />
        <Footer />
      </div>
    </main>
  )
}
