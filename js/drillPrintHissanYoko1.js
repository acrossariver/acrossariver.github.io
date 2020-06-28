var strWSSSMark = '';
var intQuestionL = 0;
var intQuestionR = 0;

var strQuestions=new Array(20);
var intAnswers=new Array(20);
var intAmaris=new Array(20);
var intAnswers2=new Array(20);
var intQuestionsL=new Array(20);
var intQuestionsR=new Array(20);

//保存時のPOST用
var strTextWSSS;//問題の種類
var strTextKeta;//桁数
var strTextAmari;//割り算のときの余り

//初期化関数
function F_Initialize(){
}
//スタートボタン押下時関数
function F_Start(){
	var strHTML = '';
	
	//問題の枠作成
	switch (document.FORM1.selWSSS.value){
	case "1"://足し算
	case "2"://引き算
	case "3"://掛け算
		strHTML = '		<table border="0" width="950" align="left" cellspacing="0" cellpadding="0" style="font-size:16pt;text-align:right;font-weight:bold;letter-spacing:8px;">';
		break;
	case "4"://割り算
		strHTML = '		<table border="0" width="950" align="left" cellspacing="0" cellpadding="0" style="font-size:15pt;text-align:right;font-weight:bold;letter-spacing:8px;">';
		break;
	default:
	}
	
	document.getElementById("QTable").innerHTML = ''
	+'		（　　　　がつ　　　　にち）（なまえ：　　　　　　　　　　　　　　　　　　　　　　）　　（とくてん：　　　　　　　てん）<br />'
	+ strHTML 
	+'			<tr>'
	+'				<td  colspan="10">'
	+'					<hr style="color:black;background-color:black;height:0.01em;">'
	+'				</td>'
	+'			</tr>'
	+'			<tr>'
	+'				<td style="width:55px;vertical-align:top;letter-spacing:1px;">(1)</td>'
	+'				<td style="width:135px;"><div id="q01"></div></td>'
	+'				<td style="width:55px;vertical-align:top;letter-spacing:1px;">(2)</td>'
	+'				<td style="width:135px;"><div id="q02"></div></td>'
	+'				<td style="width:55px;vertical-align:top;letter-spacing:1px;">(3)</td>'
	+'				<td style="width:135px;"><div id="q03"></div></td>'
	+'				<td style="width:55px;vertical-align:top;letter-spacing:1px;">(4)</td>'
	+'				<td style="width:135px;"><div id="q04"></div></td>'
	+'				<td style="width:55px;vertical-align:top;letter-spacing:1px;">(5)</td>'
	+'				<td style="width:135px;"><div id="q05"></div></td>'
	+'			</tr>'
	+'			<tr style="height:10px;">'
	+'				<td colspan="10">'
	+'					<hr style="color:black;background-color:black;height:0.01em;">'
	+'				</td>'
	+'			</tr>'
	+'			<tr>'
	+'				<td style="width:55px;vertical-align:top;letter-spacing:1px;">(6)</td>'
	+'				<td style="width:135px;"><div id="q06"></div></td>'
	+'				<td style="width:55px;vertical-align:top;letter-spacing:1px;">(7)</td>'
	+'				<td style="width:135px;"><div id="q07"></div></td>'
	+'				<td style="width:55px;vertical-align:top;letter-spacing:1px;">(8)</td>'
	+'				<td style="width:135px;"><div id="q08"></div></td>'
	+'				<td style="width:55px;vertical-align:top;letter-spacing:1px;">(9)</td>'
	+'				<td style="width:135px;"><div id="q09"></div></td>'
	+'				<td style="width:55px;vertical-align:top;letter-spacing:1px;">(10)</td>'
	+'				<td style="width:135px;"><div id="q10"></div></td>'
	+'			</tr>'
	+'		</table>'
	+'		<p style="clear:both;">'
	+'		</p>'
	;
	
	
	//解答表の枠作成
	//var strHTML = ''
	switch (document.FORM1.selWSSS.value){
	case "1"://足し算
	case "2"://引き算
	case "3"://掛け算
	case "4"://割り算
		strHTML = ''
		+'		<table border="1" width="560" align="left" cellspacing="0" cellpadding="0" style="font-size:10pt;text-align:left">'
		+'			<tr>'
		+'				<td><div id="a01"></div></td>'
		+'				<td><div id="a02"></div></td>'
		+'				<td><div id="a03"></div></td>'
		+'				<td><div id="a04"></div></td>'
		+'				<td><div id="a05"></div></td>'
		+'			</tr>'
		+'			<tr>'
		+'				<td><div id="a06"></div></td>'
		+'				<td><div id="a07"></div></td>'
		+'				<td><div id="a08"></div></td>'
		+'				<td><div id="a09"></div></td>'
		+'				<td><div id="a10"></div></td>'
		+'			</tr>'
		+'		</table>'
		
		break;
	
	default:
	}
	
	//解答表の枠表示
	document.getElementById("ATable").innerHTML = ''
		+'		----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----<br />'
		+'		解答<br />'
		+ strHTML
		+'		<br style="clear:both;" class="noprint" />'
//		+'		<div class="noprint" style="text-align:center;"><form>'
//		+'		<INPUT type="button" value="印刷" class="noprint" style="font-size:14pt" onClick="javascript:window.print();">'
//		+'		</form><br />'
//		+'		<a href="#FORM1" >問題作成ボタンへ戻る</a><br />'
//		+'		</div>'
		;
	
	
document.getElementById("BtnArea").innerHTML = ''
+'		<div class="noprint" style="text-align:center;">'
+'		<table border="0" width="620" align="center" cellspacing="0" cellpadding="0" style="font-size:11pt;text-align:center">'
+'		<tr><td>'
+'			<form id="frmBtnArea" name="frmBtnArea">'
+'			<p>'
+'				<a href="#FORM1" >問題作成ボタンへ戻る</a>'
+'			</p>'
+'			<p>'
+'				<input type="checkbox" id="chkPrintAnswer" name="chkPrintAnswer" checked="checked" onClick="F_ChangePrint()">'
+'				<label for="chkPrintAnswer">解答も印刷する</label>'
+'			</p>'
+'			<p>'
+'				高さ調整ボタン'
+'				<INPUT id="lhc1" type="button" value=" 90%" class="noprint" style="font-size:11pt" onClick="F_LineheightChange(\'90%\');">'
+'				<INPUT id="lhc2" type="button" value="100%" class="noprint" style="font-size:11pt" onClick="F_LineheightChange(\'100%\');">'
+'				<INPUT id="lhc3" type="button" value="110%" class="noprint" style="font-size:11pt" onClick="F_LineheightChange(\'110%\');">'
+'				<INPUT id="lhc4" type="button" value="120%" class="noprint" style="font-size:11pt" onClick="F_LineheightChange(\'120%\');">'
+'				<INPUT id="lhc5" type="button" value="130%" class="noprint" style="font-size:11pt" onClick="F_LineheightChange(\'130%\');">'
+'				<INPUT id="lhc6" type="button" value="140%" class="noprint" style="font-size:11pt" onClick="F_LineheightChange(\'140%\');">'
+'				<INPUT id="lhc7" type="button" value="150%" class="noprint" style="font-size:11pt" onClick="F_LineheightChange(\'150%\');">'
+'			</p>'
+'			<p>'
+'				<INPUT type="button" value="印刷" class="noprint" style="font-size:14pt" onClick="javascript:window.print();">'
+'				<br class="noprint" />'
+'			</p>'
+'			<p>'
+'				<INPUT id="btnSave" type="button" value="サーバーに保存" class="noprint" style="font-size:14pt" onClick="F_Save();">'
+'			</p>'
+'			</form>'
+'		</td></tr></table>'
+'		</div>'

;
	
	//問題と解答の作成
	F_CreateTable();
	
	//解答印刷切替
	F_ChangePrint();
	
	//問題構成の記憶（保存時のPOST用）
	strTextWSSS = document.FORM1.selWSSS.options[document.FORM1.selWSSS.selectedIndex].text;			//問題の種類
	strTextKeta = document.FORM1.selKeta.options[document.FORM1.selKeta.selectedIndex].text;			//桁数
	if(document.FORM1.selWSSS.value != "4"){
		strTextAmari = "";//割り算意外
	}else if(document.FORM1.chkAmari.checked){
		strTextAmari = "答えに余りがない問題のみ";
	}else{
		strTextAmari = "答えに余りがある問題を含む";
	}
	
	//alert("問題を作成しました。問題は、ページの下の方に作成されています。");
	location.href="#QTable";
	
}


//問題作成関数
function F_CreateTable(){
	//割り算１桁の余りなしのときだけは問題繰り返し防止フラグはオフにする
	if(document.FORM1.selWSSS.value == "4" && document.FORM1.selKeta.value =="11"){
		var intNoRepeat = 0;
	}else{
		var intNoRepeat = 1;
	}

	//問題数設定
	var intQcount = 0;
	switch (document.FORM1.selWSSS.value){
	case "1"://足し算
	case "2"://引き算
	case "3"://掛け算
	case "4"://割り算
		intQcount = 10;
		break;
	}

	//問題と解答の表示
	for(var i = 1; i <= intQcount; i++){
		
		var strQNumber = ("(" + i + ") ").slice(0,4);

		if(document.FORM1.chkAmari.checked){
			var strAmari = undefined;
		}else{
			var strAmari = "1";
		}
		
		//同じ問題が繰り返し出題されないようにする
		do{
			var flgBreak = 1;

			//問題の作成
			F_CREATE_QUESTION(document.FORM1.selWSSS.value ,document.FORM1.selKeta.value ,strAmari);
			
			strQuestions[i] = strQuestion;
			intAnswers[i] = intAnswer;
			intAmaris[i] = intAmari;
			intAnswers2[i] = intAnswer2;			
			
			//繰り返し防止フラグで分岐
			if(intNoRepeat == 1){
				//今まで同じ問題がなかったか確認する
				for(var ii = 1; ii < i; ii++){
					if(strQuestions[i] == strQuestions[ii]){
						flgBreak = 0;
						break;
					}
				}
			}else{
				//同じ問題が連続して出題されないようにする
				if(i>1){
					if(strQuestions[i] == strQuestions[i-1]){
						flgBreak = 0;
					}
				}
			}
		}while(flgBreak == 0);
		
		//ひっさんに変換する
		F_ConvertToHissan(strQuestion);
		
		//問題表示形式の作成
		var strTemp = '';
		var strTrimL = intQuestionL.replace(/(^\s+)|(\s+$)/g, "");//数値をトリムして文字列化
		var strTrimR = intQuestionR.replace(/(^\s+)|(\s+$)/g, "");//数値をトリムして文字列化
		
		switch (document.FORM1.selWSSS.value){
		case "1"://足し算
		case "2"://引き算
		case "3"://掛け算
			strTemp = strTrimL + '<br />';//上段
			strTemp = strTemp + strWSSSMark + ('　　　' + strTrimR).substr(('　　　' + strTrimR).length-3,3) + '<br />';//下段
			strTemp = strTemp + '<hr style="color:black;background-color:black;height:0.01em;"><br />';//下線
			strTemp = strTemp + '<p>&emsp;</p><p>&emsp;</p><p>&emsp;</p>';//
//			strTemp = replaceAll(strTemp,"　","&emsp;");//全角スペースを&emsp;に変換
			break;
		case "4"://割り算
			//バーはスペース文字に黒い下線を引く
			//スペース文字の文字数を決め&nbsp;に変換する
			var strLineSpace = replaceAll('      '.substr(0,strTrimL.length) ," ","&nbsp;");
			strTemp = '<br />';
			strTemp = strTemp + '<span style="border-bottom:solid 1px #000000;">　' + strLineSpace + '</span>';//上段（割られる数の長さ分スペース）
			strTemp = strTemp + '<img src="./img/WhiteDot.gif" alt="" width="1" height="1" border="0"><br />';//上段（スペースが有効になるよう最期に画像を貼る）
			strTemp = strTemp + strTrimR.replace(/(^\s+)|(\s+$)/g, "") + '）' + strTrimL + '<br />';//下段
			strTemp = strTemp + '<p>&emsp;</p><p>&emsp;</p><p>&emsp;</p>';//
			break;
		}
		
		//サーバー保存時の文字化け対策のためスペースは全て&nbsp;とする
		strTemp = replaceAll(strTemp,"　","&nbsp;&nbsp;");//全角スペースを&nbsp;二個に変換
		strTemp = replaceAll(strTemp,"&emsp;","&nbsp;&nbsp;");//&emsp;を&nbsp;二個に変換
		
		//問題表示
		document.getElementById("q" + ("0" + i).slice(-2)).innerHTML = strTemp;
		//解答表示
		if(intAmaris[i]==0){
			document.getElementById("a" + ("0" + i).slice(-2)).innerHTML = strQNumber + "　" + intAnswers[i];
		}else{
			document.getElementById("a" + ("0" + i).slice(-2)).innerHTML = strQNumber + "　" + intAnswers[i] + "　あまり　" + intAmaris[i]
			+'<br />' + intAnswers2[i];
		}
	}
}


//ひっさん関数
//数式をひっさん形式に変換する
function F_ConvertToHissan(strQ){
		
	if(strQ.indexOf("＋") > -1){
		strWSSSMark = "＋";
	}else if(strQ.indexOf("－") > -1){
		strWSSSMark = "－";
	}else if(strQ.indexOf("×") > -1){
		strWSSSMark = "×";
	}else if(strQ.indexOf("÷") > -1){
		strWSSSMark = "÷";
	}
	
	//不要なスペースを取り去る
	strQ = strQ.replace(" ","");
	strQ = strQ.replace("　","");
	//＝（イコールも区切り文字にする）
	strQ = strQ.replace("＝",strWSSSMark);
	
	var strQParts = strQ.split(strWSSSMark);
	intQuestionL = strQParts[0];
	intQuestionR = strQParts[1];

}

//---------------------------------------

function replaceAll(expression, org, dest){   
    return expression.split(org).join(dest);   
}

//---------------------------------------
//保存ボタン押下時関数
function F_Save(){
	
	if(window.confirm('現在表示している内容をサーバーに保存します。\n保存したページは他の閲覧者からも見る事ができるようになります。\n保存してよろしいですか？')){
	}else{
		return;
	}
	//innerHTMLを取得して送信用配列にする
	var strQT = document.getElementById("QTable").innerHTML;
	var strAT = document.getElementById("ATable").innerHTML;
	var data = new Object();
	data["QT"] = strQT;
	data["AT"] = strAT;
	
	data["WSSS"] = strTextWSSS;
	data["KETA"] = strTextKeta;
	data["AMARI"] = strTextAmari;
	
	//割り算のフォーマット用画像ソースを返還する
	data["QT"]  = replaceAll(data["QT"],'img src="./img/WhiteDot.gif','[WhiteDot]');
	//Edgeがタグ内の属性を勝手に並べかえる問題への対策
	data["QT"]  = replaceAll(data["QT"],'<img width="1" height="1" alt="" src="./img/WhiteDot.gif" border="0">','[WhiteDotEdge]');
	
	//ajaxで送信
	$.ajax({
		type: 'post',
		url: './php/save/saveDrillPrintHissanYoko.php',
		data: data,
		success: function(data){
			if(data.substring(0,9)=='[SUCCESS]'){
				alert('ページをサーバーに保存しました。\n保存したページは保存済みのプリントの一覧ページからも開くことができます。');
				document.getElementById("btnSave").disabled=true;
				var strIH = '<div class="noprint" style="text-align:center;">→<a href="./user/drillPrintHissanYoko/'+data.substring(9,data.length)+'"> 保存したページを開く </a></div>'
				document.getElementById("BtnArea").innerHTML = document.getElementById("BtnArea").innerHTML + strIH;
				F_FileList();//保存ファイルリスト更新
			}else{
				alert(data);
			}
			
		}
	});
}

//---------------------------------------
//保存ファイルのリスト更新
function F_FileList(){
	
	var data = new Object();
	data['dir'] = "drillPrintHissanYoko";
	
	//ajaxで送信
	$.ajax({
		type: 'post',
		url: './php/save/userFileList.php',
		data: data,
		success: function(data){
				
				document.getElementById("ListArea").innerHTML = data;
				return;
		}
	});
	
}
