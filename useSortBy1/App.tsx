import useSortBy1 from "./useSortBy";

interface personInterface {
    name: string;
    age: number;
    isFinish: boolean;
    createAt: Date;
}

const persons: personInterface[] = [
    {
        createAt: new Date("Mar 15 2022 08:00:00 AM"),
        name: "ran",
        age: 36,
        isFinish: true
    },
    {
        createAt: new Date("Mar 15 2022 03:00:00 AM"),
        name: "dori",
        age: 35,
        isFinish: true
    },
    {
        createAt: new Date("Mar 3 2022 08:00:00 AM"),
        name: "matan",
        age: 33,
        isFinish: false
    },
    {
        createAt: new Date("Mar 21 2022 08:00:00 AM"),
        name: "zzatan",
        age: 45,
        isFinish: false
    },
    {
        createAt: new Date("Mar 1 2022 08:00:00 AM"),
        name: "rrrr",
        age: 11,
        isFinish: true
    }
];

export default function App() {
    const { filterBy, sortedPersonList } = useSortBy1(persons);
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button type="button" onClick={() => filterBy("age")}>
                click
            </button>

            {sortedPersonList.map((person: personInterface, i: number) => (
                <ul key={i}>
                    <li>name: {person["name"]}</li>
                    <li>age: {person.age}</li>
                    <li>isFinish: {person.isFinish.toString()}</li>
                    <li>createAt: {person.createAt.toDateString()}</li>
                </ul>
            ))}
        </div>
    );
}
