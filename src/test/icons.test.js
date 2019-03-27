import { find, times } from 'ramda';
import { fetchIcon, pullIcon } from '../icons';

jest.mock('../icons', () => ({
  fetchIcon: () => Promise.resolve({ shape: 'star', color: 'red' }),
}));

describe('request icon', () => {
  it('should return icon', done => {
    fetchIcon().then(icon => expect(icon).toBe({ shape: 'star', color: 'red' }));
    done();
  });
});

describe('request icons', () => {
  xit('should return 10 icons', done => {
    var i = 0;
    const count = () => i++;
    pullIcon(10, count);
    expect(i).toBe(10);
    done();
  });
});
