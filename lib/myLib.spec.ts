import { add } from './myLib.js';
import assert from 'assert';

try {
    assert.strictEqual(add(1, 2), 3);
    console.log('\nsuccess✅\n');
} catch (e) {
    console.error('failure', e);
}
