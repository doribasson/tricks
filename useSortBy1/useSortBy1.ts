import { useState } from "react";
export default function useSortBy(arr: any) {
  const [sortToggle, setSortToggle] = useState<boolean>(false);
  const [sortedPersonList, setSortedPersonList] = useState<any>(arr);

  const filterBy = (key: string) => {
    const sortedArr = [...sortedPersonList];
    if (!sortToggle) {
      sortedArr.sort((a: any, b: any) => {
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
        } else return 0;
      });
      setSortedPersonList(sortedArr);
    } else {
      setSortedPersonList(sortedArr.reverse());
    }
    setSortToggle((prev) => !prev);
  };
  return { filterBy, sortedPersonList };
}
