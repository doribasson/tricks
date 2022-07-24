import "./styles.css";
import { transactionsMock } from "./transection";

//from array to obj by year-key
export default function App() {
  console.log(transactionsMock);
  let categoryCountByYear = {};
  const trans = transactionsMock?.reduce((acc, item) => {
    const date = new Date(item.date).getFullYear();
    let max = acc[date] ? Math.max(acc[date].max, item.value) : item.value;
    let sum = acc[date] && acc[date].sum + item.value;
    let counter = acc[date] && acc[date].counter + 1;
    let avg = acc[date] && sum / (acc[date].counter + 1);

    if (acc[date]) {
      acc[date] = {
        ...item,
        max,
        sum,
        counter,
        avg,
        categoryCountByYear: {
          ...acc[date].categoryCountByYear,
          [item.category]:
            (acc[date].categoryCountByYear[item.category] || 0) + 1,
        },
      };
    } else {
      acc[date] = {
        ...item,
        max: item.value,
        sum: item.value,
        counter: 1,
        avg: 1,
        categoryCountByYear: {
          [item.category]: 1,
        },
      };
    }

    return acc;
  }, {});

  console.table(trans);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
