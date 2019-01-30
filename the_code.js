/* ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** */

var theProductsJSON = '[ {"productNumber":100, "productName":"Product 1", "productDesc":"Desc 1", "productPrice":150.00, "shippingPerItem":2.75},' +
					    '{"productNumber":200, "productName":"Product 2", "productDesc":"Desc 2", "productPrice":300.00, "shippingPerItem":3.00},' +
					    '{"productNumber":300, "productName":"Product 3", "productDesc":"Desc 3", "productPrice":450.00, "shippingPerItem":5.25}' +
	                  ']';
	                  
var countriesAndStatesJSON = '[ {"short":"AL","name":"Alabama","country":"US"},' +
						 '{"short":"AK","name":"Alaska","country":"US"},' +
						 '{"short":"AZ","name":"Arizona","country":"US"},' +
						 '{"short":"AR","name":"Arkansas","country":"US"},' +
						 '{"short":"CA","name":"California","country":"US"},' +
						 '{"short":"CO","name":"Colorado","country":"US"},' +
						 '{"short":"CT","name":"Connecticut","country":"US"},' +
						 '{"short":"DC","name":"District of Columbia","country":"US"},' +
						 '{"short":"DE","name":"Delaware","country":"US"},' +
						 '{"short":"FL","name":"Florida","country":"US"},' +
						 '{"short":"GA","name":"Georgia","country":"US"},' +
						 '{"short":"HI","name":"Hawaii","country":"US"},' +
						 '{"short":"ID","name":"Idaho","country":"US"},' +
						 '{"short":"IL","name":"Illinois","country":"US"},' +
						 '{"short":"IN","name":"Indiana","country":"US"},' +
						 '{"short":"IA","name":"Iowa","country":"US"},' +
						 '{"short":"KS","name":"Kansas","country":"US"},' +
						 '{"short":"KY","name":"Kentucky","country":"US"},' +
						 '{"short":"LA","name":"Louisiana","country":"US"},' +
						 '{"short":"ME","name":"Maine","country":"US"},' +
						 '{"short":"MD","name":"Maryland","country":"US"},' +
						 '{"short":"MA","name":"Massachusetts","country":"US"},' +
						 '{"short":"MI","name":"Michigan","country":"US"},' +
						 '{"short":"MN","name":"Minnesota","country":"US"},' +
						 '{"short":"MS","name":"Mississippi","country":"US"},' +
						 '{"short":"MO","name":"Missouri","country":"US"},' +
						 '{"short":"MT","name":"Montana","country":"US"},' +
						 '{"short":"NE","name":"Nebraska","country":"US"},' +
						 '{"short":"NV","name":"Nevada","country":"US"},' +
						 '{"short":"NH","name":"New Hampshire","country":"US"},' +
						 '{"short":"NJ","name":"New Jersey","country":"US"},' +
						 '{"short":"NM","name":"New Mexico","country":"US"},' +
						 '{"short":"NY","name":"New York","country":"US"},' +
						 '{"short":"NC","name":"North Carolina","country":"US"},' +
						 '{"short":"ND","name":"North Dakota","country":"US"},' +
						 '{"short":"OH","name":"Ohio","country":"US"},' +
						 '{"short":"OK","name":"Oklahoma","country":"US"},' +
						 '{"short":"OR","name":"Oregon","country":"US"},' +
						 '{"short":"PA","name":"Pennsylvania","country":"US"},' +
						 '{"short":"RI","name":"Rhode Island","country":"US"},' +
						 '{"short":"SC","name":"South Carolina","country":"US"},' +
						 '{"short":"SD","name":"South Dakota","country":"US"},' +
						 '{"short":"TN","name":"Tennessee","country":"US"},' +
						 '{"short":"TX","name":"Texas","country":"US"},' +
						 '{"short":"UT","name":"Utah","country":"US"},' +
						 '{"short":"VT","name":"Vermont","country":"US"},' +
						 '{"short":"VA","name":"Virginia","country":"US"},' +
						 '{"short":"WA","name":"Washington","country":"US"},' +
						 '{"short":"WV","name":"West Virginia","country":"US"},' +
						 '{"short":"WI","name":"Wisconsin","country":"US"},' +
						 '{"short":"WY","name":"Wyoming","country":"US"},' +
						 '{"short":"AS","name":"American Samoa","country":"US"},' +
						 '{"short":"GU","name":"Guam","country":"US"},' +
						 '{"short":"MP","name":"Northern Mariana Islands","country":"US"},' +
						 '{"short":"PR","name":"Puerto Rico","country":"US"},' +
						 '{"short":"UM","name":"United States Minor Outlying Islands","country":"US"},' +
						 '{"short":"VI","name":"Virgin Islands","country":"US"},' +
						 '{"short":"AB","name":"Alberta","country":"CA"},' +
						 '{"short":"BC","name":"British Columbia","country":"CA"},' +
						 '{"short":"MB","name":"Manitoba","country":"CA"},' +
						 '{"short":"NB","name":"New Brunswick","country":"CA"},' +
						 '{"short":"NL","name":"Newfoundland and Labrador","country":"CA"},' +
						 '{"short":"NS","name":"Nova Scotia","country":"CA"},' +
						 '{"short":"NU","name":"Nunavut","country":"CA"},' +
						 '{"short":"NW","name":"Northwest Territories","country":"CA"},' +
						 '{"short":"ON","name":"Ontario","country":"CA"},' +
						 '{"short":"PE","name":"Prince Edward Island","country":"CA"},' +
						 '{"short":"QC","name":"Quebec","country":"CA"},' +
						 '{"short":"SK","name":"Saskatchewan","country":"CA"},' +
						 '{"short":"YU","name":"Yukon","country":"CA"}]';

//
var theProducts;
var TheCountries=JSON.parse(countriesAndStatesJSON);
var TheItemsCart=new Array();
function  PlaceOrderClicked()
{
	submitTextBox("firstName");
	submitTextBox("lastName");
	submitTextBox("email");
	submitTextBox("address");
	submitTextBox("city");
	submitTextBox("theStates");
	submitTextBox("theCountries");
	submitTextBox("password");
	submitTextBox("vPassword");
}
function CreateAccount()
{
	var AccountCreation= document.getElementById("passwordElements");
	if (this.checked)
	{
		$(AccountCreation).show();
		$("#password").blur(blurPasswords);
		$("#vPassword").blur(blurPasswords);		
	}
	else
	{
		$(AccountCreation).hide();
	}
}
function submitTextBox(theTextBoxId)
{
	var theErrorSpan = document.getElementById(theTextBoxId+"Error");
	
	if ( document.getElementById(theTextBoxId).value == "" )
	{
		theErrorSpan.innerHTML = "Do Not Leave Blank!";
	}
	else
	{
		theErrorSpan.innerHTML = "";
	}	
}
function blurTextBox()
{
	var theErrorSpan = document.getElementById(this.id+"Error");
	
	if ( this.value == "" )
	{
		theErrorSpan.innerHTML = "Do Not Leave Blank!";
	}
	else
	{
		theErrorSpan.innerHTML = "";
	}	
}
function blurPasswords()
{
	var thePassword = document.getElementById("password");
	var theVPassword= document.getElementById("vPassword");
	var PasswordError= document.getElementById("passwordError");
	var VPasswordError=document.getElementById("vPasswordError");
	
	if (((thePassword.value=="") && (theVPassword.value=="")) || thePassword.value!=theVPassword.value)
	{
		PasswordError.innerHTML = "Password is invalid!";
		VPasswordError.innerHTML = "Password is invalid!";
	}
	else
	{
		PasswordError.innerHTML = "";
		VPasswordError.innerHTML = "";
	}	
}
function BuildProductTable()
{
	var theTableRows=document.getElementById("productsBody");
	theTableRows.innerHTML = "";
	for (var loop=0; loop < theProducts.length; loop++)
	{
		var aRow= '<tr><td>'+theProducts[loop]["productName"]+'</td>'+
				  '<td>'+theProducts[loop]["productDesc"]+'</td>'+
				  '<td>'+theProducts[loop]["productPrice"]+'</td>'+
				  '<td><select id="productQty_'+ loop +'"> <option value=1>1</option><option value=2>2</option><option value=3>3</option><option value=4>4</option><option value=5>5</option></td>'+
				  '<td><input type="button" value="ADD" id="btnAdd_'+loop +'"</td></tr>';
				  theTableRows.innerHTML+=aRow;
	}
	for (var loop=0; loop<theProductsJSON.length; loop++)
	{
		$("#btnAdd_"+loop).click(addItem);
	}
}
function buildShoppingCart()
{
    var theTableRows = document.getElementById("cartBody");

    theTableRows.innerHTML = "";

    for ( var loop = 0; loop < theSelectedUsers.length; loop++ )
    {
		var aRow = '<tr><td>'+theProducts[loop]["productNumber"]+'</td>' +
	    	       '<td>'+theProducts[loop]["productName"]+'</td>'+
				   '<td>'+theProducts[loop]["productName"]+'</td>'+
				   '<td>'+theProducts[loop]["productPrice"]+'</td>'+
				   '<td>'+theProducts[loop]["productName"]+'</td>'+
				   '<td><input type="button" value="Remove" id="btnDel_'+loop +'"</td></tr>';
				   
		theTableRows.innerHTML += aRow;
    }
}
function UpdateStates()
{
	var Country=document.getElementById("theCountry");
	var States=document.getElementById("theStates");
	var theStateLabel=document.getElementById("stateLabel");
	if (Country.value == "CA")
	{
		theStateLabel.innerHTML="Province";
	States.options.length=0;
	for (var Count=0; Count<TheCountries.length; Count++)
	{
		if (TheCountries[Count]["country"]=="CA")
		{
		var opt = document.createElement('option');
		opt.innerHTML=TheCountries[Count]["name"];
		opt.value=TheCountries[Count]["name"];
		States.appendChild(opt);
		}
	}
	}	
	else
	{
		theStateLabel.innerHTML="State";
States.options.length=0;

		for (var Count=0; Count<TheCountries.length; Count++)
		{
			if (TheCountries[Count]["country"]=="US")
			{
			var opt = document.createElement('option');
			opt.innerHTML=TheCountries[Count]["name"];
			opt.value=TheCountries[Count]["name"];
			States.appendChild(opt);
			}
		}
	}
}
function setStates()
{
	var States=document.getElementById("theStates");
	for (var Count=0; Count<TheCountries.length; Count++)
	{
		if (TheCountries[Count]["country"]=="CA")
		{
		var opt = document.createElement('option');
		opt.innerHTML=TheCountries[Count]["name"];
		opt.value=TheCountries[Count]["name"];
		States.appendChild(opt);
		}
	}
		
}
function addItem()
{
	
	var row = this.id.split("_")[1];
	
	if (isItemInList(theProducts[row]["productNumber"]) == false)
	{
		var item = Object();	
	
		item["productNumber"] = theProducts[row]["productNumber"];
		item["productName"] = theProducts[row]["productName"];
		item["productPrice"] = theProducts[row]["productPrice"];
		item["productQty"] = document.getElementById("productQty_"+row).value;
		item["shippingPerItem"] = theProducts[row]["shippingPerItem"];
		TheItemsCart.push(item);	
	}
	else
	{
		for (var loop = 0; loop < TheItemsCart.length; loop++)
		{
			if (TheItemsCart[loop]["productNumber"] == theProducts[row]["productNumber"])
			{
				var newQty = parseInt(TheItemsCart[row]["productQty"]);
				newQty += parseInt(document.getElementById("productQty_"+row).value);
				TheItemsCart[row]["productQty"] = newQty;
			}			
		}		
	}
	buildCart();
}

function buildCart()
{
	var rows = document.getElementById("cartBody");

    rows.innerHTML = "";

    for (var loop = 0; loop < TheItemsCart.length; loop++)
    {
		var aRow = '<tr><td>'+TheItemsCart[loop]["productNumber"]+'</td>' +
				   '<td>'+TheItemsCart[loop]["productName"]+'</td>' +
				   '<td>'+TheItemsCart[loop]["productQty"]+'</td>' +
	    	       '<td>$ '+TheItemsCart[loop]["productPrice"]+'</td>'+
				   '<td><input type="button" value="Remove" id="removeBtn_' + loop + '"></td>'+
				   '<td>$ '+TheItemsCart[loop]["productQty"] * TheItemsCart[loop]["productPrice"]+'</td></tr>';
		rows.innerHTML += aRow;
    }
	
	for ( var loop = 0; loop < TheItemsCart.length; loop++ )
    {
		var remove = document.getElementById("removeBtn_"+loop);
		remove.addEventListener("click", removeItem);
    }
	
	var total=0;
	var shippingCost=0;
	var taxes=0;
	var TheTotal=0;
	
	for ( var loop = 0; loop < TheItemsCart.length; loop++ )
    {
		total += (TheItemsCart[loop]["productPrice"] * TheItemsCart[loop]["productQty"]);
		shippingCost += TheItemsCart[loop]["shippingPerItem"] * TheItemsCart[loop]["productQty"];
    }
	taxes = (15 * total)/100;
	if (shippingCost != 0)
	{
		shippingCost += 15;
	}
	TheTotal = total + shippingCost + taxes;
	
	
	document.getElementById("theTotal").innerHTML = "$ " + total;
	document.getElementById("theTaxes").innerHTML = "$ " + taxes;
	document.getElementById("theShipping").innerHTML = "$ " + shippingCost;
	document.getElementById("theGrandTotal").innerHTML = "$ " + TheTotal;
}

function removeItem()
{
	var row = this.id.split("_")[1];
	TheItemsCart.splice(row,1);
	buildCart();
}

function isItemInList(theProductNumber)
{
	for (var loop = 0; loop < TheItemsCart.length; loop++)
	{
		if (TheItemsCart[loop]["productNumber"] == theProductNumber)
		{
			return true;
		}		
	}
	return false;
}

 function PageIsLoaded()
 {

	var CreateAcc= document.getElementById("createAccount");
	CreateAcc.addEventListener("change", CreateAccount)
	
	var CountryChange= document.getElementById("theCountry");
	CountryChange.addEventListener("change", UpdateStates)
	setStates();
	$("#firstName").blur(blurTextBox);
	$("#lastName").blur(blurTextBox);
	$("#email").blur(blurTextBox);
	$("#address").blur(blurTextBox);
	$("#city").blur(blurTextBox);
	$("#theStates").blur(blurTextBox);
	$("#theCountries").blur(blurTextBox);
	
	theProducts=JSON.parse(theProductsJSON);
	BuildProductTable();
	

	var PlaceOrderButton = document.getElementById("placeOrder");
	PlaceOrderButton.addEventListener("click", PlaceOrderClicked)
 }
 window.addEventListener("load",PageIsLoaded);
 
 