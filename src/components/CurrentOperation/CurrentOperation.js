import './CurrentOperation.scss'
import { v4 as getUid } from 'uuid';

export function CurrentOperation() {
  return (
    <div className='curr-op'>
      <h2 className='curr-op__headline'>Текущая операция</h2>

      <form className='curr-op__body' >
        <fieldset className='curr-op__form-item curr-op__field-row'>
          <label>Начало
            <input type="text" readOnly value={"12:08"} />
          </label>

          <label>Длится
            <input type="text" readOnly value={"12:08"} />
          </label>
        </fieldset>

        <label className='curr-op__form-item'>Категория
          <select className='' value={'Fadgad dfvsdf adfa sd'} >
            <option value={getUid()} key={getUid()} >JHkhj lhjbj ljhbkj lajknbfgne</option>
            <option value={getUid()} key={getUid()} >JHkhj lhjbj ljhbkj lajknbfgne</option>
            <option value={getUid()} key={getUid()} >JHkhj lhjbj ljhbkj lajknbfgne</option>
            <option value={getUid()} key={getUid()} >JHkhj lhjbj ljhbkj lajknbfgne</option>
            <option value={getUid()} key={getUid()} >JHkhj lhjbj ljhbkj lajknbfgne</option>
          </select>
        </label>

        <label className='curr-op__form-item'>Лог
          <textarea />
        </label>
      </form>
    </div>
  )
}
