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
      {t:"15:00",    a:"Lion Monument", link:"https://maps.app.goo.gl/UJe8ujoMvz6Le1tn9",suf:" 垂死獅子像", spot:"lion_monument"},
      {t:"16:00",    a:"Kornmarkt", link:"https://maps.app.goo.gl/72KQXR12V4cxDxoH9",suf:" 穀物市場", spot:"Kornmarkt"},
      {t:"16:00",    a:"Pfistern", link:"https://maps.app.goo.gl/t1Hc6ikGr1QhYxXT7",suf:" 皮斯特餐廳", spot:"Pfistern"},
      {t:"16:00",    a:"Rathaus Stadt Luzern", link:"https://maps.app.goo.gl/WDMi2DZopm2VHE6v7",suf:" 市政廳", spot:"Rathaus"},
      {t:"16:00",    a:"Hirschenplatz", link:"https://maps.app.goo.gl/ZcHhSU2MRSkoLDGk7",suf:" 沒有鹿的鹿廣場", spot:"Hirschenplatz"},
      {t:"16:00",    a:"Weinmarkt-Brunnen", link:"https://maps.app.goo.gl/MyoknBMp6cxnf5YN6",suf:" 葡萄酒市場", spot:"Weinmarkt"},
      {t:"17:00",    a:"Confiserie Bachmann - Schwanenplatz", link:"https://maps.app.goo.gl/aHEbbY1QxftwC7R58",suf:"吃冰淇淋"},
      {t:"17:00",    a:"Chapel Bridge", link:"https://maps.app.goo.gl/fDhX4ySEGuCPpFWJA",suf:" 卡貝爾教堂橋", spot:"chapel_bridge"},
      {t:"17:00",    a:"Jesuitenkirche Luzern", link:"https://maps.app.goo.gl/C4XDzHrGWjMtzPsD6",suf:" 耶穌會教堂", spot:"Jesuitenkirche"},
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
    desc:  `<h3>歷史背景</h3>
    <ul>
        <li><span class="highlight">歐洲最古老的木造廊橋：</span> 始建於 1333 年（約 14 世紀），橫跨羅伊斯河（Reuss），是歐洲現存最古老的有頂木造廊橋。它最初並非為了浪漫而建，而是作為琉森城市防禦工事的一部分，將新舊城區連接起來。</li>
        <li><span class="highlight">浴火重生：</span>1993 年 8 月，一場因船隻起火引發的慘劇，在短短幾小時內燒毀了這座古橋的大部分。如今看到的橋身是在 1994 年依照原樣極速修復完成的，雖然經歷過火炙，它依然是瑞士最受矚目的國家級象徵。</li>
    </ul>
    <h3>核心看點：三角形歷史畫作與八角形水塔</h3>
    <ul>
        <li><span class="highlight">水塔：</span> 矗立在橋身旁、高 34 公尺的八角形磚石水塔，其實比木橋本身還要古老（約建於 1300 年）。它在歷史上功能多變，曾作為城牆防衛瞭望台、城市檔案庫、甚至審問犯人的監獄與酷刑室。</li>
        <li><span class="highlight">廊簷下的中世紀木板畫：</span> 走在橋上，抬頭看會發現數十幅獨特的三角形木板畫。這些畫作繪製於 17 世紀，描繪了琉森的守護神聖人傳記以及瑞士的歷史故事。雖然大部分在 1993 年的大火中燒毀，但目前仍有部分珍貴的原作與修復畫作展示在廊簷下。</li>
    </ul>
    <h3>環境與漫步體驗</h3>
    <ul>
        <li><span class="highlight">漫步在鮮花簇擁的河畔：</span>每到春夏季節，卡貝爾橋的兩側扶手都會種滿色彩鮮豔的滿天星與天竺葵，紅白相間的鮮花與碧綠的河水相映，美得像一幅油畫。</li>
        <li><span class="highlight">極致浪漫的晨昏夜景：</span>這裡連接著舊市政廳與耶穌會教堂。白天的廊橋充滿歷史感，而到了黃昏與夜晚，當橋身與八角水塔的燈光點亮，倒映在波光粼粼的羅伊斯河面上，散發著極致浪漫的歐洲古典靈魂，是琉森最殺底片、最讓人流連忘返的夢幻地標。</li>
    </ul>`,
    info:  "免費參觀 · 全天開放",
  },
  spreuer_bridge: {
    name:  "斯普羅爾橋 Spreuer Bridge",
    emoji: "🎨",
    img:   "./images/spreuer_bridge.jpg",
    desc:  `<h3>歷史背景</h3>
    <ul>
        <li><span class="highlight">中世紀防禦廊橋：</span> 完工於1408 年，是琉森現存兩座中世紀木造廊橋之一。</li>
        <li><span class="highlight">「麥糠」之橋：</span> 「Spreuer」德語意為麥糠。因該橋位處河流最下游，是舊時代全城唯一被允許將麥糠、落葉傾倒進羅伊斯河的橋樑，因而得名。</li>
    </ul>
    <h3>核心看點：黑框木板畫《死亡之舞》</h3>
    <ul>
        <li><span class="highlight">最大規模主題畫：</span> 橋內屋頂完好保存了 45 幅於 17 世紀（1626~1635年）創作的<strong>《死亡之舞》（Totentanz）</strong>系列畫作。</li>
        <li><span class="highlight">在死亡面前，人人平等：</span> 每幅畫均以「骷髏死神」為主角，穿梭於國王、教宗、富商到農民等各階層，傳達生命無常與死後平等的思想。</li>
    </ul>
    <h3>環境與漫步體驗</h3>
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
    desc:   `<h3>1. 歷史背景</h3>
    <ul>
        <li><span class="highlight">中世紀防衛堡壘：</span>始建於 14 世紀（約 1386 年），全長約 870 公尺，是瑞士現存保存最完整、長度最長的防禦城牆之一。</li>
        <li><span class="highlight">城市防線</span>：這座城牆在中世紀守護著琉森免受外敵入侵，如今則成為鳥瞰整座琉森老城區、琉森湖以及遠方皮拉圖斯山（Mt. Pilatus）的最佳觀景台。</li>
    </ul>
    <h3>2. 核心看點：風格各異的九座塔樓</h3>
    <ul>
        <li><span class="highlight">九塔林立：</span> 城牆上共有 9 座宏偉的塔樓（由東向西排列），其中有 4 座（Schirmer、Zyt、Wacht、Männli）在開放季節允許民眾登頂參觀。</li>
        <li><span class="highlight">全城最古老的大鐘：</span> 位於齊特塔樓（Zyt-Turm）上的大鐘造於 1535 年，擁有全琉森市最古老的時鐘機芯。基於中世紀流傳至今的歷史特權，這個大鐘每天都會比城裡其他公共時鐘提早 1 分鐘報時。</li>
    </ul>
    <h3>3. 環境與漫步體驗</h3>
    <ul>
        <li><span class="highlight">免費開放：</span> 城牆步道與特定塔樓皆可免費入場。開放時間通常為每年的 4 月 1 日至 11 月 1 日（每日 08:00 - 19:00），冬季則因安全考量全面關閉。</li>
        <li><span class="highlight">城牆後方的世外桃源：</span> 城牆北側隱藏著一座名為 Hinter Musegg 的生態農場，裡面設有露天咖啡廳並飼養著羊駝、綿羊等動物，是體驗琉森在地慢活步調的絕佳去處。</li>
    </ul>`,
    info:  "免費 · 約4–11月 08:00–19:00",
  },
  Gletschergarten: {
    name:  "Gletschergarten 冰川公園",
    emoji: "🦁",
    img:   "./images/Gletschergarten.jpg",
    desc:   `<h3>1. 歷史背景</h3>
    <ul>
        <li><span class="highlight">兩萬年前的自然奇蹟：</span>建立於 1872 年，當時工人在挖掘地基時，意外發現了這個宏偉的史前自然遺跡。這裡完整保留了最後一次冰河時期（約 20,000 年前）覆蓋琉森地區的冰河地質證據。</li>
        <li><span class="highlight">滄海桑田的見證</span>：公園內不僅有冰河遺跡，甚至還挖掘出了幾百萬年前、當這裡還是亞熱帶海灘時的棕櫚樹葉與貝殼化石，生動地展示了阿爾卑斯山脈的地質演變史。</li>
    </ul>
    <h3>2. 核心看點：冰河巨穴與百年鏡子迷宮</h3>
    <ul>
        <li><span class="highlight">震撼的冰河壺穴：</span> 公園最著名的地質景觀是巨型冰河壺穴。這是當年冰河融水夾帶沙石，在高壓下像鑽頭一樣強力旋轉、沖刷岩石而形成的巨大深坑，親眼目睹非常震撼。</li>
        <li><span class="highlight">阿爾罕布拉鏡子迷宮：</span> 建立於 1896 年，由 90 面鏡子組成，最初是為日內瓦全國博覽會所建，後搬遷至此。這個充滿異國雕刻風格的迷宮會讓人產生空間錯覺，既神祕又充滿趣味，是大人小孩都愛的經典設施。</li>
        <li><span class="highlight">岩石地下通道：</span> 近年全新完工的地下探索廊道，帶領遊客直接走進數百萬年歷史的岩層內部，搭配光影特效與多媒體互動，體驗一場穿越時空的地心歷險。</li>
    </ul>
    <h3>3. 環境與漫步體驗</h3>
    <ul>
        <li><span class="highlight">登高望遠的瞭望台：</span>順著公園內步道向上攀登，可以到達一座觀景塔。在這裡可以俯瞰琉森老城區的屋頂全景，遠眺巍峨的阿爾卑斯山群，為這趟自然與歷史交織的漫步劃下完美句點。</li>
    </ul>`,
    info:  "免費參觀 · 全天開放",
  },
  lion_monument: {
    name:  "Lion Monument 垂死獅子像",
    emoji: "🦁",
    img:   "./images/lion_monument.jpg",
    desc:   `<h3>1. 歷史背景</h3>
    <ul>
        <li><span class="highlight">法國大革命的犧牲者：</span>雕像建立於 1821 年，是為了紀念在 1792 年法國大革命期間，在巴黎杜樂麗宮（Tuileries Palace）為了保護法國國王路易十六而壯烈犧牲的 760 名瑞士僱傭兵。</li>
        <li><span class="highlight">忠誠與勇氣</span>：當時瑞士還很貧困，許多青年必須出國擔任僱傭兵養家。在面對大批暴民圍攻時，這群士兵明知大勢已去，仍堅守對法王發過的效忠誓言，戰鬥到最後一刻，因而被美國作家馬克·吐溫譽為「世界上最令人悲傷、最感動人的石雕」。</li>
    </ul>
    <h3>2. 核心看點：雕刻細節與深層寓意</h3>
    <ul>
        <li><span class="highlight">垂死的姿態：</span> 雕像直接在天然砂岩岩壁上雕刻而成。一隻身中斷箭、神情無比痛苦的巨獅正垂死倒臥。</li>
        <li><span class="highlight">守護的盾牌：</span> 獅子的前爪緊緊護著刻有法國王室「波旁王朝（百合花徽章）」的盾牌，而身旁另一個刻有「瑞士十字」的盾牌則掉落在一旁，象徵他們至死都在履行保護法王的責任。</li>
        <li><span class="highlight">上方銘文：</span> 雕像上方刻有拉丁文「HELVETIORUM FIDEI AC VIRTUTI」，意為「獻給瑞士人的忠誠與勇敢」。</li>
    </ul>
    <h3>3. 環境與漫步體驗</h3>
    <ul>
        <li><span class="highlight">免費開放：</span>雕像位於一個開放式的公園水池旁，全天免費參觀。</li>
    </ul>`,
    info:  "免費參觀 · 全天開放",
  },
  Kornmarkt: {
    name:  "Kornmarkt 穀物市場",
    emoji: "🦁",
    img:   "./images/Kornmarkt.webp",
    desc:   `<h3>1. 歷史背景</h3>
    <ul>
        <li><span class="highlight">老城區的經濟心臟：</span>位於琉森舊城區的中心，歷史可追溯至中世紀。這裡在舊時代是琉森最重要的穀物與農產品交易中心，也是市民生活與商業情報的集散地，因而得名。</li>
        <li><span class="highlight">政治與權力的象徵</span>：廣場旁座落著宏偉的舊市政廳，這讓穀物市場不僅是商業活動的舞台，也是當時琉森政治權力的核心所在。</li>
    </ul>
    <h3>2. 核心看點：舊市政廳與文藝復興壁畫</h3>
    <ul>
        <li><span class="highlight">舊市政廳：</span> 廣場上最具代表性的建築，建於 1602 年至 1606 年間。這座建築巧妙融合了義大利文藝復興風格與瑞士傳統的坡屋頂，後方還有一座高聳的方形鐘塔（Rathausturm），是琉森明信片上的經典地標。</li>
        <li><span class="highlight">精美華麗的濕壁畫：</span> 環繞廣場的歷史建築外牆上，裝飾著大量精美細緻的巴洛克與文藝復興時期壁畫。每幅畫作都在訴說著琉森的歷史故事、神話傳說或家族徽章，彷彿一座露天的中世紀美術館。</li>
    </ul>
    <h3>3. 環境與漫步體驗</h3>
    <ul>
        <li><span class="highlight">愜意的露天咖啡文化：</span>如今的穀物市場已完全劃為行人徒步區。廣場上開滿了各式露天咖啡廳、餐廳與精緻小店。來到這裡，最道地的玩法就是點一杯咖啡或坐在噴泉旁，看著鴿子飛過中世紀建築，享受歐洲特有的慢活步調。</li>
    </ul>`,
    info:  "免費參觀 · 全天開放",
  },
  Pfistern: {
    name:  "Pfistern 皮斯特餐廳",
    emoji: "🦁",
    img:   "./images/Pfistern.jpg",
    desc:   `<h3>1. 歷史背景</h3>
    <ul>
        <li><span class="highlight">中世紀麵包師公會總部：</span>「Pfistern」在古德語中意為「麵包店」。這棟建築最早建於中世紀，是當時琉森實力雄厚的麵包師公會（Bakery Guild）總部。</li>
        <li><span class="highlight">歷史的見證者</span>：這裡在數百年間一直是公會成員聚集、開會以及烘焙穀物的核心場所。如今，這座歷史建築已被改建為琉森最具代表性的傳統瑞士餐廳，讓饕客能在中世紀的古蹟中享用美食。</li>
    </ul>
    <h3>2. 核心看點：華麗外牆壁畫與冬季起司火鍋車</h3>
    <ul>
        <li><span class="highlight">震撼的歷史濕壁畫：</span> 餐廳最吸睛的莫過於其面向羅伊斯河（Reuss）的巨大外牆。牆面上裝飾著極其華麗、精細的文藝復興與巴洛克風格壁畫，描繪了公會歷史、家族徽章以及中世紀的烘焙生活場景，是老城區最著名的街景之一。</li>
    </ul>
    <h3>3. 環境與漫步體驗</h3>
    <ul>
        <li><span class="highlight">羅伊斯河畔的第一排絕景：</span>餐廳地理位置極佳，就座落在羅伊斯河畔（鄰近舊市政廳與卡貝爾橋）。設有視野極佳的露天戶外座位區，非常適合在漫步老城區途中停下腳步。</li>
        <li><span class="highlight">在卡貝爾橋旁享受慢活：</span>坐在這裡，您可以一邊品嚐傳統的瑞士料理（如琉森肉餡餅 Fritschi-Pastete 或起司鍋），一邊聽著腳下奔騰的河水聲，抬頭便是歷史悠久的卡貝爾橋與波光粼粼的河景，完美融合了琉森的浪漫氛圍與歷史底蘊。</li>
    </ul>`,
    info:  "免費參觀 · 全天開放",
  },
  Rathaus: {
    name:  "Rathaus Stadt Luzern 市政廳",
    emoji: "🦁",
    img:   "./images/Rathaus.webp",
    desc:   `<h3>1. 歷史背景</h3>
    <ul>
        <li><span class="highlight">中世紀與文藝復興的交會：</span>這座宏偉的市政廳建於 1602 年至 1606 年間，由義大利建築師安東·伊斯森曼（Anton Isenmann）設計。在舊時代，這裡不僅是城市的行政與政治中心，也曾是重要的穀物交易與集會場所。</li>
        <li><span class="highlight">保存完好的歷史古蹟</span>：它是瑞士境內現存保存最完好、最具代表性的德意志文藝復興風格（German Renaissance）公共建築之一，數百年來傲然屹立於羅伊斯河畔，見證了琉森的繁榮與歷史變遷。</li>
    </ul>
    <h3>2. 核心看點：義式文藝復興風格與高聳鐘塔</h3>
    <ul>
        <li><span class="highlight">融合風格的建築外觀：</span> 建築外牆融合了義大利文藝復興時期的優雅比例與瑞士傳統的宏偉坡屋頂（Bernaise Roof），底层擁有優美的半圓形拱廊（Arcades），面向河流的一側更顯得莊嚴威風。</li>
         <li><span class="highlight">舊市政廳鐘塔：</span> 緊鄰市政廳、高聳入雲的方形鐘塔是老城區最醒目的地標。這座塔樓其實比市政廳本身還要古老，大鐘至今仍準確運作，是造訪琉森時不可或缺的鏡頭焦點。</li>
    </ul>
    <h3>3. 環境與漫步體驗</h3>
    <ul>
        <li><span class="highlight">羅伊斯河畔的浪漫廊道：</span>市政廳一樓的露天拱廊緊鄰羅伊斯河畔，如今在市集日（週二與週六早上）這裡會擺滿在地攤位。走在拱廊下，微風從河面吹來，看著河水奔騰與對岸的教堂，非常具有中世紀的生活感。</li>
    </ul>`,
    info:  "免費參觀 · 全天開放",
  },
  Hirschenplatz: {
    name:  "Hirschenplatz 鹿廣場",
    emoji: "🦁",
    img:   "./images/Hirschenplatz.webp",
    desc:   `<h3>1. 歷史背景</h3>
    <ul>
        <li><span class="highlight">中世紀的熱鬧市集：</span>位於琉森老城區的心臟地帶，是一座歷史悠久的古老廣場。在舊時代，這裡曾是熱鬧的家畜與豬隻交易市場，也是老城區居民日常生活的社交與商業中心。</li>
        <li><span class="highlight">名字的浪漫由來</span>：廣場的名字源自於中世紀就存在於此的一家古老客棧「金鹿旅館（Gasthaus zum Hirschen）」，隨著時間推移，這個名字便成為整座廣場的代名詞。</li>
    </ul>
    <h3>2. 核心看點：令人驚豔的巨幅濕壁畫建築</h3>
    <ul>
        <li><span class="highlight">露天歷史美術館：</span>廣場最具代表性的景觀，就是環繞四周、裝飾得極其華麗的歷史建築外牆。牆面上繪滿了精細的文藝復興與巴洛克風格濕壁畫（Frescoes），內容涵蓋宗教故事、家族徽章、歷史戰役與傳統生活場景。</li>
         <li><span class="highlight">歌德留宿足跡：</span>廣場旁有些建築歷史可追溯至中世紀。其中最著名的哥德式建築上，還特別銘刻記載了德國文學巨擘歌德（Goethe）曾於 1779 年在此留宿的歷史足跡，具有極高的文化價值。</li>
    </ul>
    <h3>3. 環境與漫步體驗</h3>
    <ul>
        <li><span class="highlight">迷人的中世紀徒步區：</span>如今的鹿兒廣場已被劃為完全的行人徒步區。地面鋪設著古樸的鵝卵石，四周開滿了時尚的精品店、瑞士鐘錶店、巧克力名店與露天咖啡廳，古典與現代在此完美融合。</li>
    </ul>`,
    info:  "免費參觀 · 全天開放",
  },
  Weinmarkt: {
    name:  "Weinmarkt-Brunnen 葡萄酒市場",
    emoji: "🦁",
    img:   "./images/Weinmarkt.webp",
    desc:   `<h3>1. 歷史背景</h3>
    <ul>
        <li><span class="highlight">古老的政治與商業盟約之地：</span>這裡在 1332 年見證了琉森歷史上最關鍵的時刻——琉森在此與烏里（Uri）、施維茨（Schwyz）、翁特瓦爾登（Unterwalden）三個森林州正式宣誓結盟，奠定了瑞士聯邦初期發展的重要基石。</li>
        <li><span class="highlight">從週三市場到葡萄酒中心</span>：廣場在舊時代原本被稱為「週三市場」，主要進行各類庶民物資交易。直到 14 世紀（約 1354 年），一棟大型的兩層樓穀物交易與葡萄酒倉儲中心在此落成，廣場才正式更名為「葡萄酒市場」，成為當時全城葡萄酒與高檔商品的貿易樞紐。</li>
    </ul>
    <h3>2. 核心看點：老城最美噴泉與百年公會建築</h3>
    <ul>
        <li><span class="highlight">葡萄酒市場噴泉：</span>矗立於廣場中央的哥德式噴泉，被公認為琉森老城區最優美精緻的噴泉。這座噴泉始建於 1481 年，由石匠大師漢斯·馮·法蘭克福（Hans von Frankfurt）歷時 10 年打造，噴泉柱上雕刻著精細的戰士、聖人與神話人物。不過為了保護珍貴古蹟，現今廣場上的是 19 世紀改建的複製品，原件已被妥善保存在琉森歷史博物館中。</li>
         <li><span class="highlight">華麗的公會與歷史建築：</span>廣場周圍環繞著許多歷史悠久的公會總部（Zunfthaus），包括昔日的製鞋匠公會、皮草商公會等。這些建築外牆裝飾著極其宏偉、色彩斑斕的濕壁畫，將中世紀的繁華歲月生動地定格在牆面上。</li>
    </ul>
    <h3>3. 環境與漫步體驗</h3>
    <ul>
        <li><span class="highlight">迷人的中世紀徒步區：</span>相較於商務氣息較濃、店鋪林立的鹿兒廣場（Hirschenplatz），葡萄酒市場廣場整體空間更加開闊且安靜。這裡同樣完全劃為行人徒步區，少了大批觀光客的喧囂，能讓人更從容地漫步於鵝卵石地面上。</li>
    </ul>`,
    info:  "免費參觀 · 全天開放",
  },
  Jesuitenkirche: {
    name:  "Jesuitenkirche Luzern 耶穌會教堂",
    emoji: "🦁",
    img:   "./images/Jesuitenkirche.jpg",
    desc:   `<h3>1. 歷史背景</h3>
    <ul>
        <li><span class="highlight">瑞士第一座大型巴洛克教堂：</span>始建於 1666 年，由耶穌會（Jesuits）神父與義大利、奧地利建築師共同設計，並於 1677 年正式祝聖，是瑞士歷史上第一座大型的巴洛克式宗教建築。</li>
        <li><span class="highlight">反宗教改革的前線</span>：當時正值歐洲的「反宗教改革（Counter-Reformation）」時期，琉森作為瑞士天主教的核心陣營，建造這座宏偉華麗的教堂，旨在透過震撼的視覺藝術來重振天主教徒的信仰熱情。</li>
    </ul>
    <h3>2. 核心看點：綠色洋蔥頭雙塔與奢華巴洛克內裝</h3>
    <ul>
        <li><span class="highlight">經典的洋蔥頭雙塔：</span>教堂面向羅伊斯河（Reuss）的正面擁有一對醒目的青綠色洋蔥頭形鐘樓（Onion Domes）。有趣的是，這對標誌性的雙塔並非中世紀原產，而是直到 1893 年才正式完工，如今已成為琉森湖畔最經典的天際線地標。</li>
         <li><span class="highlight">令人屏息的純白與粉紅內裝：</span>一走進教堂，內部空間開闊且明亮，與傳統哥德式教堂的昏暗截然不同。白色大理石牆面搭配極其精緻的粉紅色巴洛克灰泥雕刻（Stucco），營造出神聖、優雅且浪漫的視覺震撼。</li>
          <li><span class="highlight">宏偉的天頂濕壁畫：</span>巨大的天花板上繪有華麗的濕壁畫，描繪著聖方濟各·沙勿略（St. Francis Xavier）的傳教奇蹟與天國榮耀，色彩斑斕，極具巴洛克藝術的張力。</li>
    </ul>
    <h3>3. 環境與漫步體驗</h3>
    <ul>
        <li><span class="highlight">每日開放：</span>每天的開放時間通常為 06:30 - 18:30</li>
    </ul>`,
    info:  "免費參觀 · 全天開放",
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
