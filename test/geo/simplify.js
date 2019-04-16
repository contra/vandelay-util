/*eslint no-console: 0*/
import should from 'should'
import createUtil from '../../src/util'

const util = createUtil()

describe('geo#simplify', () => {
  it('should exist', async () => {
    should.exist(util.geo.simplify)
    should.equal(typeof util.geo.simplify, 'function')
  })
  it('should return undefined given no args', async () => {
    should.not.exist(util.geo.simplify())
    should.not.exist(util.geo.simplify(null))
  })
  it('should work with polygon', async () => {
    const src = {
      type: 'Polygon',
      coordinates: [
        [ [ 100.0, 0.0 ], [ 101.0, 0.0 ], [ 101.0, 1.0 ], [ 100.0, 1.0 ], [ 100.0, 0.0 ] ],
        [ [ 100.2, 0.2 ], [ 100.8, 0.2 ], [ 100.8, 0.8 ], [ 100.2, 0.8 ], [ 100.2, 0.2 ] ]
      ]
    }
    const expected = {
      type: 'Polygon',
      coordinates: src.coordinates
    }
    util.geo.simplify(src).should.eql(expected)
    util.geo.simplify(expected).should.eql(expected)
  })
  it('should work with linestring', async () => {
    const src = {
      type: 'LineString',
      coordinates: [ [ -79.808996, 36.070662 ],
        [ -79.809, 36.07066 ],
        [ -79.80891, 36.070629999999994 ],
        [ -79.809, 36.070499999999996 ],
        [ -79.80906, 36.07035 ],
        [ -79.80912000000001, 36.07018 ],
        [ -79.80922000000001, 36.07003 ],
        [ -79.80940000000001, 36.06989 ],
        [ -79.80961, 36.06992 ],
        [ -79.80994000000001, 36.069970000000005 ],
        [ -79.81016000000001, 36.07001 ],
        [ -79.81026000000001, 36.06989 ],
        [ -79.81033000000001, 36.06976 ],
        [ -79.8104, 36.06962 ],
        [ -79.81045, 36.06947 ],
        [ -79.81048, 36.06933 ],
        [ -79.81057, 36.06914 ],
        [ -79.81061, 36.069019999999995 ],
        [ -79.81062, 36.068889999999996 ],
        [ -79.81067, 36.068769999999994 ],
        [ -79.81076, 36.06858999999999 ],
        [ -79.81078000000001, 36.06844999999999 ],
        [ -79.811, 36.068369999999994 ],
        [ -79.81120000000001, 36.068389999999994 ],
        [ -79.81137000000001, 36.068389999999994 ],
        [ -79.81151000000001, 36.06842999999999 ],
        [ -79.81168000000001, 36.06844999999999 ],
        [ -79.81184, 36.06844999999999 ],
        [ -79.81201, 36.06841999999999 ],
        [ -79.8124, 36.068409999999986 ],
        [ -79.81239, 36.06841999999999 ],
        [ -79.81239, 36.06853999999999 ],
        [ -79.81258, 36.067519999999995 ],
        [ -79.81258, 36.067389999999996 ],
        [ -79.8126, 36.06726999999999 ],
        [ -79.81262000000001, 36.067069999999994 ],
        [ -79.81264000000002, 36.06692999999999 ],
        [ -79.81265000000002, 36.06679999999999 ],
        [ -79.81266000000002, 36.06667999999999 ],
        [ -79.81266000000002, 36.06654999999999 ],
        [ -79.81267000000003, 36.066419999999994 ],
        [ -79.81267000000003, 36.06629999999999 ],
        [ -79.81266000000002, 36.06581999999999 ],
        [ -79.81266000000002, 36.06565999999999 ],
        [ -79.81269000000002, 36.065519999999985 ],
        [ -79.81307000000002, 36.06543999999999 ],
        [ -79.81344000000003, 36.065339999999985 ],
        [ -79.81357000000003, 36.065299999999986 ],
        [ -79.81380000000003, 36.06527999999999 ],
        [ -79.81397000000003, 36.06530999999999 ],
        [ -79.81423000000002, 36.06533999999999 ] ]
    }
    const expected = {
      type: 'LineString',
      coordinates: [
        [ -79.808996, 36.070662 ],
        [ -79.80891, 36.07063 ],
        [ -79.809, 36.0705 ],
        [ -79.80912, 36.07018 ],
        [ -79.80922, 36.07003 ],
        [ -79.8094, 36.06989 ],
        [ -79.81016, 36.07001 ],
        [ -79.81026, 36.06989 ],
        [ -79.8104, 36.06962 ],
        [ -79.81048, 36.06933 ],
        [ -79.81061, 36.06902 ],
        [ -79.81062, 36.06889 ],
        [ -79.81076, 36.06859 ],
        [ -79.81078, 36.06845 ],
        [ -79.811, 36.06837 ],
        [ -79.81137, 36.06839 ],
        [ -79.81151, 36.06843 ],
        [ -79.81168, 36.06845 ],
        [ -79.81184, 36.06845 ],
        [ -79.81201, 36.06842 ],
        [ -79.8124, 36.06841 ],
        [ -79.81239, 36.06854 ],
        [ -79.81258, 36.06752 ],
        [ -79.81258, 36.06739 ],
        [ -79.81264, 36.06693 ],
        [ -79.81267, 36.06642 ],
        [ -79.81266, 36.06566 ],
        [ -79.81269, 36.06552 ],
        [ -79.81307, 36.06544 ],
        [ -79.81357, 36.0653 ],
        [ -79.8138, 36.06528 ],
        [ -79.81423, 36.06534 ] ]
    }
    util.geo.simplify(src).should.eql(expected)
    util.geo.simplify(expected).should.eql(expected)
  })
})
