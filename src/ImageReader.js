export default class ImageReader {

	constructor(images = null, {
		autoplay = true,
		el = null,
		fps = 30,
		from = 0,
		loop = false,
		onComplete = null,
		onRepeat = null,
		onRepeatComplete = null,
		repeat = 0,
		retina = false,
		reverse = null,
		to = null
	} = {}) {

		if (!images) throw new Error('images parameter can not be null');
		if (!images.length) throw new Error('images parameter must be an array');

		this._images = images;

		this._elTarget = el || new Image();

		this._currentRepeat = 0;

		this._from = from;
		this._current = from;
		this._to = to;

		this._isPlaying = autoplay;
		this._repeat = loop ? -1 : repeat;

		this._interval = 1000 / fps;
		this._then = null;

		this._onComplete = onComplete;
		this._onRepeat = onRepeat;
		this._onRepeatComplete = onRepeatComplete;

		if (this._to === null) this._to = this._images.length - 1;

		this._side = reverse || this._from > this._to ? -1 : 1;

		if (this._side === -1 && this._from < this._to) {

			const tmpFrom = this._from;
			const tmpTo = this._to;

			this._from = Math.max(tmpFrom, tmpTo);
			this._to = Math.min(tmpFrom, tmpTo);
		}

		if (!el) {

			Object.assign(this._elTarget.style, {
				width: `${this._images[0].naturalWidth / (retina ? 2 : 1)}px`,
				height: `${this._images[0].naturalHeight / (retina ? 2 : 1)}px`
			});
		}

		this.update(true);
	}

	draw() {

		this._elTarget.src = this._images[this._current];
	}

	update(force = false) {

		if (!this._isPlaying && !force) return;

		const now = performance.now();
		const delta = now - this._then;

		if (delta < this._interval && !force) return;

		this._then = now - delta % this._interval;

		this.draw();

		if (this._current === this._to) {

			if (this._repeat) {

				this._currentRepeat++;
				this._current = this._from;
				this._currentPack = 0;

				if (this._onRepeat) this._onRepeat();

				if (this._repeat > 0 && this._currentRepeat > this._repeat) {

					this._isPlaying = false;

					if (this._onRepeatComplete) this._onRepeatComplete();
				}
			}
			else {

				this._isPlaying = false;

				if (this._onComplete) this._onComplete();
			}
		}
		else this._current += this._side;
	}

	play() {

		this._isPlaying = true;
	}

	pause() {

		this._isPlaying = false;
	}

	stop() {

		this._isPlaying = false;
		this._current = this._from;
	}

	reverse(force = null) {

		if (force !== null) this._side = force ? 1 : -1;
		else this._side = this._side === 1 ? -1 : 1;

		const tmpFrom = this._from;
		const tmpTo = this._to;

		this._side === 1 ? this._from = Math.min(tmpFrom, tmpTo) : Math.max(tmpFrom, tmpTo);
		this._side === 1 ? this._to = Math.max(tmpFrom, tmpTo) : Math.min(tmpFrom, tmpTo);
	}

	goFromTo(from, to) {

		if (from >= 0) this._from = from;

		if (to >= 0) this._to = to;

		this._current = this._from;
		this._side = from > to ? -1 : 1;
	}

	goToAndPlay(frame) {

		this._current = frame;
		this._isPlaying = true;
	}

	goToAndStop(frame) {

		this._current = frame;
		this._isPlaying = false;
	}

	destroy() {

		this._isPlaying = false;
		this._elTarget.parentNode.remove(this._elTarget);
	}

	get el() {

		return this._elTarget;
	}

	set fps(nbr) {

		this._interval = 1000 / nbr;
	}

	set loop(val) {

		if (val) this._repeat = -1;
		else if (this._repeat === -1) this._repeat = 0;
	}

	set repeat(nbr) {

		this._repeat = nbr;
		this._currentRepeat = 0;
	}

	set onComplete(fn) {

		this._onComplete = fn;
	}

	set onRepeat(fn) {

		this._onRepeat = fn;
	}

	set onRepeatComplete(fn) {

		this._onRepeatComplete = fn;
	}
}
