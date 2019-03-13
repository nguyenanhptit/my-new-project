var hero = new Object();
hero.element = 'hero';
hero.x = 200;
hero.y = 450;
  function setPosit(sprite) {
    var ele =  document.getElementById(sprite.element);
    ele.style.left = sprite.x + 'px';
    ele.style.top = sprite.y + ' px';
  }
setPosit(hero);
