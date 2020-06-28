//---------------------------------------
//高さ調整
function F_LineheightChange(strValue){   
    document.getElementById("QTable").style.lineHeight = strValue;
}


//---------------------------------------
//解答欄印刷の切替
function F_ChangePrint(){   
	
	if(document.frmBtnArea.chkPrintAnswer.checked){
		document.getElementById("ATable").className = 'doprint';
	}else{
		document.getElementById("ATable").className = 'noprint';
	}
}

