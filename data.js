/* ══════════════ ITINERARY DATA ══════════════ */
const DAYS = [
  { id:1, date:"6/14", dow:"日", region:"lucerne", weather:false,
    location:"台灣 → 蘇黎世 → 琉森", short:"琉森",
    summary:"07:10 飛抵 ZRH 機場，蘇黎世短暫停留，下午抵達琉森",
    duration:"約 9 小時", stay:"琉森（第 1 晚）", stayNote:"週一下午 16:00 check in",
    schedule:[
      {t:"07:10",    a:"飛抵 ZRH 機場，出關領行李"},
      {t:"09:00",    a:"搭車前往 Zürich HB，蘇黎世市區散步"},
      {t:"11:00",    a:"蘇黎世午餐"},
      {t:"12:35",    a:"搭火車前往琉森"},
      {t:"13:30",    a:"Hotel Baslertor", link:"https://maps.app.goo.gl/KaL7WRgo7QLQqdD2A",suf:"放行李"},
      {t:"14:00",   a:"Spreuer Bridge", link:"https://maps.app.goo.gl/8gLqpUFPTyNdF1WNA",suf:" 斯普洛耶橋", spot:"spreuer_bridge"},
      {t:"14:00",    a:"Museggmauer", link:"https://maps.app.goo.gl/v3RBi32eecPQ1o4y9",suf:" 穆塞格城牆", spot:"museggmauer"},
      {t:"15:00",    a:"Gletschergarten", link:"https://maps.app.goo.gl/qszVzsdun9BGQFc46",suf:" 冰川公園", spot:"Gletschergarten"},
      {t:"15:00",    a:"Lion Monument 垂死獅子像", link:"https://maps.app.goo.gl/UJe8ujoMvz6Le1tn9", spot:"lion_monument"},
      {t:"16:00",    a:"Kornmarkt 穀物市場", link:"https://maps.app.goo.gl/72KQXR12V4cxDxoH9"},
      {t:"16:00",    a:"Pfistern 濕壁畫的瑞士餐廳", link:"https://maps.app.goo.gl/t1Hc6ikGr1QhYxXT7"},
      {t:"16:00",    a:"Rathaus Stadt Luzern 市政廳", link:"https://maps.app.goo.gl/WDMi2DZopm2VHE6v7"},
      {t:"16:00",    a:"Hirschenplatz 沒有鹿的鹿廣場", link:"https://maps.app.goo.gl/ZcHhSU2MRSkoLDGk7"},
      {t:"16:00",    a:"Weinmarkt-Brunnen 葡萄酒市場", link:"https://maps.app.goo.gl/MyoknBMp6cxnf5YN6"},
      {t:"17:00",    a:"Confiserie Bachmann - Schwanenplatz", link:"https://maps.app.goo.gl/aHEbbY1QxftwC7R58",suf:"吃冰淇淋"},
      {t:"17:00",    a:"Chapel Bridge 卡貝爾教堂橋", link:"https://maps.app.goo.gl/fDhX4ySEGuCPpFWJA", spot:"chapel_bridge"},
      {t:"17:00",    a:"Jesuitenkirche Luzern 耶穌會教堂", link:"https://maps.app.goo.gl/C4XDzHrGWjMtzPsD6"},
      {t:"18:00",    a:"飯店check in"},
      {t:"18:40",    a:"Coop Supermarkt Luzern Bahnhof", link:"https://maps.app.goo.gl/m74MWcBARTYWNk4f6",suf:"採買晚餐"},
      {t:"19:30 後", a:"返回飯店休息"},
    ],
    dining:"Coop 超市採買晚餐、早餐(瑞士火腿、起司、麵包、生菜、牛奶都相當便宜)，逛3小時",
    tips:"超市採買：瑞士火鍋、起士、麵包、巧克力、瑞奶都很便宜。Confiserie Bachmann（Schwanenplatz）買點心。",
    tags:["城市漫步","採買","古橋"],
  },
  { id:2, date:"6/15", dow:"一", region:"lucerne", weather:false,
    location:"琉森 · 皮拉圖斯山", short:"皮拉圖斯山",
    summary:"搭船 + 齒軌火車登皮拉圖斯山，體驗騎龍纜車",
    duration:"約 8 小時", stay:"琉森（第 2 晚）",
    schedule:[
      {t:"08:38", a:"琉森碼頭 Pier 2 搭船出發"},
      {t:"",      a:"抵 Alpnachstad（約 50–90 分鐘），轉搭齒軌火車上山（坐左邊）"},
      {t:"",      a:"Pilatus Kulm 山頂 · Dragon Path 龍之小徑", spot:"pilatus_kulm"},
      {t:"",      a:"搭大型纜車下山至 Kriens，轉公車（1/5 號）回琉森市區"},
    ],
    tips:"Swiss Travel Pass：大型纜車、火車、公車免費；山頂齒軌火車需另購。",
    links:[
      {label:"行程部落格參考", url:"https://www.wendyjourney.com/pilatus/"},
      {label:"皮拉圖斯官網地圖", url:"https://pilatus.ch/en/map"},
    ],
    tags:["登山","纜車","騎龍體驗"],
  },
  { id:3, date:"6/16", dow:"二", region:"lucerne", weather:false,
    location:"琉森 → 伯恩一日遊", short:"伯恩",
    summary:"伯恩老城漫步、聯邦宮、時鐘塔、玫瑰園、熊苑",
    duration:"約 8.5 小時", stay:"琉森（第 3 晚）",
    schedule:[
      {t:"",a:"搭火車琉森 → 伯恩（約 1 小時）"},
      {t:"",a:"聯邦宮 Bundeshaus & Bundesplatz", spot:"bundeshaus"},
      {t:"",a:"牢籠塔 Käfigturm → 時鐘塔 Zytglogge（整點機械表演）", spot:"zytglogge"},
      {t:"",a:"愛因斯坦故居展 Einsteinhaus Bern"},
      {t:"",a:"伯恩大教堂 Berner Münster", spot:"berner_munster"},
      {t:"",a:"熊苑 BärenPark（免費）→ 玫瑰園 Rosengarten", spot:"barenpark"},
      {t:"",a:"採買食材，傍晚返回琉森"},
    ],
    tips:"Kornhauskeller 餐廳需訂位，週一至週五 11:30–14:00 及 17:30–22:00。",
    dining:"Kornhauskeller（建議訂位）",
    tags:["UNESCO 世界遺產","城市漫步","花園","熊苑"],
  },
  { id:4, date:"6/17", dow:"三", region:"transit", weather:false,
    location:"琉森 → 庫爾 → 策馬特", short:"移動日",
    summary:"長途移動日：搭火車穿越瑞士抵達策馬特",
    duration:"約 11 小時", stay:"策馬特（第 1 晚）", stayNote:"琉森飯店最晚 11:00 check out",
    schedule:[
      {t:"11:00 前", a:"琉森飯店 check out"},
      {t:"12:05",    a:"庫爾（Chur）搭車出發（冰河景觀快車路段）"},
      {t:"18:07",    a:"抵達策馬特（無燃油車小鎮，電動接駁站）"},
      {t:"",         a:"Check in，休息放鬆"},
      {t:"",         a:"晚上散步策馬特村落"},
    ],
    tips:"若要搭 11–12 點前的班次需 7:30 出飯店，搭 8:09 班車到庫爾（10:22 抵）。策馬特禁燃油車，需改搭電動接駁車。",
    tags:["移動日","火車","冰河景觀快車"],
  },
  { id:5, date:"6/18", dow:"四", region:"zermatt", weather:true,
    location:"策馬特 · 戈爾納格拉特", short:"戈爾納格拉特",
    summary:"戈爾納格拉特觀景台、Riffelsee 馬特洪峰倒影、日落",
    duration:"約 10 小時", stay:"策馬特（第 2 晚）",
    schedule:[
      {t:"清晨",     a:"步行到 Kirchbrücke 或 Getwingbrücke 賞晨景，回飯店早餐"},
      {t:"",         a:"搭 Zermatt GGB 齒軌列車到終點站 Gornergrat（3,089m）", spot:"gornergrat_observatory"},
      {t:"",         a:"欣賞馬特洪峰群山，瑞士最高山 Dufourspitze（Monte Rosa）", spot:"matterhorn"},
      {t:"",         a:"搭車到 Rotenboden，步行 15 分鐘到 Riffelsee 賞馬特洪峰倒影", spot:"riffelsee"},
      {t:"",         a:"步行約 1 小時到 Riffelberg，搭車下山"},
      {t:"",         a:"返回飯店休息放空"},
      {t:"18:00",    a:"Restaurant Julen 晚餐"},
      {t:"日落時分", a:"Zermatt Matterhorn Viewpoint 觀賞日落夜景"},
    ],
    tips:"注意高山症。必備：墨鏡、防曬、保暖衣物（山頂約 5–10°C）。",
    dining:"Restaurant Julen（18:00）",
    tags:["觀景台","倒影","馬特洪峰","需好天氣"],
  },
  { id:6, date:"6/19", dow:"五", region:"zermatt", weather:true,
    location:"策馬特 · 五湖健行", short:"五湖健行",
    summary:"11 號路線五湖健行，從 Blauherd 走到 Sunnegga",
    duration:"約 8 小時", stay:"策馬特（第 3 晚）",
    schedule:[
      {t:"08:30", a:"ZBAG 纜車站出發到 Blauherd 站（去程免費）"},
      {t:"",      a:"【湖1】Stellisee — 纜車站步行 20 分鐘，馬特洪峰倒影最美", spot:"stellisee"},
      {t:"",      a:"【湖2】Grindjisee — 湖1 走來約 1 小時，緩上坡，倒影+針葉林很美", spot:"grindjisee"},
      {t:"",      a:"【湖3】Gruensee — 湖2 走來約 1 小時，無特別可快速通過"},
      {t:"",      a:"【湖4】Moosjisee — 湖3 走來 40 分鐘，牛奶藍湖色極美，注意路標", spot:"moosjisee"},
      {t:"",      a:"【湖5】Leisee（免費）— 湖4 走來全程上坡，有設施，適合游泳戲水"},
      {t:"",      a:"Sunnegga 搭地下纜車下山回策馬特"},
      {t:"下午",  a:"策馬特車站大街散步、策馬特博物館"},
    ],
    tips:"若走到湖2 發現太累，立即返回纜車站直接搭到湖5。出發前用 Swisstopo App 下載離線地圖。",
    links:[
      {label:"五湖健行介紹", url:"https://www.bring-you.info/zh-tw/5-seenweg-hiking"},
      {label:"官方五湖路線", url:"https://zermatt.swiss/en/p/5-lake-route-no-11"},
    ],
    tags:["健行","五湖","馬特洪峰","需好天氣"],
  },
  { id:7, date:"6/20", dow:"六", region:"transit", weather:true,
    location:"策馬特 → 格林德瓦", short:"移動日",
    summary:"移動至少女峰區，漫步格林德瓦，晚餐起士鍋",
    duration:"約 12 小時", stay:"格林德瓦（第 1 晚）",
    schedule:[
      {t:"早上",     a:"悠閒吃早餐，留空到 11:00 退房"},
      {t:"11:00",    a:"退房，搭火車前往格林德瓦（約 3 小時 3 分鐘）"},
      {t:"15:00 後", a:"抵達格林德瓦，辦理入住"},
      {t:"",         a:"格林德瓦教堂 Kirche Grindelwald 漫步"},
      {t:"",         a:"夢幻山莊村落漫步"},
      {t:"",         a:"Barrys Restaurant 起士鍋晚餐"},
      {t:"",         a:"逛 Coop，留空休息"},
    ],
    tips:"少女峰購票：提前 1–2 天觀察天氣，到 jungfrau.ch 官網購買，補差額 CHF 10 升等訂位。",
    dining:"Barrys Restaurant（起士鍋）",
    tags:["移動日","起士鍋","少女峰區"],
  },
  { id:8, date:"6/21", dow:"日", region:"jungfrau", weather:true,
    location:"少女峰 Jungfraujoch（3,454m）", short:"少女峰",
    summary:"登頂少女峰、艾格之路健行",
    duration:"約 8 小時", stay:"格林德瓦（第 2 晚）",
    schedule:[
      {t:"08:00", a:"搭 Eiger Express 纜車，轉 Jungfraubahn 穿隧道抵 Jungfraujoch（強制訂位）", spot:"jungfraujoch"},
      {t:"",      a:"Sphinx 觀景台（3,454m）：阿萊奇冰川全景", spot:"sphinx_observatory"},
      {t:"",      a:"Alpine Sensation 體驗館 · Ice Palace 冰宮 · Lindt 巧克力天堂", spot:"ice_palace"},
      {t:"",      a:"艾格之路 Eiger Walk 健行至 Kleine Scheidegg（約 1.5 小時）"},
      {t:"",      a:"搭 Wengernalpbahn 電齒輪車下山返回 Grindelwald"},
    ],
    tips:"3,454m 注意高山反應，建議山頂停留 2–3 小時。強制訂位車票要提早購買。",
    links:[{label:"少女峰搭車方式詳解", url:"https://www.gobytrain.com.tw/mountain/detail/110"}],
    tags:["少女峰","冰川","需好天氣","強力推薦"],
  },
  { id:9, date:"6/22", dow:"一", region:"jungfrau", weather:true,
    location:"格林德瓦 · First 高山", short:"First",
    summary:"First Cliff Walk 懸崖步橋、巴哈爾普湖健行",
    duration:"約 8 小時", stay:"格林德瓦（第 3 晚）",
    schedule:[
      {t:"08:30", a:"搭 Firstbahn 纜車至 First（2,168m）"},
      {t:"",      a:"巴哈爾普湖 Bachalpsee 健行（來回約 2–2.5 小時）", spot:"bachalpsee"},
      {t:"",      a:"First Cliff Walk by Tissot 空中懸崖步橋", spot:"first_cliff_walk"},
    ],
    links:[{label:"First 即時 Webcam", url:"https://www.jungfrau.ch/en-gb/live/webcams/#webcam-grindelwald-first"}],
    tags:["健行","懸崖步橋","高山湖","需好天氣"],
  },
  { id:10, date:"6/23", dow:"二", region:"zurich", weather:false,
    location:"格林德瓦 → 蘇黎世", short:"蘇黎世",
    summary:"蘇黎世市區漫遊、Lindenhof 夜景、最後晚餐",
    duration:"-", stay:"蘇黎世（第 1 晚）",
    schedule:[
      {t:"中午前", a:"從格林德瓦出發前往蘇黎世"},
      {t:"",       a:"蘇黎世市區漫遊、Bahnhofstrasse 購物大道", spot:"bahnhofstrasse"},
      {t:"",       a:"利馬特河畔 Limmatquai 散步"},
      {t:"",       a:"Lindenhof 山丘夜景", spot:"lindenhof"},
      {t:"晚上",   a:"最後晚餐"},
    ],
    tags:["城市漫步","夜景","購物"],
  },
  { id:11, date:"6/24", dow:"三", region:"zurich", weather:false,
    location:"蘇黎世 → 台灣", short:"返台",
    summary:"利馬特河畔最後散步，11:10 起飛返台",
    duration:"-", stay:"返台",
    schedule:[
      {t:"早上",  a:"利馬特河畔最後漫步"},
      {t:"11:10", a:"蘇黎世 ZRH 機場起飛返台"},
    ],
    tags:["返台","機場"],
  },
];

/* ══════════════ SPOT DATA ══════════════ */
const SPOT_DATA = {

  /* ── 琉森 ── */
  chapel_bridge: {
    name:  "卡貝爾橋 Chapel Bridge",
    emoji: "🌉",
    img:   "./images/chapel_bridge.jpg",
    desc:  "建於 1333 年，是歐洲現存最古老的有頂木橋，橫跨琉森羅伊斯河。橋內屋頂裝飾著描繪瑞士歷史與守護聖人事蹟的三角形彩繪木板，中央聳立著八角形水塔，是琉森最具代表性的地標。",
    info:  "免費參觀 · 全天開放",
  },
  spreuer_bridge: {
    name:  "斯普羅爾橋 Spreuer Bridge",
    emoji: "🎨",
    img:   "./images/spreuer_bridge.jpg",
    desc:  `<h3>1. 歷史與名稱由來</h3>
    <ul>
        <li><span class="highlight">中世紀防禦廊橋：</span> 完工於 <strong>1408 年</strong>，是琉森現存兩座中世紀木造廊橋之一。</li>
        <li><span class="highlight">「麥糠」之橋：</span> 「Spreuer」德語意為麥糠。因該橋位處河流最下游，是舊時代全城唯一被允許將麥糠、落葉傾倒進羅伊斯河的橋樑，因而得名。</li>
    </ul>

    <h3>2. 核心看點：黑框木板畫《死亡之舞》</h3>
    <ul>
        <li><span class="highlight">最大規模主題畫：</span> 橋內屋頂完好保存了 45 幅於 17 世紀（1626~1635年）創作的<strong>《死亡之舞》（Totentanz）</strong>系列畫作。</li>
        <li><span class="highlight">在死亡面前，人人平等：</span> 每幅畫均以「骷髏死神」為主角，穿梭於國王、教宗、富商到農民等各階層，傳達生命無常與死後平等的思想。</li>
    </ul>

    <h3>3. 環境與漫步體驗</h3>
    <ul>
        <li><span class="highlight">古樸且靜謐：</span> 相較於歷經大火重建的卡貝爾橋，這裡完整保留了更多中世紀的昏暗與古樸，觀光客較少，氛圍更具神祕感。</li>
        <li><span class="highlight">百年水利景觀：</span> 橋旁緊鄰磨坊廣場，可順道欣賞至今仍人工操作、極具歷史價值的<strong>「針狀水壩（Needle Weir）」</strong>。</li>
    </ul>`,
    info:  "免費參觀 · 全天開放",
  },
  museggmauer: {
    name:  "穆塞格城牆 Museggmauer",
    emoji: "🏰",
    img:   "./images/museggmauer.jpg",
    desc:  "建於 14 世紀末，是琉森保存最完整的中世紀防禦工事，全長約 870 公尺，設有九座塔樓。遊客可步行沿城牆頂端漫步，俯瞰琉森舊城區與湖泊的壯麗景色。",
    info:  "免費 · 約4–11月 08:00–19:00",
  },
  lion_monument: {
    name:  "垂死獅子像 Lion Monument",
    emoji: "🦁",
    img:   "./images/lion_monument.jpg",
    desc:  "完成於 1821 年，紀念 1792 年法國大革命中犧牲的瑞士僱傭兵。巨型浮雕鑿刻於天然岩壁，描繪一頭胸插長矛、奄奄一息的雄獅。馬克·吐溫讚譽其為「世界上最哀傷、最感人的石雕」。",
    info:  "免費參觀 · 全天開放",
    link:  "https://maps.app.goo.gl/UJe8ujoMvz6Le1tn9",
  },

  /* ── 皮拉圖斯山 ── */
  pilatus_kulm: {
    name:  "皮拉圖斯山頂 Pilatus Kulm",
    emoji: "⛰️",
    img:   "./images/pilatus_kulm.jpg",
    desc:  "海拔 2,132 公尺，琉森近郊最壯觀的山峰，山頂可俯瞰琉森湖及阿爾卑斯山全景。搭乘世界坡度最陡的齒軌鐵路（最大坡度 48%）抵達，終年吸引大批旅客。",
    info:  "纜車來回約 CHF 72–90 · 建議提前訂票",
  },
  dragon_path: {
    name:  "龍之小徑 Dragon Path",
    emoji: "🐉",
    img:   "./images/pilatus_kulm.jpg",
    desc:  "皮拉圖斯山上充滿傳說的健行步道，相傳中世紀曾有巨龍棲居於此。沿途設有十座造型生動的龍雕塑，結合壯麗山景，全程約 1 小時，連接山頂與纜車站。",
    info:  "免費步行（需購纜車票）",
  },

  /* ── 伯恩 ── */
  bundeshaus: {
    name:  "聯邦宮 Bundeshaus",
    emoji: "🏛️",
    img:   "./images/bundeshaus.jpg",
    desc:  "瑞士聯邦政府所在地，完工於 1902 年，融合文藝復興與巴洛克建築風格。建築正面俯瞰阿勒河峽谷，廣場上設有噴水池。議會休會期間提供免費導覽，深入了解瑞士民主制度。",
    info:  "免費導覽（議會休會期間）· 廣場全天開放",
  },
  zytglogge: {
    name:  "時鐘塔 Zytglogge",
    emoji: "🕰️",
    img:   "./images/zytglogge.jpg",
    desc:  "建於 13 世紀初，伯恩最著名的地標。塔上天文鐘每逢整點前 4 分鐘啟動精緻機械人偶表演。愛因斯坦據說在此得到相對論的靈感，是不可錯過的歷史景點。",
    info:  "外觀免費 · 塔內導覽 14:30（5–10月）約 CHF 20",
  },
  berner_munster: {
    name:  "伯恩大教堂 Berner Münster",
    emoji: "⛪",
    img:   "./images/berner_munster.jpg",
    desc:  "瑞士最高教堂，塔尖高 100.6 公尺，建造工程始於 1421 年，歷時數百年完成。大門雕有精美哥德式《最後審判》浮雕，登上 344 級石階可飽覽伯恩舊城全景。",
    info:  "教堂免費 · 登塔約 CHF 5 · 週一休息",
  },
  barenpark: {
    name:  "熊苑 BärenPark",
    emoji: "🐻",
    img:   "./images/barenpark.jpg",
    desc:  "伯恩市徽動物棕熊的家園，位於舊城旁的阿勒河河畔。園區模擬自然棲息環境，熊隻可自由在河邊、山坡與林地活動，夏季可下河游泳。自中世紀以來，熊是伯恩最受珍視的象徵。",
    info:  "免費入場 · 全天開放",
  },
  rosengarten: {
    name:  "玫瑰園 Rosengarten",
    emoji: "🌹",
    img:   "./images/rosengarten.jpg",
    desc:  "建於 1913 年，種植 220 種、逾 18,000 株玫瑰與鳶尾花，花季時美不勝收。公園地處高地，可俯瞰整個伯恩 UNESCO 世界遺產舊城區與阿勒河全景，是欣賞伯恩最美的視角。",
    info:  "免費入園 · 全天開放 · 花季約 5–9月",
  },

  /* ── 策馬特 ── */
  matterhorn: {
    name:  "馬特洪峰 Matterhorn",
    emoji: "🏔️",
    img:   "./images/matterhorn.jpg",
    desc:  "海拔 4,478 公尺，以近乎完美的四面錐形山體聞名於世，是阿爾卑斯山最具辨識度的山峰。1865 年首次登頂，山峰倒映在湖中的景色是瑞士最具標誌性的明信片畫面。",
    info:  "觀賞免費 · 策馬特鎮為無燃油車小鎮",
  },
  gornergrat_observatory: {
    name:  "戈爾納格拉特 Gornergrat",
    emoji: "🔭",
    img:   "./images/gornergrat.jpg",
    desc:  "海拔 3,089 公尺，可同時觀賞馬特洪峰與周邊 29 座四千公尺高峰，俯瞰歐洲最大冰川之一高爾納冰川。山頂天文台建於 1898 年，是世界最高的露天齒軌鐵路終點。",
    info:  "鐵路來回約 CHF 94 · 建議早晨前往避開雲霧",
  },
  riffelsee: {
    name:  "里費爾湖 Riffelsee",
    emoji: "🪞",
    img:   "./images/riffelsee.jpg",
    desc:  "海拔約 2,757 公尺的高山湖泊，以湖面完美倒映馬特洪峰著稱。夏季水面如鏡，呈現「上下兩座馬特洪峰」的震撼畫面，是攝影愛好者夢寐以求的拍攝地點。",
    info:  "免費 · 夏季 6–10月最佳 · 需購 GGB 鐵路票",
  },

  /* ── 五湖健行 ── */
  stellisee: {
    name:  "斯特利湖 Stellisee",
    emoji: "💧",
    img:   "./images/stellisee.jpg",
    desc:  "五湖健行路線中海拔最高的湖泊（約 2,537 公尺），以清澈湛藍的湖水倒映馬特洪峰著稱。清晨無風時湖面倒影尤為完美，是整條路線中最受攝影師喜愛的景點。",
    info:  "免費 · 纜車至布勞赫德站後步行約 30 分鐘",
  },
  grindjisee: {
    name:  "格林吉湖 Grindjisee",
    emoji: "🌲",
    img:   "./images/stellisee.jpg",
    desc:  "五湖路線中最為清幽的湖泊，湖畔林木茂盛，湖水呈深邃墨綠，氛圍靜謐而神秘，相較其他湖泊遊客較少。湖畔設有休憩長椅，可悠閒欣賞雪峰倒影。",
    info:  "免費 · 五湖全程約 13 公里，高差 500 公尺",
  },
  moosjisee: {
    name:  "莫西湖 Moosjisee",
    emoji: "🩵",
    img:   "./images/stellisee.jpg",
    desc:  "湖水顏色因季節呈現土耳其藍至青綠，色彩極為迷人。湖面倒映馬特洪峰與周邊雪峰群，湖邊野花盛開時景色如畫，是整條健行路線中的一大亮點。",
    info:  "免費 · 健行旺季為 7–10月",
  },

  /* ── 少女峰 ── */
  jungfraujoch: {
    name:  "少女峰頂 Jungfraujoch Top of Europe",
    emoji: "❄️",
    img:   "./images/jungfraujoch.jpg",
    desc:  "海拔 3,454 公尺，歐洲海拔最高的火車站，被稱為「歐洲之巔」，2001 年列入 UNESCO 世界自然遺產。穿越艾格與僧侶峰的岩石隧道抵達，山頂終年積雪，景色震撼人心。",
    info:  "火車票來回約 CHF 145–210 · Good Morning Ticket 有優惠",
  },
  sphinx_observatory: {
    name:  "斯芬克斯觀測台 Sphinx Observatory",
    emoji: "🔭",
    img:   "./images/sphinx.jpg",
    desc:  "建於 1937 年，海拔達 3,571 公尺，外型如古埃及獅身人面像而得名。戶外觀景平台提供 360 度阿爾卑斯山全景，晴天時可遠眺法國、德國、義大利三國。",
    info:  "包含在少女峰票價內 · 全年開放",
  },
  aletsch_glacier: {
    name:  "阿萊奇冰川 Aletsch Glacier",
    emoji: "🌊",
    img:   "./images/aletsch.jpg",
    desc:  "長達 23 公里，阿爾卑斯山最長、歐洲最大的冰川，2001 年列入 UNESCO 世界自然遺產。萬年冰河蜿蜒壯闊，由於氣候變遷持續退縮，親眼目睹更顯珍貴。",
    info:  "從少女峰頂觀景台免費觀賞（已含票價）",
  },
  ice_palace: {
    name:  "冰宮 Ice Palace",
    emoji: "🧊",
    img:   "./images/jungfraujoch.jpg",
    desc:  "鑿刻在真實冰層中的地下宮殿，自 1934 年起開放參觀。洞窟內溫度常年約 -3°C，透明藍色冰壁晶瑩剔透，各種精雕冰雕裝飾其中，仿如冰雪世界的童話王國。",
    info:  "含在少女峰票價內 · 洞內約 -3°C，建議帶外套",
  },

  /* ── 格林德瓦 · First ── */
  first_cliff_walk: {
    name:  "菲斯特峭壁步道 First Cliff Walk",
    emoji: "🌉",
    img:   "./images/first_cliff_walk.jpg",
    desc:  "位於海拔 2,184 公尺的懸空鋼鐵步道，懸掛於峭壁邊緣，長約 45 公尺。步道盡頭展望台凌空伸出山壁，在腳下萬丈深淵與艾格、僧侶、少女三峰之間感受無比震撼。",
    info:  "步道免費（需購纜車票）· 纜車來回約 CHF 47",
  },
  bachalpsee: {
    name:  "巴哈爾普湖 Bachalpsee",
    emoji: "🏞️",
    img:   "./images/bachalpsee.jpg",
    desc:  "海拔 2,265 公尺的高山湖泊，以湖面映照艾格、僧侶、少女三峰著稱，是伯恩高地最受攝影師喜愛的地點。從菲斯特站步行約 50 分鐘，沿途花草茂盛，牛鈴聲聲。",
    info:  "免費 · 從 First 步行約 50 分鐘（單程約 3 km）",
  },

  /* ── 蘇黎世 ── */
  bahnhofstrasse: {
    name:  "班霍夫大街 Bahnhofstrasse",
    emoji: "🛍️",
    img:   "./images/bahnhofstrasse.jpg",
    desc:  "全長約 1.4 公里，蘇黎世最繁華的購物大道，全球租金最昂貴的街道之一，匯集國際精品與高級珠寶商。大街底端即是蘇黎世湖畔，電車穿梭其間，即使不購物也是漫步賞景的好去處。",
    info:  "免費漫步 · 商店一般 09:00–20:00（週日多休）",
  },
  grossmunster: {
    name:  "格羅斯明斯特大教堂 Grossmünster",
    emoji: "⛪",
    img:   "./images/grossmunster.jpg",
    desc:  "蘇黎世最具代表性的羅馬式建築，兩座高塔矗立於利馬特河畔，始建於 11 世紀。宗教改革家茲溫利曾在此發起瑞士新教改革運動，登上鐘塔可 360 度俯瞰蘇黎世全景。",
    info:  "教堂免費 · 登塔 CHF 5 · 週一至週六 10:00–18:00",
  },
  lindenhof: {
    name:  "林登霍夫廣場 Lindenhof",
    emoji: "🌳",
    img:   "./images/lindenhof.jpg",
    desc:  "蘇黎世最古老的地點之一，建在利馬特河畔的天然山丘上，羅馬時代曾建有城堡與海關。以古老菩提樹命名，環境清幽，可俯瞰利馬特河對岸的老城區與蘇黎世湖。",
    info:  "免費 · 全天開放",
  },
};

/* ── Day → Spots mapping ── */
const DAY_SPOTS = {
  1: ['museggmauer','lion_monument','spreuer_bridge','chapel_bridge'],
  2: ['pilatus_kulm','dragon_path'],
  3: ['bundeshaus','zytglogge','berner_munster','barenpark','rosengarten'],
  4: [],
  5: ['matterhorn','gornergrat_observatory','riffelsee'],
  6: ['stellisee','grindjisee','moosjisee'],
  7: [],
  8: ['jungfraujoch','sphinx_observatory','aletsch_glacier','ice_palace'],
  9: ['bachalpsee','first_cliff_walk'],
  10:['bahnhofstrasse','grossmunster','lindenhof'],
  11:[],
};

/* ══════════════ HOTEL DATA ══════════════ */
const HOTELS = [
  {
    name: "（待填）飯店名稱",
    location: "琉森", nights: 3,
    checkIn:  "6/14（日）16:00",
    checkOut: "6/17（三）11:00",
    breakfast: null,       // true / false / "自費" / null（未知）
    img: null,             // 填入照片路徑或 URL
    mapLink: null,         // 填入 Google Maps 短網址
    notes: "",
  },
  {
    name: "（待填）飯店名稱",
    location: "策馬特", nights: 3,
    checkIn:  "6/17（三）",
    checkOut: "6/20（六）11:00",
    breakfast: null,
    img: null,
    mapLink: null,
    notes: "無燃油車小鎮，行李需電動接駁車",
  },
  {
    name: "（待填）飯店名稱",
    location: "格林德瓦", nights: 3,
    checkIn:  "6/20（六）15:00 後",
    checkOut: "6/23（二）",
    breakfast: null,
    img: null,
    mapLink: null,
    notes: "",
  },
  {
    name: "（待填）飯店名稱",
    location: "蘇黎世", nights: 1,
    checkIn:  "6/23（二）",
    checkOut: "6/24（三）早上",
    breakfast: null,
    img: null,
    mapLink: null,
    notes: "6/24 11:10 起飛，早起退房",
  },
];
