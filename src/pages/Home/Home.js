import './Home.scss'
import { CurrentOperation } from '../../components/CurrentOperation/CurrentOperation';
import { Stats } from '../../components/Stats/Stats';
import { TodaysOperations } from '../../components/TodaysOperations/TodaysOperations';

export function Home() {
  return (
    <main className='home-page'>
      <div className='home-page__upper-row'>
        <CurrentOperation />

        <Stats />
      </div>

      <TodaysOperations />
    </main>
  )
}
