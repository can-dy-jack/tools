/**
 * 斐波那契数列生成器
 * @return {Generator<number>}
 */
const fibGenerator = function*(a = 0, b = 1) {
    yield a;
    yield *fibGenerator(b, a+b);
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

export default fibGenerator;
