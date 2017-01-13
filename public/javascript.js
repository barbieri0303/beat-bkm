var styles = "font-family:IPAMonaPGothic,'IPA モナー Pゴシック',Monapo,Mona,'MS PGothic','ＭＳ Ｐゴシック',sans-serif;font-size:12px;line-height:12px;"

console.log('\n' +
'%c|￣　ヽ\n'+
'|ﾊ从k}\n'+
'|ﾟ ｰﾟﾉﾘ\n'+
'|⊂ノ\n'+
'', styles);



var loop = 0;
var say = 0;
var okt = 0;
var r;
var p;

$(function(){
  $('#container').on('click','#bkm-remaining', function(){
    r = Math.floor( Math.random() * 100 );

    if (loop===0) {
      console.log ('\n'+
'########################################\n'+
'#                                      #\n'+
'#          SAYAKA CHALLENGE!!          #\n'+
'#                                      #\n'+
'########################################\n'+
'');
      loop += 1;
      p = Math.floor( Math.random() * 100 );
    } else if ( loop <= 15 && loop > 0) {
      if (r > p) {
        say += 1;
        sayaka();
      } else {
        okt += 1;
        oktavia();
      }
    loop += 1;
    } else {
      result();
      say = 0;
      okt = 0;
      loop = 0;
    }

  });
});


function sayaka () {
  console.log((say+okt) + ' / 15 loops\n'+
'%c\n' +
'　　　　　　　　　　　　　￣￣\n'+
'　　 　 　 　 .　´ 　 γ⌒　　　　　　　 ヽ\n'+
'　 　 　 　 /　　　　｜　 　 　 　 　 　 　 ’,\n'+
'　　　　　 ′/　　　 |　　｜ 　　　ヽ　　 　 .\n'+
'　　　　　ｉ　｜l 　　λ　　| 　 l　 　 |　　ｌ\n'+
'.　　　　 ;　　!｜､ﾊi　‘､　ﾄ､　|＼,ヾ|　　|ｚ　j\n'+
'.　　　　 l　 　！{≧ｘ、 ヽ|　`ｔヒくx | 　 ｊ々 |i\n'+
'　　　　 ij　 、 ∨￡ﾊﾞ　　 　 ￡ﾊヽ!　 /7ｌ ﾊ!\n'+
'　　　　ﾉｌ|　 ＼{　辷ﾘ　 　 　 辷ﾘ　|　/ｲﾉ/ {\n'+
'.　　　　 ！　　|｀ """　 　 　 """　| /´//\n'+
'.　　　　　　、　|ト　　　ー　‐\'　 　イ/ 　/\n'+
'　　　　　 　 ＼|ﾍﾊ/〕　‐-‐　〔ﾉノイ}／\n'+
'　　　　　　ィーヘー｢￣｢｢｢￣]ｰ77￢‐ 、\n'+
'　　　　　ｉ　ゝ （　￣￣｝⌒｛￣￣ ヽ　/　}\n'+
'.　　　 ／　　　 ヽ 　 ´ 〉ｰ〈 ｀ 　　/　　 ﾒ、\n'+
'　　　 ヽ　　　 〉　｀ ｰｲ├┤ゝ― \' ､　　　ヽ\n'+
'　　　　 ＼＿,′ 　_ノ /　 | |　　 　 \',＿_／\n'+
'', styles);
}


function oktavia () {
  console.log((say+okt) + ' / 15 loops\n'+
'%c　　　　　　　　　　　　　　 ＿＿＿\n'+
'　　　　　　 　 　 　 ,,　" 　 ｒ‐､ 　　　` 　､\n'+
'　　　　　　　　　／..:::::::::＼|ｌ､　　 　 　 　 ＼\n'+
'　　　　　　　 ／::::::::::::::::::::::ﾚ::＼　　 　 　 　 ヽ\n'+
'　　　　　　 /::::::::::::::::::::::::::::::::::::::::＼i＼ﾉ､ 　　　､\n'+
'　　　　　　,\'::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::ヽ ､　 i\n'+
'　　　　　　|::::::::::::::::::::::::::::::::::::::;::::::::::::::::::::::::::ｉ ｉ　 |\n'+
'　　　　　　|::::::::::::::::::::::::::::::::::､ハ＼:::::::::::::::::::i ｉ　.|\n'+
'　　　　　　|::::::::::::::::::::::::::::::::）\'　　　ヾ（{::::j ）::Y　 |\n'+
'　　　　 　 i\'i:::::::::::::::::::::::::`"ノ:､ノ::}､　　`"ヾ::::|　 |\n'+
'　　　　　 / i:;::::::::::::::::::::::::::::::::::::::::|　　  　  　l:::| ./|\n'+
'　　　　　　　iヽ:::::::::::::::::::::::::::::::ヽ _フ　  　, ｨ::::|/　`\n'+
'　　　　　　　` ヾ::::::::::::::::::::::::::::::::::.　.... ::::ｉ"i:::/\n'+ 
'　　　　　　　　　 ヾ`､::ﾊﾉ:::::::::::::::::::::r.ﾉ ｿ　ﾚ\n'+
'　　　　　　　　　　_ ﾝ::`:::::::::::::::::::::::::ヽ､\n'+
'　　　　　　　,,:\'::::::::::::::::::::::::::::::::::::::::::::::/｀ ‐ ､_\n'+
'　　　　　　 /:::::::::::::::::::::::::::::::::::::::::::／ヾ　　 ハ\n'+
'　　　　　　ﾉ:::::::::::::::::::::::::::/|:::::ハ＼　　　　ﾑ､j_\n'+
'', styles);
}


function result () {
  if (okt > 8) {
    console.log('#### RESULT: ' + 'SAYAKA falled ' + okt + ' times in 15 loops... (' + 100/(loop-1)*okt + '%) ####\n' +
'%c:::::::::::::::::::::::::::/:::/ l::::::::::::::/:/　　|:::::::::/　|:|　\',:::::::::::::::::::::| \',:\',ヽ::\',ヽ:::::::::::\',　 \',:::\',　 \',::::::::::| \',::::::::::::::::::::::::::::::::::\n'+
'::::::::::::i::::::::::::/:::/　|:::::::::::/:/　　 .|:::::::/　 |:|　 \',::::::::::::::::::::|　\',\', .ヽヽヽ::::::::l　　\',::\',　 .\',::::::::|　\',::::::::::::::::::::::::::::::::\n'+
':::::::::::l:::::::::::/i::/＿|::::::::/_/＿＿_.|::::/　　|:|　　\',::::::::::::::::::|　　\',　　ヽ、\',:::::|＿_..\' \',---\',:::::|―\',:::::::::::::::::::::::::::::::\n'+
':::::::::::l:::::::::,\' l:,\'　　.|::::::/,-=―--､|::/―- |:|￣　ヽ:\',:::::::::::|ヽ√\',￣￣ニ\',::|-‐　_ｨ-‐=､\',:::|　　 \',::::::::::::::::::::::::::::\n'+
':::::::::::l::::::::,\' .l,\' 彡\'\'|:::/ /o 二 ｀ヽ|/ミ､ヽ l:l　　　 ヽ\',:::::::::\',　　　\', ´ ,.彡=\',|\'"二￣ヽ"\'\' \',:|ﾞミ　 \',:::::::::::::::::::::::::::\n'+
'::::::::::l::::::::,\'　l　　　|:/　{　 (⌒)　 ｝　　ヽ,　\',　　　　ヽ\',:::::::\',　　　　 "　　{　 (⌒) 　,l　　\',|　　　 \',::::::::ﾊ:::::::::::::\n'+
':::::::::l:::::::,\'.　　　　 ﾚ　 ヽ、　　ﾞ　ﾉ　　　　　 \',　　　　 ヽ\',:::::\',　　　　　　 ヽ　　　　 ﾉ　　　　　　　\',::::,\' .l:::::::::::::\n'+
'::::::::ﾊ:::::,\'.　　　　　　　　 ー-- \'　,. 彡〃　　　　　　　　 ヽ::\',　　　 ､、 ､＿ー-- ´　　　　　　　　\',:,\'　.|:::::::::::::\n'+
'::::::::| \',:::|　　　　　　丶ミ=-＝\'\'\'"´　　　　　　　　　　　　　　　　　　　ヽヽヽヽ￣三＝―彡　　　　\'　 .|::::::::::::::\n'+
'::::::::|.\',\',::|　　　　　　　　　　　　　　　　　　　　　　　 /　　　　　　　　　/　　 ハ　　　　　　　　　　　　,\':::::::::::::::\n'+
'::::::::| .\',\',|　　　 /　/　/ /　ハ / ヽ　ヽ ヽ　　　　　　　　　　　　　　　　　　 / 丶　 /　ヽヽ ヽ　　　　,\'i:::::::::::::::\n'+
':::::::::l .\',　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 ヽ　　 ,\' l:::::::::::::::\n'+
':::::::::lﾐ \',　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　,\'\'\'"l:::::::::::::::\n'+
'::::::::::l　\',　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 ,\'　 l:::::::::::::::\n'+
'::::::::::ヽ .\',　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 ,\' _ /:::::::::::::::\n'+
'::::::::::::::::::\',　　　　　　　　　　　　　　　　　　　　／ ￣￣ ＼　　　　　　　　　　　　　　　　　　　　,\'::::::::::::::::::::::::\n'+
'::::::::::::::::::::\',　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 .,\'::::::::::::::::::::::::::\n'+
'::::::::::::::::::::::ヽ、　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　／::::::::::::::::::::::::::::::\n'+
'', styles);
  } else {
    console.log('#### RESULT: ' + 'SAYAKA falled ' + okt + ' times in 15 loops... (' + 100/(loop-1)*okt + '%) ####\n' +
'%c　　　　　　　　　　　　　 _ .．-───\n'+
'　　　　　　　　　　 .． ´:::::::::::::::::::::::::::::::::::: へ.\n'+
'　　　　 　 　 　 , ´:::::::::::::::::::::::::::::::::::::::::::::::::＼＼\n'+
'　　　　　　　　/ :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::ヽ:＼\n'+
'　 　 　 　 　 / :::::::::::::::::::::::::::::._:::＿＿＿:::_::::::::::::ヽ:ヽ..__\n'+
'　　　　　　　′:::::::::::::::::::::ﾚ ´..．-―── - ミヽ:::::ﾄ:::::::::::::::::-.......　　　　　　　 　　　　　　　__ ..．=＝＝＝=─　.\n'+
'　　　　　　　| ::::::::::!::::::::::::|／:::::::::::::::::::::::::::::::､::::Y:::l!::::::::::::::::::::::::::::::￣::::::::::―　　　─　　二 _＿｀\n'+
'　　　　　　　| ::::::::::!::::::::::::|::::::::::/1::::::\'.:::::::::!:::::::::::::::i!::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::￣:::｀ .\n'+
'　　　　　　　| :::::::ｲ!::::::::::::|::::::::.\'　!:::::ハ :::::i:::::|::::|::::i!:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::.＼\n'+
' 　　 　 　 　 \'. ::/ |::::::::::::::|__::/＿|::/ 　_\'_::ﾊ__j_: |::::i!:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::ヽ:::::＼\n'+
' 　 　 　 　 　 V::{f|::::::::::::::|:::/　　j/　 　 V　V|:::从ﾘ:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::＼::::ヽ\n'+
'　　　　　　　　| :ゝ :::::::::::::|/弋ｩテ　　　　ぅテ1!:ヽ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::＿ :::::::::::::::::::::::::::::::::::::::::::::::::ヽ.:::::＞\n'+
'　　　　　　　　| ::: | ::::::::::::|　　　　　　　.　　　八:::::ヽ::::::::::::::::::::::::::::::::::::::::＜´ ￣__　＿＿　￣￣ ＞――ｧｧ－ｧヽ′\n'+
'　　　 　　　　 ゝ : | ::::::::::::|　　　　　_　 　　イ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: 冫´ : : : : : : : : :＞:´: : : : : :.//一\'’二ヾ\n'+
'　　 　　 　 　 　＼ : ::::::::::|:＞ 　 　_　r＜:::::|::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::// : : : : :-‐‐r ´ |: : : : : : : //　　　― ､j::\n'+
'　　　　　　　　　　 ＼:::::::::ヽ:￣/ｰ「:::::｀ト┬｢フ ⌒ヽ:::::::::::::::::::::::::::＼ ⌒ 77: : :／: : ／ | 　 !: : : : : : ::{_{_＿　＜￣::::|\n'+
'　　　　　　　　　＜::::｢ト､::::::::Vr了j― ┐::|｜　　　　!::::::ト .._:::::::::::::::::`ーi i: : 7_: :イ　　 ヽ　ヽ イ{´￣　 　 　｀ ヽ:::::::|\n'+
'　　 　 　　 　 / 　 ヽ| !:{_ヽ::::::＼¨「､￣ ::::|｜　　　　!::::::|　　　－-　_:::::::j_＞　　 ｜　　⌒ゝ__＞′　　　 　 　　 }::::ﾉ\n'+
' 　 　　 　 　 .′　　｜::::::¨:ヽ:::::::＼iﾊ :::::::|｜　 　//| ::: |　　　　　　　　　　　　　　ヽ　　 イ: : :/　　　　　　　　　／\n'+
'　　　　　　 /　 　 　 | !:::::::::::/＞‐- ゝヽ::::|｜ 　 .\'/ i| ::: |　　　　　　　　　　 　　 　　＜: : : : :ｲ\n'+
'', styles);
  }
}


    





var mami = 0;
var lines;
var lines2;
var space;
var mamiRand;
var mamiSum = 0;

$(function(){
  $('#container').on('click','#footer', function(){
    if (mami===0) {
      lines = '\n\n\n\n\n\n\n\n';
      lines2 = '';
      space = '';
      mamiRand = 0;
      console.log ('\n'+
'########################################\n'+
'#                                      #\n'+
'#         MAMI-SAN CHALLENGE!!         #\n'+
'#                                      #\n'+
'########################################\n'+
'');
      mami += 1;
    } else if (mami===1) {
        charlotte();
        mami += 1;
    } else if (mami===2) {
        teeth();
        mami += 1;
    } else if (mami===3) {
        sayamado();
        mami += 1;
    } else if (mami >= 4 && mami <= 11) {
      mamiSum = 0;
      while (mamiSum <= mamiRand) {
        space = space + '　';
        mamiSum += 1;
      }
        console.log ('\n'+
      '%c(ﾟдﾟ)(ﾟдﾟ) << HURRY!! HURRY!! MAMI-SAN!!!!!\n'+
      lines2 + '▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼' + 
      lines +
      space + 'ζ(ﾟдﾟ)ξ' + 
      lines +
      '▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲' +
      lines2 +
      '', styles);
      lines = lines.substr(1);
      lines2 = lines2 + '\n';
      mami += 1;
      mamiRand = Math.floor( Math.random() * 8 );
    } else if (mami === 12) {
      if (space.length >= 34 ) {
      console.log ('\n'+
        '%c(ﾟ∀ﾟ)(ﾟ∀ﾟ)\n' +
        '\n\n\n\n\n\n\n\n\n' +
        '▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼             ζ(ﾟ∀ﾟ)ξ' +
        '\n\n\n\n\n\n\n\n' +
        '', styles);
      } else {
       console.log ('\n'+
        '%c(ﾟдﾟ)(ﾟдﾟ) ……!\n' +
        '\n\n\n\n\n\n\n\n\n' +
        '▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼▲▼' +
        '\n\n\n\n\n\n\n' +
        '', styles);
      }
      mami = 0;
    }
  });
});


function charlotte() {
  console.log ('\n'+
'%c../: : : : :∠..-‐7　　　　　　　　　　　　　　　　　　 ／_,,..-\'\'′ {:::::{＿＿_,,..-\'\'":::::::::::::::::::l\n'+
'.ヽ: : : : : : : :∠＿＿__　　　　　　　 　 　 　 _,,.-\'\'´ .ノ　　　　 .｀\'\'-..,,_:::::::__,,..-\'\'"7:::::::::::,\'\n'+
'　 ヽ __: : : : : : : : : : :/　　　 _,,..-―――∠..-‐\'\'"´::ヽ、　　 　 　 　 _二 -‐\'\'"´:::::::::::/\n'+
'　　　　￣￣＼ : : ∠_,,..-\'\'" ,.-\'\'｀ヽ::::::::::::::::::::::::::::::::::::::｀\'\'-..,,__,,..-\'\'":::::::::::::::::::::::::::::::/\n'+
'　　　　　　　　 ＼／::_,,-‐-\'　　　 └―-.、:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::/\n'+
'　　　　　　　　 ／::::/　　　　　　 　 　 　 └―-.、:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::/\n'+
'　　　　　　　 ,.\'::::_,,┘　　　　　　 ,.-‐-.、　　　 　 ヽ:::::::::::::::::::::::::::::::::::::::::::::::::::::::/\n'+
'　　 　 　 　 /:::/　.,.--.、　　　　,l＿　　 \'., 　 　 　 ,\'::::::::::::::::::::::::::::::::::::::::::::::::::::/\n'+
'　　　　　　.,\':::::l　.,\'　, - \',　　　　ﾄ､ ヽ ヽ　\',　　　　｀ヽ::::::::::::::::::::::::::::::::::::::::::::/\n'+
'　　　　　　l:::::::〉 .l /　// | 　　　!･ l　|　|　l 　 　 　 丿::::::::::::::::::::::::::::::::::::::.,.\'\n'+
'　　　　 　 |:::::,\'　 | l　l l ・|　　 　 .\'/ /　/ ,\'　　　　　｀ヽ:::::::::::::::::::::::::::::::., \'\n'+
'　 　 　 　 |:::::l 　 ヽ＼ヾ.,\'　__　　　ヽ´__ノ　 　 　 　 　 }:::::::::::::::::::::::::::, \'\n'+
'　　　　　　l::::::〉　 _lヽ-.\'\'／　 ヽ　　　　　　/ヽ、　　__ノ:::::::::::::::::::::::／\n'+
'　　　　　　.\',::::l　 (_::::::::::}＿__ノ　　　　　／　　|　　_）::::::::::::::::::::::／\n'+
'　　 　 　 　 \',::ヽ__. ゝ\'｀´　　　　　 _,,-\'\'´　　　/　　ヽ:::::::::::::::::／\n'+
'　 　 　 　 　 ヽ::::::\',　　　　 --=二＿＿_,,..-\'\'´　 　 ﾉ:::::::::::／\n'+
'　　　　　　　　 ＼::ヽ-.、　 　 　 　 　 　 ＿__,,..-\'\'":::::::::／\n'+
'　　　　　　　　　　｀\'\'-,,::＼ ＿＿＿　　 .l:::::::::::::::::_,,-\'\'´\n'+
'　　　　　　　　　　　　 ｀\'\'-,,_::::::::::::::｀\'\'‐\'"::::_,,..-\'\'"\n'+
'', styles);        
}

function teeth() {
  console.log ('\n'+
'%c　　　　 ＼///////　　　　　　　　∨////　　　　　　　　　∨////／\n'+
'　　　　　　＼////　　　　　　　　　 ∨//　　　　 　 　 　 　 ∨/／\n'+
'.　　　　 　 　 ＼/　　　　　　　,. -―‐∨‐- . _　　　　　 　 　 ∨\n'+
'　　 　 　 　 　 　 　 　 _,.-‐^爿 ＞-―--v__　〉\n'+
'　　 　 　 　 　 　 　 　 ア　〈X´　　 　 　 　 　 \' ,\n'+
'　　　　　　　　　　　　 ｹ　./　　　 ／　 人　　 　\',\n'+
'　　 　 　 　 　 　 　 　 {　 i 　 / __{__ ノｿ　}_}__　　\',\n'+
'　　　　　　　　　　　　 从ﾑ　.i|ノ斗､ 　 　 ｬ-､Ⅵ　}ｰ､\n'+
'.　　　　　　　 　 　 　 ｧ{　Ａ　{!〈 ◯　　 　 ◯ 〉}　/‐､ }\n'+
'　 　 　 　 　 　 　 　 { ∧ b辷ゝ ¨´ 　!　　｀¨　ﾑ´厄ﾉ ﾊ\n'+
'　 　　 　 　 　 　 　 ∧　｀ｰｧ-ゝ､　　冖 　_. ィ´‐〈ン ﾉ　}\n'+
'.　　　　　　 　 　 　 {/｀¨ｰ/　{|. 　ヾ≧≦ﾉ　 |}　　Y´_,イ}\n'+
'　　　　　 　 　 　 　 !　　< ー ﾞy´ 　｀∨´　　∨　ノ >彡′\n'+
'　　 　 　 　 　 　 　 　 　 丶__/　　⊂本つ　　∨　/\n'+
'　　　　　　　　　　 　 　 　 厂{.　　　/┼＼　　 .}フi\n'+
'　　　　 　 　 　 　 　 　 　 }　 ﾄ､　 　 木 　 　 人　\',\n'+
'　　　　　　　　　　　　 　 /∧.|　｀i¨´ 王 ｀¨ i´　∧ \',\n'+
'　 ∧ 　 　 　 　 　 　 　 {//∧／ ＼_王__／＼//∧}　　　　　　 　 /＼\n'+
'／/∧　　　　　　 　 　 .////∧　　　/　|　 　////∧　　　　　　　////＼\n'+
'', styles);
}

function sayamado() {
  console.log ('\n'+
'%c　　　　　　　 　 .........................!............................................∨/ヽ　　／＿》＿\n'+
' 　 　 　 　 　 /................. /.....|..............|............................./∧　》　"´: : : : : : :｀: ー-､\n'+
'　　　　　　　/./ ...............i ....,\'|...............................＼...∨/...j／: : : : : : : : : : : : : : : : :＼\n'+
'　　　 　 　 /ｲ....|....|.........|.../ | ........... | .......|..............〈〈／⌒: : : : : : : : : ⌒＼: : : : : : ヽ　 ／＼\n'+
'　　　　 　 　 | ...|....| ... /|/-孑|.........∧ .....|............|／: : : : : : : :/: : : : : : : : : : : : :〃⌒∨　 　 》\n'+
'　　　　　　　 | . |....|..../ｨﾃミ |∧.......|`ﾍー|､.....／/: : ／ ／: /: : : : : : : : : : : : : :{{: : :/⌒ ｰ‐《\n'+
'.　　　　 　 　 i.八...Ⅳ　ﾄｨ::i　 　 ＼|　ィﾃミ∨.../: :./:／/_:ノ|: : : : /: : : | : : : : : {{: :/｀ヽ : : : |\n'+
'　　　　　　　　ｉ......N　　Vソ　　　　　　ﾄｨ::ｉ ﾘ.../ : /|斗=ﾐ/　|: : : ∧; : : |: : : : ハ:∨ : : : : : : :,\n'+
'　　 　 　 　 　 |.......| /Vl/ 　 　 ,　　　 Vソ/....\': :〃 んi::}　　 : : / ハ＼: : : :./: : :/: : : : : : : :八\n'+
'　　　　　　　 　 ......{＼　　　　　　　　/Vｌ/ .....i /　　Vソ　 　 ∨斗=ﾐ∧: : :/: : : ｉ : : : : : : : : : |＼\n'+
'　　　　　　　 　 ＼.∨..＞　　c 　っ 　　ィ../..从 /Vl　　　　　　　んiﾊ. |: :/: : :/ | : : : : : : ∧: |\n'+
'　　　　 　 　 　 _,　ﾍ∨ ┴=≧=- ＜∧ |∧/|...>､　　　　\'　　　　V:ソ八/: :／}/|: /.: : : :/　∨\n'+
'　　　　　　　／　　 ＼＼＼　 `弌ノ⌒}　　｛ |/　 ＼　t 　 、 　 /Vl/　. :∠ ノ　|/|: : : :/\n'+
'　　　　　　 ｛　　　　　 ＼〈⌒＼{{:::::::::｛/　rヘ下¨｝　＼＿┘＿_　 ／／ト､＼　　| :/l/\n'+
'　　　　　　/{　　　　 　 く　ヽ:::::::{＾}:::::::}／ー　 |/│　　　 ≫=＝≦∠　　 }}　｝　 j/\n'+
'  　 　 　 /　　　　　　　　＼｝:::::::ﾚく丁{／〉　 /　厶　 　 ∨　　　＼＿＿ノ　ｲ\n'+
'　　　 　 {　ﾉ 　 　 　 　 　 ｛:::::::/| | Ⅵ（ノ 　/　∧｝|　　_/　　　　　 ￣￣（）ハ\n'+
'  　 　 　\' 〈　　￣￣￣　　人:ノﾆﾆﾆ{.|r┴‐┴┴r\'\' | ／｛\n'+
'　　 　 /　 ＼__　　 　 　 /　//　 　rリ|　　　　　｛　〈　　　　　　　　　}/　　　　|\n'+
'', styles);
}







/*
　 
　　　　　　　　　　　　　　　　　　 _....-─:..、 
　　　　　　　　　　　　　　 .....-‐:::::::::::::::::::::∧ 
　　　　　　　　　　　　／::::::::::::::::::: -───` 、 
　　　　　　　,　- ...,イ心:::::::,　'"　　　　　　　　　丶 
　　　　ｰ=彡　　〃γ个／　　　　　 /　　 　 .:!　　 ＼ 
　　　 ／　　　　{{　{{::::/　　　　　　 /　　　　.:::|　　　　ﾞ:、 
.　 ／ 　 　 　 　 ＞‐/　　　　　 　 　 　 　 .::::ハ　　ヽ＼、 
─-ノ"／　/　〃 ノ:'　　　 　 　 | ,|　　　 .::::/ 　∨ 　 ! ',＼ 
　　　/　　/　 {{彡'' |　　　|　　|/|/|　　 /:::/ '"⌒|,ハ｜i| 
　　　　　　 　 ／　/|　　　|:　 ィ"|⌒　/／　 　 __j　 | | ﾘ 
　　 l　//　,ィ　 ! 〃|　　　|:: 　|　 八 j´ 　　　行ｊ下 |ﾉ/ 
　　 |// |/　|　｜八,〉 　 八::. |,ィf下` 　 　 　 V少 ﾉ/ 
　　　〃´￣￣￣＼{(＼　　　衣 ﾉ;少　　　　 　 ,,,,,　 ﾄ、
.　　　}＝＝ 　 　 ＼＼_＼ ＼＼｀",,,,,　　 　 ｀ 　　／j!ヽ 
.　　 〈二二フ　ミ、 .::::::ヽ/＼ ＼　　　　　 --'　／／/　｝ 
　　 ,　-──-　__>::::::ノ´{＼}｀⌒＞-　.. ＿_／ﾆ"／　,/─　、 
.　　} ￣ 　 　 ＼＼::ノ　　〉、￣¨¨ ''＝＝ハ、─　　／⌒ヽ　! 
　　{二二ﾆュ. ＼＼}　　 '　 ＼＿＿＿_,人 ＼￣￣　　　 ﾉ / 
　　　　　　　　 ＼::/　　 |　　　￣￣￣｀ミ辷=ミ:.、　　 ／" 
. , -‐ ,＝＝＝彡"　　　 |　　　＿＿_　　　`ｰミ、ﾊ　　　　　　＿ 
八　（　　　　　　　　　　 | ,,,〆"￣￣＼　　　　 ヾ }　,, xz孑"........` 、 
　 ＼ ＼＿　　　　 　 　 Ⅴ　　　　　　∧_　　　　　Ｙ　||　圦::::::::::::::ﾊ 
　　　 ￣￣￣　　　 　 　 |　　　　　　　　　 ＼　 　 |　 廴{　辷_''"/,ﾉ 
　　　　　　　　 　 　 　 　 |　　　　 　 /　 　 　 }　　ﾘ　/ ノ~＼乏‐}ﾞ 
　　　　　　　　 　 　 　 　 ∨　　　　/　　　 　/　／／ / 　 　∧ ,ﾉ 
　　　　　　　　　　　　　　　∨　　 /　　　　　｝彡｝ﾞ　 /　　　　　| 


　 　 　 　 |＼　　 　 　 　 　 ／|
　 　 　 　 |＼＼　　 　 　 ／／|
　　　　 　 : 　,>　｀´￣｀´　<　 ′
.　　　　 　 Ｖ　 　 　 　 　 　 Ｖ
.　　　　 　 i{　●　 　 　 ●　}i
　　　　 　 八　 　 ､_,_, 　 　 八
. 　 　 　 /　个 . ＿　 ＿ . 个 ',
　　　＿/ 　 il 　 ,'　　　 '.　 li　 ',＿_

　 　 　 　 |＼　　 　 　 　 　 ／|
　 　 　 　 |＼＼　　 　 　 ／／|
　　　　 　 : 　,>　｀´￣　ノ￣￣｀ヽ、―ニ 二
.　　　　 　 Ｖ　 　｀ヽ ／　´｀ヽ _　 三,:三ー二
.　　　　 　 i{　●　 ノヽ--/￣ ,　　　 ｀￣￣￣
　　　　 　 八　 　ﾐ}　　...|　 /!
. 　 　 　 /　个 . ノ}｀ー‐し'ゝL _
　　　＿/ 　 il 　 ,',:ﾍｒ--‐‐'´}　　　 ;ー------
　 （(　/　　　l｀V　ノ｀ヾ:::-‐'ーｒ‐'"＝＝-
*/