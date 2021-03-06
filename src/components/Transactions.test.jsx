import React from 'react';
import BigNumber from 'bignumber.js';
import createComponentWithIntl from '../utils/createComponentWithIntl';
import Transactions from './Transactions';


it('renders correctly on empty transactions', () => {
  const tree = createComponentWithIntl(
    <Transactions onClick={() => {}} transactions={[]} network={3} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly on not empty transactions', () => {
  const mergedLog = {
    logBetEvent: {
      transactionHash: '0x0123',
      returnValues: {
        PlayerNumber: new BigNumber(51),
        PlayerAddress: '0x0123',
      },
    },
  };
  const transactions = [mergedLog];
  const tree = createComponentWithIntl(
    <Transactions onClick={() => {}} transactions={transactions} network={3} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
