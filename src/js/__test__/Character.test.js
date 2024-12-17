import Character from '../Character.js';
import Daemon from '../Characters/Daemon.js';
import Bowman from '../Characters/Bowman.js';
import Magician from '../Characters/Magician.js';

test('Создание объекта Character', () => {
  expect(() => new Character()).toThrow('Нельзя создать объект класса Character');
});

test('Создание персонажей должно быть без ошибок', () => {
  expect(() => new Bowman()).not.toThrow();
});

test('Создание персонажей должно быть без ошибок', () => {
  expect(() => new Magician()).not.toThrow();
});
test('Создание персонажей должно быть без ошибок', () => {
  expect(() => new Daemon()).not.toThrow();
});
