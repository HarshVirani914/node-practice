import { getNewUser, mapObjectToArray } from '../lib/utils';

describe('mapObjectToArray()', () => {
    test('should return an array of the object keys and values', () => {
        const result = mapObjectToArray({ a: 1, b: 2 }, (key, value) => {
            return value + 10;
        })
        console.log(result);

        expect(result).toStrictEqual([11, 12]);
    })
    test('callbeck gets called', () => {
        const mockCb = jest.fn();
        mapObjectToArray({ a: 1, b: 2 }, mockCb);
        expect(mockCb).toBeCalledTimes(2);
    })
});

describe('getNewUser()', () => {
    test('should return a user', async () => {
        const user = await getNewUser(1);
        expect(user).toBeTruthy();
        expect(user.name).toBe('Goku');
    })

    test('user not fond', async () => {
        expect.assertions(1);
        try {
            await getNewUser(2);
        } catch (e: any) {
            expect(e.message).toBe("User does not exist");
        }
    })
})