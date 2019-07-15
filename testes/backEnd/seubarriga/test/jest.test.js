test('Devo conhecer as principaos assertivas do Jest', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
})

test('Devo saber trabalhar com objetos', () => {
  const obj = {name: 'Rodrigo BJ', mail: 'rodrigojeansantos@gmail.com'}
  expect(obj).toHaveProperty('name')
  expect(obj).toHaveProperty('name', 'Rodrigo BJ')
  expect(obj.name).toBe('Rodrigo BJ')

  const obj2 = { name: 'Rodrigo BJ', mail: 'rodrigojeansantos@gmail.com'}
  expect(obj).toEqual(obj2)

  //expect(obj).toBe(obj2) // São instancias diferentes.
});
