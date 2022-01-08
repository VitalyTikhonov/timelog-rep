import './Home.scss'
import { CurrentOperation } from '../../components/CurrentOperation/CurrentOperation';

export function Home() {
  return (
    <main className='home-page'>
      <CurrentOperation />
    </main>
  )
}
