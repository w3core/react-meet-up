/* eslint-disable */
const log = (...args) => console.log(...args);

{
  const A = 1;
  let a = A;

  a++;
  log('Block-Scoped variables/constants', a);
}

{
  const b = (a, b = 2, { c, ...d }) => ({
    a,
    b,
    c,
    d,
    ...d,
    [`${a}#${b}`]: c,
  });
  const obj = { c: 3, d: 4, e: 5 };
  const args = ['aaa', undefined, obj];

  const { c, d, e, f = 'fff' } = b(...args);

  log({
    c,
    d,
    e,
    f,
  });
}

{
  const array = [1, 2, 3];
  const [a, , b, c = 'ccc'] = array;

  log({ a, b, c });
}

{
  const array = [1, 2, 3, 4, 5];
  const object = { a: 1, b: 2, c: 3 };

  array.forEach((value, index) => log(value, index));
  log(array.map((value, index) => ({ value, index })));

  Object.keys(object).forEach(index => log(object[index]));
}

{
  const asyncFunction = param =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (true) {
          resolve(param);
        } else {
          reject(new Error('Some error'));
        }
      }, 1e3);
    });

  asyncFunction('OK')
    .then(param => {
      log(param);

      return true;
    })
    .then(previousResult => log(previousResult))
    .catch(reason => log(reason));
}

export const A = 'AAA';
export const B = 'BBB';
export default param => param;
