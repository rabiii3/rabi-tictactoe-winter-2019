import { times } from 'ramda';

export const shapes = ['star', 'build', 'book', 'done', 'code', 'face', 'visibility', 'error', 'add', 'folder'];

export const colors = ['red', 'blue', 'green', 'yellow'];

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const fetchIcon = () =>
  new Promise(resolve => {
    setTimeout(
      () => resolve({ shape: shapes[random(0, shapes.length)], color: colors[random(0, colors.length)] }),
      random(100, 2000),
    );
  });

export const pullIcon = (i, updateIcon) => {
  if (i >= 10) return;
  fetchIcon(i).then(icon => {
    updateIcon(icon);
    pullIcon(i + 1, updateIcon);
  });
};
