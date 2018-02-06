/**
 * Created by michael on 06/02/2018.
 */

import React from 'react';
import renderer from 'react-test-renderer';

import HostedOn from './index';

test('HostedOn has expected structure', () => {
  const component = renderer.create(
    <HostedOn />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  console.log('Tree:');
  console.log(tree);

  expect(tree.type).toEqual("div");
  expect(tree.children.length).toEqual(1);
  expect(tree.children[0].type).toEqual("div");
});