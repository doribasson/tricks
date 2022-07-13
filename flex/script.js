// function fn({ term, value }) {
function fn(props) {
  const { term, value } = props;
  console.log(...arguments);
  //   console.log(props);
  console.log("term is: ", term);
  console.log("value is: ", value);
  //   console.log("iam fn");
}

// fn({ term: "<", value: 2 });

function fn2(props) {
  const { term, value } = props;
  // console.log(...arguments);
  //   console.log(props);
  console.log("term is: ", term);
  console.log("value is: ", value);
  //   console.log("iam fn");

  return function(...props) {
    let sum = 0;
    if (term === "+") {
      console.log("iam + with porps:", props);
      props.forEach(el => {
        // console.log(el);
        if (el > value) sum = sum + el;
      });
      return sum;
      //   console.log(sum);
      //   console.log(props);
    } else if (term === "-") {
      props.forEach(el => {
        // console.log(el);
        sum = sum - el;
      });
      return sum;
    }
  };
}

const plus = fn2({ term: "+", value: 2 })(2, 1, 3, 5);
const plus2 = fn2({ term: "+", value: 5 })(2, 1, 7, 10);
// const minus = fn2({ term: "-", value: 2 })(3, 6, 8);

console.log(`the sum result is: `, plus2);
// console.log(minus);
