import React from 'react'
import '../css/table.css'

const Table = (props) => {
  return (
    <div className="table">
        <table>
            <thead>
                <tr>
                    <th>{props.columns}</th>
                    <th>{props.columns}</th>
                    <th>{props.columns}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.rows}</td>
                    <td>{props.rows}</td>
                    <td>{props.rows}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table