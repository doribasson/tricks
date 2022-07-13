import { useState } from "react";

const App = () => {
  const [stduent, setStudent] = useState(["dori", "avi", "eyal"]);

  const addStudent = () => {
    // const newStudent = [...stduent];
    // const newStudent = stduent.slice();
    // newStudent.push("basson");
    // setStudent(newStudent);

    const newStudent = stduent.slice();
    // newStudent.splice(2, 0, "sss"); //["dori", "avi", "sss"]
    // newStudent.splice(3, 0, "sss"); //["dori", "avi", "eyal", "sss"]
    // newStudent.splice(-1, 1) //["dori", "avi"]
    // newStudent.splice(0, 1); //["avi", "eyal"]
    // newStudent.splice(newStudent.length, 0, "elad"); //["dori", "avi", "eyal", "elad"]
    //setStudent(temp);

    // const temp = newStudent.slice(0, 2); //["dori", "avi"]
    // setStudent(temp);

    // setStudent(prevStudent => [...prevStudent, "basson"]);
    // setStudent(prevStudent => ["basson", ...prevStudent]);

    const removeIndex = newStudent.indexOf("avi"); //in cell 1
    console.log(removeIndex);
    newStudent.splice(removeIndex, 1);
    setStudent(newStudent); ////["dori", "eyal"]

    // setStudent(prevStudent => prevStudent.filter(item => item !== "avi"));

    // const index = newStudent.indexOf("avi");
    // console.log(index);
    // setStudent(prevStudent => {
    //   const newState = prevStudent.slice();
    //   newState.splice(index, 1);
    //   return newState; //["dori", "eyal"]
    // });

    //   const index = newStudent.indexOf("avi");
    //   console.log(index);
    //   setStudent(prevStudent => {
    //     prevStudent.splice(index, 1);
    //     return [...prevStudent]; //["dori", "eyal"]
    //   });
    //
  };

  const studentList = stduent.map((item, i) => {
    return <li key={i}>{item + " "}</li>;
  });

  return (
    <div>
      {console.log(stduent)}
      {stduent.map((item, i) => (
        <li key={i}>{item + " "}</li>
      ))}
      <hr />
      {studentList}
      <button type="button" onClick={addStudent}>
        addStduent
      </button>
    </div>
  );
};

export default App;
