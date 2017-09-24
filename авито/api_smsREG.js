0) Р±Р°Р»Р°РЅСЃ:
http://api.sms-reg.com/getBalance.php?apikey=xdct565ohw5cjx378fhjtxpuoxg4m5dj

1) Р·Р°РїСЂРѕСЃ РЅР° РІС‹РґР°С‡Сѓ РЅРѕРјРµСЂР°:
http://api.sms-reg.com/getNum.php?country=ru&service=avito&apikey=xdct565ohw5cjx378fhjtxpuoxg4m5dj
2) Р·Р°РїСЂРѕСЃ РЅРѕРјРµСЂР°: (СЃС‚Р°С‚СѓСЃ РЅРѕРјРµСЂР° = TZ_NUM_PREPARE)
http://api.sms-reg.com/getState.php?tzid=22529602&apikey=xdct565ohw5cjx378fhjtxpuoxg4m5dj

2.1) РµСЃР»Рё РЅРѕРјРµСЂ = Р±Р°СЏРЅ:
http://api.sms-reg.com/setOperationUsed.php?tzid=22529602&d=&apikey=xdct565ohw5cjx378fhjtxpuoxg4m5dj

SET !VAR2 EVAL("var s=\"{{!EXTRACT}}\"; var d = parseInt(s); result = typeof(d);")
    PROMPT {{!VAR2}}


3) РіРѕС‚РѕРІ РїРѕР»СѓС‡РёС‚СЊ СЃРјСЃ:
http://api.sms-reg.com/setReady.php?tzid=22531368&apikey=xdct565ohw5cjx378fhjtxpuoxg4m5dj

4) Р·Р°РїСЂРѕСЃ РєРѕРґР°  РёР· СЃРјСЃ: РђРџР”Р•Р™Рў РїРѕ 20 СЃРµРє!
http://api.sms-reg.com/getState.php?tzid=22531368&apikey=xdct565ohw5cjx378fhjtxpuoxg4m5dj

5) 5 РјРёРЅСѓС‚ Р¶РґРµРј;
6) РїРѕРІС‚РѕСЂРЅР°СЏ РѕС‚РїСЂР°РІРєР° РєРѕРґР°;
7) 20РјРёРЅ = РІС‹С…РѕРґ;


{"response":"TZ_NUM_WAIT","number":"79091669322","service":"nasimke"}
{"response":"TZ_NUM_WAIT","number":"79671695453","service":"nasimke"}




armageddoN РїРёСЃР°Р»(Р°):
РќРµРїРѕРЅСЏС‚РЅР°СЏ С…СЂРµРЅСЊ СЃ Р°РІРёС‚Рѕ РїСЂРё Р°РєС‚РёРІР°С†РёРё С‡РµСЂРµР· api .
Р”РѕРїСѓСЃС‚РёРј СЏ Р·Р°РїСЂР°С€РёРІР°СЋ РЅРѕРјРµСЂ РїРѕРґ avito
[url]http://api.sms-reg.com/getNum.php?country=ru&service=avito&apikey=РјРѕР№_apikey[/url]
Р”Р°Р»СЊС€Рµ РґРµР»Р°СЋ setReady
[url]http://api.sms-reg.com/setReady.php?tzid=5181799&apikey=РѕРїСЏС‚СЊ_РјРѕР№_Р°РїРёРєРµР№[/url]
Рё getState
[url]http://api.sms-reg.com/getState.php?tzid=5181799&apikey=Р_СЃРЅРѕРІР°_apikey[/url]
Р РІ СЌС‚РѕС‚ РјРѕРјРµРЅС‚ РґР»СЏ getState РІРѕР·РІСЂР°С‰Р°РµС‚ РїСЂРёРјРµСЂРЅРѕ РІРѕС‚ С‚Р°РєРёРµ РѕС‚РІРµС‚С‹ :
{"response":"TZ_NUM_WAIT","number":"79091669322","service":"nasimke"}
{"response":"TZ_NUM_WAIT","number":"79671695453","service":"nasimke"}