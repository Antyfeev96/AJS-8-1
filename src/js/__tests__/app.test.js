import Team from '../app';

test('Character should be added', () => {
  const team = new Team();
  const dima = {
    class: 'warrior',
    level: 60,
  };
  team.add(dima);
  for (const prop of team.members.entries()) {
    expect(prop[0]).toEqual({
      class: 'warrior',
      level: 60,
    });
  }
});

test('Character should not be added', () => {
  const team = new Team();

  team.add({
    name: 'Воин',
    type: 'warrior',
    level: 60,
    health: 4000,
    attack: 400,
    defence: 1000,
  });

  expect(() => team.add({
    name: 'Воин',
    type: 'warrior',
    level: 60,
    health: 4000,
    attack: 400,
    defence: 1000,
  })).toThrow('Такой персонаж уже есть в команде');
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
