import GamePlay from '../GamePlay.js';
import GameStateService from '../GameStateService.js';

jest.mock('../GamePlay');
beforeEach(() => jest.resetAllMocks());

test('Метод load должен выбросить ошибку', () => {
  const stateService = new GameStateService(null);
  expect(() => stateService.load()).toThrowError(new Error('Invalid state'));
});

test('При отсувствии данных выбрасывается ошибка', () => {
  const stateService = new GameStateService(null);
  const mock = jest.fn(() => GamePlay.showError('Ошибка загрузки'));

  try {
    stateService.load();
  } catch (e) {
    mock();
  }

  expect(mock).toHaveBeenCalled();
});
