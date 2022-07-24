// import "./styles.css";
// import { transactionsMock } from "./transection";

// export default function App() {
//   console.log(transactionsMock);

//   const trans = transactionsMock?.reduce((acc, item) => {
//     const date = new Date(item.date).getFullYear();
//     console.log(typeof date);
//     // console.log(item['value']);
//     // acc["date"] = "eee";
//     // let max = Math.max(acc[date] ? acc[date].max : item.value, item.value);
//     let max = acc[date] ? Math.max(acc[date].max, item.value) : item.value;
//     let sum = acc[date] && acc[date].sum + item.value;
//     let counter = acc[date] && acc[date].counter + 1;
//     let avg = acc[date] && sum / (acc[date].counter + 1);
//     console.log("item.category", item.category);
//     // acc[date][item.category] = acc[date][item.category]
//     //   ? acc[date][item.category] + 1
//     //   : 1;

//     if (acc[date]) {
//       acc[date] = { ...item, max, sum, counter, avg };
//       // acc[date][item.category] = acc[date][item.category] + 1;
//     } else {
//       acc[date] = {
//         ...item,
//         max: item.value,
//         sum: item.value,
//         counter: 1,
//         avg: 1,
//         // category: 1
//         // description
//       };
//       // acc[date][item.category] = 1;
//     }
//     //  acc[date] =
//     //   ? { ...item, max: item.max < item.value ? item.value : item.max }
//     //   : { ...item, max: item.value };

//     // console.log(item.max);
//     return acc;
//   }, {});

//   console.table(trans);

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

import "./styles.css";
import { transactionsMock } from "./transection";

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
        // maxCountCategory: Math.max(
        //   ...Object.values(acc[date].categoryCountByYear)
        // maxCountCategory: (() => {
        //   let maxCategoryInstance = acc[date].categoryCountByYear[0];
        //   console.log("times", maxCategoryInstance);
        //   // console.log("asasdds");

        //   return (() => {
        //     // console.log("bb", maxCategoryInstance);
        //     console.log("times2", maxCategoryInstance);

        //     Object.keys(acc[date].categoryCountByYear).reduce((key) => {
        //       // console.log(key,'ddddddddd');
        //       if (acc[date].categoryCountByYear[key] > maxCategoryInstance) {
        //         maxCategoryInstance = key;
        //       }
        //       return maxCategoryInstance;
        //     });
        //     console.log(maxCategoryInstance);
        //     return maxCategoryInstance;
        //   })();
        // })()
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
    // console.log(item.max);
    // console.log(Math.max(...[2, 9, 7]));
    // console.log(Math.max(...new Set([2, 9, 7])));

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
