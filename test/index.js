import { expect } from 'chai';
import { flatten } from "../src/index.js";

describe('#flatten', async () => {

    it('It should flatten an array 2-level nested, numbers', async () => {
        const input = [1, [2, [3]], 4];
        const result = flatten(input);

        expect(result).to.be.an.instanceof(Array);
        expect(result).to.have.lengthOf(4);
        expect(result).to.deep.equal([1, 2, 3, 4]);
    });

    it('It should flatten an array 3-level nested, strings', async () => {
        const input = ['1', ['2', ['3', '4', ['5', '6']], '7'], '8'];
        const result = flatten(input);

        expect(result).to.be.an.instanceof(Array);
        expect(result).to.have.lengthOf(8);
        expect(result).to.deep.equal(['1', '2', '3', '4', '5', '6', '7', '8']);
    });

    it('It should flatten an array 8-level nested', async () => {
        const input = [1, [2, [3, [4, [5, [6, [7, [8, 9]]]]]]]];
        const result = flatten(input);

        expect(result).to.be.an.instanceof(Array);
        expect(result).to.have.lengthOf(9);
        expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('It should flatten an array 20-level nested', async () => {
        const input = [1, [2, [3, [4, [5, [6, [7, [8, 9]]]]]]]];
        const result = flatten(input);

        expect(result).to.be.an.instanceof(Array);
        expect(result).to.have.lengthOf(9);
        expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('It should flatten an array 2-level nested, having objects', async () => {
        const input = [
            { car: { model: 'Tesla ModelX', motor: 'Dual Motor AWD 60D' }, },
            [
                { model: 'AWD 90D', year: '2016' },
                { model: 'AWD P90D', year: '2016' },
                { model: 'AWD P100D', year: '2016' }
            ],
            ['white', 'black', 'red']
        ]
        const result = flatten(input);

        expect(result).to.be.an.instanceof(Array);
        expect(result).to.have.lengthOf(7);
        expect(result).to.deep.equal([
            input[0],
            input[1][0],
            input[1][1],
            input[1][2],
            input[2][0],
            input[2][1],
            input[2][2]
        ]);
    })

    it('It should throw error when input type is not an Array', async () => {
        const result = flatten('string input');
        expect(result?.message).to.eq('Input must be an instance of Array.');
    });

    it('It should throw error when input is not given', async () => {
        const result = flatten();
        expect(result?.message).to.eq('Input must be an instance of Array.');
    });
});

