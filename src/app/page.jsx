import styles from './page.module.css'
import Linha from '/components/Linha'
import Tabuleiro  from '../../components/Tabuleiro'

export default function Home() {
  return (
      <div className={styles.description}>
        <Tabuleiro/>
        
      </div>
  )
}
