Type.registerNamespace('Web.Service');
Web.Service.CanlendarService=function() {
Web.Service.CanlendarService.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
Web.Service.CanlendarService.prototype={
GetNewsCountByDay:function(NewCanlendarBigClassId,month,year,succeededCallback, failedCallback, userContext) {
return this._invoke(Web.Service.CanlendarService.get_path(), 'GetNewsCountByDay',false,{NewCanlendarBigClassId:NewCanlendarBigClassId,month:month,year:year},succeededCallback,failedCallback,userContext); }}
Web.Service.CanlendarService.registerClass('Web.Service.CanlendarService',Sys.Net.WebServiceProxy);
Web.Service.CanlendarService._staticInstance = new Web.Service.CanlendarService();
Web.Service.CanlendarService.set_path = function(value) { Web.Service.CanlendarService._staticInstance._path = value; }
Web.Service.CanlendarService.get_path = function() { return Web.Service.CanlendarService._staticInstance._path; }
Web.Service.CanlendarService.set_timeout = function(value) { Web.Service.CanlendarService._staticInstance._timeout = value; }
Web.Service.CanlendarService.get_timeout = function() { return Web.Service.CanlendarService._staticInstance._timeout; }
Web.Service.CanlendarService.set_defaultUserContext = function(value) { Web.Service.CanlendarService._staticInstance._userContext = value; }
Web.Service.CanlendarService.get_defaultUserContext = function() { return Web.Service.CanlendarService._staticInstance._userContext; }
Web.Service.CanlendarService.set_defaultSucceededCallback = function(value) { Web.Service.CanlendarService._staticInstance._succeeded = value; }
Web.Service.CanlendarService.get_defaultSucceededCallback = function() { return Web.Service.CanlendarService._staticInstance._succeeded; }
Web.Service.CanlendarService.set_defaultFailedCallback = function(value) { Web.Service.CanlendarService._staticInstance._failed = value; }
Web.Service.CanlendarService.get_defaultFailedCallback = function() { return Web.Service.CanlendarService._staticInstance._failed; }
Web.Service.CanlendarService.set_path("CanlendarService.asmx.htm"/*tpa=http://www.qqhrsyzx.com/Service/CanlendarService.asmx*/);
Web.Service.CanlendarService.GetNewsCountByDay= function(NewCanlendarBigClassId,month,year,onSuccess,onFailed,userContext) {Web.Service.CanlendarService._staticInstance.GetNewsCountByDay(NewCanlendarBigClassId,month,year,onSuccess,onFailed,userContext); }
