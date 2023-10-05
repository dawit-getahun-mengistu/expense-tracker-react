import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  addExpense: (expense: {
    title: string;
    amount: number;
    category: string;
  }) => void;
}

const schema = z.object({
  title: z.string().min(3),
  amount: z.number({ invalid_type_error: "Amount must be entered" }),
  category: z.string().nonempty({ message: "You must choose a category" }),
});

type FormData = z.infer<typeof schema>;

const ExpenseForm = ({ addExpense }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    addExpense({
      title: data.title,
      amount: data.amount,
      category: data.category,
    });
  };

  return (
    <div className="container">
      <form className="container w-50 mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input className="form-control" {...register("title")} />
          {errors.title && (
            <p className="text-danger">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            type="number"
            className="form-control"
            {...register("amount", { valueAsNumber: true })}
            step={0.01}
            min={0.0}
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <label className="mb-2">Category</label>
        <select className="form-select mb-3" {...register("category")}>
          <option value=""></option>
          <option value="Groceries">Grocery</option>
          <option value="Utility">Utitlities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}

        <button disabled={!isValid} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
