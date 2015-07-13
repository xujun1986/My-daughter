/**
 * Created by 365 on 2015/7/13.
 */
//获取浏览器页面可见高度和宽度
var _PageHeight = document.documentElement.clientHeight,
	_PageWidth = document.documentElement.clientWidth;
//计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）
var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
	_LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
//在页面未加载完毕之前显示的loading Html自定义内容

//_LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#eeeeee;z-index:10000;">';
var _LoadingHtml =  '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#eeeeee;z-index:10000;">'

_LoadingHtml +='<div style="width:100%;height:100%;position: absolute;left:50%;margin-left:-50%;top:50%;margin-top:-20%">'


_LoadingHtml += '<div class="spinner">';
_LoadingHtml += '<div class="rect1"></div>';
_LoadingHtml += '<div class="rect2"></div>';
_LoadingHtml += '<div class="rect3"></div>';
_LoadingHtml += '<div class="rect4"></div>';
_LoadingHtml += '</div>';

_LoadingHtml +='<p style="text-align: center;padding-top:1%;color:#979797">数据加载 请稍候</p>'


_LoadingHtml +='</div>'

_LoadingHtml += '</div>';

//_LoadingHtml += '</div>';

//var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#eeeeee;z-index:10000;"><div style="position: absolute; cursor1: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px; width: auto; height: 57px;  padding:60px 10px 5px 10px; background: url(loading.gif?2232) no-repeat scroll center top; color: #696969;">新的一天 即将开始</div></div>';
//呈现loading效果
document.write(_LoadingHtml);

//window.onload = function () {
//    var loadingMask = document.getElementById('loadingDiv');
//    loadingMask.parentNode.removeChild(loadingMask);
//};

//监听加载状态改变
document.onreadystatechange = completeLoading;

//加载状态为complete时移除loading效果
function completeLoading() {
	if (document.readyState == "complete") {
		var loadingMask = document.getElementById('loadingDiv');
		loadingMask.parentNode.removeChild(loadingMask);
	}
}
