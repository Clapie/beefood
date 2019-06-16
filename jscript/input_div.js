function plus(id){
    var count = document.getElementById(id).value;
    var countEl = document.getElementById(id);
    count++;
    countEl.value = count;
}
function minus(id){
  var count = document.getElementById(id).value;
  var countEl = document.getElementById(id);
  if (count > 0) {
    count--;
    countEl.value = count;
  }  
}