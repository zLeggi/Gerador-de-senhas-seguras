function gerarSenha() {
  var password = "";
  var str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy" + "0123456789" +"|`!+_-`@#$/%*<>{}[]^~";

  for (i = 1; i <= 10; i++) {
    var char = Math.floor(Math.random() * str.length );

    password += str.charAt(char);
  }
  return password;
  
}


function adcionarSenha(){
  document.getElementById('nova-senha').innerHTML = "";
  document.getElementById('nova-senha').innerHTML = gerarSenha();
  toggle();
}

function toggle() {
  if (document.getElementById('senha-gerada').style.display == 'none') {
      document.getElementById('senha-gerada').style.display = 'flex';
  }
  else {
      document.getElementById('senha-gerada').style.display = 'flex';
      }
  }