import { connect } from 'react-redux';

interface DisplayPageProps {
    count: number;
}
const  About = ({count}: DisplayPageProps) => {
    return (
        <div className='home'>
            <p>About</p>
            <p>Count: {count}</p>
        </div>
    );
}

const mapStateToProps = (state: { counter: { count: number } }) => ({
    count: state.counter.count,
});
export default connect(mapStateToProps)(About);
// export default About;