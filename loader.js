import dynamic from 'next/dynamic';
import componentTable from './componentTable';

const loader = (id) => {
    let loadFn = componentTable[id];
    if (loadFn) {
        return loadFn();
    }
    return () => <div>Error: Component {id} does not exist</div>;
}

export default loader;