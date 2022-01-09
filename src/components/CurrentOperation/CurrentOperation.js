import './CurrentOperation.scss'
import { v4 as getUid } from 'uuid';

export function CurrentOperation() {
  return (
    <div className='current'>
      <h2 className='current__headline'>Текущая операция</h2>

      <form className='current__form'>
        <div className='current__form-body' >
          <fieldset className='current__item current__field-row'>
            <div className='current__field current__field_row-member'>
              <label className='current__label' for="start-time" >Начало</label>
              <input className='current__text-input' id="start-time" type="text" readOnly value={"12:08"} />
            </div>

            <div className='current__field current__field_row-member'>
              <label className='current__label' for="duration">Длится</label>
              <input className='current__text-input' id="duration" type="text" readOnly value={"12:08"} />
            </div>
          </fieldset>

          <div className='current__item current__field'>
            <label className='current__label' for="category">Категория</label>
            <select className='current__dropdown current__row-single-member-input' id="category" value={'Fadgad dfvsdf adfa sd'} >
              <option value={getUid()} key={getUid()} >JHkhj lhjbj ljhbkj lajknbfgne</option>
              <option value={getUid()} key={getUid()} >JHkhj lhjbj ljhbkj lajknbfgne</option>
              <option value={getUid()} key={getUid()} >JHkhj lhjbj ljhbkj lajknbfgne</option>
              <option value={getUid()} key={getUid()} >JHkhj lhjbj ljhbkj lajknbfgne</option>
              <option value={getUid()} key={getUid()} >JHkhj lhjbj ljhbkj lajknbfgne</option>
            </select>
          </div>

          <div className='current__item current__field'>
            <label className='current__label' for="log">Лог</label>
            <textarea className='current__text-input current__row-single-member-input' id="log" />
          </div>
        </div>

        <div className='current__form-controls'>
          <div className='current__field'>
            <input className="current__checkbox" id="to-be-reported" type="checkbox" />
            <label className='current__label' for="to-be-reported">Учет</label>
          </div>

          <button className="current__button" type="button">Начать</button>

          <button className="current__button" type="submit">Сохранить</button>
        </div>
      </form>
    </div>
  )
}
