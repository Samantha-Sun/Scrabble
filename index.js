//Decalring values
const lib = {
  e:1, a:1, i:1, o:1, n:1, r:1, t:1, l:1, s:1, u:1,
  d:2, g:2,
  b:3, c:3, m:3, p:3,
  f:4, h:4, v:4, w:4, y:4,
  k:5,
  j:8, x:8,
  q:10, z:10
}

//Identifying each character score based on word entered
const calcScore = (text) => {
  let score = 0;
  text = text.toLowerCase();
  for (let ch of text)
  score += lib[ch];
  return score;
}

//Sum of character scores
const score = (word) => {
  let tscore = 0;
  tscore = calcScore(word);
  return tscore;
}

//Displaying score
window.onload = function(){
  let input = document.getElementById("input");
  let submit = document.getElementById("test");
  let output = document.getElementById("output");
  submit.onclick = function() {
    if (input.value != "") {
      output.innerHTML = "Score: " + score(input.value)
      } else {
          output.innerHTML = "Please enter a word"
      }
  }    
}