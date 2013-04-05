// test numerical functions

var assert = require('assert');
var math = require('../../math.js');

// test det
assert.equal(math.det(3), 3);
assert.equal(math.det([5]), 5);
assert.equal(math.det(math.range(2,2)), 2);
assert.equal(math.det([[1,2],[3,4]]), -2);
assert.equal(math.det(math.matrix([[1,2],[3,4]])), -2);
assert.equal(math.det([
    [-2, 2,  3],
    [-1, 1,  3],
    [ 2, 0, -1]
]), 6);
assert.equal(math.det([
    [ 1, 4,  7],
    [ 3, 0,  5],
    [-1, 9, 11]
]), -8);
assert.equal(math.det(math.diag([4,-5,6])), -120);

// test diag
assert.deepEqual(math.diag([1,2,3]).valueOf(), [[1,0,0],[0,2,0],[0,0,3]]);
assert.deepEqual(math.diag([1,2,3], 1).valueOf(), [[0,1,0,0],[0,0,2,0],[0,0,0,3]]);
assert.deepEqual(math.diag([1,2,3], -1).valueOf(), [[0,0,0],[1,0,0],[0,2,0],[0,0,3]]);
assert.deepEqual(math.diag([[1,2,3],[4,5,6]]).valueOf(), [1,5]);
assert.deepEqual(math.diag([[1,2,3],[4,5,6]],1).valueOf(), [2,6]);
assert.deepEqual(math.diag([[1,2,3],[4,5,6]],-1).valueOf(), [4]);
assert.deepEqual(math.diag([[1,2,3],[4,5,6]],-2).valueOf(), []);
assert.deepEqual(math.diag(math.range(1,3)).valueOf(), [[1,0,0],[0,2,0],[0,0,3]]);
assert.throws(function () {math.diag([[[1],[2]],[[3],[4]]])});
// TODO: test diag for all types of input (also scalar)

// test eye
assert.deepEqual(math.eye().valueOf(), [[1]]);
assert.deepEqual(math.eye([]).valueOf(), [[1]]);
assert.deepEqual(math.eye(1).valueOf(), [[1]]);
assert.deepEqual(math.eye(2).valueOf(), [[1,0],[0,1]]);
assert.deepEqual(math.eye([2]).valueOf(), [[1,0],[0,1]]);
assert.deepEqual(math.eye(2,3).valueOf(), [[1,0,0],[0,1,0]]);
assert.deepEqual(math.eye(3,2).valueOf(), [[1,0],[0,1],[0,0]]);
assert.deepEqual(math.eye([3,2]).valueOf(), [[1,0],[0,1],[0,0]]);
assert.deepEqual(math.eye(math.matrix([3,2])).valueOf(), [[1,0],[0,1],[0,0]]);
assert.deepEqual(math.eye(math.matrix([[3],[2]])).valueOf(), [[1,0],[0,1],[0,0]]);
assert.deepEqual(math.eye(3,3).valueOf(), [[1,0,0],[0,1,0],[0,0,1]]);
assert.throws(function () {math.eye(3,3,2);});
assert.throws(function () {math.eye([3,3,2]);});

// test inv
assert.deepEqual(math.inv(4), 1/4);
assert.deepEqual(math.inv([4]), [1/4]);
assert.deepEqual(math.inv([[4]]), [[1/4]]);
assert.ok(math.inv(math.matrix([4])) instanceof math.type.Matrix);
assert.ok(math.inv(math.matrix([[4]])) instanceof math.type.Matrix);
assert.deepEqual(math.inv(math.matrix([4])).valueOf(), [1/4]);
assert.deepEqual(math.inv(math.matrix([[4]])).valueOf(), [[1/4]]);
assert.deepEqual(math.inv(math.matrix([[1,2],[3,4]])).valueOf(), [[-2, 1],[1.5, -0.5]]);
assert.deepEqual(math.format(math.inv([
    [ 1, 4,  7],
    [ 3, 0,  5],
    [-1, 9, 11]
])), math.format([
    [ 5.625, -2.375, -2.5],
    [ 4.75,  -2.25,  -2],
    [-3.375,  1.625,  1.5]
]));
assert.deepEqual(math.format(math.inv([
    [ 2, -1,  0],
    [-1,  2, -1],
    [ 0, -1,  2]
])), math.format([
    [3/4, 1/2, 1/4],
    [1/2, 1,   1/2],
    [1/4, 1/2, 3/4]
]));
assert.deepEqual(math.format(math.divide(1, [
    [ 1, 4,  7],
    [ 3, 0,  5],
    [-1, 9, 11]
])), math.format([
    [ 5.625, -2.375, -2.5],
    [ 4.75,  -2.25,  -2],
    [-3.375,  1.625,  1.5]
]));

// test ones
assert.deepEqual(math.ones().valueOf(), [[1]]);
assert.deepEqual(math.ones([]).valueOf(), [[1]]);
assert.deepEqual(math.ones(3).valueOf(), [[1,1,1],[1,1,1],[1,1,1]]);
assert.deepEqual(math.ones(2,3).valueOf(), [[1,1,1],[1,1,1]]);
assert.deepEqual(math.ones(3,2).valueOf(), [[1,1],[1,1],[1,1]]);
assert.deepEqual(math.ones([3,2]).valueOf(), [[1,1],[1,1],[1,1]]);
assert.deepEqual(math.ones(math.matrix([3,2])).valueOf(), [[1,1],[1,1],[1,1]]);
assert.deepEqual(math.ones(math.matrix([[[3]],[[2]]])).valueOf(), [[1,1],[1,1],[1,1]]);
assert.deepEqual(math.ones(2,2,2).valueOf(), [[[1,1],[1,1]],[[1,1],[1,1]]]);
assert.deepEqual(math.ones([2,2,2]).valueOf(), [[[1,1],[1,1]],[[1,1],[1,1]]]);
a = math.matrix([[1, 2, 3], [4, 5, 6]]);
assert.deepEqual(math.ones(math.size(a)).size(), a.size());

// test size
assert.deepEqual(math.size([[1,2,3],[4,5,6]]), [2,3]);
assert.deepEqual(math.size([[[1,2],[3,4]],[[5,6],[7,8]]]), [2,2,2]);
assert.deepEqual(math.size([1,2,3]), [3]);
assert.deepEqual(math.size([[1],[2],[3]]), [3,1]);
assert.deepEqual(math.size(100), []);
assert.deepEqual(math.size([100]), [1]);
assert.deepEqual(math.size([[100]]), [1,1]);
assert.deepEqual(math.size([[[100]]]), [1,1,1]);
assert.deepEqual(math.size([]), [0]);
assert.deepEqual(math.size([[]]), [0,0]);
assert.deepEqual(math.size([[[]]]), [0,0,0]);
assert.deepEqual(math.size('hello'), [5]);
assert.deepEqual(math.size(''), [0]);
assert.deepEqual(math.size(math.complex(2,3)), []);
assert.deepEqual(math.size(null), []);
assert.deepEqual(math.size(math.matrix()), [0]);
assert.deepEqual(math.size(math.range(2,5)), [4]);
// TODO: test whether math.size throws an error in case of invalid data or size

// test squeeze
m = math.ones(1,3,2);
assert.deepEqual(math.size(m).valueOf(), [1,3,2]);
assert.deepEqual(math.size(math.squeeze(m)).valueOf(), [3,2]);
m = math.ones(3,1,1);
assert.deepEqual(math.size(m).valueOf(), [3,1,1]);
assert.deepEqual(math.size(math.squeeze(m)).valueOf(), [3]);
assert.deepEqual(math.squeeze(2.3), 2.3);
assert.deepEqual(math.size(math.squeeze(math.range(1,5))), [5]);

// test transpose
assert.deepEqual(math.transpose(3), 3);
assert.deepEqual(math.transpose([1,2,3]), [1,2,3]);
assert.deepEqual(math.transpose([[1,2,3],[4,5,6]]), [[1,4],[2,5],[3,6]]);
assert.deepEqual(math.transpose([[1,2],[3,4]]), [[1,3],[2,4]]);
assert.deepEqual(math.transpose([[1,2,3,4]]), [[1],[2],[3],[4]]);
assert.deepEqual(math.transpose([[]]), [[]]);
assert.throws(function () {math.transpose([[[1],[2]],[[3],[4]]])});

// test zeros
assert.deepEqual(math.zeros().valueOf(), [[0]]);
assert.deepEqual(math.zeros([]).valueOf(), [[0]]);
assert.deepEqual(math.zeros(3).valueOf(), [[0,0,0],[0,0,0],[0,0,0]]);
assert.deepEqual(math.zeros(2,3).valueOf(), [[0,0,0],[0,0,0]]);
assert.deepEqual(math.zeros(3,2).valueOf(), [[0,0],[0,0],[0,0]]);
assert.deepEqual(math.zeros([3,2]).valueOf(), [[0,0],[0,0],[0,0]]);
assert.deepEqual(math.zeros(math.matrix([3,2])).valueOf(), [[0,0],[0,0],[0,0]]);
assert.deepEqual(math.zeros(math.matrix([[[3]],[[2]]])).valueOf(), [[0,0],[0,0],[0,0]]);
assert.deepEqual(math.zeros(2,2,2).valueOf(), [[[0,0],[0,0]],[[0,0],[0,0]]]);
assert.deepEqual(math.zeros([2,2,2]).valueOf(), [[[0,0],[0,0]],[[0,0],[0,0]]]);
var a = math.matrix([[1, 2, 3], [4, 5, 6]]);
assert.deepEqual(math.zeros(math.size(a)).size(), a.size());
