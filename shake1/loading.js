/**
 * Created by 365 on 2015/7/13.
 */
//��ȡ�����ҳ��ɼ��߶ȺͿ��
var _PageHeight = document.documentElement.clientHeight,
	_PageWidth = document.documentElement.clientWidth;
//����loading����붥�����󲿵ľ��루loading��Ŀ��Ϊ215px���߶�Ϊ61px��
var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
	_LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
//��ҳ��δ�������֮ǰ��ʾ��loading Html�Զ�������

//_LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#eeeeee;z-index:10000;">';
var _LoadingHtml =  '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#eeeeee;z-index:10000;">'

_LoadingHtml +='<div style="width:100%;height:100%;position: absolute;left:50%;margin-left:-50%;top:50%;margin-top:-20%">'


_LoadingHtml += '<div class="spinner">';
_LoadingHtml += '<div class="rect1"></div>';
_LoadingHtml += '<div class="rect2"></div>';
_LoadingHtml += '<div class="rect3"></div>';
_LoadingHtml += '<div class="rect4"></div>';
_LoadingHtml += '</div>';

_LoadingHtml +='<p style="text-align: center;padding-top:1%;color:#979797">���ݼ��� ���Ժ�</p>'


_LoadingHtml +='</div>'

_LoadingHtml += '</div>';

//_LoadingHtml += '</div>';

//var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#eeeeee;z-index:10000;"><div style="position: absolute; cursor1: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px; width: auto; height: 57px;  padding:60px 10px 5px 10px; background: url(loading.gif?2232) no-repeat scroll center top; color: #696969;">�µ�һ�� ������ʼ</div></div>';
//����loadingЧ��
document.write(_LoadingHtml);

//window.onload = function () {
//    var loadingMask = document.getElementById('loadingDiv');
//    loadingMask.parentNode.removeChild(loadingMask);
//};

//��������״̬�ı�
document.onreadystatechange = completeLoading;

//����״̬Ϊcompleteʱ�Ƴ�loadingЧ��
function completeLoading() {
	if (document.readyState == "complete") {
		var loadingMask = document.getElementById('loadingDiv');
		loadingMask.parentNode.removeChild(loadingMask);
	}
}
