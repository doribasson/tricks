sumByTerm({ term: ">", value: 5 })(4, 6, 7);
sumByTerm({ term: "<", value: 2 })(-4, 7, 1, 0, 3);
const a = sumByTerm({ term: ">", value: 5 });
a(4, 6, 7);
console.log(a);

// function sumByTerm({term,value}){
//     if(term==='>')

//     ``
// }

// const res = sumByTerm({ term: '>', value: 5 })(4, 6, 7);
