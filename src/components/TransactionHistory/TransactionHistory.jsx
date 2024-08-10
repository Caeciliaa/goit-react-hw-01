import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.transactionHistoryTitle}>Type</th>
          <th className={css.transactionHistoryTitle}>Amount</th>
          <th className={css.transactionHistoryTitle}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.transactionHistoryText}>{type}</td>
            <td className={css.transactionHistoryText}>{amount}</td>
            <td className={css.transactionHistoryText}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
