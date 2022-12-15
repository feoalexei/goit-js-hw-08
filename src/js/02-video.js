import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time') || '0')
);

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}
