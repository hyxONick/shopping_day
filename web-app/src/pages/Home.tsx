import Counter from '../components/Counter';
import About from "./About";
const  View = () => {
    return (
        <div className='home'>
            <p>Home</p>
            <Counter type="edit" />
            <About />
        </div>
    );
}

export default View;

