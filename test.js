import test from 'ava';
import x from './';

test(t => {
	t.true(x.indexOf(process.arch) !== -1);
});
