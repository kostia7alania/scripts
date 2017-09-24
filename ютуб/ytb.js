var sms =  `Рады сообщить вам, что одна из самых прибыльных букмекерских контор вновь возобновила регистрацию на партнёрскую программу - Melbet Partners. 

• Приглашаем к сотрудничеству арбитражников с гэмблинг, беттинг, адалт трафиком: 
• Наши промо-материалы будут уместны и на сайтах различных тематик, среди которых оптимальным вариантом будут фильмы, адалт и азартные игры. 
• ЦА - мужики от 18: 
• Наибольшие результаты конвертации получаются при нацеливании на мужскую аудиторию. 

• MelBet - относительно молодая букмекерская контора, потому и ставки самые выгодные (даже если сравнивать с топ-3), предлагает максимально широкий выбор ставок - от футбола до киберспорта и петушиных боев. 
• Вся статистика в личном кабинете "на лицо". Вы будете видеть сколько каждый игрок внес депозитов и сколько проиграл/выиграл. 
• Предлагаем своим партнерам мощные и продуманные маркетинговые инструменты. 

Игроки со всего мира выбирают нас, так как мы предлагаем: 
• Не заезженная БК, а значит большая возможность заинтересовать игроков! 
• Refshare – начиная с 25% от прибыли конторы. 
• Одни из самых высоких коэффициентов на предматчевые и лайв-ставки. 
• Возможность настройки автоматических выплат. 
• Широкий выбор лайв-событий со всего мира. 
• Спорт, Казино, покер, киберспорт – лейте трафик, используя различную аудиторию! 
• Огромнейший выбор событий и прямые трансляции 
• Уникальные решения нашей компании способны привлекать и удерживать игроков долгое время. 
• Более 70 языковых версий сайта - легко привести иностранный трафик!
• В нашем распоряжении 30 различных платёжных систем. 
• Выигрыши выплачиваются стабильно, что повышает уровень доверия. 
• Наш «чёрный список» игроков избавляет наших партнёров от обманщиков и владельцев фейк-аккаунтов. 

Итак, чтобы присоединиться к нашему сообществу партнеров, существует следующий алгоритм действий: 

1) оставляете заявку на регистарцию (bit.ly/melbet_reg), 
2) получаете маркетинговые материалы; 
3) генерируете траф (website, door, youtube, twitter,instagram,fb,email,vk,etc); 
4) получаете гарантированный процент (от 25%) от проигрышей привлечённых Вами игроков; 

По запросу, мы поддерживаем Вас необходимыми Вам маркетинговыми материалами.

Связь с нами: 
• Через личку (vk.com/id429054886)
• E-mail: melbetpartners@gmail.com 
• Skype: melbetpartners 
• Telegram: @melbet_partners (https://t.me/melbet_partners)
`.split(' ').join('<sp>').split('\n').join('<br>')
// for(i=0;i<1000;i++){sms=sms.replace(' ','<sp>').replace('\n','<br>')}
// alert(sms)
iim=iimPlayCode;
iim('set !useragent Mozilla/5.0<sp>(Windows<sp>NT<sp>6.1;<sp>WOW64;<sp>rv:40.0)<sp>Gecko/20100101<sp>Firefox/40.1\n wait seconds=1')
var start = new Date();
function timming() {diff=(new Date()-start)/1000; return '; Робот работает в этой сессии:'+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function дата() {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(", ","	")}
function следующееВидео() {iim('EVENT TYPE=CLICK SELECTOR="#watch7-sidebar-modules>DIV>DIV>DIV:nth-of-type(2)>UL>LI>DIV>A>SPAN:nth-of-type(3)" BUTTON=0\n wait seconds=3')}
function второеВидео() {iim('EVENT TYPE=CLICK SELECTOR="#watch-related>LI>DIV>DIV>A>SPAN" BUTTON=0\n wait seconds=3')}
function randGen(min,max) {return Math.floor(Math.random() * (max - min)) + min;}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))} 
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа+"\n")}  
function ждем(s) {iim('wait seconds='+s)}
var ключи = читать("C:\\ютуб\\ключи.txt");
var предложения = читать("C:\\ютуб\\тексты.txt").split('\n');
var база=читать("C:\\ютуб\\ютуб_база.txt");		// все тхт в utf-8;
var путь_Сохр = "C:\\ютуб\\ютуб_выход.txt";	       // должна существовать; формат: login:password;ip:port
var новая_база=читать(путь_Сохр);
// alert(предложения[Math.round(Math.random() * (предложения.length - 0) + 0)];)
var начинатьСКлюча = 5
for(i=начинатьСКлюча;i<ключи.length;i++){ //ВХОД В ПОИСК!
 var ключ = ключи.split('\n')[i].split(' ').join('<sp>')



	iim('set !errorignore yes \n url goto=https://www.youtube.com/results?q='+ключ);
	iim('TAG POS=1 TYPE=BUTTON ATTR=TXT:Фильтры \n TAG POS=1 TYPE=SPAN ATTR=TXT:За<SP>этот<SP>год')
	ждем(2)
	// var резульатовПримерно = parseInt(window.document.querySelectorAll(".num-results ")[0].innerText.replace(/\s/g, '').split('примерно')[1]);
	// alert (резульатовПримерно)
	
	for(ii=0;ii<7;ii++){//20 страниц на одном видео=...эмм===))=.)); //ПЛАНИРУЕМ СКОК СТРАНИЦ ПРОХОДИТЬ!
		try{
		var скокВидосовНаСтр=window.document.querySelectorAll(".yt-lockup-video>div>div>a");
		
		for(iii=0;iii<скокВидосовНаСтр.length;iii++){//перебираем =<20 видео на странице: 
		window.scrollTo(0, randGen(1,123));	//листаем вниз;
		try{var возрастВидео = window.document.querySelectorAll(".yt-lockup-meta-info>li:nth-child(1)")[iii].innerText;
		}catch(e){var возрастВидео = "Хз"}
		 // alert(возрастВидео)
		 // alert((возрастВидео.search('года')==-1))
		
		// if(возрастВидео.search('года')==-1){ //старше 2-х лет -отсеиваем;
			var баян=0;
			try{var урлВидео = window.document.querySelectorAll(".yt-lockup-video>div>div>a")[iii].href// конкеретный результ выдачи
			// alert(урлВидео)
			}catch(e){баян=1;}//отображается либо канал,либо плейлист;-проводим как баян);
			if(база.search(урлВидео)!=-1){баян=1}
			if(читать(путь_Сохр).search(урлВидео)!=-1){баян=1} 
			if(баян==0){
				iim('tab open \n tab t=2')
				iim('set !errorignore yes\n url goto='+урлВидео);
				ждем(1); window.scrollTo(0, randGen(500,2222));	//листаем вниз;
				ждем(randGen(5,16));
				var урлКанала = window.document.querySelectorAll(".yt-user-info>a")[0].href;
				var опубликовано = window.document.querySelectorAll("#watch-uploader-info")[0].innerText;
				var баян=1;
				if(опубликовано.search('2015')>-1){var баян=0};//ВИДЕО 2015 года 
				if(опубликовано.search('2016')>-1){var баян=0};//ВИДЕО 2016 года 
				if(опубликовано.search('2017')>-1){var баян=0};//ВИДЕО 2017 года 
				try{var коммыОтключены = window.document.querySelectorAll(".display-message")[0].innerText
				if(коммыОтключены=="Комментарии к этому видео отключены."){var баян=1}//сделаем вид,че ето баян, т.к. нет доступа к коментам);
				}catch(e){}
				if(база.search(урлКанала)!=-1){баян=1}
				if(читать(путь_Сохр).search(урлКанала)!=-1){баян=1}
					var описание = window.document.querySelectorAll("#watch-description-text")[0].innerText;
					if(описание.search('1xBet')!=-1){var баян=1};
					if(описание.search('1хБет')!=-1){var баян=1};
					if(описание.search('1x Bet')!=-1){var баян=1};
					if(описание.search('1х Бет')!=-1){var баян=1};
					if(описание.search('Melbet')!=-1){var баян=1};
					if(описание.search('Мелбет')!=-1){var баян=1};
				if(баян==0){
					var просмотров = window.document.querySelectorAll(".watch-view-count")[0].innerText;
					var названиеВидео = window.document.querySelectorAll(".watch-title")[0].innerText;
					var названиеКанала = window.document.querySelectorAll(".yt-user-info > a")[0].innerText;
					try{var подписота = window.document.querySelectorAll(".yt-subscription-button-subscriber-count-branded-horizontal")[0].innerText;}catch(e){var подписота = "хз"}
					var текст = предложения[randGen(0,предложения.length)];
					// alert(текст)
					iim('TAG POS=3 TYPE=DIV ATTR=TXT:Оставьте<SP>комментарий')
					iim('EVENT TYPE=CLICK SELECTOR="#comment-simplebox>DIV:nth-of-type(2)>DIV:nth-of-type(2)" BUTTON=0')
					iim('EVENTS TYPE=KEYPRESS SELECTOR="#comment-simplebox>DIV:nth-of-type(2)>DIV:nth-of-type(2)" CHARS='+sms)
					iim('TAG POS=1 TYPE=BUTTON ATTR=TXT:Оставить<SP>комментарий')
					добавитьВКонец(путь_Сохр,дата()+"	"+i+"."+ii+"."+iii+"	"+названиеКанала+"	"+подписота+"	"+названиеВидео+"	"+просмотров+"	"+опубликовано+"	"+урлКанала+"	"+урлВидео+"	"+timming())
					ждем(randGen(2,6));
					//=RANDOM LIKE:
					if(randGen(1,2)==2){try{iim('TAG POS='+randGen(2,5)+' TYPE=BUTTON ATTR=ARIA-LABEL:Нравится&&ONCLICK:;return<SP>false;&&TYPE:button&&CLASS:yt-uix-button<SP>yt-uix-button-size-default<SP>yt-uix-button-default<SP>yt-uix-button-empty<SP>yt-uix-button-has-icon<SP>no-icon-markup<SP>comment-action-buttons-renderer-thumb<SP>yt-uix-sessionlink<SP>sprite-comment-actions<SP>sprite-like<SP>i-a-v-sprite-like&&TXT:')}catch(e){}}
					iimDisplay("Добавили. Ща в циклах №"+i+"."+ii+"."+iii+"\n"+дата())
				}
				else{iimDisplay("Было уже. Ща в циклах №"+i+"."+ii+"."+iii+"\n"+дата())}
				iim('tab t=0 \n tab closeallothers')
			}	
		// }
			
		}
		iim('TAG POS=1 TYPE=A ATTR=TXT:Следующая<SP>»') //след страница
		
	}catch(e){

	}	
	}
}
