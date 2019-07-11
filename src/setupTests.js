import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

//configure enzyme for testing
Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
});