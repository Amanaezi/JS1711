let treasure = {
    x: Math.floor(Math.random() * 768),
    y: Math.floor(Math.random() * 570)
  };
  
  let map = document.getElementById("map");
  let coords = document.getElementById("coords");
  
  map.onmousemove = showCoords;
  map.onmouseover = function () {
    coords.value = "Наведіть мишку на карту";
  };
  
  function showCoords(event) {
    let mouseX = event.offsetX;
    let mouseY = event.offsetY;
    coords.value = "Координаты: " + mouseX + ", " + mouseY;
  
    let distance = getDistance(event);
    if (distance < 30) {
      alert("Сокровище здесь!");
    }
  }
  
  function getDistance(event) {
    let distanceX = event.offsetX - treasure.x;
    let distanceY = event.offsetY - treasure.y;
    return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  }