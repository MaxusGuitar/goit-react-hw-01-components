import PropTypes from "prop-types";

const TransactionHistory = ({items}) => {
    return (
<table className="transaction-history">
  <thead >
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
            {items.map((a) => 
                <tbody key={a.id}>
    <tr >
      <td>{a.type}</td>
      <td>{a.amount}</td>
      <td>{a.currency}</td>
    </tr>
  </tbody>)}
        </table>)
}

TransactionHistory.propTypes = {
   items: PropTypes.array,
}

export default TransactionHistory