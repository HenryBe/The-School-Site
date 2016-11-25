var IsAdminOrUserLogin = 0;

/******************************************************************/
//用户登录验证
/******************************************************************/
function CheckUserLogin(userNameClientId, userPwdClientId, notLoginTableClientId, loginTableClientId, nameLabelId,codeClientId)
{           
    var userName = document.getElementById(userNameClientId).value;    
    var userPwd = document.getElementById(userPwdClientId).value;    
    var veryCoe = document.getElementById(codeClientId).value;  
    if (userName.LTrim().RTrim().length==0)
    {
	    alert("请输入用户名！");		
	}
	else if(userPwd.LTrim().RTrim().length==0)
    {
	    alert("请输入密码！");		
	}
	else if(veryCoe.LTrim().RTrim().length==0)
    {
	    alert("请输入验证码！");		
	}
	else
	{
        var l = new Array();
        l["name"] = userName;
        l["notLoginTableClientId"] = notLoginTableClientId;
        l["loginTableClientId"] = loginTableClientId;
        l["nameLabelId"] = nameLabelId;
        Web.Service.LoginService.CheckUserLogin(userName, userPwd, veryCoe, onCheckUserLoginSuccess, onCheckUserLoginError, l);   
    }
}

function onCheckUserLoginSuccess(result, l)
{    
    if (result == "4")
    {
         alert("验证码已过期，请重新登录");
    }
    else if (result == "5")
    {
         alert("验证码错误，请重新登录");
    } 
    else if (result == "0")
    {
        top.location = "http://www.qqhrsyzx.com/js/~/ErrorSys.aspx?type=ForbidLogin"; //原来是 forbidLogin.aspx  shjian改为统一错误页面
    }
    else if (result == "2")
    {
        top.location = "http://www.qqhrsyzx.com/js/user/login.aspx";
    }  
    else if (result == "3")
    {
        alert("用户名或密码错误");
    }    
    else
    {    
        InitLoginStatus(1, l["name"], l["notLoginTableClientId"], l["loginTableClientId"], l["nameLabelId"]);     
    }
}
function onCheckUserLoginError()
{
    alert("服务连接失败!");
}

//管理员登录
function CheckAdminLogin(userNameClientId, userPwdClientId, notLoginTableClientId, adminLoginTableClientId, adminNameLabelId, codeClientId)
{           
    var userName = document.getElementById(userNameClientId).value;    
    var userPwd = document.getElementById(userPwdClientId).value;  
    var veryCoe = document.getElementById(codeClientId).value;  
    if (userName.LTrim().RTrim().length==0)
    {
	    alert("请输入用户名！");		
	}
	else if(userPwd.LTrim().RTrim().length==0)
    {
	    alert("请输入密码！");		
	}
	else if(veryCoe.LTrim().RTrim().length==0)
    {
	    alert("请输入验证码！");		
	}
	else
	{
        var l = new Array();
        l["name"] = userName;
        l["notLoginTableClientId"] = notLoginTableClientId;
        l["loginTableClientId"] = adminLoginTableClientId;
        l["nameLabelId"] = adminNameLabelId;
        Web.Service.LoginService.CheckAdminLogin(userName, userPwd, veryCoe, onCheckAdminLoginSuccess, onCheckUserLoginError, l);   
    }
}

function onCheckAdminLoginSuccess(result, l)
{    
    if (result == "0")
    {
         alert("验证码已过期，请重新登录");
    }
    else if (result == "2")
    {
         alert("验证码错误，请重新登录");
    } 
    else if (result == "3")
    {
          alert("用户名不存在或密码错误");
    } 
    else if (result == "4")
    {
          alert("密码错误");
    }   
    else if (result == "5")
    {
         alert("该管理员禁止登录");
    }    
    else
    {    
        InitLoginStatus(1, l["name"], l["notLoginTableClientId"],    l["loginTableClientId"],  l["nameLabelId"]);     
    }
}

function CheckUserIsLogin(notLoginTableClientId, loginTableClientId, nameLabelId, t)
{
    var l = new Array();  
    l["notLoginTableClientId"] = notLoginTableClientId;
    l["loginTableClientId"] = loginTableClientId;
    l["nameLabelId"] = nameLabelId;
    l["t"] = t;
    Web.Service.LoginService.CheckUserIsLogin(onCheckUserIsLoginSuccess, onCheckUserLoginError, l);   
}

function onCheckUserIsLoginSuccess(result, l)
{    
    if(result[0] == "1")
    {
        InitLoginStatus(1, result[1], l["notLoginTableClientId"],    l["loginTableClientId"], l["nameLabelId"], l["t"]);  
        if(l["t"] == 1)
        {
            IsAdminOrUserLogin = 1;
        }
    }
    else
    {
        InitLoginStatus(0, "", l["notLoginTableClientId"],    l["loginTableClientId"], l["nameLabelId"], l["t"]);  
    }   
}

function InitLoginStatus(isLogin, userName, notLoginTableClientId, loginTableClientId, nameLabelId, t)
{        
    if(isLogin == 1)
    {        
        document.getElementById(notLoginTableClientId).style.display = "none";
        document.getElementById(loginTableClientId).style.display = "";
        document.getElementById(nameLabelId).innerText = userName;
    }
    else if(IsAdminOrUserLogin == 0 || t==0)
    {
        document.getElementById(notLoginTableClientId).style.display = "";
        document.getElementById(loginTableClientId).style.display = "none";
    }
}



function CheckAdminIsLogin(notLoginTableClientId, loginTableClientId, nameLabelId)
{
    var l = new Array();  
    l["notLoginTableClientId"] = notLoginTableClientId;
    l["loginTableClientId"] = loginTableClientId;
    l["nameLabelId"] = nameLabelId;
    l["t"] = 1;
    Web.Service.LoginService.CheckAdminIsLogin(onCheckUserIsLoginSuccess, onCheckUserLoginError, l);   
}

function CheckLogin(userNameClientId, userPwdClientId, notLoginTableClientId, loginTableClientId, adminLoginTableClientId, adminNameLabelId, nameLabelId, typeClientId, codeClientId)
{
    
    var type = document.getElementById(typeClientId).value;
    if(type == 0)//普通用户
    {
        CheckUserLogin(userNameClientId, userPwdClientId, notLoginTableClientId, loginTableClientId, nameLabelId,codeClientId);
    }
    else//管理员
    {
        CheckAdminLogin(userNameClientId, userPwdClientId, notLoginTableClientId, adminLoginTableClientId, adminNameLabelId, codeClientId);
    }
}
