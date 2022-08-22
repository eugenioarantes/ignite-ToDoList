import { Header } from './components/Header';
import PageContent from './components/PageContent';
import styles from './App.module.css';

export function App() {

  return (
    <div className={styles.container}>
      <Header />
      <PageContent />
    </div>
  )
}