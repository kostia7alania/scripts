try{	
for(i=0;i<20;i++){
if(window.location.href.search( /vk.com/i )==-1){iimPlayCode('tab close')}
else {iimPlayCode('SET !TIMEOUT_PAGE 1\n tab t=2')}
}
for(i=0;i<20;i++){
if(window.location.href.search( /vk.com/i )==-1){iimPlayCode('tab close')}
else {iimPlayCode('SET !TIMEOUT_PAGE 1\n tab t=0')}
}
} catch (r) {}