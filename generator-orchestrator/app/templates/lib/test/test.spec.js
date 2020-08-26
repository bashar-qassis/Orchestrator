import { foo } from '../src/app'

describe('', () => {
    it('should return bar', function () {
        expect(foo()).to.deep.equal('bar')
    })
})
