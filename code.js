function GetTime()
{
	var time = document.getElementById('n1').value;
	time = parseInt(time);
	
	if(time > 17)
	{
		document.getElementById('out1').innerHTML = "Добрый вечер";
	}
	else
	{
		document.getElementById('out1').innerHTML = "Добрый день";
	}
}
function GetName()
{
	var time = document.getElementById('n2').value;
	
	
	
	if(time == "John")
	{
		document.getElementById('out2').innerHTML = "Добрый вечер";
	}
	else
	{
		document.getElementById('out2').innerHTML = "Добрый день";
	}
}
function GetLoginAndPass()
{
	let mass = [];
	mass.push({log: 'ivan', pass: '333'});
	mass.push({log: 'ssss', pass: '6666'});
	mass.push({log: 'gibs', pass: '0000'});
	var log = document.getElementById('n3').value;
	var pass = document.getElementById('n3_1').value;
	var succ = false;
	for(var i = 0; i < mass.length; i++)
	{
		if(log == mass[i].log && pass == mass[i].pass)
		{
			succ = true;
			break;
		}
	}
	if(succ == true)
	{
		document.getElementById('out3').innerHTML = "Добрo пожаловать";
	}
	else
	{
		document.getElementById('out3').innerHTML = "Пользователь не найден";
	}
}

function FindMax()
{
	var num1 = parseInt(document.getElementById('n4').value);
	var num2 = parseInt(document.getElementById('n4_1').value);
	var num3 = parseInt(document.getElementById('n4_2').value);
	
	var max = Math.max(num1,num2,num3);
	document.getElementById('out4').innerHTML = max;
}

