function useSortBy(arr: any, key: any) {
  // const [sortToggle, setSortToggle] = useState<boolean>(false);
  // const [sortedPersonList, setSortedPersonList] = useState<any>(arr);

  console.log(arr, "aaaa");
  const sortedArr = [...arr];
  sortedArr.sort((a: any, b: any) => {
    // console.log(b[key], a[key]);
    if (typeof a[key] === "number") {
      console.log("iam number");
      return a[key] - b[key];
    } else if (typeof a[key] === "string") {
      console.log("iam string");
      return a[key].localeCompare(b[key]);
    } else if (typeof a[key] === "boolean") {
      console.log("iam boolean");
      return a[key] - b[key];
    } else if (a[key] instanceof Date) {
      console.log("iam Date");
      return a[key] - b[key];
    } else return 1;
  });

  // Do something
  console.log(sortedArr);
  // setSortedPersonList(copyArr);
  // setSortToggle(!sortToggle);
  // setSortedPersonList(arr);
  // setSortToggle(!sortToggle);

  return { sortedArr };
}

export default useSortBy;

///use it

import useSortBy from "./useSortBy";

const persons = [
  {
    createAt: new Date("Mar 15 2022 08:00:00 AM"),
    name: "ran",
    age: 36,
    isFinish: true,
  },
  {
    createAt: new Date("Mar 15 2022 03:00:00 AM"),
    name: "dori",
    age: 35,
    isFinish: true,
  },
  {
    createAt: new Date("Mar 3 2022 08:00:00 AM"),
    name: "matan",
    age: 33,
    isFinish: false,
  },
  {
    createAt: new Date("Mar 21 2022 08:00:00 AM"),
    name: "zzatan",
    age: 45,
    isFinish: false,
  },
  {
    createAt: new Date("Mar 1 2022 08:00:00 AM"),
    name: "rrrr",
    age: 11,
    isFinish: true,
  },
];

interface personInterface {
  name: string;
  age: number;
  isFinish: boolean;
  createAt: Date;
}

//  const { sortedArr } = useSortBy(personList, "age");
