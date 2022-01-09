import './TodaysOperations.scss'
import { v4 as getUid } from 'uuid';

export function TodaysOperations() {
  return (
    <div className='today'>
      <h2 className='today__headline'>Операции сегодня</h2>

      <table className="table">
        <thead className="table__head">
          <tr className="table__row table__row_tab-header">
            <th className="table__cell table__cell_col-header">Категория</th>
            <th className="table__cell table__cell_col-header">Лог</th>
            <th className="table__cell table__cell_col-header">ВУ</th>
            <th className="table__cell table__cell_col-header">ВФ</th>
            <th className="table__cell table__cell_col-header">Всего ВУ</th>
            <th className="table__cell table__cell_col-header">Всего ВФ</th>
          </tr>
        </thead>
        <tbody >
          <tr className="table__row">
            <td className="table__cell">12:08</td>
            <td className="table__cell">12:08</td>
            <td className="table__cell">12:08</td>
            <td className="table__cell">12:08</td>
            <td className="table__cell">12:08</td>
            <td className="table__cell">12:08</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
