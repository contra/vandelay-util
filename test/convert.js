/*eslint no-console: 0*/
import should from 'should'
import createUtil from './helpers/createUtil'

const util = createUtil()

describe('convert', () => {
  it('should exist', async () => {
    should.exist(util.convert)
    should.equal(typeof util.convert, 'function')
  })
  it('should convert fahrenheit to celsius', async () => {
    util.convert('1').from('F').to('C').should.equal(-17.22222222222222)
  })
  it('should mi to km', async () => {
    util.convert(1).from('mi').to('km').should.equal(1.6093439485009937)
  })
  it('should mph to kph', async () => {
    util.convert(1).from('m/h').to('km/h').should.equal(1.609344)
  })
})
