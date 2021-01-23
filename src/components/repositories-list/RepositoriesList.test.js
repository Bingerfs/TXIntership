import react from 'react';
import { shallow } from 'enzyme';
import RepositoriesList from './RepositoriesList.js';

describe('RepositoriesList', () => {
    it("should render correctly", () => {
        const users = [];
        const component = shallow(<RepositoriesList users={ users } />);
      });

    it("should render initial layout", () => {
        const users = [];
        const component = shallow(<RepositoriesList users={ users }/>);
        expect(component.getElements()).toMatchSnapshot();
    });
})