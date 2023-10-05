import { categories } from "../App";

interface Props {
  onChangeCategory: (category: string) => void;
}

const ExpensesFilter = ({ onChangeCategory }: Props) => {
  
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeCategory(e.target.value);
  };

  return (
    <div className="">
      <div className="d-flex justify-content-center">
      <select name="filter" id="filter" className="form-select w-25 ml-5" onChange={handleChange}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
    </div>
  );
};

export default ExpensesFilter;
