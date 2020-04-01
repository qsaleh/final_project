 // __tests__/Login-page-test.js
import 'react-native';
import React from 'react';
import LogIn from '../login';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <LogIn />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});

import 'react-native';
import React from 'react';
import ButtonWithBackground from '../ButtonWithBackground';
import renderer from 'react-test-renderer';

describe('ButtonWithBackground', () => {
    describe('Rendering', () => {
        it('should match to snapshot', () => {
            const component = shallow(<ButtonWithBackground label="test label"/>)
            expect(component).toMatchSnapshot()
        });
    });
});