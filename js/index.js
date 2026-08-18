/* -----------Selector de items------------- */

let items = document.querySelector('.items')

new Sortable(items, {
    animation: 200,
    handle: '.moveHand',
    ghostClass: 'drag'
});



/* -----------Drag and Drop------------- */

mapZone.addEventListener("dragover", (ev) => {
  ev.preventDefault();});

mapZone.addEventListener("drop", (ev) => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text/plain");
  ev.mapZone.append(data);
});

