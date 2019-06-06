import './style.scss';

class Carousel {
  constructor(id, images) {
    this.container = document.getElementById(id);
    this.images = images;
    this.index = 0;
    this.init();
  }

  switch(idx) {
    console.log(idx);
    idx = idx < 0 ? this.images.length - 1 : idx;
    idx = idx >= this.images.length ? 0 : idx;
    if (idx !== this.index) {
      this.index = idx;
      const buttons = new Array(...this.container.querySelectorAll('ul li'));
      console.log(buttons);
      buttons.map((elem, idx) => elem.classList.remove('active'));
      const button = this.container.querySelector(`ul li[data-num="${idx}"]`);
      debugger;
      button.classList.add('active');
      this.image.style.backgroundImage = `url(${this.images[this.index]})`;
    }
  }

  init() {
    this.image = document.createElement('div');
    this.image.style.backgroundImage = `url(${this.images[this.index]})`;
    console.log('container', this.container);
    this.container.appendChild(this.image);
    this.buttons = document.createElement('ul');
    this.images.map((image, idx) => {
      const button = document.createElement('li');
      button.setAttribute('data-num', idx);
      if (idx === this.index) button.classList.add('active');
      button.onclick = () => this.switch(idx);
      this.buttons.appendChild(button);
    });
    this.container.appendChild(this.buttons);
    this.directional = document.createElement('div');
    this.right = document.createElement('div');
    this.right.innerText = 'Right';
    console.log('right', this.right);
    debugger;
    this.right.onclick = () => this.switch(this.index + 1);
    this.left = document.createElement('div');
    this.left.innerText = 'Left';
    this.left.onclick = () => this.switch(this.index - 1);
    console.log('left', this.left);
    this.directional.appendChild(this.left);
    this.directional.appendChild(this.right);
    this.container.appendChild(this.directional);
  }
}

window.Carousel = Carousel;
