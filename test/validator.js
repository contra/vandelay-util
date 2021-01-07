/*eslint no-console: 0*/
import should from 'should'
import createUtil from './helpers/createUtil'

const util = createUtil()

describe('validator', () => {
  it('should exist', async () => {
    should.exist(util.validator)
    should.equal(typeof util.validator, 'object')
    should.equal(typeof util.validator.isURL, 'function')
    should.equal(typeof util.validator.isEmail, 'function')
  })
})
