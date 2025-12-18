/** * HDU 校园导览数据仓库 - 终极全量版
 * 包含：原始32个地点 + 新增餐厅/生活点 + 详细开放时间/电话/AI提问
 */
const campusData = [
  // ========== 📚 教学区 (Study) ==========
  {
    id: 1, name: "第一教学楼", subName: "信仁楼", type: "study", emoji: "💻",
    tagline: "信息之源，网络之芯", desc: "计算机学院、通信工程学院、网络空间安全学院教学基地。拥有丰富的实验室和实训空间。",
    imgs: ["/1教.png"],
    lnglat: [120.344126, 30.311795], vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3411906",
    tags: ["计算机学院", "实验室"], queries: ["一教教室借用流程？"]
  },
  {
    id: 2, name: "第二教学楼", subName: "信义楼", type: "study", emoji: "⚡",
    tagline: "智控未来，电照前程", desc: "自动化、电子信息、机械工程等工科学院的教学与实验中心。",
    imgs: ["/2教.png", "/2教_2.png", "/2教_3.png"],
    lnglat: [120.342327, 30.312003], vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451517"
  },
  {
    id: 301, name: "第八教学楼", subName: "信远楼", type: "study", emoji: "⚙️",
    tagline: "精工铸器，驰骋未来", desc: "机械大仪车队",
    imgs: ["/8教.jpg"],
    lnglat: [120.34169351459684,30.31550597051693], vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3411905"
  },
  {
    id: 22, name: "图书馆", subName: "图信中心", type: "study", emoji: "📚",
    tagline: "知识殿堂，智慧灯塔", desc: "下沙主馆建筑面积2.8万平方米，藏书超500万册。是连接全球学术前沿的数字门户。",
    imgs: ["/图书馆.jpg"],
    lnglat: [120.343279, 30.315227], vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451535",
    openTime: "07:00 - 22:30", phone: "0571-86919028",
    floors: ["12F: 芯灵驿站 (自修)","11F: 综合第一书库 (外文/工具书)","10F: 综合第二书库 (马列/史地/环境等)","09F: 文学书库 (文学)","08F: 社科第二书库 (哲学/政治/教育)","07F: 自然科学书库 (数理化/医药/工业技术)","06F: 杭韵数阁 (研讨间 & 自修)","05F: 特藏中心 (非可借) & 办公室", "04F: 宋韵云图 (休闲阅览) & 朗读空间", "03F: 书库 (工业技术TP/TN、经济、语言) & 休闲区", "02F: 咨询台 & 借阅 & 信息检索 & 自修", "01F: 密集书库 (预约借阅) & 杂志社"],
    queries: ["图书怎么借阅？", "图书馆哪里可以朗读？"]
  },
  {
    id: 99, name: "行政楼", subName: "校务管理", type: "study", emoji: "👔",
    desc: "位于正大门旁。教务处（处理选课、成绩）和计划财务处（学费）均在一楼。",
    imgs: ["/行政楼.jpg"],
    lnglat: [120.34181075587992,30.310642678632757], openTime: "工作日 08:00 - 16:30",
    tags: ["教务处1F", "计财处1F"], queries: [""],vrUrl:"https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451519"

  },

  // ========== 🍗 餐饮区 (Food) ==========
  {
  id: 400,
  name: "快餐服务点1",
  subName: "生活区南一门、南二门及教学区11教附近",
  type: "food",
  emoji: "🚌",
  tagline: "快捷便利，即买即走",
  desc: "为了让师生享受到快捷、便利的就餐服务，饮食服务中心在生活区设立了两个快餐亭。赶时间的同学可以顺路打包一些，再忙也别忘记吃饭哦！",
  imgs: ["/文小二.jpg"],
  lnglat: [120.34502452583365,30.31685530681216],
  tags: ["快捷", "便利", "打包", "赶时间"]
 },
 {
  id: 401,
  name: "快餐服务点2",
  subName: "生活区南一门、南二门及教学区11教附近",
  type: "food",
  emoji: "🚌",
  tagline: "快捷便利，即买即走",
  desc: "为了让师生享受到快捷、便利的就餐服务，饮食服务中心在生活区设立了两个快餐亭。赶时间的同学可以顺路打包一些，再忙也别忘记吃饭哦！",
  imgs: ["/一餐文小二.jpg","/二.jpg"],
  lnglat: [120.34178834830118,30.316539149093412],
  tags: ["快捷", "便利", "打包", "赶时间"]
 },
  {
    id: 101, name: "1F第一餐厅", subName: "南二门旁", type: "food", emoji: "🍚",
    tagline: "美味当家", desc: "靠近体育馆。全自动智能设备，自助选餐、统一称重。提供广式茶点、盖饭。",
    imgs: ["/一餐外.jpg","/微信图片_2025-12-14_175226_379.jpg"],
    lnglat: [120.34145521136713,30.316105981607837], tags: ["自助称重", "广式茶点"], queries: ["一餐什么好吃？"],vrUrl:"https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451518"
  },
  {
    id: 105, name: "2F风味餐厅", subName: "清真食堂", type: "food", emoji: "🍜",
    desc: "规模巨大的西北民族餐厅。大盘鸡、兰州拉面、炒刀削风味绝赞。",
    imgs: ["/2餐.jpg"],
    lnglat: [120.34145521136668,30.316580860485086], tags: ["清真", "西北风味"],vrUrl:"https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451518"
  },
  {
    id: 102, name: "1F第三餐厅", subName: "南一门旁", type: "food", emoji: "🥯",
    tagline: "早餐圣地", desc: "建德豆腐包、网红油条、酱香饼。还有麻辣烫、牛肉炒饭、衢州风味。",
    imgs: ["/梅花.jpg"],
    lnglat: [120.34458690068698,30.316308771790602], tags: ["网红油条", "豆腐包"],vrUrl:"https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451513"
  },
  {
    id: 106, name: "2F美食城（梅花美食餐厅）", subName: "南一门旁", type: "food", emoji: "🍜",
    tagline: "杭电食堂扛把子，深夜食堂", desc: "为了进一步丰富餐饮种类，满足多样化就餐需求，饮食服务中心引进了校外的餐饮公司开设了美食城。美食城也是校内最晚关门的食堂，晚自习结束后也可以拉上小伙伴一起来这里吃宵夜。",
    imgs: ["/肉.jpg"],
    lnglat: [120.34430916580084,30.316538606356104], tags: ["黄焖鸡", "麻辣香锅", "深夜食堂", "种类丰富"],vrUrl:"https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451513"
  },
  {
    id: 107, name: "3F教职工食堂", subName: "生活区南一门边，美食城楼上", type: "food", emoji: "🍱",
    tagline: "智慧餐厅，物美价廉", desc: "教职工餐厅环境好，菜品物美价廉，还有独立包厢，可以通过扫描识别菜品实现自助支付。",
    imgs: ["/我.jpg"],
    lnglat: [120.34483103595073,30.31653336792718], tags: ["教职工餐厅只提供午餐和晚餐"],vrUrl:"https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451513",openTime:"工作日午餐11：30-12：00不对学生开放"
  },
 {
    id: 108, name: "1F第五餐厅", subName: "生活区东门附近，30号楼旁", type: "food", emoji: "🏆",
    tagline: "运动会专用，A级餐厅", desc: "五餐是第十三届全国学生运动会专用餐厅，食品安全量化A级单位。菜品种类丰富味道好，配有圆桌，可供团建聚餐。作为最靠近公主楼的食堂，五餐总是许多女生吃饭的第一选择。",
    imgs: ["/梅花2.jpg"],
    lnglat: [120.3444988089093,30.3175070062669], tags: ["A级餐厅", "团建聚餐", "靠近公主楼", "种类丰富"]
  },
  {
    id: 109, name: "2F第六餐厅", subName: "生活区东门附近，30号楼旁，五餐楼上", type: "food", emoji: "✨",
    tagline: "全新升级，多功能文化餐厅", desc: "六餐以“特色档口+快餐”的模式服务师生，它融合地方小吃、特色美食、西餐、水吧等，满足了师生的口味多样性需求。同时将设置会议隔间和多样性家具配置为学术讨论、交流、休闲、社团活动等提供服务和场地。",
    imgs: ["/1 (1).jpg"],
    lnglat: [120.34433187031277,30.317949623654616], tags: ["全新升级", "文化氛围", "多功能空间", "特色档口"]
  },
  // ========== 🛌 生活服务 (Living) ==========
  {
    id: 202,
    name: "后勤服务大厅",
    subName: "29号楼对面",
    type: "living",
    emoji: "💳",
    tagline: "一卡通服务",
    desc: "提供一卡通充值、挂失、补办及自助打印服务。",
    imgs: ["/后勤服务.jpg"],
    lnglat: [120.34476585985306,30.31688798131206], 
    phone: "86915000",
    tags: ["补办饭卡", "自助打印"],
    queries: ["饭卡丢了去哪补？"],
    floors: ["03F: 后勤服务中心文一公司", "02F: 文小二体育部", "01F: 后勤大厅"]
  },
  {
    id: 21, name: "综合服务楼", subName: "信达楼", type: "living", emoji: "📮",
    desc: "包含收发室（EMS/邮政）、校医院、心理辅导中心、安全保卫部等。",
    imgs: ["/信达楼.jpg", "/信达楼2.jpg"],
    lnglat: [120.344776, 30.315508], vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3411908",
    openTime: "校医院工作日8:00-20:00 双休日及节假日:上午8:00-11:30 下午 13:30-16:00 / 邮政7:45-17:00 / 顺丰8:00-18:00 / 邮政代办点：9月5日开始服务（周末休息） / 邮政编码：310018", phone: "120 (急救)",
    tags: ["校医院", "收发室", "心理咨询"]
  },
  {
    id: 201, name: "菜鸟驿站", subName: "顺丰/菜鸟/京东", type: "living", emoji: "📦",
    desc: "北门出去向左走。京东、菜鸟、顺丰集中点。寄快递记得带身份证。",
    imgs: ["/菜鸟驿站.jpg"],
    lnglat: [120.34142202669136,30.31842868628906], openTime: "8:30 - 20:30", tags: ["寄快递带身份证"]
  },
  {
    id: 11,
    name: "国际交流中心",
    subName: "学术接待",
    type: "living",
    emoji: "🌏",
    tagline: "国际视野，学术交融",
    desc: "集会议、餐饮、住宿于一体，体现了学校的开放与国际化。",
    imgs: ["/国际交流中心.jpg","/国际交流中心 (1).jpg"],
    lnglat: [120.347180, 30.311620],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451539",
    floors: ["1F: 接待大厅", "2F: 自助餐厅", "3F+: 客房与会议室"]
  },
  {
    id: 23,
    name: "校医院",
    subName: "健康驿站",
    type: "living",
    emoji: "🏥",
    tagline: "健康驿站，校园医靠",
    desc: "为师生提供基础医疗、健康管理与公共卫生服务的专业机构。",
    imgs: ["/信达楼3.jpg"],
    lnglat: [120.344113, 30.315536],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3411909",
    openTime: "校医院工作日8:00-20:00 双休日及节假日:上午8:00-11:30 下午 13:30-16:00。"
  },
 {
  id: 403,
  name: "理发店",
  subName: "校内",
  type: "living",
  emoji: "💈",
  tagline: "星美造型设计",
  desc: "校内理发店",
  imgs: ["/美发.jpg"],
  lnglat: [120.34453350673152,30.316797107365502],
  tags: ["校内理发","路程近"]
 },
  // ========== 📸 景观与运动 (Scenery / Sport) ==========
  {
    id: 13, name: "问鼎广场", subName: "精神地标", type: "scenery", emoji: "⛩️",
    desc: "三柱鼎立寓意“古远、现代、未来”，镌刻着学校的雄心与情怀。",
    imgs: [ "/问鼎广场_2.jpg"],
    lnglat: [120.343321, 30.313120], vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3452675",
    tagline:"校园中心地标，精神文化象征"
  },
  {
    id: 32, name: "体育馆", subName: "亚运击剑馆", type: "sport", emoji: "🏟️",
    desc: "杭州第二大体育馆，曾是CBA主场，也是亚运击剑场馆。飞碟造型地标。",
    imgs: ["/大体育馆.png"],
    lnglat: [120.340054, 30.314915], vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451537",
    tags: ["亚运场馆", "飞碟造型"],tagline:"国家级赛事场馆，教学训练文艺演出"
  },
  // ... (其他原始地点 ID 3-12, 14-20, 23-31, 33 建议在此补充完整，保持与原始 js 结构一致)
  {
    id: 3,
    name: "第三教学楼",
    subName: "信理楼",
    type: "study",
    emoji: "🗣️", // 外语特色
    tagline: "语言桥梁，世界窗口",
    desc: "三教是外国语学院的教学与办公中心，拥有多个语言实验室、多媒体教室和小班研讨室。",
    imgs: ["/3教.png"],
    lnglat: [120.344200, 30.312673],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3411907",
    queries: ["三教教室借用流程？"]

  },
  {
    id: 4,
    name: "第四教学楼",
    subName: "信智楼",
    type: "study",
    emoji: "🔬", // 实验楼
    tagline: "信智交融，实验创新",
    desc: "四教是学校重要的综合实验楼，集科研展览、教学实验与学术报告于一体。",
    imgs: [
      "/4教_2.png",
      "/4教_3.png"
    ],
    lnglat: [120.342195, 30.313178],
    vrUrl: ""
  },
  {
    id: 5,
    name: "第六教学楼",
    subName: "信诚楼",
    type: "study",
    emoji: "🧪", // 理学/材料
    tagline: "理为基础，材显光华",
    desc: "七教是理学院和材料与环境工程学院的所在地，承担着大量数学、物理等基础学科教学任务。",
    imgs: [
      "/6教.png",
      "/6教 (1).png",
      "/6教_2.png"
    ],
    lnglat: [120.342181, 30.314279],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3411910"
  },
  {
    id: 6,
    name: "第七教学楼",
    subName: "信博楼",
    type: "study",
    emoji: "🧠", // 智慧教室
    tagline: "智慧课堂，自由研讨",
    queries: ["7教教室借用流程？"],
    desc: "七教是全校公共教学的核心，以智慧化改造闻名。楼内拥有多样化的智慧教室、研讨室和舒适的休闲吧。",
    imgs: ["/7教.png"],
    lnglat: [120.344331, 30.314449],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3411911"
  },
  {
    id: 7,
    name: "第九教学楼",
    subName: "力行楼",
    type: "study",
    emoji: "⚖️", // 经管/法学
    tagline: "思政铸魂，经济赋能",
    desc: "9教是马克思主义学院、经济学院与会计学院的教学科研基地。",
    imgs: ["/9教.jpg"],
    lnglat: [120.34697026463368,30.312916198921865], 
    vrUrl: ""
  },
  {
    id: 8,
    name: "第十教学楼",
    subName: "笃学楼",
    type: "study",
    emoji: "🏆", // 卓越学院
    tagline: "卓越引领，中外融合",
    desc: "十教汇聚了学校的顶尖教育资源，既有培养拔尖创新人才的卓越学院，也有中外合作办学的典范。",
    imgs: ["/10教.jpg"],
    lnglat: [120.345860, 30.312854],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451520"
  },
  {
    id: 9,
    name: "第十一教学楼",
    subName: "求新楼",
    type: "study",
    emoji: "🎨", // 人文艺术
    tagline: "拔尖创新，人文交融",
    desc: "十一教是拔尖人才培养、人文社科研究与国际化考试的交汇点。",
    imgs: ["/12教11教.jpg"],
    lnglat: [120.347004, 30.313433],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451545"
  },
  {
    id: 33,
    name: "第十二教学楼",
    subName: "守正楼",
    type: "study",
    emoji: "📚",
    tagline: "笃学行路，守正之筑",
    desc: "十二教（守正楼）作为面向全校的公共教学枢纽，承载跨学科课程，是不同专业师生思想交汇的重要场所",
    imgs: ["/12教.jpg",
        "/12教11教.jpg"],
    lnglat: [120.34578220709068,30.31348052083984],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451540"
  },
  {
    id: 10,
    name: "学生活动中心",
    subName: "文娱中心",
    type: "scenery",
    emoji: "🎭",
    tagline: "活力舞台，青春绽放",
    desc: "杭电社团活动、文艺排练与校园文化展示的核心。",
    imgs: [
      "/学活_2.png",
      "/学活_3.png"
    ],
    lnglat: [120.345849, 30.315313],
    vrUrl: "https://www.720yun.com/t/5e5jOgynkf3?scene_id=3346603"
  },
  {
    id: 300,
    name: "五四广场",
    subName: "活动广场",
    type: "scenery",
    emoji: "🎇",
    tagline: "活力舞台，青春绽放",
    desc: "校园活动举办地",
    imgs: ["/学活广场.jpg"],
    lnglat: [120.34566521977035,30.3147093294893],
    vrUrl: "https://www.720yun.com/t/5e5jOgynkf3?scene_id=3346603"
  },
  {
    id: 12,
    name: "科技馆",
    subName: "校史馆",
    type: "scenery",
    emoji: "🚀",
    tagline: "科技展示，校史传承",
    desc: "对外展示科技实力与历史底蕴的窗口，内设大型报告厅和校史馆。",
    imgs: ["/科学馆.jpg"], // 暂无图
    lnglat: [120.346429, 30.310936],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451529"
  },
  {
    id: 14,
    name: "致远广场",
    subName: "活动主场",
    type: "scenery",
    emoji: "🚩",
    tagline: "校园大型活动主场",
    desc: "承载新生入学、毕业生离校的青春记忆，是学校精神的象征地。",
    imgs: ["/致远广场.jpg"],
    lnglat: [120.343283, 30.310716],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3411898"
  },
  {
    id: 15,
    name: "月雅云影",
    subName: "景观胜地",
    type: "scenery",
    emoji: "🌊",
    tagline: "哲思景观胜地",
    desc: "名称取自朱熹诗句，寓意学子以开阔胸襟接纳知识。",
    imgs: ["/月雅云影.jpg","/6.jpg"],
    lnglat: [120.344270, 30.310586],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3411902"
  },
  {
    id: 16,
    name: "兰亭春晓",
    subName: "古典园林",
    type: "scenery",
    emoji: "🎋",
    tagline: "古典清幽园林",
    desc: "仿文一校区“小兰亭”建造，远离喧嚣，适合静心咏读思考。",
    imgs: ["/啥园.jpg","/园.jpg","/园2.jpg"],
    lnglat: [120.345969, 30.311891],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451528"
  },
  {
    id: 17,
    name: "兰亭公园",
    subName: "休闲公园",
    type: "scenery",
    emoji: "🌲",
    tagline: "人文休闲场所",
    desc: "兼具校园与市民休闲功能，人文自然气息浓厚。",
    imgs: ["/兰亭公园.jpg"],
    lnglat: [120.345182, 30.311126],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3452431"
  },
  {
    id: 18,
    name: "藤廊寄梦",
    subName: "校友长廊",
    type: "scenery",
    emoji: "🍇",
    tagline: "文一苑生活区校友主题公园",
    desc: "百余米紫藤长廊，镌刻校友寄语，连接历届学子的追梦精神。",
    imgs: ["/藤廊寄梦.jpg","/3.jpg"],
    lnglat: [120.342952, 30.317224],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3452674"
  },
  {
    id: 19,
    name: "书海风荷",
    subName: "荷花池",
    type: "scenery",
    emoji: "🪷",
    tagline: "盛夏书香景观",
    desc: "荷香与书香交融，寓意学识品格如荷花般高洁，毕业季打卡胜地。",
    imgs: ["/书海风荷.jpg"],
    lnglat: [120.343314, 30.314043],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451531"
  },
  {
    id: 20,
    name: "南校门",
    subName: "长虹揽月",
    type: "scenery",
    emoji: "⛩️",
    tagline: "长虹揽月，启航未来",
    desc: "亚洲知名的宽幅校门，寓意学子敢为人先、追求卓越。",
    imgs: ["/长虹桥.jpg"],
    lnglat: [120.343251, 30.310242],
    queries: ["大门有何寓意？"],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451522"
  },
  {
    id: 26,
    name: "体育馆副馆",
    subName: "训练馆",
    type: "sport",
    emoji: "🏸",
    tagline: "日常运动主场",
    desc: "内设羽毛球场、乒乓球室等，是师生日常锻炼的好去处。",
    imgs: ["/副馆.jpg"],
    lnglat: [120.340079, 30.314309],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3411903"
  },
  {
    id: 24,
    name: "室外球场",
    subName: "篮排网球区",
    type: "sport",
    emoji: "🏀",
    tagline: "挥洒汗水",
    desc: "包含多个篮球场、排球场和网球场，全天候开放。",
    imgs: [
      "/体育场所_露天篮球场.png",
      "/体育场所_羽毛球场.png"
    ],
    lnglat: [120.340329, 30.312235],
    vrUrl: ""
  },
  {
    id: 302,
    name: "东篮球场",
    subName: "篮排网球区",
    type: "sport",
    emoji: "🏀",
    tagline: "挥洒汗水",
    desc: "包含多个篮球场",
    imgs: ["/操.jpg"],
    lnglat: [120.34667000025615,30.315001081539982],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451525"
  },
  {
    id:333, name: "3F健身房", subName: "氧适堡健身", type: "sport", emoji: "🏋️‍♂️",
    tagline: "氧适堡健身", desc: "离宿舍近，就在校园生活区内。价格便宜，新生开学有优惠。暑假翻新，器材更加齐全，一整排跑步机可供有氧。配备独立单间浴室，供应热水洗浴以及吹风机。连锁门店，对面传媒门口也有一家，双店通用。",
    imgs: ["/运动.png"],
    lnglat: [120.34473331800689,30.31795305479342], tags: ["近宿舍", "独立浴室", "器材齐全", "双店通用", "性价比高"]
  },
  {
    id: 25,
    name: "足球场",
    subName: "五人/七人制",
    type: "sport",
    emoji: "⚽",
    tagline: "绿茵激战",
    desc: "标准的人工草皮足球场，适合开展各类足球赛事。",
    imgs: ["/体育场所_足球场.png"],
    lnglat: [120.339842, 30.313671],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3411893"
  },
  {
    id: 27,
    name: "西北田径场",
    subName: "体育场",
    type: "sport",
    emoji: "🏃",
    tagline: "奔跑吧少年",
    desc: "标准的田径跑道和足球场，晨跑夜跑首选地。",
    imgs: ["/东操场.png"],
    lnglat: [120.340125, 30.317035],
    vrUrl: "https://www.720yun.com/t/6cfjOgynkk5?scene_id=3400937"
  },
  {
    id: 28,
    name: "东操场",
    subName: "田径场",
    type: "sport",
    emoji: "🏃",
    tagline: "阳光体育",
    desc: "位于校园东侧的操场，靠近生活区。",
    imgs: ["/体育场所_东操场.png"],
    lnglat: [120.347468, 30.314827],
    vrUrl: "https://www.720yun.com/t/cd9jOOmfzm6?scene_id=3451536"
  },
  {
    id: 29,
    name: "游泳馆",
    subName: "恒温泳池",
    type: "sport",
    emoji: "🏊",
    tagline: "碧波畅游",
    desc: "校内标准游泳馆，夏天避暑好去处。",
    imgs: ["/体育场所_游泳馆.png"],
    lnglat: [120.339293, 30.316517],
    vrUrl: ""
  },
  {
    id: 30,
    name: "穹顶网球场",
    subName: "风雨球场",
    type: "sport",
    emoji: "🎾",
    tagline: "无惧风雨",
    desc: "带顶棚的专业网球场地。",
    imgs: ["/体育场所_网球场.png"],
    lnglat: [120.340876, 30.312884],
    vrUrl: ""
  },
  {
    id: 31,
    name: "羽毛球馆/风雨操场",
    subName: "综合馆",
    type: "sport",
    emoji: "🏸",
    tagline: "室内运动场",
    desc: "多功能室内运动场地。",
    imgs: ["/体育场所_篮球场.png","/羽毛球馆.jpg"],
    lnglat: [120.340693, 30.313708],
    vrUrl: ""
  },
  {
    id: 500,
    name: "1956杭电面包房",
    subName: "面包房",
    type: "food",
    emoji: "🥖",
    tagline: "种类丰富，价格亲民",
    desc: "提供蛋糕，面包，咖啡",
    imgs: ["/1956.jpg"],
    lnglat: [120.34469416070579,30.316072146468628],
    vrUrl: ""
  },
  {
    id: 501,
    name: "综合服务",
    subName: "精华眼镜/若辰图文/中国电信营业厅",
    type: "living",
    emoji: "🏬",
    tagline: "一站式综合服务",
    desc: "精华眼镜（提供验光配镜服务）、若辰图文（提供打印复印与图文制作服务）、中国电信营业厅（办理校园宽带及通信业务）",
    imgs: ["/中国电信.jpg","/若辰.jpg"],
    lnglat: [120.34237022159266,30.316963662008817],
    vrUrl: "",
    tags: ["配镜", "打印", "电信业务"]
  },
  {
    id: 502,
    name: "华平水果",
    subName: "水果店",
    type: "food",
    emoji: "🍎",
    tagline: "新鲜实惠，产地直销",
    desc: "除了水果，还卖饮料糖葫芦",
    imgs: ["/平华水果.jpg"],
    lnglat: [120.34442860084573,30.31606052855042],
    vrUrl: "",
    tags: ["零售", "批发", "团购"],
    phone:"13858062794/18667027301"
  },
  {
    id: 503,
    name: "印象校联教育超市",
    subName: "杭电二店",
    type: "living",
    emoji: "🏪",
    tagline: "体积较小，物品齐全",
    desc: "二店是小超市，旗舰店是大超市，还有学林店",
    imgs: ["/教育超市2.jpg"],
    tags: ["零食","生活用品","学习用品"],
    lnglat: [120.34362493077117,30.318280290520327],
    vrUrl: ""
  },
  {
    id: 504,
    name: "印象校联教育超市",
    subName: "旗舰店",
    type: "living",
    emoji: "🛒",
    tagline: "超市较大，门口露天桌椅",
    desc: "旗舰店是大超市，二店是小超市，还有学林店",
    imgs: ["/教育超市.jpg"],
    tags: ["零食","生活用品","学习用品","露天桌椅"],
    lnglat: [120.34225380190969,30.31695673109952],
    vrUrl: ""
  },
  {
    id: 505,
    name: "饮食区",
    subName: "现炒简餐店/鲜果优水果店/瑞幸咖啡/留夫鸭/神民水果捞",
    type: "food",
    emoji: "🍽️",
    tagline: "种类丰富，露天桌椅",
    desc: "烤冷面，手抓饼，咖啡，卤味，水果捞应有尽有，附近还有露天桌椅",
    imgs: ["/烤冷面.jpg","/水果店.jpg","/瑞幸.jpg","/留夫鸭.jpg"],
    tags: ["种类丰富","水果","咖啡","鸡蛋饼"],
    lnglat: [120.34208708267465,30.316884446236138],
    vrUrl: ""
  },
  {
    id: 507,
    name: "711便利店",
    subName: "快速服务",
    type: "food",
    emoji: "🍙",
    tagline: "24小时营业，便捷购物",
    desc: "全球连锁便利店，提供即食快餐、关东煮、饭团、零食饮料、日用品等，支持多种支付方式，满足日常即时购物需求",
    imgs: ["/超市.jpg"],
    tags: ["24小时", "即食", "关东煮", "零食", "连锁"],
    lnglat: [120.34251273530117,30.316963661982204],
    vrUrl: ""
  },
  {
    id: 508, name: "洗博士", subName: "干洗店", type: "living", emoji: "🧼",
    tagline: "智能洗，新生活",
    desc: "提供专业的清洁、保养与修复一站式服务。涵盖鞋类、衣类、包类及皮具的精洗、日常保养、改色及破损修补，让您的物品焕然一新。",
    imgs: ["/鞋店.jpg"],
    lnglat: [120.34300012273263,30.31796600550874], vrUrl: "",
    openTime: "9:30-21:30", phone: "15356157160",
    tags: ["鞋类", "衣类", "包类","皮具","精洗","保养","改色","修补"]
  },
  {
    id: 509, name: "便民服务点", subName: "鞋伞修理店", type: "living", emoji: "🔧",
    tagline: "生活维修一站式服务",
    desc: "提供自行车组装与修理、配钥匙、修鞋、卷裤边、换电瓶、换拉链、出售锁具等多种便民维修服务。",
    imgs: ["/便.jpg"],
    lnglat: [120.34348450239906,30.317895758835636], vrUrl: "",
    openTime: "", phone: "18158422843",
    tags: ["维修", "自行车", "配钥匙", "修鞋", "生活服务", "便民"]
  },
  {
  id: 510,
  name: "水站",
  subName: "4号楼，一餐对面",
  type: "living",
  emoji: "💧",
  tagline: "桶装水订购与自提点",
  desc: "提供桶装饮用水订购服务。可以在杭电后勤生活公众号上在线订购，可选择送水上门或自提。",
  phone: "86919287",
  imgs: ["/1.png"],
  lnglat: [120.341998518237,30.316051058952475],
  tags: ["桶装水", "饮用水", "订购送水", "自提", "生活服务"]
 },
 {
  id: 511,
  name: "守正书院",
  subName: "10号楼下",
  type: "study",
  emoji: "📚",
  tagline: "共享图书与自习空间",
  desc: "由校学工部、图书馆、杭州移动等共同打造，会不定期更新图书，让你阅读品味到最新鲜的内容。也可以和小伙伴一起在这里自习。",
  phone: "",
  imgs: ["/文化社区.jpg"],
  lnglat: [120.34396129354059,30.317477466339156],
  tags: ["自习", "图书", "共享空间", "阅读"],
  openTime: "8:00—22:00",
 },
 {
  id: 512,
  name: "求新书院",
  subName: "5号楼下",
  type: "study",
  emoji: "📖",
  tagline: "可预约的现代化自习与休闲空间",
  desc: "求新书院是一个兼具生活化与现代化特色的学习共享空间。书院内配备20张大桌，提供近90个座位，且每个座位均设有充电插头，可通过杭电官网或扫描二维码预约。内部设有咖啡机、洗手台、藏书柜、大型书架（陈列杂志、人工智能类书籍）以及各类现代风装饰品。校园银行服务站也入驻于此，可提供相关咨询服务。",
  phone: "",
  imgs: ["/求新书院.jpg"],
  lnglat: [120.34396129354081,30.31698908715272],
  tags: ["自习", "座位预约", "充电插座", "咖啡", "图书", "现代风", "银行服务"],
  openTime:"日常12:00-22:00（寒暑假不开放）"
 },
 {
  id: 513,
  name: "集贤居",
  subName: "11号楼下",
  type: "study",
  emoji: "🎨",
  tagline: "艺术主题自习与多功能空间",
  desc: "这里是艺术绘画的实践基地，陈列着众多水墨画、水彩画作品；配备13张桌子、近70个座位，无需预约即可在此自习。书院内藏书仅支持馆内阅览。此外，还设有储物柜、吧台、洗衣房、会议室、电信机房、办公室及洗手池等设施，功能配置十分完善。",
  phone: "",
  imgs: ["/集贤居.jpg"],
  lnglat: [120.34321792580624,30.317960164310684],
  tags: ["自习", "艺术绘画", "无需预约", "洗衣房", "会议室", "多功能"],
  openTime:"8:00-22:00"
 },
 {
  id: 514,
  name: "自习室咖啡馆",
  subName: "瑞幸咖啡",
  type: "living",
  emoji: "☕",
  tagline: "氛围很好",
  desc: "教学区仅此一家瑞幸咖啡店在自动化学院楼下",
  phone: "",
  imgs: ["/2.jpg"],
  lnglat: [120.34293135107691,30.311517369716675],
  tags: [""]
 },
 {
  id: 515,
  name: "综合服务",
  subName: "中国联通/咖啡/一鸣真鲜奶吧/教育超市/发现造型设计/医保药店/鲜果记/恒正图文/蜜雪冰城/手机维修",
  type: "living",
  emoji: "🏬",
  tagline: "一站式生活商业服务集合",
  desc: "该区域汇集了通信（中国联通）、餐饮（咖啡、一鸣真鲜奶吧、蜜雪冰城）、零售（教育超市、鲜果记）、生活服务（医保药店、手机维修）、图文印刷（恒正图文）和美发（发现造型设计）等多种商业与服务店铺，为师生提供一站式便利。",
  phone: "",
  imgs: ["/教育超市3.jpg","/蜜雪.jpg"],
  lnglat: [120.34385583960363,30.315977005769568],
  tags: ["便利店", "奶茶", "超市", "药店", "理发", "打印", "通信", "水果"]
 },
];
