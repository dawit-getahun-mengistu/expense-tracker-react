

interface Props {
  expensesList: {
    id: number;
    title: string;
    amount: number;
    category: string;
  }[];
  onRemove: (expenseId: number) => void;
}

const ExpensesTable = ({ expensesList, onRemove }: Props) => {
  return (
    <div className="container w-75 mt-5 ">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {expensesList.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.title}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    onRemove(expense.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              {expensesList.reduce((acc, expense) => expense.amount + acc, 0)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpensesTable;
