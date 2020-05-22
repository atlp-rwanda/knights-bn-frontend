import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { TableHeader, Stats } from '../../src/util/reusableTableHeader';

describe('Custom Element', () => {
  it('Render custom Table header', () => {
    const customTable = mount(
      <TableHeader thTitle={['Origin', 'Destination', 'Reason', 'DepatureDate', 'ReturnDate']} />,
    );
    expect(customTable.props().thTitle.length).toEqual(5);
  });
  it('Render custom div', () => {
    const customDiv = mount(
      <Stats length={7} titleText="Pending" className="pending" />,
    );
    expect(customDiv.props().length).toEqual(7);
  });
});
