import react from 'react';
import { shallow } from 'enzyme';
import Index from './Index.js';

describe('Index', () => {
    it("should render correctly", () => {
        const component = shallow(<Index />);
      });

    it("should render initial layout", () => {
        const component = shallow(<Index />);
        expect(component.getElements()).toMatchSnapshot();
    });
})