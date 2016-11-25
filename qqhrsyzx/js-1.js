Type.registerNamespace('Web.Service');
Web.Service.LoginService=function() {
Web.Service.LoginService.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
Web.Service.LoginService.prototype={
LogOut:function(succeededCallback, failedCallback, userContext) {
return this._invoke(Web.Service.LoginService.get_path(), 'LogOut',false,{},succeededCallback,failedCallback,userContext); },
CheckUserLogin:function(userName,userPwd,verifyCode,succeededCallback, failedCallback, userContext) {
return this._invoke(Web.Service.LoginService.get_path(), 'CheckUserLogin',false,{userName:userName,userPwd:userPwd,verifyCode:verifyCode},succeededCallback,failedCallback,userContext); },
CheckAdminLogin:function(userName,userPwd,verifyCode,succeededCallback, failedCallback, userContext) {
return this._invoke(Web.Service.LoginService.get_path(), 'CheckAdminLogin',false,{userName:userName,userPwd:userPwd,verifyCode:verifyCode},succeededCallback,failedCallback,userContext); },
CheckUserIsLogin:function(succeededCallback, failedCallback, userContext) {
return this._invoke(Web.Service.LoginService.get_path(), 'CheckUserIsLogin',false,{},succeededCallback,failedCallback,userContext); },
CheckAdminIsLogin:function(succeededCallback, failedCallback, userContext) {
return this._invoke(Web.Service.LoginService.get_path(), 'CheckAdminIsLogin',false,{},succeededCallback,failedCallback,userContext); },
GetBigClassByTemplate:function(templateId,searchName,classTypeId,succeededCallback, failedCallback, userContext) {
return this._invoke(Web.Service.LoginService.get_path(), 'GetBigClassByTemplate',false,{templateId:templateId,searchName:searchName,classTypeId:classTypeId},succeededCallback,failedCallback,userContext); },
GetBigClassByS:function(templateId,searchName,succeededCallback, failedCallback, userContext) {
return this._invoke(Web.Service.LoginService.get_path(), 'GetBigClassByS',false,{templateId:templateId,searchName:searchName},succeededCallback,failedCallback,userContext); },
GetBigClassBySs:function(templateId,searchName,succeededCallback, failedCallback, userContext) {
return this._invoke(Web.Service.LoginService.get_path(), 'GetBigClassBySs',false,{templateId:templateId,searchName:searchName},succeededCallback,failedCallback,userContext); },
GetBigClassBySX:function(templateId,searchName,templates,userId,bigclassId,succeededCallback, failedCallback, userContext) {
return this._invoke(Web.Service.LoginService.get_path(), 'GetBigClassBySX',false,{templateId:templateId,searchName:searchName,templates:templates,userId:userId,bigclassId:bigclassId},succeededCallback,failedCallback,userContext); },
GetUserByFilter:function(searchName,succeededCallback, failedCallback, userContext) {
return this._invoke(Web.Service.LoginService.get_path(), 'GetUserByFilter',false,{searchName:searchName},succeededCallback,failedCallback,userContext); },
GetUserTrueNameByFilter:function(searchName,succeededCallback, failedCallback, userContext) {
return this._invoke(Web.Service.LoginService.get_path(), 'GetUserTrueNameByFilter',false,{searchName:searchName},succeededCallback,failedCallback,userContext); }}
Web.Service.LoginService.registerClass('Web.Service.LoginService',Sys.Net.WebServiceProxy);
Web.Service.LoginService._staticInstance = new Web.Service.LoginService();
Web.Service.LoginService.set_path = function(value) { Web.Service.LoginService._staticInstance._path = value; }
Web.Service.LoginService.get_path = function() { return Web.Service.LoginService._staticInstance._path; }
Web.Service.LoginService.set_timeout = function(value) { Web.Service.LoginService._staticInstance._timeout = value; }
Web.Service.LoginService.get_timeout = function() { return Web.Service.LoginService._staticInstance._timeout; }
Web.Service.LoginService.set_defaultUserContext = function(value) { Web.Service.LoginService._staticInstance._userContext = value; }
Web.Service.LoginService.get_defaultUserContext = function() { return Web.Service.LoginService._staticInstance._userContext; }
Web.Service.LoginService.set_defaultSucceededCallback = function(value) { Web.Service.LoginService._staticInstance._succeeded = value; }
Web.Service.LoginService.get_defaultSucceededCallback = function() { return Web.Service.LoginService._staticInstance._succeeded; }
Web.Service.LoginService.set_defaultFailedCallback = function(value) { Web.Service.LoginService._staticInstance._failed = value; }
Web.Service.LoginService.get_defaultFailedCallback = function() { return Web.Service.LoginService._staticInstance._failed; }
Web.Service.LoginService.set_path("LoginService.asmx.htm"/*tpa=http://www.qqhrsyzx.com/Service/LoginService.asmx*/);
Web.Service.LoginService.LogOut= function(onSuccess,onFailed,userContext) {Web.Service.LoginService._staticInstance.LogOut(onSuccess,onFailed,userContext); }
Web.Service.LoginService.CheckUserLogin= function(userName,userPwd,verifyCode,onSuccess,onFailed,userContext) {Web.Service.LoginService._staticInstance.CheckUserLogin(userName,userPwd,verifyCode,onSuccess,onFailed,userContext); }
Web.Service.LoginService.CheckAdminLogin= function(userName,userPwd,verifyCode,onSuccess,onFailed,userContext) {Web.Service.LoginService._staticInstance.CheckAdminLogin(userName,userPwd,verifyCode,onSuccess,onFailed,userContext); }
Web.Service.LoginService.CheckUserIsLogin= function(onSuccess,onFailed,userContext) {Web.Service.LoginService._staticInstance.CheckUserIsLogin(onSuccess,onFailed,userContext); }
Web.Service.LoginService.CheckAdminIsLogin= function(onSuccess,onFailed,userContext) {Web.Service.LoginService._staticInstance.CheckAdminIsLogin(onSuccess,onFailed,userContext); }
Web.Service.LoginService.GetBigClassByTemplate= function(templateId,searchName,classTypeId,onSuccess,onFailed,userContext) {Web.Service.LoginService._staticInstance.GetBigClassByTemplate(templateId,searchName,classTypeId,onSuccess,onFailed,userContext); }
Web.Service.LoginService.GetBigClassByS= function(templateId,searchName,onSuccess,onFailed,userContext) {Web.Service.LoginService._staticInstance.GetBigClassByS(templateId,searchName,onSuccess,onFailed,userContext); }
Web.Service.LoginService.GetBigClassBySs= function(templateId,searchName,onSuccess,onFailed,userContext) {Web.Service.LoginService._staticInstance.GetBigClassBySs(templateId,searchName,onSuccess,onFailed,userContext); }
Web.Service.LoginService.GetBigClassBySX= function(templateId,searchName,templates,userId,bigclassId,onSuccess,onFailed,userContext) {Web.Service.LoginService._staticInstance.GetBigClassBySX(templateId,searchName,templates,userId,bigclassId,onSuccess,onFailed,userContext); }
Web.Service.LoginService.GetUserByFilter= function(searchName,onSuccess,onFailed,userContext) {Web.Service.LoginService._staticInstance.GetUserByFilter(searchName,onSuccess,onFailed,userContext); }
Web.Service.LoginService.GetUserTrueNameByFilter= function(searchName,onSuccess,onFailed,userContext) {Web.Service.LoginService._staticInstance.GetUserTrueNameByFilter(searchName,onSuccess,onFailed,userContext); }
var gtc = Sys.Net.WebServiceProxy._generateTypedConstructor;
if (typeof(Web.Service.ItemModel) === 'undefined') {
Web.Service.ItemModel=gtc("Web.Service.ItemModel");
Web.Service.ItemModel.registerClass('Web.Service.ItemModel');
}
if (typeof(Web.Service.ItemModelTrueUserName) === 'undefined') {
Web.Service.ItemModelTrueUserName=gtc("Web.Service.ItemModelTrueUserName");
Web.Service.ItemModelTrueUserName.registerClass('Web.Service.ItemModelTrueUserName');
}
