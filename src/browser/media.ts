//media controls

type mediaOptions = {
  src?: string;
  controls?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
};

type elElement = HTMLMediaElement | string;

class MediaControl {
  el: HTMLMediaElement;
  options!: mediaOptions;
  status: 'play' | 'pause' | 'ended' = 'pause';

  constructor(el: elElement, options: mediaOptions) {
    this.options = options;
    this.el = (typeof el === 'string' ? document.querySelector(el) : el) as HTMLMediaElement;
    this.init();
  }

  private init() {
    if (!this.el || !(this.el instanceof HTMLMediaElement)) throw new Error('choose a media element');
    for (const key in this.options) {
      if (this.options.hasOwnProperty(key)) {
        this[key] = this.options[key];
      }
    }
    this.el.addEventListener('play', this.play);
    this.el.addEventListener('pause', this.pause);
    this.el.addEventListener('ended', this.end);
  }

  load() {
    this.el.load();
  }

  canPlayType(type: string) {
    return this.el.canPlayType(type);
  }

  //播放
  play() {
    this.status = 'play';
    this.el?.play();
  }

  //暂停
  pause() {
    this.status = 'pause';
    this.el?.pause();
  }

  //停止
  end() {
    this.status = 'ended';
  }

  toggle() {
    if (this.status === 'play') this.pause();
    else this.play();
  }

  destroy() {
    this.el?.removeEventListener('play', this.play);
    this.el?.removeEventListener('pause', this.pause);
    this.el?.removeEventListener('ended', this.end);
  }

  get currentTime() {
    return this.el.currentTime;
  }

  set currentTime(time: number) {
    this.el.currentTime = time;
  }

  get duration() {
    return this.el.duration;
  }

  get volume() {
    return this.el.volume;
  }

  set volume(volume: number) {
    this.el.volume = volume;
  }

  //音量增加
  volumeUp(step = 0.1) {
    this.volume += step;
  }

  //音量减少
  volumeDown(step = 0.1) {
    this.volume -= step;
  }

  //静音
  mute() {
    this.el.muted = true;
  }

  //取消静音
  unmute() {
    this.el.muted = false;
  }

  get muted() {
    return this.el.muted;
  }

  private set muted(muted: boolean) {
    this.el.muted = muted;
  }

  get playbackRate() {
    return this.el.playbackRate;
  }

  private set playbackRate(rate: number) {
    this.el.playbackRate = rate;
  }

  //快进
  fastForward(speed: number) {
    this.playbackRate = speed;
  }

  //快退
  backward(speed: number) {
    this.playbackRate = -speed;
  }

  get buffered() {
    return this.el.buffered;
  }

  get readyState() {
    return this.el.readyState;
  }

  get networkState() {
    return this.el.networkState;
  }

  get seeking() {
    return this.el.seeking;
  }

  get paused() {
    return this.el.paused;
  }

  //是否在播放
  get playing() {
    return !this.paused;
  }

  //是否在停止
  get ended() {
    return this.status === 'ended';
  }

  get loop() {
    return this.el.loop;
  }

  set loop(loop: boolean) {
    this.el.loop = loop;
  }

  get controls() {
    return this.el.controls;
  }

  set controls(controls: boolean) {
    this.el.controls = controls;
  }

  get autoplay() {
    return this.el.autoplay;
  }

  set autoplay(autoplay: boolean) {
    this.el.autoplay = autoplay;
  }

  get preload() {
    return this.el.preload;
  }

  set preload(preload: 'auto' | 'metadata' | 'none' | '') {
    this.el.preload = preload;
  }

  get src() {
    return this.el.src;
  }

  private set src(src: string) {
    this.el.src = src;
  }

  setSrc(src: string) {
    this.src = src;
    this.load();
  }

  get currentSrc() {
    return this.el.currentSrc;
  }

  get crossOrigin() {
    return this.el.crossOrigin || '';
  }

  set crossOrigin(crossOrigin: string) {
    this.el.crossOrigin = crossOrigin;
  }
}

export { MediaControl };
