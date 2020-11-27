let attackingSoldiers = prompt("how many soldirs are you attacking with?");
let defendingSoldiers = prompt("how many soldirs are you defending with?");
let generalCounter = 0;
let marshallCounter = 0;
function attacker1() {
  let attackerOrder = [];
  let defenderOrder = [];
  let attack1 = Math.floor(Math.random() * 6) + 1;
  let attack2 = Math.floor(Math.random() * 6) + 1;
  let attack3 = Math.floor(Math.random() * 6) + 1;
  let defend1 = Math.floor(Math.random() * 6) + 1;
  let defend2 = Math.floor(Math.random() * 6) + 1;
  if(generalCounter === 0){
  var general = confirm('Are you using a general?');
  }
  if(marshallCounter === 0){
  var marshall = confirm('Are you using a marshall?')
  }
  //if attack 1 is biggest put it in the front
  if (attack1 >= attack2 && attack1 >= attack3) {
    attackerOrder.push(attack1);
    attack1 = "first";
  }
  //if attack 2 is biggest put it in the front
  else if (attack2 >= attack1 && attack2 >= attack3) {
    attackerOrder.push(attack2);
    attack2 = "first";
  }
  //if attack 3 is the biggest put it in the front
  else {
    attackerOrder.push(attack3);
    attack3 = "first";
  }
  //if attack 1 is 2nd biggest put it on the end
  if (attack1 >= attack2) {
    attackerOrder.unshift(attack1);
    attack1 = "second";
  }
  //if attack 1 is 2nd biggest put it on the end
  else if (attack1 >= attack3) {
    attackerOrder.unshift(attack1);
    attack1 = "second";
  }
  //if attack 2 is 2nd biggest put it on the end
  else if (attack2 >= attack1) {
    attackerOrder.unshift(attack2);
    attack2 = "second";
  }
  //if attack 2 is 2nd biggest put it on the end
  else if (attack2 >= attack3) {
    attackerOrder.unshift(attack2);
    attack2 = "second";
  }
  //if attack 3 is 2nd biggest put it on the end
  else if (attack3 >= attack1) {
    attackerOrder.unshift(attack3);
    attack3 = "second";
  }
  //if attack 3 is 2nd biggest put it on the end
  else {
    attackerOrder.unshift(attack3);
    attack3 = "second";
  }
  //if attack 1 is smallest put it last
  if (attack1 >= 0) {
    attackerOrder.unshift(attack1);
  }
  //if attack 2 is smallest put it last
  else if (attack2 >= 0) {
    attackerOrder.unshift(attack2);
  }
  //if attack 3 is smallest put it last
  else {
    attackerOrder.unshift(attack3);
  }
  if(general === true && generalCounter === 0){
    attackerOrder[2]++;
  } else{
    generalCounter = 1
  }
  console.log(attackerOrder + ' attack');

  //check order of defender dice
  if(defend1>=defend2){
      defenderOrder.unshift(defend1);
      defenderOrder.unshift(defend2);
  } else{
    defenderOrder.unshift(defend2);
    defenderOrder.unshift(defend1);
  }
  if(marshall === true && marshallCounter == 0){
    defenderOrder[1]++;
  } else{
    marshallCounter = 1
  }
  console.log(defenderOrder + ' defend');

   if(defenderOrder[1] < attackerOrder[2] && marshall === true){
    defendingSoldiers--;
    alert('Your marshall has died!')
  }
  else if(attackerOrder[2] <= defenderOrder[1] && marshall === true && general === true){
    attackingSoldiers--;
    alert('Your general has died!')
  }
  else if(attackerOrder[2] <= defenderOrder[1] && marshall === true){
    attackingSoldiers--;
  }
  else if(attackerOrder[2] > defenderOrder[1] && general === true){
    defendingSoldiers--;
  } 
  else if(attackerOrder[2] <= defenderOrder[1] && general === true){
    attackingSoldiers--;
    alert('Your general has died!')
  }
  else if(attackerOrder[2] > defenderOrder[1]){
    defendingSoldiers--;
  } else{
    attackingSoldiers--;
  }
  if(attackerOrder[1] > defenderOrder[0]){
    defendingSoldiers--;
  } else{
    attackingSoldiers--;
  }

  console.log(attackingSoldiers + ' attacking army');
  console.log(defendingSoldiers + ' defending army');
}

function attacker2() {
  let attackerOrder = [];
  let defenderOrder = [];
  let attack1 = Math.floor(Math.random() * 6) + 1;
  let attack2 = Math.floor(Math.random() * 6) + 1;
  let attack3 = Math.floor(Math.random() * 6) + 1;
  let defend1 = Math.floor(Math.random() * 6) + 1;
  if(generalCounter === 0){
    var general = confirm('Are you using a general?');
    }
    if(marshallCounter === 0){
      var marshall = confirm('Are you using a marshall?')
      }

  //if attack 1 is biggest put it in the front
  if (attack1 >= attack2 && attack1 >= attack3) {
    attackerOrder.push(attack1);
    attack1 = "first";
  }
  //if attack 2 is biggest put it in the front
  else if (attack2 >= attack1 && attack2 >= attack3) {
    attackerOrder.push(attack2);
    attack2 = "first";
  }
  //if attack 3 is the biggest put it in the front
  else {
    attackerOrder.push(attack3);
    attack3 = "first";
  }
  //if attack 1 is 2nd biggest put it on the end
  if (attack1 >= attack2) {
    attackerOrder.unshift(attack1);
    attack1 = "second";
  }
  //if attack 1 is 2nd biggest put it on the end
  else if (attack1 >= attack3) {
    attackerOrder.unshift(attack1);
    attack1 = "second";
  }
  //if attack 2 is 2nd biggest put it on the end
  else if (attack2 >= attack1) {
    attackerOrder.unshift(attack2);
    attack2 = "second";
  }
  //if attack 2 is 2nd biggest put it on the end
  else if (attack2 >= attack3) {
    attackerOrder.unshift(attack2);
    attack2 = "second";
  }
  //if attack 3 is 2nd biggest put it on the end
  else if (attack3 >= attack1) {
    attackerOrder.unshift(attack3);
    attack3 = "second";
  }
  //if attack 3 is 2nd biggest put it on the end
  else {
    attackerOrder.unshift(attack3);
    attack3 = "second";
  }
  //if attack 1 is smallest put it last
  if (attack1 >= 0) {
    attackerOrder.unshift(attack1);
  }
  //if attack 2 is smallest put it last
  else if (attack2 >= 0) {
    attackerOrder.unshift(attack2);
  }
  //if attack 3 is smallest put it last
  else {
    attackerOrder.unshift(attack3);
  }

  if(general === true && generalCounter === 0){
    attackerOrder[2]++;
  } else{
    generalCounter = 1
  }
  console.log(attackerOrder + ' attack');

  //check order of defender dice
  if(marshall === true && marshallCounter == 0){
    defend1++;
  }else{
    marshallCounter = 1
  }
 
  console.log(defenderOrder + ' defend');

  if(defend1 < attackerOrder[2] && marshall === true){
    defendingSoldiers--;
    alert('Your marshall has died!')
  }
  else if(attackerOrder[2] <= defend1 && marshall === true && general === true){
    attackingSoldiers--;
    alert('Your general has died!')
  }
  else if(attackerOrder[2] <= defend1 && marshall === true){
    attackingSoldiers--;
  }
  else if(attackerOrder[2] > defend1 && general === true){
    defendingSoldiers--;
  } 
  else if(attackerOrder[2] <= defend1 && general === true){
    attackingSoldiers--;
    alert('Your general has died!')
  }
  else if(attackerOrder[2] > defend1){
    defendingSoldiers--;
  } else{
    attackingSoldiers--;
  }
  console.log(attackingSoldiers + ' attacking army');
  console.log(defendingSoldiers + ' defending army');
}

function attacker3() {
  let attackerOrder = [];
  let defenderOrder = [];
  let attack1 = Math.floor(Math.random() * 6) + 1;
  let attack2 = Math.floor(Math.random() * 6) + 1;
  let attack3 = Math.floor(Math.random() * 6) + 1;
  let defend1 = Math.floor(Math.random() * 6) + 1;
  let defend2 = Math.floor(Math.random() * 6) + 1;
  if(generalCounter === 0){
    var general = confirm('Are you using a general?');
    }
    if(marshallCounter === 0){
      var marshall = confirm('Are you using a marshall?')
      }

  if(attack1>=attack2){
    attackerOrder.unshift(attack1);
    attackerOrder.unshift(attack2);
} else{
  attackerOrder.unshift(attack2);
  attackerOrder.unshift(attack1);
}
  
if(general === true && generalCounter === 0){
  attackerOrder[1]++;
} else{
  generalCounter = 1
}
  console.log(attackerOrder + ' attack');

  //check order of defender dice
  if(defend1>=defend2){
      defenderOrder.unshift(defend1);
      defenderOrder.unshift(defend2);
  } else{
    defenderOrder.unshift(defend2);
    defenderOrder.unshift(defend1);
  }
  if(marshall === true && marshallCounter == 0){
    defenderOrder[1]++;
  }else{
    marshallCounter = 1
  }

  console.log(defenderOrder + ' defend');

  if(defenderOrder[1] < attackerOrder[1] && marshall === true){
    defendingSoldiers--;
    alert('Your marshall has died!')
  }
  else if(attackerOrder[1] <= defenderOrder[1] && marshall === true && general === true){
    attackingSoldiers--;
    alert('Your general has died!')
  }
  else if(attackerOrder[1] <= defenderOrder[1] && marshall === true){
    attackingSoldiers--;
  }
  
  else if(attackerOrder[1] > defenderOrder[1] && general === true){
    defendingSoldiers--;
  } 
  else if(attackerOrder[1] <= defenderOrder[1] && general === true){
    attackingSoldiers--;
    alert('Your general has died!')
  }
  else if(attackerOrder[1] > defenderOrder[1]){
    defendingSoldiers--;
  } else{
    attackingSoldiers--;
  }
  if(attackerOrder[0] > defenderOrder[0]){
    defendingSoldiers--;
  } else{
    attackingSoldiers--;
  }

  console.log(attackingSoldiers + ' attacking army');
  console.log(defendingSoldiers + ' defending army');
}

function attacker4() {
  let attackerOrder = [];
  let defenderOrder = [];
  let attack1 = Math.floor(Math.random() * 6) + 1;
  let attack2 = Math.floor(Math.random() * 6) + 1;
  let attack3 = Math.floor(Math.random() * 6) + 1;
  let defend1 = Math.floor(Math.random() * 6) + 1;
  let defend2 = Math.floor(Math.random() * 6) + 1;
  if(generalCounter === 0){
    var general = confirm('Are you using a general?');
    }
    if(marshallCounter === 0){
      var marshall = confirm('Are you using a marshall?')
      }

  if(attack1>=attack2){
    attackerOrder.unshift(attack1);
    attackerOrder.unshift(attack2);
} else{
  attackerOrder.unshift(attack2);
  attackerOrder.unshift(attack1);
}
  
if(general === true && generalCounter === 0){
  attackerOrder[1]++;
} else{
  generalCounter = 1
}
  console.log(attackerOrder + ' attack');

  //check order of defender dice
  if(marshall === true && marshallCounter == 0){
    defend1++;
  }else{
    marshallCounter = 1
  }
  console.log(defend1 + ' defend');

  if(defend1 < attackerOrder[1] && marshall === true){
    defendingSoldiers--;
    alert('Your marshall has died!')
  }
  else if(attackerOrder[1] <= defend1 && marshall === true && general === true){
    attackingSoldiers--;
    alert('Your general has died!')
  }
  else if(attackerOrder[1] <= defend1 && marshall === true){
    attackingSoldiers--;
  }
  else if(attackerOrder[1] <= defend1 && marshall === true){
    attackingSoldiers--;
  }
  
  else if(attackerOrder[1] > defend1 && general === true){
    defendingSoldiers--;
  } 
  else if(attackerOrder[1] <= defend1 && general === true){
    attackingSoldiers--;
    alert('Your general has died!')
  }
  if(attackerOrder[1] > defend1){
    defendingSoldiers--;
  } else{
    attackingSoldiers--;
  }

  console.log(attackingSoldiers + ' attacking army');
  console.log(defendingSoldiers + ' defending army');
}


while(attackingSoldiers >= 3 && defendingSoldiers >=2){
    attacker1();
}

while(attackingSoldiers >= 3 && defendingSoldiers === 1){
  attacker2();
}

while(attackingSoldiers === 2 && defendingSoldiers === 2){
  attacker3();
}

while(attackingSoldiers === 2 && defendingSoldiers === 1){
  attacker4();
}
if(attackingSoldiers > defendingSoldiers){
  console.log('attacking army won!');
  alert('attacking army won!');
} else{
  console.log('defending army won!');
  alert('defending army won!');
}

location.reload();
