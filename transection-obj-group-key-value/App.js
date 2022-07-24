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

// // from this
// export const transactionsMock = [
//   {
//     id: '6b0a8994-be60-453a-b7fe-4c0aadd8a584',
//     description: 'adipisicing ea',
//     category: 'Entertainment',
//     value: 798.56,
//     date: '2013-10-11T05:44:52+03:00',
//   },
//   {
//     id: '552eee6a-9399-4802-bf19-0d23fda93cdc',
//     description: 'mollit enim',
//     category: 'Food',
//     value: 584,
//     date: '2021-06-01T10:01:11+03:00',
//   }
// ]

// // to this

// 2013= {
//   id: "dd769a42-db93-46ca-bfa0-f5737c9c25ee",
//   description: "occaecat deserunt",
//   category: "Pets",
//   value: 857.32,
//   date: "2010-04-13T10:55:41+03:00",
//   max: 987.7,
//   sum: 14861.64,
//   counter: 31,
//   avg: 479.40774193548384,
//   categoryCountByYear: {
//     Furniture: 6,
//     Pets: 6,
//     Electronics: 4,
//     Entertainment: 3,
//     Health: 2,
//     Shopping: 2,
//     Transportation: 5,
//     Clothing: 2,
//     Food: 1,
// }
//  }
// 2011= {
// id: "105cedd4-d902-448f-8287-8bc11ea08595",
// description: "minim officia",
// category: "Shopping",
// value: 156.12,
// date: "2011-12-04T11:53:58+02:00",
// max: 928.57,
// sum: 14711.72,
// counter: 34,
// avg: 432.6976470588235,
// categoryCountByYear: {...}
// }
