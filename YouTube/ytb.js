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
`.split(' ').join('<sp>').split('\n').join('<br>') //уже не актуально(ибо->в кавычках выводим "${sms}")
// for(i=0;i<1000;i++){sms=sms.replace(' ','<sp>').replace('\n','<br>')}
// alert(sms) 
iim('set !useragent Mozilla/5.0<sp>(Windows<sp>NT<sp>6.1;<sp>WOW64;<sp>rv:40.0)<sp>Gecko/20100101<sp>Firefox/40.1\n wait seconds=1')
var неТрогаем = '1хБет,1хБет,1x Bet,1х Бет,Melbet,Мелбет'; //упоминание этих слов в названии и описании видео - пропускаем видос!
var start = new Date();
var path = 'C:\\imacros\\scripts\\YouTube\\txt\\';
var ключи = читать(path+"ключи.txt");
var предложения = читать(path+"тексты.txt").split('\n');
var база=читать(path+"ютуб_база.txt");		// все тхт в utf-8;
var путь_Сохр = path+"ютуб_выход.txt";	       // должна существовать; формат: login:password;ip:port
var новая_база=читать(путь_Сохр);
// alert(предложения[Math.round(Math.random() * (предложения.length - 0) + 0)];)
var начинатьСКлюча = 0;
var скокСтраницНаКлюч = 7;

for(i=начинатьСКлюча;i<ключи.length;i++){ //ВХОД В ПОИСК!
 var ключ = ключи.split('\n')[i].split(' ').join('<sp>')
	iim(`SET !ERRORIGNORE YES \n url goto=https://www.youtube.com/results?q=${ключ} \n TAG POS=1 TYPE=YT-FORMATTED-STRING ATTR=ID:text \n TAG POS=1 TYPE=YT-FORMATTED-STRING ATTR=TXT:За<SP>этот<SP>год`);
	ждем(2);
	var infinity_num_vidos = 0;
	for(ii=0;ii<скокСтраницНаКлюч;ii++){//скок страниц на 1 ключ) //ПЛАНИРУЕМ СКОК СТРАНИЦ ПРОХОДИТЬ! //в 2018 -инфинити скрол, а не страницы!
		try{ 
			var videos = querAll('ytd-video-renderer #video-title'); //(".yt-lockup-video>div>div>a"); 
			window.console.log(videos)  
			for(iii=0;iii<videos.length;iii++){//перебираем =<20 видео на странице: 
 			window.scrollTo(0, randGen(1, 123)); //листаем вниз;
			try{var возрастВидео = querAll("#metadata-line>.ytd-video-meta-block:nth-child(2)")[infinity_num_vidos].innerText;}catch(e){var возрастВидео = "Хз"} //.yt-lockup-meta-info>li:nth-child(1)		
			// if(возрастВидео.search('года')==-1){ //старше 2-х лет -отсеиваем;
				var баян=0;
				try{var урлВидео =videos[infinity_num_vidos].href// конкеретный результ выдачи   // querAll(".yt-lockup-video>div>div>a")
				}catch(e){баян=1;}//отображается либо канал,либо плейлист;-проводим как баян);
				if(база.search(урлВидео)!=-1){баян=1}
				if(читать(путь_Сохр).search(урлВидео)!=-1){баян=1} 
				if(баян==0){
					iim(`TAB OPEN	\n	TAB T=2	\n SET !ERRORIGNORE YES	\n	URL GOTO=${урлВидео}`)
					ждем(1);
					window.scrollTo(0, randGen(500,2222));	//листаем вниз;
					ждем(randGen(5,16));
					var урлКанала = querAll("#owner-name >A")[0].href; //.yt-user-info>a
					var опубликовано = querAll(".date")[0].innerText; //#watch-uploader-info
					var баян=1;
					if( (опубликовано.search('2016')>-1) || (опубликовано.search('2017')>-1) || (опубликовано.search('2018')>-1)){var баян=0};//ВИДЕО 2016-2018 года  
					try{
						var коммыОтключены = querAll("#contents #message")[0].innerText; //".display-message"
						if(коммыОтключены=="Комментарии к этому видео отключены."){var баян=1}//сделаем вид,че ето баян, т.к. нет доступа к коментам);
					}catch(e){window.console.log('catch=>',e)}
					if(база.search(урлКанала)!=-1){баян=1}
					if(читать(путь_Сохр).search(урлКанала)!=-1){баян=1}
						var описание = querAll("#content #description")[0].innerText;		//#watch-description-text
						неТрогаем.split(',').forEach(function(e){ 	баян = описание.search('1xBet') != -1 ? 1 : баян; 	})
					if(баян==0){
						var просмотров = querAll("#info-text #count")[0].innerText; ///.watch-view-count
						var названиеВидео = querAll("#container .title")[0].innerText; //.watch-title
						var названиеКанала = querAll("#container #owner-name")[0].innerText; //.yt-user-info > a
						try{var подписота = querAll("#subscribe-button .deemphasize ")[0].innerText;}catch(e){var подписота = "хз"}		//.yt-subscription-button-subscriber-count-branded-horizontal
						var текст = предложения[randGen(0,предложения.length)];
						// alert(текст)
						window.scrollTo(0, 1222);
						ждем(3);
						window.document.querySelectorAll("#simplebox-placeholder")[0].click(); //клик по комментам

						var a =iim(`
						EVENT TYPE=CLICK SELECTOR="IRON-AUTOGROW-TEXTAREA>DIV:nth-of-type(2)>TEXTAREA" BUTTON=0
						EVENTS TYPE=KEYPRESS SELECTOR="PAPER-INPUT-CONTAINER>DIV>DIV>DIV>IRON-AUTOGROW-TEXTAREA>DIV:nth-of-type(2)>TEXTAREA" CHARS=${sms}
						TAG POS=2 TYPE=PAPER-BUTTON ATTR=ID:button`);
						alert(a)
						ждем(randGen(1, 2));
						
						iim('EVENT TYPE=CLICK SELECTOR="YTD-BUTTON-RENDERER:nth-of-type(2)>A>PAPER-BUTTON" BUTTON=0');
						добавитьВКонец(путь_Сохр,`${дата()}	${i}.${ii}.${infinity_num_vidos}	${названиеКанала}	${подписота}	${названиеВидео}	${просмотров}	${опубликовано}	${урлКанала}	${урлВидео}	${timming()}`);
						ждем(randGen(2, 6));
 						iimDisplay(`${дата()} \n Добавили. Ща в циклах №${i}.${ii}.${infinity_num_vidos}`)
					}
					else { iimDisplay(`${дата()} \n Было уже. Ща в циклах №${i}.${ii}.${infinity_num_vidos}`) }
					iim('tab t=0 \n tab closeallothers');
				} 
				// } 
				infinity_num_vidos = infinity_num_vidos + 1; //след видео;)
			}
			//iim('TAG POS=1 TYPE=A ATTR=TXT:Следующая<SP>»') //след страница
			window.scrollTo(0,5222); //в 2018 году  - след стр уже нету! теперь infinity scroll :(
		}catch(e){window.console.log('CATCh=>>>',e)}	
	}
}
function querAll(e){return window.document.querySelectorAll(e)}
function iim(e) {return iimPlayCode(e)}
function timming() {diff=(new Date()-start)/1000; return '; Робот работает в этой сессии:'+Math.floor(diff/3600)+'ч:'+(Math.floor(diff/60)-(Math.floor(diff/3600)*60))+'м:'+Math.round(diff%60)+'с';}
function дата() {var d=new Date();var day=d.getDate();var month=d.getMonth() + 1;var year=d.getFullYear(); return d.toLocaleString().replace(", ","	")}
function randGen(min,max) {return Math.floor(Math.random() * (max - min)) + min;}
function читать(файл) {return imns.FIO.readTextFile(imns.FIO.openNode(файл))} 
function добавитьВКонец(путь,инфа) {imns.FIO.appendTextFile(imns.FIO.openNode(путь),инфа+"\n")}  
function ждем(s) {iim('wait seconds='+s)}