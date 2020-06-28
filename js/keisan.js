var strQuestion = "";
var intAnswer = 0;
var intAmari = 0;
var intAnswer2 = 0;

//問題作成と採点結果表示関数
function F_CREATE_QUESTION(strWSSS ,strKeta ,strAmari){
	//変数初期化
	intAmari=0;
	
	//割り算のとき
	if(strWSSS=="4"){
		//右側の数値範囲決定
		if(strKeta.substring(1,2)=="1"){		//右１桁
			if(strKeta.substring(0,1)=="1"){		//左１桁
				intRMax=4;
				intRMin=2;
			}else if(strKeta.substring(0,1)=="2"){	//左２桁
				intRMax=9;
				intRMin=2;
			}else if(strKeta.substring(0,1)=="3"){	//左３桁
				intRMax=9;
				intRMin=2;
			}
		}else if(strKeta.substring(1,2)=="2"){	//右２桁
			if(strKeta.substring(0,1)=="2"){		//左２桁
				intRMax=49;
				intRMin=10;
			}else if(strKeta.substring(0,1)=="3"){	//左３桁
				intRMax=99;
				intRMin=10;
			}
		}
		//右側決定
		intRight=Math.round(Math.random()*(intRMax-intRMin))+intRMin;
		
		//割算の答えの数値範囲（最大値）決定
		if(strKeta.substring(0,1)=="1"){		//左１桁
			intAMax=Math.floor(9/intRight);
		}else if(strKeta.substring(0,1)=="2"){	//左２桁
			intAMax=Math.floor(99/intRight);
		}else if(strKeta.substring(0,1)=="3"){	//左３桁
			intAMax=Math.floor(999/intRight);
		}
		//割算の答えの数値範囲（最小値）決定
		if(strAmari==undefined){	//余りがないとき
			intAMin=2;
		}else{
			intAMin=1;				//余りがあるとき
		}

		//割算の答えを決定
		intAnswer = Math.round(Math.random()*(intAMax-intAMin))+intAMin;
		//左側を算出
		intLeft=intRight*intAnswer;
	
		//余りがないとき
		if(strAmari==undefined){
			intAmari=0;
		//余りがあるとき
		}else{

			if(strKeta.substring(0,1)=="1"){		//左１桁
				intTemp=9;
			}else if(strKeta.substring(0,1)=="2"){	//左２桁
				intTemp=99;
			}else if(strKeta.substring(0,1)=="3"){	//左３桁
				intTemp=999;
			}
			//余りの決定（桁オーバーにならないようにする）
			//do{
			//	intAmari=Math.round(Math.random()*(intRight-1));
			//}while(intLeft+intAmari>intTemp)
			
			intAmari=Math.round(Math.random()*(intRight-1));
			if(intLeft + intAmari>intTemp){
				intAmari=Math.round(Math.random()*(intTemp-intLeft));
			}
			
			//割られる数の最終決定
			intLeft=intLeft + intAmari;
		}
		
	//割り算以外
	}else{
		//左側の数値範囲決定
		if(strKeta.substring(0,1)=="1"){
			intLMax=9;
			intLMin=1;
		}else if(strKeta.substring(0,1)=="2"){
			intLMax=99;
			intLMin=10;
		}else if(strKeta.substring(0,1)=="3"){
			intLMax=999;
			intLMin=100;
		}
		intLeft=Math.round(Math.random()*(intLMax-intLMin))+intLMin;

		//右側の数値範囲決定
		if(strKeta.substring(1,2)=="1"){
			intRMax=9;
			intRMin=1;
		}else if(strKeta.substring(1,2)=="2"){
			intRMax=99;
			intRMin=10;
		}
		
		//引き算のときは答えがマイナスにならないようにする
		if(strWSSS==2 && intRMax>intLeft){
			intRMax=intLeft;
		}
		intRight=Math.round(Math.random()*(intRMax-intRMin))+intRMin;
	}
	//式の作成
	switch (strWSSS){
		//足し算
		case "1":
			strQuestion = " "+intLeft+" ＋ "+intRight+" ＝";
			intAnswer = intLeft + intRight;
			break;
	    //引き算
		case "2":
			strQuestion = " "+intLeft+" － "+intRight+" ＝";
			intAnswer = intLeft - intRight;
			break;
	    //掛け算
		case "3":
			strQuestion = " "+intLeft+" × "+intRight+" ＝";
			intAnswer = intLeft * intRight;
			break;
	    //割り算
		case "4":
			strQuestion = " "+intLeft+" ÷ "+intRight+" ＝";
			intAnswer2 = Math.round(intLeft * 1000 / intRight) / 1000;//少数第３桁を四捨五入
			break;
	    default:
	} 
	
}

//問題作成と採点結果表示関数
//パラメータを桁数指定からMAX値指定に変更したもの
function F_CREATE_QUESTION2(strWSSS ,intLMax ,intRMax ,strAmari){
	//変数初期化
	intAmari=0;
	
	//割り算のとき
	if(strWSSS=="4"){
		
		//右側の数値範囲決定
		if(intRMax==10){		//右10以下
			intRMin=2;
			if(intLMax==10 && strAmari==undefined){		//左10以下で余りがないとき
				intRMax=5;
			}
		}else if(intRMax==20){	//右20以下
			intRMin=10;
			if(intLMax==20 && strAmari==undefined){		//左20以下で余りがないとき
				intRMax=10;
			}
		}else if(intRMax==100){	//右100以下
			intRMin=10;
			if(intLMax==100 && strAmari==undefined){		//左100以下で余りがないとき
				intRMax=50;
			}
		}
		
		//右側決定
		intRight=Math.round(Math.random()*(intRMax-intRMin))+intRMin;
		
		//割算の答えの数値範囲（最大値）決定
		intAMax=Math.floor(intLMax/intRight);
		
		//割算の答えの数値範囲（最小値）決定
		if(strAmari==undefined){	//余りがないとき
			intAMin=2;
		}else{
			intAMin=1;				//余りがあるとき
		}
		//左側
		if(intLMax<=10){		//左10以下
			intLMin=1;
		}else if(intLMax<=100){	//左100以下
			intLMin=10;
		}else if(intLMax<=1000){	//左1000以下
			intLMin=100;
		}
		//左側の最小値を下回らないように設定する
		if(strAmari==undefined){	//余りがないとき
			if(intRight*intAMin < intLMin){
				//答え最小値＝左側最小値÷式右側（切上げ）
				intAMin = Math.ceil(intLMin/intRight);
			}
		}else{						//余りがあるとき
			if(intRight*intAMin+intRight <= intLMin){
				//答え最小値＝左側最小値÷式右側（切捨て）
				intAMin = Math.floor(intLMin/intRight);
			}
		}
		
		//割算の答えを決定
		intAnswer = Math.round(Math.random()*(intAMax-intAMin))+intAMin;
		//左側を算出
		intLeft=intRight*intAnswer;
		
		//余りがないとき
		if(strAmari==undefined){
			intAmari=0;
		//余りがあるとき
		}else{
			//左側最小値を割らないようになるまでループする
			do{
				//余り数の算出
				intAmari=Math.round(Math.random()*(intRight-1));
				if(intLeft + intAmari>intLMax){
					intAmari=Math.round(Math.random()*(intLMax-intLeft));
				}
			}while(intLeft + intAmari < intLMin);
			
			//割られる数の最終決定
			intLeft=intLeft + intAmari;
		}
		
	//割り算以外
	}else{
		//左側の数値範囲決定
		if(intLMax<=10){		//左10以下
			intLMin=1;
		}else if(intLMax<=100){	//左100以下
			intLMin=10;
		}else if(intLMax<=1000){	//左1000以下
			intLMin=100;
		}
		
		intLeft=Math.round(Math.random()*(intLMax-intLMin))+intLMin;
		
		//右側の数値範囲決定
		if(intRMax<=10){		//右10以下
			intRMin=1;
		}else if(intRMax<=100){
			intRMin=10;
		}
		
		//引き算のときは答えがマイナスにならないようにする
		if(strWSSS==2 && intRMax>intLeft){
			intRMax=intLeft;
		}
		intRight=Math.round(Math.random()*(intRMax-intRMin))+intRMin;
	}
	//式の作成
	switch (strWSSS){
		//足し算
		case "1":
			strQuestion = " "+intLeft+" ＋ "+intRight+" ＝";
			intAnswer = intLeft + intRight;
			break;
	    //引き算
		case "2":
			strQuestion = " "+intLeft+" － "+intRight+" ＝";
			intAnswer = intLeft - intRight;
			break;
	    //掛け算
		case "3":
			strQuestion = " "+intLeft+" × "+intRight+" ＝";
			intAnswer = intLeft * intRight;
			break;
	    //割り算
		case "4":
			strQuestion = " "+intLeft+" ÷ "+intRight+" ＝";
			intAnswer2 = Math.round(intLeft * 1000 / intRight) / 1000;//少数第３桁を四捨五入
			break;
	    default:
	} 
	
}


//メッセージスクロール関数
function F_SCROLL(){
	strMsg=strMsg.substring(1,strMsg.length) + strMsg.substring(0,1);
	document.FORM1.txtMessage.value=strMsg;
	setTimeout("F_SCROLL()",300);
}

