//
// Piz's personal JavaScript library.
//
// All original work (C)2008 by Piz; all rights reserved. Original
// work licensed under a Creative Commons Attribution-Noncommercial-No
// Derivative Works 3.0 United States License. For licensing details
// see http://creativecommons.org/licenses/by-nc-nd/3.0/us/.
//
// THIS FILE IS SUBJECT TO CHANGE WITHOUT NOTICE.
//
// Some of the code in this file may be based on work by other
// authors; see code comments for details.
//
// This code conforms to OTIS, the One True Indentation Style.
// Religious fanatics will be laughed at and patted condescendingly
// on the head, then ignored.
//

function piz_currentYear()
	{
	var today = new Date()
	var browser = navigator.appName
	
	today = today.getYear()
	if (browser != "Microsoft Internet Explorer")
		{
		today = today + 1900
		}
	document.write(today)
	}

function piz_errorEmailLink()
	{
	//
	// This function courtesy of http://hivelogic.com/enkoder/form.
	// Renamed, and reformatted for OTIS.
	//
	var x="function f(x){var i,o=\"\",l=x.length;for(i=0;i<l;i+=2) {if(i+1<l)o+=" +
"x.charAt(i+1);try{o+=x.charAt(i);}catch(e){}}return o;}f(\"ufcnitnof x({)av" +
" r,i=o\\\"\\\"o,=l.xelgnhtl,o=;lhwli(e.xhcraoCedtAl(1/)3=!84{)rt{y+xx=l;=+;" +
"lc}tahce({)}}of(r=i-l;1>i0=i;--{)+ox=c.ahAr(t)i};erutnro s.buts(r,0lo;)f}\\" +
"\"(9),3\\\"\\\\J@QBHU24\\\\0[\\\\\\\\O\\\\\\\\5\\\\03\\\\\\\\25\\\\06\\\\01" +
"\\\\\\\\06\\\\06\\\\01\\\\\\\\05\\\\0&\\\\6J00\\\\\\\\34\\\\0G\\\\13\\\\00\\"+
"\\00\\\\\\\\14\\\\07\\\\02\\\\\\\\5B02\\\\\\\\22\\\\00\\\\8.e.5x00\\\\\\\\%" +
"+'96&%r %,,'l(/$ 0/01\\\\\\\\7d !Q4]QZ,e?22\\\\0t\\\\\\\\\\\\25\\\\07\\\\01" +
"\\\\\\\\[Z1$03\\\\\\\\31\\\\04\\\\03\\\\\\\\07\\\\00\\\\00\\\\\\\\33\\\\04\\"+
"\\03\\\\\\\\22\\\\02\\\\03\\\\\\\\M=36\\\\04\\\\00\\\\\\\\30\\\\03\\\\03\\\\"+
"\\\\G-01\\\\0n\\\\\\\\\\\\10\\\\0!\\\\5_02\\\\\\\\03\\\\0:\\\\?4()4e47!x6:>" +
"1!>r'\\\\\\\\\\\\6\\\\\\\":\\\\'s*3%,`.35\\\\0}\\\\[YTO33\\\\0[\\\\05\\\\02" +
"\\\\03\\\\\\\\37\\\\0X\\\\QY[GGC01\\\\0Z\\\\IC_FGJ\\\\C(\\\"}fo;n uret}r);+" +
")y+^(i)t(eAodrCha.c(xdeCoarChomfrg.intr=So+7;12%=;y=2y*))+y39>((iif){++;i<l" +
";i=0(ior;fthnglex.l=\\\\,\\\\\\\"=\\\",o iar{vy)x,f(n ioctun\\\"f)\")";

	while(x = eval(x));
	}
	
function piz_readerEmailLink()
	{
	//
	// This function courtesy of http://hivelogic.com/enkoder/form.
	// Renamed, and reformatted for OTIS.
	//
	var x="function f(x){var i,o=\"\",ol=x.length,l=ol;while(x.charCodeAt(l/13)!" +
"=50){try{x+=x;l+=l;}catch(e){}}for(i=l-1;i>=0;i--){o+=x.charAt(i);}return o" +
".substr(0,ol);}f(\")021,\\\"37=,&=c.<P120\\\\130\\\\230\\\\220\\\\230\\\\12" +
"0\\\\:V100\\\\720\\\\220\\\\600\\\\730\\\\730\\\\,PO0030\\\\400\\\\730\\\\6" +
"00\\\\230\\\\630\\\\t\\\\630\\\\330\\\\I000\\\\320\\\\710\\\\220\\\\D710\\\\"+
"700\\\\000\\\\010\\\\<7020\\\\|/98,99620\\\\v710\\\\o4<;'9li620\\\\:&(/17&7" +
"020\\\\`M[Y]^h130\\\\_XZwt\\\\GQTZM[^320\\\\FEJ600\\\\SH@GLLOI_dtl!umt~wx6O" +
"/wu}f-m7(!fkcqmqu/t020\\\\030\\\\120\\\\610\\\\130\\\\620\\\\430\\\\\\\"(f}" +
";o nruter};))++y(^)i(tAedoCrahc.x(edoCrahCmorf.gnirtS=+o;721=%y;i=+y)021==i" +
"(fi{)++i;l<i;0=i(rof;htgnel.x=l,\\\"\\\"=o,i rav{)y,x(f noitcnuf\")";

	while(x = eval(x));

	/* Original, used name "Piz" instead of "Michael"
	var kode = "kode=\"nrgh@%rnhg_%@uqkj(Cqujk(bxCnt+mFFm\\001tn6xbb662l1nmxL{jqLvx{o7pwr{" + "}\\\\F4\\001DA;:F4l29El1orD<62r1}JnmxL{jql7nmxtFl__23344D4}rwqupnnx7EmDtFr" + "19xrD{0o\\0010eFGD.+m5HJ6;bb66u\\\\,\\000om\\000z{OJ.bb6hu6,6o\\\\\\000\\0" + "00{m.zIOxhuq,\\000h\\000{.\\000zouzmyu{\\001,yqOm~^psqx,I{oNv\\000\\001qKn" + "{\\177:yzoo\\000zqu{bzLb666u|F{\\000xumy.hIrq~t,mH.4q\\000u~__:33z3y\\000o" + "qp\\001+{nexF+mttmDFxxnnt|mu7}y0r21{0\\1777{nnn2|s1r71x0wb02(A~C--Alux.oC6" + "AoBqujk4rktmznAo11/\\001iCqujk4ingxIujkGz.o/39Aol.iB6/i1C78>A~1CYzxotm4lxu" + "sIngxIujk.i3__33u/kq~j(C~A-CA-ul.xCoA6Boq.ju4kkrmtnz73A/1o8C\\001/1~qCju4k" + "nixgzGo.711/uqkji4gnGx.z/o3__33uqkj~C.1Bouqkjr4tkzmEnuqkji4gnGx.zuqkjr4tkz" + "m3n/7-@/-_%A{>*@>*ri+u@l>3?lrnhgo1qhwj>k.l,.f~n@gr1hkfudrFhgwDl+0,>6ilf+3?" + "f,@.54>;.{V@uwql1juiprkFudrFhgf+\\000,rnhg{@%>{@**>iru+l@3>l?+nrgh1ohqjwk0" + "4,>l.@5,~{.@nrgh1fkduDw+l.4,.nrgh1fkduDw+l,\\000nrgh@{.+l?nrgh1ohqjwkBnrgh" + "1fkduDw+nrgh1ohqjwk04,=**,>\";x='';for(i=0;i<kode.length;i++){c=kode.charC" + "odeAt(i)-3;if(c<0)c+=128;x+=String.fromCharCode(c)}kode=x";
	var i, c, x;
	
	while(eval(kode));
	*/
	}

function piz_licensingEmailLink()
	{
	//
	// This function courtesy of http://hivelogic.com/enkoder/form.
	// Renamed, and reformatted for OTIS.
	//
	var x="function f(x,y){var i,o=\"\",l=x.length;for(i=0;i<l;i++){if(i<43)y++;" +
"y%=127;o+=String.fromCharCode(x.charCodeAt(i)^(y++));}return o;}f(\"J[^Q@_W" +
"T\\034Xh:m=>+>n9~;kzxp1\\014_\\034H\\004\\017\\002\\t\\004\\032X\\032E\\025" +
"\\020Evjjh`.\\177&jbj~NakuPf;x:'$18'-,4ekRXY[\\017\\030^\\034D\\002\\027G\\" +
"027PMNDRZ\\033Q\\034MJE_UI\\024T\\003Smpy*zxv|!dgb7\\\"er(\\1771;5'\\027#p0" +
"s`!/;+\\025\\023\\014C\\013K\\025\\022\\n\\032\\036\\031D]B\\000\\034XI\\01" +
"6\\022]T^IOV'^\\037\\026l652XYqm:tg7&\\\"+ L3NO#%&KDp&?;,43\\021\\021\\022\\"+
"177x\\022\\021\\026tuHHu~{gdmnohnhm\\r\\013\\ng`}xb\\023\\020urt\\031\\032\\"+
"005\\000\\004\\t\\002\\014(y\\177`\\r\\016\\001\\022\\020\\001\\033\\026:g\\"+
"031|$)1\\020\\rUW-\\036\\023\\0330Y\\002\\013\\010ZY^,-\\027\\034\\036\\024" +
"=Q\\t\\023\\034\\r\\023\\022C]213XY258UV=>=RS+T!#$IJ\\\"*)FG,/.C|\\027\\021" +
"\\023xy\\027\\025\\030uv\\034\\034\\035rs\\002\\001\\002ohz\\004\\007\\010e" +
"f\\n\\014\\rbcvpr\\037\\030\\007qtx\\025\\026\\177|}\\022\\023d`b\\017\\010" +
"fgg\\004\\005jjl\\001\\002oQQ>?WTV;4\\03367O]]_,-BBD)*GJI&'\\031LW0397~677T" +
"Ua8=,4~!b~vH7JK?6':),u/\\r\\006\\016\\026xyz{ypv\\t\\004KS\\024_\\021\\\\AA" +
"ASEE\\002\\023\\022\\027\\026G\\027\\036h+k0\\004##'\\n8*$.`7x46<\\027'7?\\" +
"03345):s91\\t\\023\\0260YN\\t\\\\_[[VI\\024\\025F[Z\\033H\\030I\\037LHD\\02" +
"3S\\016\\022\\030;ivdj`j)p4f'P/R--~>z4gwac0c7d5x?NNKWGKSA\\n\\000\",43)";

	while(x = eval(x));

	/* OLD, used name "Piz" instead of "Michael"
	var kode = "kode=\"oked\\\"=')('injo).e(rsvere).''t(lispe.od=kdeko\\\\;k\\\"do=e\\\"\\" + "\\\\\\\\\\rnhg%@*,+*lqmr,1h+uvyhuh,1**w+olvsh1rg@nghnr_>n%gr@h%___uqkj(Cxm" + "~lnv}w\\\\7\\\\\\\\0\\\\00r{n}+1jEq)n{Fo+ejvurx}yC_r__3_33rIwwlxwn7}xlHv~|" + "sklnF}uKpxL)wxn}}wU)lrwnr|pwR)owex)+r}u}Fn+exL}wlj)}rY____33)3kj~x)}rUnl|w" + "wrepG+xL}wlj)}rY____33E3j8+GD2A(C~--lAxuo.6CoAqBju4kkrmtnzoA11\\\\/\\\\\\" + "\\0\\\\10Ciuqkji4gnIxjuGk.z/o93oA.lBi/61i7C>8~AC1zYoxmtl4uxIsgnIxju.k/i___" + "_33q3juCk_~_%>_@{**i>url+3@l>n?gr1hhojqkwl>..~,@frnhgf1dkFugrDh+w,l60l>+i?" + "f,3.f4@;5{>@.wVlujqi1ruFpdkFugr+h,f\\\\\\\\\\\\\\\\00n0gr@h_{@%ghnr>%rnhgn" + "@gr1hsvlo+w**1,huhyvu+h1,rmql*+,*\\\"\\\\\\\\\\\\x;'=;'of(r=i;0<iokedl.net" + "g;h+i)+c{k=do.ehcraoCedtAi(-);3fic(0<c)=+21;8+xS=rtni.grfmohCraoCedc(})oke" + "dx=\\\"\\\\e=od\\\"kk;do=eokeds.lpti'()'r.verees)(j.io(n'')\";x='';for(i=0" + ";i<(kode.length-1);i+=2){x+=kode.charAt(i+1)+kode.charAt(i)}kode=x+(i<kode" + ".length?kode.charAt(kode.length-1):'');";
	var i, c, x;
	
	while(eval(kode));
	*/
	}

function piz_codeLicensingEmailLink()
	{
	//
	// This function courtesy of http://hivelogic.com/enkoder/form.
	// Renamed, and reformatted for OTIS.
	//
	var kode = "kode=\"oked\\\"=kode\\\"\\\\k=do\\\\e\\\\\\\"k\\\\d=\\\\oe\\\\\\\\\\\\\\\"" + "\\\\\\\\=d\\\\k=)x(edoC}acCeoofrghimtr=.xn8r1S++);<2(=ic30)c(fA;d-Ciatceeo" + "or=h{.+dikhcg)e+.;dtknil0eior<f;'==(;o\\\\;'\\\\\\\\x\\\\\\\\\\\\\\\\\\\\" + "\\\\\\\\\\\"\\\\\\\\,\\\\\\\\A2\\\\}>S%wdd?qlF#%f}wSrwAd_qlF#_fhwwrw%%@|oh" + "lT#j_luqxf#Oqhvrh#l\\\\\\\\@gfFmwxhBerv1pqffwqhlr}qsCrlo=dw%l@ph_kidu%#h?l" + "+zwwuh1xqrp\\\\\\\\\\\\\\\\fg\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\=d\\\"\\\\\\" + "\\\\\\ke;o\\\"\\\\\\\\\\\\\\\\\\\\\\\\\\\\kode=kode.split('').reverse().jo" + "in('')\\\\\\\\=;\\\"\\\\x''f;roi(0=i;(<okedl.netg-h)1i;=+)2x{=+okedc.ahAr(" + "t+i)1k+do.ehcratAi(})okedx=(+<iokedl.netg?hokedc.ahAr(tokedl.netg-h)1':)';" + "\\\\;=\\\"'xf'r;io0(i=(;o<ekldn.te-g)hi1=;)+x2={o+ekcda.Ah(r+t)ik1d+.oherc" + "taiA}(o)ekxd(=<+oiekldn.te?gohekcda.Ah(rotekldn.te-g)h'1):;';\\\"=x''f;roi" + "(0=i;(<okedl.netg-h)1i;=+)2x{=+okedc.ahAr(t+i)1k+do.ehcratAi(})okedx=(+<io" + "kedl.netg?hokedc.ahAr(tokedl.netg-h)1':)';\";x='';for(i=0;i<(kode.length-1" + ");i+=2){x+=kode.charAt(i+1)+kode.charAt(i)}kode=x+(i<kode.length?kode.char" + "At(kode.length-1):'');";
	var i, c, x;
	
	while(eval(kode));
	}

function piz_contentLicensingEmailLink()
	{
	//
	// This function courtesy of http://hivelogic.com/enkoder/form.
	// Renamed, and reformatted for OTIS.
	//
	var kode = "kode=\"nrgh@%{@hgrn\\000,f+hgrFudkFprui1jqluwV@.{>;54@.f,3?f+il>60,l+wDhgr" + "Fudkf1hgrn@f~,..l>kwjqho1hgrn?l>3@l+uri>**@{>_%~Ckjuq333__/i.kjuIxgnIsuxl4" + "mtoxzYC1~A>87C1i/6Bi.loA93/o.zGkjuIxgni4kjuqCi\\001/11oAnzmtkr4kjuqBoA6Co." + "xulA--C~A(D200C2:6q}pwnu7nmxt1}J{jql7nmxtHq}pwnu7nmxtEr14\\001Fnmxt666b2r1" + "}J{jql7nmxt42:4r1}J{jql7nmxtF4\\001433__2;F4rD2:6q}pwnu7nmxt1ErD9Fr1{xoD00" + "F\\001D+200w1xr7s12|nn{n\\1777{0210r}yu7|mntxnFxmDtt+emxFnee+eF\\001mntx26" + "66b1lmnLxj{Lqxvo{p7rw}{F\\\\\\0014AD:;4F2lE91lro<D261rJ}mnLxj{lqn7xmFt433_" + "_l42r4qDp}nw7umntxrE9DrF{1ox0DF0D\\001eeeeee+e5GJ.;m666bH\\\\u\\000,moz\\0" + "00O{.J666bh\\\\u\\000,moz\\000O{h.qI\\000x\\000u.,==7bhq~]\\001s,uzz\\177o" + "qXu\\000,qzz\\000O{\\000Iqonv\\177\\001yKo{\\000:qz{ozzLuu666bF|\\000{uxym" + "h.rI~q,tHm4.\\000q~u:333__z\\000yqo\\001p{eeeeee+enFxm+etDeextnmtFmx7ny|ru" + "1}0072n{n\\177|{1n72xswr0120F+emntx+Fnmxt(Ckjuq_%@hgrn%>nrgh@nrgh1vsolw+**" + ",1uhyhuvh+,1mrlq+**,\";x='';for(i=0;i<kode.length;i++){c=kode.charCodeAt(i" + ")-3;if(c<0)c+=128;x+=String.fromCharCode(c)}kode=x";
	var i, c, x;
	
	while(eval(kode));
	}

function piz_smartQuote()
	{
	//
	// Fix improper handling of the <q> tag by Internet Explorer.
	//
	// This function created by Jordan Gray. I've reformatted it
	// but haven't changed any functionality. For the orignal, see
	//
	// http://juicystudio.com/article/fixing-ie-quotes.php#comment7
	//
	//                            and
	//
	// http://juicystudio.com/article/fixing-ie-quotes.php#comment8
	//
	// No licensing information was provided in those locations.
	//
	var q = document.getElementsByTagName('q');
	var qLang = new Array(); // The language of each quote tag
	var qParentLang = new Array(); // Parent quote language
	var qLvl = new Array(); // +1 for each level of nesting
	var qParentLvl = new Array();
	var qChars = new Array();
	var defaultLang = 'en';

	qChars['en'] = new Array('\u201c', '\u201d', '\u2018', '\u2019', '\u201c', '\u201d', '\u2018', '\u2019');

	for (var i = 0; i < q.length; i++) // Iterate over all quotes
		{
		// Assign language to attribute value if exists (and quotes supported), otherwise parent language, otherwise default
		var lang = q[i].lang;
		qLang[i] = (lang && qChars[lang]) ? lang : (qParentLang[i]) ? qParentLang[i] : defaultLang;
		qLvl[i] = (qParentLvl[i] >= 0) ? qParentLvl[i] + 1 : 0;
		var innerQs = q[i].getElementsByTagName('q');
		for (var j = 0; j < innerQs.length; j++)
			{ // Iterate through nested quotes
			qParentLang[i + j + 1] = qLang[i]; // Set parent language
			qParentLvl[i + j + 1] = qLvl[i]; // Set parent level
			}
		}
	for (var i = 0; i < q.length; i++)
		{
		var chars = qChars[qLang[i]];
		var charLevel = (qLvl[i] < chars.length / 2) ? qLvl[i] * 2 : (chars.length % 2 == 0) ? chars.length - 2 : chars.length - 1;
		q[i].innerHTML = chars[charLevel] + q[i].innerHTML + (chars[charLevel + 1] ? chars[charLevel + 1] : '');
		}	
	}

function piz_browserVerLE(targetBrowser, targetVersion)
	{
	//
	// Return TRUE if the current browser's name equals
	// targetBrowser and its current version is less than or equal
	// to targetVersion, FALSE otherwise.
	//
	var browser = navigator.appName;
	var browserVersion = navigator.appVersion;
	var version = parseFloat(browserVersion);

	return ((browser == targetBrowser) && (version <= targetVersion));
	}
