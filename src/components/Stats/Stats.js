import './Stats.scss'
import { v4 as getUid } from 'uuid';

export function Stats() {
  return (
    <div className='stats'>
      <h2 className='stats__headline'>Статистика</h2>

      <table className="table">
        <thead className="table__head">
          <tr className="table__row table__row_tab-header">
            <th className="table__cell table__cell_col-header"></th>
            <th className="table__cell table__cell_col-header">ВУ</th>
            <th className="table__cell table__cell_col-header">Р</th>
            <th className="table__cell table__cell_col-header">ВФ</th>
            <th className="table__cell table__cell_col-header">Р</th>
          </tr>
        </thead>
        <tbody >
          <tr className="table__row">
            <th className="table__cell table__cell_row-header">Сегодня</th>
            <td className="table__cell">12:08</td>
            <td className="table__cell">12:08</td>
            <td className="table__cell">12:08</td>
            <td className="table__cell">12:08</td>
          </tr>

          <tr className="table__row">
            <th className="table__cell table__cell_row-header">Всего</th>
            <td className="table__cell">12:08</td>
            <td className="table__cell">12:08</td>
            <td className="table__cell">12:08</td>
            <td className="table__cell">12:08</td>
          </tr>

          <tr className="table__row">
            <th className="table__cell table__cell_row-header">Перерыв сегодня</th>
            <td className="table__cell">12:08</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
