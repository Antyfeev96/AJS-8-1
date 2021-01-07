import Team from '../app';

test('Character should be added', () => {
  const team = new Team();
  const dima = {
    class: 'warrior',
    level: 60,
  };
  team.add(dima);
  expect(team.members.has(dima)).toBe(true);
});

test('Character should not be added', () => {
  const team = new Team();
  const dima = {
    class: 'warrior',
    level: 60,
  };
  team.add(dima);
  expect(() => team.add(dima)).toThrow('Такой персонаж уже есть в команде');
});

test('Another Alex should not be added', () => {
  const team = new Team();
  const dima = {
    class: 'warrior',
  };
  const alex = {
    class: 'mage',
  };
  const mishka = {
    class: 'rogue',
  };
  team.addAll(dima, alex, mishka, alex);
  expect(team.toArray()).toEqual([
    {
      class: 'warrior',
    },
    {
      class: 'mage',
    },
    {
      class: 'rogue',
    },
  ]);
});
