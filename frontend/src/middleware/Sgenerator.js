// Add Special characters randomly

function Sgenerator(length)
{
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var specials         = '!@#$%&()-=+_^';
  var specialLength = specials.length;
  var charactersLength = characters.length;

  for ( var i = 0; i < length; i++ )
  {
    result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
  }

  var randlength = Math.floor(Math.random() * length);
  var randSpecial = Math.floor(Math.random() * specialLength);
  var re = new RegExp(result.charAt(randlength), 'g');
  var newStr = result.replace(re, specials.charAt(randSpecial));


 return newStr;
}

export default Sgenerator