import useLocalStorage from './useLocalStorage';
import data from "./data.json";



export default function App() {
    const [siteList, setSiteList] = useLocalStorage<any>("siteList", data);
    return (
        <div className="Cart">
            <h1>My Cart</h1>
        </div>
    );
}