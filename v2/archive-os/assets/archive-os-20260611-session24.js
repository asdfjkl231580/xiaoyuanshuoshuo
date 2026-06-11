(function () {
  var icons = {
    home: '<svg viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13v-9.5"/><path d="M10 20v-5h4v5"/></svg>',
    search: '<svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>',
    calendar: '<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/></svg>',
    update: '<svg viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',
    user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.4"/><path d="M5.5 20c.8-4.2 4-6 6.5-6s5.7 1.8 6.5 6"/></svg>',
    shield: '<svg viewBox="0 0 24 24"><path d="M12 3 19 6v5c0 4.6-2.8 8-7 10-4.2-2-7-5.4-7-10V6z"/><path d="m8.5 12 2.4 2.4 4.8-5"/></svg>',
    people: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3"/><path d="M6 20c.7-3.8 3.4-5.4 6-5.4s5.3 1.6 6 5.4"/><circle cx="5.5" cy="10" r="2.2"/><circle cx="18.5" cy="10" r="2.2"/></svg>',
    grid: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/></svg>',
    file: '<svg viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6z"/><path d="M14 3v4h4M9 12h6M9 16h4"/></svg>',
    ppt: '<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="13" rx="2"/><path d="M9 9h4a2 2 0 0 1 0 4H9zM9 9v7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    box: '<svg viewBox="0 0 24 24"><path d="M4 8 12 4l8 4-8 4z"/><path d="M4 8v8l8 4 8-4V8"/><path d="M12 12v8"/></svg>',
    chart: '<svg viewBox="0 0 24 24"><path d="M4 19h16"/><path d="M7 16v-5M12 16V7M17 16v-8"/></svg>'
  };

  var preloadedSessions = [
    {
      id: 24,
      number: 24,
      date: "2026.06.10",
      title: "AI商业变现与销售认知",
      summary: "围绕 AI Agent 服务变现、案例内容化、AI 产品化、云助理商业模式和销售成交，讨论如何把 AI 真正放进项目、获客、交付和复购里。",
      tags: ["AI变现", "销售认知", "AI Agent", "产品化", "云助理"],
      keyPointCount: 18,
      pptPageCount: 50,
      feishuStatus: "飞书已接入",
      latest: true,
      detailUrl: "session.html?id=24",
      pptUrl: "ppt.html?id=24",
      feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/V3qAdOEnYozH7Vxkud9cLA2pn3e?from=from_copylink",
      bigIdea: "本场把 AI 从工具展示拉回商业变现：先让线下关系产生第二次连接，再把 AI Agent 服务、案例内容、产品化、云助理和销售成交接到真实项目里，形成能获客、能交付、能复购的业务路径。",
      points: [
        ["线下链接", "线下活动的第一目标不是立刻成交，而是让别人记住你，并愿意和你产生第二次连接。"],
        ["交付边界", "AI Agent 服务变现前，要先讲清楚服务范围、交付方式和结算方式，否则很容易变成无边界消耗。"],
        ["AI 提效", "AI 的目的不是展示概念，而是把项目、成交和交付里的重复动作变快、变清楚、变稳定。"],
        ["案例内容化", "解决一个客户问题，不只是一单交付，也是一份可公开展示的案例内容和获客素材。"],
        ["销售能力", "AI 能力要变成收入，不能只靠技术，还要补齐销售、表达、预算沟通和方案呈现。"],
        ["产品定义", "产品不一定复杂，能稳定解决一个清晰问题，并让用户愿意付费，就是产品的起点。"],
        ["AI 启蒙", "很多用户需要的不是高级工具，而是有人先帮他理解 AI 能解决什么具体问题。"],
        ["学习环境", "学 AI 不是只学工具，而是进入一个能持续讨论、实践、反馈和迭代的环境。"],
        ["云助理模式", "把 Hermes 接到微信或业务场景里，可以变成可收费的 AI 助理服务，但要处理权限、Token 和复购。"],
        ["客户理解", "AI 时代会工具的人越来越多，真正稀缺的是懂客户、懂场景、懂成交的人。"],
        ["企业培训", "企业 AI 培训可以从重定制转向轻交付、可规模的人才训练和标准化方案。"],
        ["关系延续", "线下认识人之后必须有后续动作，资源要通过沟通、方案和持续跟进才会变成机会。"]
      ],
      questions: [
        "AI Agent 服务怎么定边界才不会无限消耗？",
        "AI 服务变现应该怎么收费和结算？",
        "如何把一个客户案例变成公开内容和获客素材？",
        "为什么 AI 能力还需要补销售能力？",
        "普通人做 AI 产品化应该先解决什么问题？",
        "AI 学习为什么不能只学工具？",
        "Hermes 云助理怎么接到微信或业务场景？",
        "Token、权限和复购在 AI 助理模式里怎么判断？",
        "AI 时代真正稀缺的核心竞争力是什么？",
        "企业 AI 培训怎么做成轻交付、可规模的模型？",
        "线下活动认识人之后应该怎么继续跟进？",
        "销售成交时怎么问预算、讲方案又保护关系？"
      ],
      pptSlides: [
        ["线下链接", "线下见面第一目标，不是立刻成交。", "先让别人记住你，才会有第二次连接。"],
        ["自我介绍", "名字、年纪、老家和项目，要先讲清楚。", "别人知道怎么称呼你，关系才容易开始。"],
        ["记忆点", "第一次见面的重点，是增加印象。", "深入沟通通常发生在第二次。"],
        ["第二次连接", "线下活动真正值钱的地方，是后续还能联系。", "当别人记得你，机会才会继续出现。"],
        ["AI 变现", "AI 不是拿来展示概念的。", "它要能进入项目、成交和交付。"],
        ["交付边界", "AI Agent 服务先讲清楚边界。", "不说清楚，就会变成无限消耗。"],
        ["服务范围", "客户买的不是一个工具名。", "客户买的是你能解决什么具体问题。"],
        ["结算方式", "收费之前，先把结算方式讲清楚。", "按次、按月、按结果，都会影响交付预期。"],
        ["AI 提效", "AI 的目的不是让人看起来更高级。", "而是让重复动作更快、更稳、更清楚。"],
        ["案例内容化", "解决一个客户问题，也是在做一次公开展示。", "案例可以成为下一个客户的信任入口。"],
        ["获客素材", "私下交付不能只留在私下。", "要把过程沉淀成内容，让更多人看见。"],
        ["销售补课", "AI 能力要变成收入，销售能力必须补上。", "不会表达价值，再强的工具也难成交。"],
        ["预算沟通", "问预算不是冒犯。", "它是在判断方案、边界和成交路径。"],
        ["方案呈现", "方案不是堆功能。", "方案要让客户看见结果、步骤和风险。"],
        ["产品起点", "产品不一定复杂。", "能稳定解决一个清晰问题，就是起点。"],
        ["具体问题", "不要先追求大而全。", "先找一个用户愿意付费的小问题。"],
        ["AI 启蒙", "很多用户缺的不是高级工具。", "而是有人告诉他 AI 能解决什么眼前问题。"],
        ["需求梳理", "先梳理需求到底是什么。", "需求没说清，工具越多越乱。"],
        ["学习环境", "学 AI 不是只学工具。", "要进入能讨论、实践、反馈的环境。"],
        ["持续实战", "真正掌握 AI，要靠持续实战。", "每次真实任务，都会训练判断力。"],
        ["云助理", "AI 助理不是概念，而是一种服务入口。", "把能力接到用户最常用的场景里。"],
        ["Hermes 接入", "把 Hermes 接到微信或业务场景。", "用户不用学工具，也能使用你的能力。"],
        ["权限判断", "AI 助理要先处理权限问题。", "哪些资料能看，哪些动作能做，都要清楚。"],
        ["Token 成本", "能不能收费，要先算清楚成本。", "调用量、频率和复杂度都会影响利润。"],
        ["复购逻辑", "AI 助理要做成复购。", "关键是持续有用，而不是一次新鲜感。"],
        ["AI 编程", "AI 编程是进入 AI 的重要门槛。", "它让想法更快变成可运行的结果。"],
        ["开口销售", "销售最难的，常常是开口。", "先面对真实客户，才知道需求真假。"],
        ["客户理解", "会 AI 的人会越来越多。", "懂客户、懂场景、懂成交的人仍然稀缺。"],
        ["人的价值", "AI 时代的最大竞争力仍然在人。", "工具放大的是你的判断，不是替代你的判断。"],
        ["向有结果的人学", "花钱找有结果的人学，常常更快。", "少走弯路，本身就是一种收益。"],
        ["企业培训", "企业 AI 培训可以从定制转向训练。", "培养会用 AI 的人，比只交付一个工具更稳。"],
        ["轻交付", "轻交付不是低价值。", "它是把复杂服务拆成可规模的动作。"],
        ["旅游业务", "传统业务也可以接 AI。", "关键是找到能减少沟通成本的环节。"],
        ["代理模型", "代理模式要看承接能力。", "流量、服务和利润分配都要提前算清。"],
        ["资源判断", "线下认识人之后，要判断有没有后续动作。", "没有跟进，再好的资源也会沉掉。"],
        ["关系延续", "关系不是加微信就结束。", "要通过内容、问题和方案继续连接。"],
        ["行动闭环", "每一次线下认识，都要有下一步。", "约沟通、发资料、给方案，至少做一件事。"],
        ["销售成交", "成交不是硬推。", "是问清需求、预算、方案和关系边界。"],
        ["问预算", "问预算能帮助你判断方案级别。", "价格不清楚，交付就容易失焦。"],
        ["讲方案", "讲方案要让客户知道为什么这样做。", "步骤越清楚，信任越容易建立。"],
        ["保护关系", "成交也要保护关系。", "今天不买的人，也可能是未来的合作伙伴。"],
        ["环境改变", "真正改变行为的是环境、练习和反馈。", "知道不等于做到，做到要靠反复训练。"],
        ["线下成交意识", "线下加好友，也要有成交意识。", "不是马上卖，而是知道未来怎么承接。"],
        ["内容资产", "一次活动可以沉淀成很多内容资产。", "文章、短视频、案例和 PPT 都能继续复用。"],
        ["项目判断", "好项目不只是看热不热。", "还要看需求、交付、复购和现金流。"],
        ["个人优势", "不要只问 AI 能做什么。", "也要问你自己最适合把 AI 放在哪里。"],
        ["组合能力", "AI、销售、内容和交付要连成系统。", "单点能力强，不如整条链条跑得通。"],
        ["长期复盘", "每一次成交和交付都要复盘。", "复盘越稳定，系统越容易复制。"],
        ["商业路径", "AI 商业化不是一步到位。", "先服务一个人，再服务一类人，最后沉淀成产品。"],
        ["行动", "先找一个真实客户问题。", "用 AI 帮他解决，再把过程变成下一次成交的证据。"]
      ]
    },
    { id: 23, number: 23, date: "2026.06.03", title: "AI时代核心竞争力与商业模式", summary: "围绕AI时代个体真正的核心竞争力，讨论AI如何进入私域、内容、编程、成交和云房东式服务，从工具使用走向可收费、可交付、可复用的商业模式。", tags: ["AI", "核心竞争力", "商业模式", "私域", "Hermes"], keyPointCount: 18, pptPageCount: 50, feishuStatus: "飞书已接入", latest: false, detailUrl: "session.html?id=23", pptUrl: "ppt.html?id=23", feishuUrl: "https://oee5lr7gsk.feishu.cn/wiki/QpSBwIitVi4bC9kt7FxcUdrRnwh?from=from_copylink", bigIdea: "本场不是单纯讲AI工具，而是把AI放回业务场景里：先判断自己要提升学习力、影响力还是赚钱能力，再把AI用于私域、内容、编程、销售和交付，最终沉淀成可收费、可复制、可租用的能力系统。", points: [["AI定位", "AI不是单独拿来赚钱的魔法，而是要先放进自己的业务，让内容、私域、交付和销售效率变高。"], ["能力放大", "AI时代的核心竞争力不是AI本身，而是使用AI的人。个人能力越高，AI能发挥的上限越高。"], ["私域结合", "AI加私域要先判断到底是提升学习力、影响力，还是赚钱能力，不同目标会决定不同的使用路径。"], ["商业模式", "纯AI赚钱通常只有两条路：接商单，或把能力产品化。更稳的方式，是把AI接进已有业务。"], ["AI编程", "AI编程不是程序员专属，它更像执行工具。你要学会把需求说清楚，让工具直接帮你做结果。"], ["成交起点", "第一批客户通常来自已经信任你的人。敢开口、会判断需求，比盲目找陌生流量更重要。"], ["复购经营", "好的项目不能只接新客，还要经营老客、复购、转介绍和可持续的关系池。"], ["云房东模型", "当AI能力被训练好之后，就可以像房子一样租出去，让别人使用你的系统和额度。"], ["Hermes", "Hermes的价值不是酷，而是能把个人经验、工具、文件和执行流程变成一个可交付的AI助手。"], ["长期判断", "工具会变化，但判断力、表达力、销售力和交付力会持续决定一个人能不能抓住AI红利。"]], questions: ["AI到底是拿来学习、提升影响力，还是直接赚钱？", "普通人想用AI赚钱，应该从哪里切入？", "AI加私域到底可以解决哪些真实问题？", "为什么AI时代真正重要的是个人能力？", "不会编程的人，能不能用AI做出产品或网页？", "第一批客户应该从哪里来？", "为什么要先卖给已经信任你的人？", "冲锋衣洗护这种小项目，为什么也能做成长期生意？", "什么是云房东模式？AI能力怎么租给别人？", "Hermes、Codex、Claude Code 这些工具分别适合做什么？"], pptSlides: [["AI定位", "AI不是单独拿来赚钱的魔法。", "先放进业务里，看它能不能提高效率。"], ["先问目标", "你要先判断自己到底想提升什么。", "学习力、影响力、赚钱能力，路径完全不同。"], ["AI加私域", "AI加私域不是一句口号。", "它要解决真实的用户沟通、承接和转化问题。"], ["业务优先", "大多数人靠AI赚钱，是因为原本就有业务。", "AI只是把原有业务的效率放大。"], ["纯AI赚钱", "如果只靠AI赚钱，通常只有两条路。", "要么接商单，要么把能力产品化。"], ["内容自动化", "内容自动化不是为了偷懒。", "而是把素材、脚本、图片和视频变成稳定流程。"], ["面试竞争力", "AI能力也可以变成简历里的真实案例。", "重点不是你学过，而是你做出过结果。"], ["工具成本", "工具有成本，但能力也有成本。", "要先证明自己能用工具解决问题。"], ["核心竞争力", "AI时代的核心竞争力不是AI。", "而是使用AI的人本身。"], ["个人能力", "你的能力只有十分，AI也只能放大到十分。", "人的认知决定工具能发挥到哪里。"], ["国产模型", "模型之间有差异，但更大的差异在使用者。", "会不会提需求，决定结果能不能出来。"], ["别复杂化", "很多AI用法没有网上讲得那么复杂。", "把需求讲清楚，它就能直接帮你做。"], ["直接执行", "不要每件事都先反推方法。", "很多时候直接把任务丢给AI就行。"], ["图片网页", "改图、改页面、改数字，都可以先让AI试。", "先拿到结果，再决定要不要优化。"], ["AI编程", "AI编程不是程序员专属。", "它更像一个会执行的工具。"], ["需求表达", "不会写代码的人，也要学会说清楚需求。", "需求越清楚，AI越容易交付。"], ["Codex", "Codex适合处理代码和网页。", "它能把想法推进成可运行的东西。"], ["Hermes", "Hermes更像一个个人AI助理。", "它能把你的文件、经验和工具接成流程。"], ["Claude Code", "不同工具有不同分工。", "不要迷信某一个工具，要看它适合做什么。"], ["商业模式", "工具不是商业模式。", "能收费、能交付、能复购，才是商业模式。"], ["第一批客户", "第一批客户往往来自已经信任你的人。", "不要一开始就迷信陌生流量。"], ["敢开口", "冷启动最难的不是产品，而是敢开口。", "先向信任你的人测试需求。"], ["现金投票", "不要只问别人喜不喜欢。", "愿不愿意付钱，才是真实反馈。"], ["课程验证", "课程还没完全做完，也可以先问十个人。", "先验证需求，再决定投入多少。"], ["定价交付", "价格不是随便定的。", "它背后是交付方式、周期和承诺。"], ["高客单", "高客单不是多收钱。", "而是你能不能给出更明确的规划和结果。"], ["销售能力", "销售不是话术，而是判断需求。", "知道谁需要什么，才敢开口。"], ["关系经营", "经营客户不是为了立刻成交。", "朋友越多，人生反馈也越多。"], ["不是所有人都要成交", "有些人适合买产品，有些人适合做朋友。", "关系本身也是长期资产。"], ["复购", "好项目不能只接新客。", "复购、转介绍和老客关系，决定长期收入。"], ["冲锋衣案例", "洗冲锋衣也可以成为一个长期项目。", "关键是信任、服务和复购。"], ["信任卖家", "客户真正信任的不是流程，而是卖家。", "信任掌握在你手上，就不用太怕竞争。"], ["前端获客", "前端获客不要太早完全交给别人。", "入口被别人拿走，关系也可能被拿走。"], ["私域池", "要把客户重新找得到。", "社群、微信和内容，都是长期复购的入口。"], ["投流判断", "投流不是不能做，而是要算得过来。", "投产比能回正，才值得继续放大。"], ["找人承接", "当流量变大，一个人承接不了。", "你需要找人接住咨询、服务和交付。"], ["AI产品化", "AI能力可以变成产品。", "但前提是它真的解决一个具体问题。"], ["从小工具开始", "不要一开始就做大平台。", "先从自己的资料、流程和场景开始。"], ["八字小程序", "自己的专业资料可以先变成自己的AI大脑。", "再往工具、产品和交付延伸。"], ["云房东", "训练好的AI能力，可以像房子一样租出去。", "别人使用你的系统，你收使用费。"], ["额度成本", "生图和聊天花不了多少TOKEN。", "真正贵的是写代码和复杂执行。"], ["后台监测", "能不能收费，先要算清楚成本。", "额度、调用量和使用频次都要看。"], ["微信限制", "微信生态天然限制AI接入。", "有些复杂工作更适合飞书或网页端。"], ["小白用户", "小白用户不在乎工具名。", "他只在乎能不能在微信里顺手使用。"], ["AI助理", "AI助理的价值不是酷。", "而是让别人不用学工具，也能用你的能力。"], ["工具组合", "Codex、Hermes、Claude Code 要分工。", "一个负责执行，一个负责助理，一个负责代码。"], ["不要省效率钱", "生产力工具不要只看便宜。", "每天省下来的时间，会长期复利。"], ["长期能力", "工具会变，但能力不会消失。", "判断力、表达力、销售力、交付力会一直有用。"], ["AI红利", "AI红利不是抢工具，而是重建能力系统。", "谁能把能力系统化，谁更容易留下来。"], ["行动", "先找一个具体场景，让AI帮你做出结果。", "从一个真实问题开始，而不是从学工具开始。"]] },
    { id: 22, number: 22, date: "2024.05.18", title: "AI 赋能下的创业与个人成长", summary: "围绕 AI 如何落地到创业与个人成长，深入讨论项目判断、私域经营、云房东模式、定价策略与交付方式。", tags: ["AI", "项目判断", "私域经营", "定价与交付", "个人 IP"], keyPointCount: 18, pptPageCount: 50, feishuStatus: "飞书已接入", detailUrl: "session.html?id=22", pptUrl: "ppt.html?id=22", coverImage: "assets/archive/covers/session-cover-22.png", pptImageDir: "assets/archive/ppt/session-22", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/JIuBdd1rzoE4WUxI0xKcXSVznWe", bigIdea: "本场围绕 AI 落地与个人成长，结合项目判断、私域经营、定价与交付，帮助你在复杂环境中做出更清晰的决策。", points: [["项目判断", "先判断需求、场景与交付难度。好需求加好项目，关键看可交付性与可持续性。"], ["云房东", "不是做更多，而是做更高复用的连接。通过资源整合与连接能力，构建可复用的业务网络与信任模型。"], ["定价策略", "价格背后是结构与交付承诺。定价不是拍脑袋，而是价值结构、交付标准与风险共担的体现。"], ["私域经营", "长期关系决定复购与转介绍。内容、服务与信任的复利，才是私域真正的护城河。"], ["AI 使用", "不要学概念，先找具体落地场景。从具体场景切入，小步快跑，建立自己的 AI 工作流。"], ["销售与交付", "销售不是两件事，而是一条价值链的不同环节。成交前说清楚，交付中做稳定。"]], questions: ["AI 怎么落地到项目？", "如何判断项目值不值得做？", "私域如何形成长期复购？", "定价为什么总是卡住？", "云房东模式如何建立信任与连接？", "个人如何用 AI 提升生产力与交付力？"] },
    { id: 21, number: 21, date: "2024.05.11", title: "AI 赋能创业要从工具走向长期主义", summary: "讨论 AI 工具如何真正进入创业系统，从短期提效走向长期资产与稳定交付。", tags: ["AI", "长期主义", "创业", "工具", "交付"], keyPointCount: 16, pptPageCount: 42, feishuStatus: "飞书已接入", detailUrl: "session.html?id=21", pptUrl: "ppt.html?id=21", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/QSTQdsNGooXkzGxiMSYcyN11n4f" },
    { id: 20, number: 20, date: "2024.05.04", title: "AI 时代个体创业的能力系统化", summary: "围绕个体创业者如何用 AI 重建能力系统，讨论项目判断、效率、表达和交付。", tags: ["AI", "个体创业", "能力系统", "项目判断", "交付"], keyPointCount: 15, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=20", pptUrl: "ppt.html?id=20", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/AWlZdoH0po1YugxAKvPcXw7inwf" },
    { id: 19, number: 19, date: "2024.04.27", title: "稳定现金流支撑长期成长", summary: "围绕长期成长背后的现金流、项目节奏和风险控制，整理稳定推进的方法。", tags: ["现金流", "长期成长", "项目", "风险", "节奏"], keyPointCount: 14, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=19", pptUrl: "ppt.html?id=19", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/JW2ddGEXIocXdLxZJB9cVngVnYg" },
    { id: 18, number: 18, date: "2024.04.20", title: "AI 编程与副业发展", summary: "围绕 AI 编程如何进入副业实践，讨论工具使用、项目验证、交付路径和个人能力升级。", tags: ["AI 编程", "副业", "工具", "项目验证", "交付"], keyPointCount: 14, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=18", pptUrl: "ppt.html?id=18", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/L7DMdc1bCo1aDjxdIULc4qjRngh" },
    { id: 17, number: 17, date: "2024.04.13", title: "项目能不能做先看路径和现金流", summary: "判断项目是否值得推进，先看路径、现金流、资源条件和可持续交付能力。", tags: ["项目判断", "现金流", "路径", "资源", "交付"], keyPointCount: 15, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=17", pptUrl: "ppt.html?id=17", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/TGtHddtsTogW58xa6AjcFzQln8g" },
    { id: 16, number: 16, date: "2024.04.06", title: "销售成交要靠系统化练习", summary: "把成交能力从临场发挥变成可训练、可复盘、可复制的行动系统。", tags: ["销售", "成交", "练习", "系统化", "复盘"], keyPointCount: 16, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=16", pptUrl: "ppt.html?id=16", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/MSKSdbTA0o6cbbxfYkpc9lNynsf" },
    { id: 15, number: 15, date: "2024.03.30", title: "内容表达要回到客户听得懂", summary: "表达不是自我展示，而是让客户听得懂、愿意信、知道下一步怎么做。", tags: ["内容", "表达", "客户", "转化", "沟通"], keyPointCount: 16, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=15", pptUrl: "ppt.html?id=15", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/DojVdYdEsou4xLx6Xyic2YZRn1b" },
    { id: 14, number: 14, date: "2024.03.23", title: "私域连接要从情绪和需求切入", summary: "私域经营不是频繁打扰，而是从情绪、需求和信任关系切入。", tags: ["私域", "关系", "情绪", "需求", "信任"], keyPointCount: 14, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=14", pptUrl: "ppt.html?id=14", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/INbrd3uWuoh4jCxVHkrcpHWYnld" },
    { id: 13, number: 13, date: "2024.03.16", title: "团队复制之前先训练标准", summary: "团队扩张之前，先把动作、表达、交付和判断标准训练出来。", tags: ["团队", "标准", "复制", "训练", "交付"], keyPointCount: 15, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=13", pptUrl: "ppt.html?id=13", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/CPRrdQRqroAdeNxZK7Bcjy7vnHb" },
    { id: 12, number: 12, date: "2024.03.09", title: "用 AI 放大表达和内容输出", summary: "把 AI 用在表达、内容结构和持续输出上，让内容生产变成系统。", tags: ["AI", "表达", "内容", "输出", "系统"], keyPointCount: 14, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=12", pptUrl: "ppt.html?id=12", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/ZFDSdXWPBoLMEmxtO16cnvE3nfb" },
    { id: 11, number: 11, date: "2024.03.02", title: "AI 工具要服务交付和成交", summary: "AI 工具不是炫技，而是要真正服务成交、交付、复盘和团队效率。", tags: ["AI", "工具", "交付", "成交", "效率"], keyPointCount: 14, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=11", pptUrl: "ppt.html?id=11", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/ASj0d6TZzo7TMIxcgtKcesp8nId" },
    { id: 10, number: 10, date: "2024.02.24", title: "把流量接进微信再经营关系", summary: "流量只是入口，真正的转化发生在微信关系、信任和长期经营里。", tags: ["流量", "微信", "私域", "关系", "转化"], keyPointCount: 14, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=10", pptUrl: "ppt.html?id=10", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/MzvndNhBEoiXboxgrL7cetO8nMb" },
    { id: 9, number: 9, date: "2024.02.17", title: "成交不是一次开口而是长期信任", summary: "成交不是一句话的技巧，而是关系、表达、服务和信任长期累积的结果。", tags: ["成交", "信任", "销售", "关系", "服务"], keyPointCount: 14, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=9", pptUrl: "ppt.html?id=9", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/C2GGd7uPDoo73dxUYoWcBsgynqc" },
    { id: 8, number: 8, date: "2024.02.03", title: "心力修复和线下关系经营", summary: "重新安排工作、生活和关系节奏，让心力恢复后再持续经营。", tags: ["心力", "关系经营", "节奏", "恢复", "线下"], keyPointCount: 15, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=8", pptUrl: "ppt.html?id=8", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/DVG6d5Siuo4LUWxD7QMc2awxnbY" },
    { id: 7, number: 7, date: "2024.01.27", title: "线下见面先让别人记住你", summary: "线下链接的第一步不是推销，而是建立记忆点、信任感和二次连接。", tags: ["线下链接", "自我介绍", "记忆点", "关系", "信任"], keyPointCount: 13, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=7", pptUrl: "ppt.html?id=7", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/NIIjdBscJoCtgwxupwEcXnfnnMb" },
    { id: 6, number: 6, date: "2024.01.20", title: "先想清楚人生方向再做项目", summary: "项目选择要回到人生方向、资源条件和长期节奏，而不是只看眼前机会。", tags: ["人生方向", "项目", "选择", "长期", "节奏"], keyPointCount: 13, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=6", pptUrl: "ppt.html?id=6", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/KdCvdXhnpoQ33Yx1O4DcK8k7njf" },
    { id: 5, number: 5, date: "2024.01.13", title: "加微信之后才是真正的私域经营", summary: "私域不是加上微信就结束，而是关系维护、内容触达和持续信任。", tags: ["私域", "微信", "关系", "复购", "信任"], keyPointCount: 13, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=5", pptUrl: "ppt.html?id=5", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/SalxdSucDo9eDJxNmtecfs13nOH" },
    { id: 4, number: 4, date: "2024.01.06", title: "一场活动同时解决内容和关系", summary: "线下活动既是内容来源，也是关系场域，能同时沉淀表达和信任。", tags: ["活动", "内容", "关系", "线下", "信任"], keyPointCount: 12, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=4", pptUrl: "ppt.html?id=4", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/OqU3d8qvcovJV9xz09qcJuApnQg" },
    { id: 3, number: 3, date: "2023.12.30", title: "高客单成交先经营关系", summary: "高客单成交的关键不是话术，而是关系、信任、需求识别和交付承诺。", tags: ["高客单", "成交", "关系", "信任", "需求"], keyPointCount: 12, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=3", pptUrl: "ppt.html?id=3", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/L0gldXFuWo1BoexchVqc6GbBnhf" },
    { id: 2, number: 2, date: "2023.12.23", title: "线下关系与项目成交", summary: "从线下关系建立到项目成交推进，理解信任、表达、需求识别和长期连接。", tags: ["线下关系", "项目成交", "销售", "链接", "信任"], keyPointCount: 12, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=2", pptUrl: "ppt.html?id=2", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/GnP0d4mE0oL9S3xBrIpcBy7JnDb" },
    { id: 1, number: 1, date: "2023.12.16", title: "私域关系经营：先让别人记住你", summary: "第一场从自我介绍、记忆点和关系经营开始，建立线下档案库的根基。", tags: ["私域", "关系经营", "自我介绍", "记忆点", "信任"], keyPointCount: 12, pptPageCount: 40, feishuStatus: "飞书已接入", detailUrl: "session.html?id=1", pptUrl: "ppt.html?id=1", feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/APZUdrZhIoVthqxdME6cca4WnQc" }
  ];

  var preloadedSearchResults = preloadedSessions.filter(function (session) {
    return [24, 23, 22, 16, 12, 10, 7].indexOf(session.number) >= 0;
  }).map(function (session) {
    return {
      sessionNumber: session.number,
      title: session.title,
      summary: session.summary,
      matchReason: "命中关键词「" + session.tags.slice(0, 3).join("」「") + "」",
      tags: session.tags,
      keyPointCount: session.keyPointCount,
      pptPageCount: session.pptPageCount
    };
  });

  var data = {
    sessions: [
      {
        id: 22,
        number: 22,
        date: "2024.05.18",
        title: "AI 赋能的创业与个人成长：项目判断、云房东与定价交付",
        summary: "围绕 AI 如何落地到创业与个人成长，深入讨论项目判断、私域经营、云房东模式的底层逻辑，以及定价策略与交付方式。",
        tags: ["AI", "项目判断", "私域经营", "定价与交付", "个人 IP"],
        keyPointCount: 18,
        pptPageCount: 50,
        feishuStatus: "飞书已接入",
        latest: true,
        detailUrl: "session.html?id=22",
        pptUrl: "ppt.html?id=22",
        coverImage: "assets/archive/covers/session-cover-22.png",
        feishuUrl: "https://oee5lr7gsk.feishu.cn/docx/JIuBdd1rzoE4WUxI0xKcXSVznWe",
        bigIdea: "本场围绕 AI 落地与个人成长，结合项目判断的关键维度、私域经营的方法论，以及定价与交付的底层策略，帮助你在复杂环境中做出更清晰的决策，更稳健地推进项目与个人成长。",
        points: [
          ["项目判断", "先判断需求、场景与交付难度。好需求加好项目，关键看可交付性与可持续性。"],
          ["云房东", "不是做更多，而是做更高复用的连接。通过资源整合与连接能力，构建可复用的业务网络与信任模型。"],
          ["定价策略", "价格背后是结构与交付承诺。定价不是拍脑袋，而是价值结构、交付标准与风险共担的体现。"],
          ["私域经营", "长期关系决定复购与转介绍。内容、服务与信任的复利，才是私域真正的护城河。"],
          ["AI 使用", "不要学概念，先找具体落地场景。从具体场景切入，小步快跑，建立自己的 AI 工作流。"],
          ["销售与交付", "销售不是两件事，而是一条价值链的不同环节。成交前说清楚，交付中做稳定。"]
        ],
        questions: ["AI 怎么落地到项目？", "如何判断项目值不值得做？", "私域如何形成长期复购？", "定价为什么总是卡住？", "云房东模式如何建立信任与连接？", "个人如何用 AI 提升生产力与交付力？"]
      },
      {
        id: 21,
        number: 21,
        date: "2024.05.11",
        title: "销售如何提升成交：从提问到推进",
        summary: "拆解从关系建立、需求识别到成交推进的关键动作。",
        tags: ["销售", "提问", "成交", "推进", "客户管理"],
        keyPointCount: 16,
        pptPageCount: 42,
        feishuStatus: "飞书已接入",
        detailUrl: "session.html?id=21",
        pptUrl: "ppt.html?id=21",
        feishuUrl: "#"
      },
      {
        id: 15,
        number: 15,
        date: "2024.03.30",
        title: "销售成交的底层逻辑：信任构建与高转化沟通",
        summary: "拆解从关系建立、需求识别到成交推进的关键动作。",
        tags: ["销售", "成交", "沟通", "信任", "转化"],
        keyPointCount: 16,
        pptPageCount: 42,
        feishuStatus: "飞书待补",
        detailUrl: "session.html?id=15",
        pptUrl: "ppt.html?id=15",
        feishuUrl: "#"
      },
      {
        id: 10,
        number: 10,
        date: "2024.02.24",
        title: "副业从 0 到 1：方向选择、验证路径与冷启动",
        summary: "适合刚开始做副业的人，理解如何选择方向并完成第一批付费。",
        tags: ["副业", "个体创业", "验证", "冷启动"],
        keyPointCount: 14,
        pptPageCount: 36,
        feishuStatus: "飞书待补",
        detailUrl: "session.html?id=10",
        pptUrl: "ppt.html?id=10",
        feishuUrl: "#"
      },
      {
        id: 8,
        number: 8,
        date: "2024.02.03",
        title: "建立个人表达系统：定位、内容结构与持续输出",
        summary: "打造个人内容系统的方法论，定位清晰、结构稳定、持续输出。",
        tags: ["表达", "内容", "个人品牌", "结构"],
        keyPointCount: 15,
        pptPageCount: 38,
        feishuStatus: "飞书待补",
        detailUrl: "session.html?id=8",
        pptUrl: "ppt.html?id=8",
        feishuUrl: "#"
      },
      {
        id: 20,
        number: 20,
        date: "2024.05.04",
        title: "副业从 0 到 1：先验证，再放大",
        summary: "适合刚开始做副业的人，理解如何选择方向并完成第一批付费。",
        tags: ["副业", "验证", "定位", "流量", "产品"],
        keyPointCount: 15,
        pptPageCount: 38,
        feishuStatus: "飞书已接入",
        detailUrl: "session.html?id=20",
        pptUrl: "ppt.html?id=20",
        feishuUrl: "#"
      },
      {
        id: 19,
        number: 19,
        date: "2024.04.27",
        title: "表达的力量：内容、结构与传播",
        summary: "把表达从灵感变成可持续输出的内容系统。",
        tags: ["表达", "内容", "结构", "传播", "影响力"],
        keyPointCount: 14,
        pptPageCount: 36,
        feishuStatus: "飞书已接入",
        detailUrl: "session.html?id=19",
        pptUrl: "ppt.html?id=19",
        feishuUrl: "#"
      },
      {
        id: 18,
        number: 18,
        date: "2024.04.20",
        title: "关系经营与长期复购",
        summary: "从信任、服务和内容建立长期关系。",
        tags: ["关系经营", "信任", "复购", "社群", "长期主义"],
        keyPointCount: 14,
        pptPageCount: 34,
        feishuStatus: "飞书已接入",
        detailUrl: "session.html?id=18",
        pptUrl: "ppt.html?id=18",
        feishuUrl: "#"
      },
      {
        id: 17,
        number: 17,
        date: "2024.04.13",
        title: "个人成长与节奏管理",
        summary: "重新安排工作、学习、情绪和时间。",
        tags: ["个人成长", "学习", "节奏", "时间管理", "精力管理"],
        keyPointCount: 13,
        pptPageCount: 32,
        feishuStatus: "飞书已接入",
        detailUrl: "session.html?id=17",
        pptUrl: "ppt.html?id=17",
        feishuUrl: "#"
      }
    ],
    searchResults: [
      {
        sessionNumber: 22,
        title: "AI 赋能的创业与个人成长：项目判断、云房东与定价交付",
        summary: "讨论 AI 如何落地到个人项目、私域经营和定价交付。",
        matchReason: "命中关键词「AI」「项目」「定价」",
        tags: ["AI", "个人 IP", "私域", "项目判断"],
        keyPointCount: 18,
        pptPageCount: 50
      },
      {
        sessionNumber: 15,
        title: "销售成交的底层逻辑：信任构建与高转化沟通",
        summary: "拆解从关系建立、需求识别到成交推进的关键动作。",
        matchReason: "命中关键词「销售」「成交」「信任」",
        tags: ["销售", "成交", "沟通", "信任"],
        keyPointCount: 16,
        pptPageCount: 42
      },
      {
        sessionNumber: 10,
        title: "副业从 0 到 1：方向选择、验证路径与冷启动",
        summary: "适合刚开始做副业的人，理解如何选择方向并完成第一批付费。",
        matchReason: "命中关键词「副业」「从 0 到 1」",
        tags: ["副业", "个体创业", "验证", "冷启动"],
        keyPointCount: 14,
        pptPageCount: 36
      },
      {
        sessionNumber: 8,
        title: "建立个人表达系统：定位、内容结构与持续输出",
        summary: "打造个人内容系统的方法论，定位清晰、结构稳定、持续输出。",
        matchReason: "命中关键词「表达」「内容」「个人品牌」",
        tags: ["表达", "内容", "个人品牌", "结构"],
        keyPointCount: 15,
        pptPageCount: 38
      }
    ],
    pptPages: [
      ["01", "项目判断"],
      ["02", "AI 落地"],
      ["03", "定价"],
      ["04", "交付"],
      ["05", "私域"],
      ["06", "表达"],
      ["07", "眼前的小事"],
      ["08", "复购"],
      ["09", "复盘"],
      ["10", "长期主义"]
    ],
    updates: {
      totalCount: 24,
      pendingOrganize: 3,
      published: 24,
      pendingFeishu: 0,
      pendingPpt: 0,
      todoList: ["复核第 24 场关键词", "检查第 24 场飞书跳转", "检查第 24 场 PPT 展示", "检查搜索索引"]
    }
  };

  data.sessions = preloadedSessions;
  data.searchResults = preloadedSearchResults;
  var session01 = data.sessions.find(function (item) { return item.id === 1; });
  if (session01) {
    Object.assign(session01, {
      title: "私域关系经营：先让别人记住你",
      summary: "第一场围绕线下链接、私域关系经营、加微信后的第一步、复购二转与聊天能力训练，帮助参加者把一次活动变成可持续的关系资产。",
      bigIdea: "本场从线下活动的第一分钟开始，讲清楚如何让别人记住你、如何提出好问题、如何在加微信后经营关系，并把关系延伸到成交、复购和长期信任。",
      tags: ["私域", "关系经营", "自我介绍", "记忆点", "聊天能力"],
      keyPointCount: 18,
      pptPageCount: 40,
      coverImage: "assets/archive/covers/session-cover-01.png",
      pptImageDir: "assets/archive/ppt/session-01",
      points: [
        ["线下链接", "参加活动不是为了加很多人，而是先让别人记住你。名字、年纪、老家和项目，是最容易建立记忆点的入口。"],
        ["记忆点", "第一次见面要留下可被记住的点。别人记住你的名字、特征或一句话，才有机会进入后续关系。"],
        ["好的提问", "问题问得越清楚，解决方案越准确。流程、数据、卡点和目标，是提问时最重要的信息。"],
        ["私域第一关", "加了微信之后不能不理他。一个人愿意进入你的微信，本身就是很有价值的关系动作。"],
        ["将心比心", "如果某个销售动作让自己不舒服，就不要对别人这样做。私域经营要先回到人的感受。"],
        ["复购二转", "成交不是关系结束，而是关系继续长出来的开始。交付、服务和长期信任决定复购与转介绍。"],
        ["聊天训练", "聊天不是靠临场发挥，而是可以训练的能力。每天固定数量、固定时间、固定框架去练，关系经营才会稳定。"],
        ["主动者红利", "线下活动里主动开口、提早到场、主动链接的人，更容易被看见，也更容易带动后续关系。"]
      ],
      questions: [
        "线下活动怎么让别人快速记住我？",
        "自我介绍应该讲哪些内容？",
        "为什么加了微信之后不能不理对方？",
        "私域关系经营第一步应该怎么做？",
        "怎么把一次活动变成长期关系？",
        "如何练习聊天能力和成交前沟通？",
        "为什么提早到活动现场很重要？",
        "复购和转介绍从哪里开始？"
      ],
      pptSlides: [
        ["线下链接", "参加活动的第一目标，不是加很多人。", "而是先让别人记住你。"],
        ["记忆点", "第一次见面，先留下一个可被记住的点。", "名字、老家、年纪、项目，都是入口。"],
        ["名字", "名字被叫得越多，别人越容易记住你。", "记住名字，是线下关系的第一步。"],
        ["自我介绍", "一分钟自我介绍，先讲清楚四件事。", "你是谁、怎么称呼、来自哪里、正在做什么。"],
        ["共鸣入口", "年纪和老家，是最快的共鸣入口。", "共鸣出现，关系才有继续聊下去的理由。"],
        ["提早到", "提早到，是线下活动最大的关系红利。", "人少的时候，更容易一个一个记住。"],
        ["近距离", "先记住隔壁和对面的人。", "关系经营从最近的人开始。"],
        ["少量多次", "一次记不住很多人，就少量多次重复。", "重复，是线下记忆最简单的方法。"],
        ["活动收益", "一次活动回去记住两个人，就已经有收获。", "关系不是数量游戏。"],
        ["问题", "一个好问题，本身就是一次项目梳理。", "问题清楚，答案才会清楚。"],
        ["流程", "先把流程讲细，才知道哪里能改。", "模糊的问题，只会得到模糊的建议。"],
        ["数据", "提问时要讲流程、数据、卡点和目标。", "这些信息决定建议是否落地。"],
        ["用户视角", "如果你不懂消费者为什么消费，就很难做好交付。", "先站到用户那一边。"],
        ["私域第一关", "加了微信之后，不能不理他。", "他进到你的微信，本身就是一次信任动作。"],
        ["主动性", "用户不主动，不代表他没有需求。", "很多时候，需要你先主动建立关系。"],
        ["不急着卖", "第一次接触，不一定要马上销售。", "先让对方感到被重视。"],
        ["将心比心", "自己觉得别扭的动作，不要对别人做。", "私域经营先回到人的感受。"],
        ["重视感", "一个简单回复，就能让对方感到被看见。", "被看见，是关系开始的信号。"],
        ["聊天", "聊天先回归正常。", "它是人与人相处最基本的沟通方式。"],
        ["框架", "聊天能力不是天赋，而是可以训练的结构。", "有框架，才不会每次都随便聊。"],
        ["夸奖", "夸奖不是套路，是更细致地关注对方。", "能观察到特殊点，关系就会变近。"],
        ["朋友圈", "评论、点赞、私聊，都可以成为关系入口。", "重点是自然，不是硬推。"],
        ["成交", "成交不是一次开口，而是长期信任的结果。", "前面铺得越扎实，后面越容易推进。"],
        ["复购", "成交之后，关系还要继续长出来。", "复购和转介绍来自交付后的信任。"],
        ["关系资产", "每一个微信好友，都是一份关系资产。", "但资产需要经营，不是躺在那里。"],
        ["长期关系", "私域真正经营的是长期关系。", "不是一次触达，也不是一次群发。"],
        ["聊天数量", "每天固定聊几个人，是可以训练的。", "数量稳定，能力才会稳定。"],
        ["时间边界", "一个人聊十分钟，就不会有太大压力。", "有边界，才能持续做。"],
        ["主动者", "主动开口的人，更容易被记住。", "线下活动里，主动就是优势。"],
        ["带动话题", "第一个自我介绍的人，会决定后面的人怎么跟。", "主动者会塑造现场节奏。"],
        ["细节", "每照顾一个细节，成交率就会提高一点。", "细节累积起来，就是信任。"],
        ["线上记忆", "线上也需要记忆点。", "头像、昵称、签名、朋友圈封面，都会影响别人是否记住你。"],
        ["关系练习", "经营关系不是等有需求才开始。", "日常的小互动，就是训练场。"],
        ["价值交换", "关系越多，人生反馈越丰富。", "卖东西也是一种价值交换。"],
        ["链接方式", "好的链接，是让对方觉得舒服。", "舒服，才会愿意继续。"],
        ["问题方向", "提问尽量往解决问题的方向问。", "不要只放大困难。"],
        ["群体关系", "线下活动结束后，关系才真正开始。", "回去后的维系，决定活动价值。"],
        ["复盘", "每一场活动都应该留下可复用的结构。", "这就是档案库存在的意义。"],
        ["根源场", "生财根源场不是只记录活动。", "它要把真实问题沉淀成可搜索的知识。"],
        ["行动", "下一次参加活动，先让别人记住你。", "关系经营，从一个清晰的名字开始。"]
      ]
    });
  }

  function $(selector) { return document.querySelector(selector); }
  function $$(selector) { return Array.prototype.slice.call(document.querySelectorAll(selector)); }

  function icon(name) { return icons[name] || icons.file; }

  function externalAttrs(url) {
    return /^https?:\/\//.test(url || "") ? ' target="_blank" rel="noopener noreferrer"' : "";
  }

  function nav() {
    var active = document.body.dataset.page || "home";
    var items = [
      ["home", "入口", "index.html", "home"],
      ["search", "搜索", "search.html", "search"],
      ["sessions", "场次", "sessions.html", "calendar"]
    ];
    return '<aside class="sidebar"><a class="brand-tile" href="index.html"><span class="brand-seal">源</span></a><nav class="side-nav">' +
      items.map(function (item) {
        return '<a class="nav-item ' + (active === item[0] ? "active" : "") + '" href="' + item[2] + '">' + icon(item[3]) + '<span>' + item[1] + '</span><i class="dot"></i></a>';
      }).join("") +
      '</nav></aside>';
  }

  function topbar() {
    return '<header class="topbar"><div class="system-name"><span class="system-mark">档</span><span>生财根源场档案库</span></div><div class="status-pills"><span class="status-pill">' + icon("box") + '已索引 ' + data.sessions.length + ' 场 <i class="status-dot"></i></span><span class="status-pill">' + icon("calendar") + '支持每周更新</span></div></header>';
  }

  function shell() {
    var root = $("#app");
    if (!root) return;
    var content = root.innerHTML;
    root.innerHTML = nav() + '<main class="main">' + topbar() + content + '</main>';
    root.className = "app-shell";
  }

  function tags(list) {
    return (list || []).map(function (tag, index) {
      return '<span class="tag ' + (index === 0 ? "mint" : "") + '">' + tag + '</span>';
    }).join("");
  }

  function coverTitle(session) {
    var title = session.coverTitle || session.title || "活动档案";
    title = title.split("：")[0].split(":")[0].replace(/，.*/, "");
    return title.length > 11 ? title.slice(0, 11) : title;
  }

  function ticket(session) {
    return '<div class="archive-ticket theme-cover" aria-label="第 ' + session.number + ' 场档案封面"><div class="theme-cover-inner"><small>第 ' + String(session.number).padStart(2, "0") + ' 场</small><strong>' + session.number + '</strong><span>' + coverTitle(session) + '</span><em>' + (session.tags && session.tags[0] ? session.tags[0] : "活动档案") + '</em></div></div>';
  }

  function renderHome() {
    var latest = data.sessions[0];
    var stat = $(".stat-number");
    var latestCard = document.querySelector('.quick-card[href^="session.html?id="]');
    if (stat) stat.textContent = data.sessions.length;
    if (latestCard) latestCard.href = "session.html?id=" + latest.id;
    $("#homeLatest").innerHTML = '<article class="latest-card panel">' + ticket(latest) + '<div><div class="latest-header"><span>最新上架</span><a href="sessions.html">查看全部场次</a></div><h2>第 ' + latest.number + ' 场<br>' + latest.title + '</h2><p>' + latest.summary + '</p><div class="chip-row">' + tags(latest.tags.slice(0, 4)) + '</div><p><a class="button primary" href="session.html?id=' + latest.id + '">进入本场档案 ' + icon("arrow") + '</a></p></div></article>';
    $("#homeSearch").addEventListener("submit", function (event) {
      event.preventDefault();
      var q = $("#homeQuery").value.trim() || "销售";
      location.href = "search.html?q=" + encodeURIComponent(q);
    });
  }

  function renderSearch() {
    var input = $("#searchInput");
    var params = new URLSearchParams(location.search);
    input.value = params.get("q") || "";
    var list = $("#resultList");
    var countLabel = $(".search-layout .subtitle b");
    var activeTopic = "全部";
    var topicMap = {
      "销售与成交": ["销售", "成交", "信任", "沟通", "客户"],
      "AI 与工具": ["AI", "工具", "效率", "系统"],
      "副业与个体创业": ["副业", "个体创业", "创业", "验证", "项目"],
      "心力与个人成长": ["心力", "个人成长", "节奏", "恢复", "长期"],
      "表达与内容": ["表达", "内容", "输出", "传播"]
    };

    function haystack(session) {
      return [session.title, session.summary, (session.tags || []).join(" "), (session.questions || []).join(" "), (session.points || []).map(function (p) { return p.join(" "); }).join(" ")].join(" ");
    }

    function matchReason(session, q, topic) {
      var matched = [];
      if (q) matched.push(q);
      (topicMap[topic] || session.tags || []).forEach(function (word) {
        if (matched.length < 3 && haystack(session).indexOf(word) >= 0 && matched.indexOf(word) < 0) matched.push(word);
      });
      if (!matched.length) matched = (session.tags || []).slice(0, 3);
      return "命中关键词「" + matched.slice(0, 3).join("」「") + "」";
    }

    function matchesTopic(session, topic) {
      if (!topic || topic === "全部") return true;
      var words = topicMap[topic] || [topic];
      var text = haystack(session);
      return words.some(function (word) { return text.indexOf(word) >= 0; });
    }

    function renderResults() {
      var q = input.value.trim();
      var results = data.sessions.filter(function (session) {
        var text = haystack(session);
        var queryOk = !q || text.toLowerCase().indexOf(q.toLowerCase()) >= 0;
        return queryOk && matchesTopic(session, activeTopic);
      });
      if (!results.length && q) {
        results = data.sessions.filter(function (session) { return matchesTopic(session, activeTopic); }).slice(0, 6);
      }
      if (countLabel) countLabel.textContent = results.length;
      list.innerHTML = results.map(function (session) {
        return '<a class="result-card" href="session.html?id=' + session.id + '"><div>' + ticket(session) + '</div><div><h3>第 ' + session.number + ' 场 · ' + session.title + '</h3><p>' + session.summary + '</p><span class="match-reason">' + matchReason(session, q, activeTopic) + '</span><div class="chip-row">' + tags((session.tags || []).slice(0, 5)) + '</div></div><div class="meta-stack"><span>重点 ' + session.keyPointCount + ' 条</span><span>PPT ' + session.pptPageCount + ' 页</span><span class="button small-button">进入</span></div></a>';
      }).join("") || '<div class="panel empty-state">暂时没有找到结果，可以换一个关键词试试。</div>';
    }

    $$(".hot-words a").forEach(function (link) {
      var word = link.textContent.trim();
      link.href = "search.html?q=" + encodeURIComponent(word);
      link.addEventListener("click", function (event) {
        event.preventDefault();
        input.value = word;
        history.replaceState(null, "", "search.html?q=" + encodeURIComponent(word));
        renderResults();
      });
    });
    $$(".filter-row .chip").forEach(function (button) {
      button.addEventListener("click", function () {
        $$(".filter-row .chip").forEach(function (item) { item.classList.remove("active"); });
        button.classList.add("active");
        activeTopic = button.textContent.trim();
        renderResults();
      });
    });
    $("#filterForm").addEventListener("submit", function (event) {
      event.preventDefault();
      var q = input.value.trim();
      history.replaceState(null, "", q ? "search.html?q=" + encodeURIComponent(q) : "search.html");
      renderResults();
    });
    renderResults();
  }

  function renderSessions() {
    var grid = $("#sessionsGrid");
    var activeFilter = "全部场次";

    function sessionMatchesFilter(session, filter) {
      if (filter === "全部场次") return true;
      if (filter === "最新") return !!session.latest;
      var text = [session.title, session.summary, (session.tags || []).join(" ")].join(" ");
      return text.indexOf(filter) >= 0;
    }

    function paint() {
      var sessions = data.sessions.filter(function (session) { return sessionMatchesFilter(session, activeFilter); });
      grid.innerHTML = sessions.map(function (session) {
      return '<a class="session-card ' + (session.latest ? "latest" : "") + '" href="' + session.detailUrl + '">' + (session.latest ? '<span class="latest-ribbon">最新场次</span>' : "") + ticket(session) + '<div><h3>' + session.title + '</h3><div class="chip-row">' + tags(session.tags.slice(0, 5)) + '</div><div class="session-meta"><span>重点 ' + session.keyPointCount + ' 条</span><span>PPT ' + session.pptPageCount + ' 页</span><span>' + session.feishuStatus + '</span></div><p><span class="button small-button primary">进入档案 ' + icon("arrow") + '</span></p></div></a>';
      }).join("") + '<article class="panel empty-state"><div style="text-align:center;">持续更新中<br><small>更多活动档案，敬请期待</small></div></article>';
    }

    $$(".section-head .chip-row .chip").forEach(function (button) {
      button.addEventListener("click", function () {
        $$(".section-head .chip-row .chip").forEach(function (item) { item.classList.remove("active"); });
        button.classList.add("active");
        activeFilter = button.textContent.trim();
        paint();
      });
    });
    paint();
  }

  function currentSession() {
    var params = new URLSearchParams(location.search);
    var id = Number(params.get("id") || 22);
    return data.sessions.find(function (item) { return item.id === id; }) || data.sessions[0];
  }

  function buildSessionPoints(item) {
    var base = (item.points || []).map(function (point) { return [point[0], point[1]]; });
    var primaryTag = item.tags && item.tags[0] ? item.tags[0] : "本场主题";
    var secondaryTag = item.tags && item.tags[1] ? item.tags[1] : "关键路径";
    var title = item.title || "本场活动";
    var summary = item.summary || "把现场讨论整理为可搜索、可复盘、可行动的知识结构。";
    var additions = [
      ["本场主题", summary],
      [primaryTag, "先抓住本场最核心的主题，再回到自己的项目或关系里判断可用之处。"],
      [secondaryTag, "不要只看观点本身，要看它背后的路径、顺序和可执行条件。"],
      ["问题入口", "先判断这场内容解决什么问题，再决定要看重点、翻 PPT，还是进入飞书全文。"],
      ["真实案例", "现场案例的价值在于提供判断参照，让你知道类似场景下应该先看哪里。"],
      ["行动顺序", "先做低成本验证，再逐步放大投入，避免一开始就把问题做重。"],
      ["长期复盘", "每一场活动都不是孤立内容，而是可以沉淀到长期项目判断里的经验。"],
      ["关系视角", "涉及成交、私域和交付时，先回到信任、承诺和后续服务，而不是只看技巧。"],
      ["交付判断", "一个想法能不能变成项目，关键看能不能稳定交付，以及交付后能否持续复购。"],
      ["工具使用", "工具不是为了显得高级，而是为了缩短路径、提高效率、减少重复动作。"],
      ["搜索线索", "如果你只想快速找答案，可以用关键词搜索本场标题、标签、问题和重点整理。"],
      ["下一步", "看完这一场后，至少带走一个可以马上验证的小动作，不要只停留在收藏。"],
      ["完整上下文", "重点整理适合快速判断，真正需要细节时，再进入飞书原文查看完整上下文。"],
      ["复用方式", title + " 的内容可以拆成问题、案例、方法和行动清单，方便下次继续复盘。"]
    ];
    additions.forEach(function (point) {
      var exists = base.some(function (itemPoint) { return itemPoint[0] === point[0]; });
      if (!exists && base.length < 12) base.push(point);
    });
    return base.slice(0, 12);
  }

  function feishuPreview(item) {
    var disabled = item.feishuUrl === "#";
    var href = disabled ? "#" : item.feishuUrl;
    return '<a class="feishu-preview ' + (disabled ? "is-disabled" : "") + '" href="' + href + '"' + externalAttrs(href) + '>' +
      '<div class="feishu-shot" aria-hidden="true">' +
        '<div class="feishu-shot-bar"><i></i><i></i><i></i></div>' +
        '<div class="feishu-shot-title">第 ' + item.number + ' 场完整飞书原文</div>' +
        '<div class="feishu-shot-line wide"></div><div class="feishu-shot-line"></div><div class="feishu-shot-line short"></div>' +
        '<div class="feishu-shot-block"><span>重点</span><span>PPT</span><span>原文</span></div>' +
      '</div>' +
      '<div><strong>飞书原文预览</strong><span>点开后会进入完整记录，适合查看上下文、案例和原始讨论。</span></div>' +
      '</a>';
  }

  function makePptPages(item) {
    var seeds = [
      ["项目判断", "先判断需求、场景与交付难度。", "好需求加好项目，关键看可交付性与可持续性。"],
      ["AI 落地", "不要先问 AI 能不能做大事，先问它能不能帮你解决眼前的小事。", "从小场景开始，才会真正建立使用习惯。"],
      ["定价", "价格背后不是数字，而是结构、承诺和风险共担。", "把交付标准说清楚，价格才有支撑。"],
      ["私域", "私域真正经营的是长期关系，不是一次触达。", "内容、服务和信任会形成复利。"],
      ["成交", "成交不是一次开口，而是长期信任的自然结果。", "前面铺得越扎实，后面推进越轻。"],
      ["表达", "表达要回到对方听得懂，而不是自己讲得爽。", "能被理解，才有机会被信任。"],
      ["复盘", "每一次活动都要留下可以复用的结构。", "复盘不是记录过去，而是训练下一次。"],
      ["长期主义", "真正能长出来的项目，都需要稳定节奏。", "不要只看爆发，要看可持续。"]
    ];
    var count = Math.max(item.pptPageCount || 40, 40);
    var pages = [];
    for (var i = 1; i <= count; i += 1) {
      var seed = item.pptSlides && item.pptSlides[i - 1] ? item.pptSlides[i - 1] : seeds[(i - 1) % seeds.length];
      var no = String(i).padStart(2, "0");
      pages.push({
        pageNumber: no,
        title: seed[0],
        mainText: seed[1],
        subText: seed[2],
        imageUrl: item.pptImages && item.pptImages[i - 1] ? item.pptImages[i - 1] : (item.pptImageDir ? item.pptImageDir + "/slide-" + no + ".png" : ""),
        downloadName: "shengcai-session-" + item.number + "-ppt-" + no + ".png"
      });
    }
    return pages;
  }

  function renderSession() {
    var item = currentSession();
    document.title = "第 " + item.number + " 场 · 生财根源场档案库";
    if ($("#sessionCover")) $("#sessionCover").innerHTML = ticket(item);
    $("#sessionTitle").textContent = item.title;
    $("#sessionSummary").textContent = item.bigIdea || item.summary;
    $("#sessionTags").innerHTML = tags(item.tags || []);
    $("#sessionLabels").innerHTML = '<span class="label-pill">第 ' + item.number + ' 场</span><span class="label-pill">' + icon("calendar") + item.date + '</span><span class="label-pill">' + item.feishuStatus + '</span>';
    $("#detailEntries").innerHTML = [
      ["重点整理", "结构化梳理本场核心观点与可落地方法论", "立即查看", "#points", "file"],
      ["金句 PPT", "精选金句与结构化 PPT，快速把握全场精华", "立即查看", "ppt.html?id=" + item.id, "ppt"],
      ["飞书原文", "查看本场完整原文记录，细节与上下文更完整", item.feishuUrl === "#" ? "链接待补" : "打开原文", item.feishuUrl, "box"]
    ].map(function (entry) {
      return '<a class="detail-entry ' + (entry[3] === "#" ? "is-disabled" : "") + '" href="' + entry[3] + '"' + externalAttrs(entry[3]) + '><div class="detail-icon">' + icon(entry[4]) + '</div><h3>' + entry[0] + '</h3><p>' + entry[1] + '</p><span class="button primary small-button">' + entry[2] + ' ' + icon("arrow") + '</span></a>';
    }).join("");
    $("#pointGrid").innerHTML = buildSessionPoints(item).map(function (point, index) {
      return '<article class="point-card"><h3><b>' + String(index + 1).padStart(2, "0") + '</b>' + point[0] + '</h3><p>' + point[1] + '</p></article>';
    }).join("");
    $("#questionList").innerHTML = (item.questions || data.sessions[0].questions).map(function (q) {
      return '<li><span>' + q + '</span><span>→</span></li>';
    }).join("");
    $("#entryPanel").innerHTML = '<a class="button primary" href="#points">阅读重点整理 ' + icon("arrow") + '</a><a class="button primary ' + (item.feishuUrl === "#" ? "is-disabled" : "") + '" href="' + item.feishuUrl + '"' + externalAttrs(item.feishuUrl) + '>' + (item.feishuUrl === "#" ? "飞书链接待补" : "打开飞书完整原文") + ' ' + icon("arrow") + '</a><a class="button" href="ppt.html?id=' + item.id + '">查看金句 PPT ' + icon("arrow") + '</a>' + feishuPreview(item);
  }

  function renderPpt() {
    var item = currentSession();
    var pages = makePptPages(item);
    var index = 0;
    document.title = "第 " + item.number + " 场 PPT · 生财根源场档案库";
    if ($("#pptTitle")) $("#pptTitle").textContent = "这一场的 " + item.pptPageCount + " 页大字版";
    if ($("#pptSubtitle")) $("#pptSubtitle").textContent = "第 " + item.number + " 场 · 一页一个重点，快速提炼核心观点。";
    if ($("#backToSession")) $("#backToSession").href = "session.html?id=" + item.id;
    var forceHtmlPpt = new URLSearchParams(location.search).has("renderHtml");

    function paint() {
      var page = pages[index];
      if ($("#pptStage")) {
        $("#pptStage").innerHTML = page.imageUrl && !forceHtmlPpt
          ? '<img class="ppt-image" src="' + page.imageUrl + '" alt="第 ' + page.pageNumber + ' 页 PPT">'
          : '<div class="ppt-label">生财根源场</div><div class="ppt-main"><h2>' + page.mainText.replace("，", "，<br>") + '</h2><p>' + page.subText + '</p></div>';
      }
      if ($("#pptCount")) $("#pptCount").innerHTML = '<strong>' + page.pageNumber + '</strong><span> / ' + pages.length + '</span>';
      if ($("#savePptImage")) {
        $("#savePptImage").href = page.imageUrl || "#";
        $("#savePptImage").setAttribute("download", page.downloadName);
        $("#savePptImage").classList.toggle("is-disabled", !page.imageUrl);
        $("#savePptImage").textContent = page.imageUrl ? "保存当前图片" : "图片待生成";
      }
      if ($("#pptSaveNote")) {
        $("#pptSaveNote").textContent = page.imageUrl ? "当前页已是 Image2 成品图，可以直接保存。" : "当前页是网页预览；等 Image2 成品图生成后，保存按钮会自动可用。";
      }
      $$("#pptMenu button").forEach(function (button, buttonIndex) {
        button.classList.toggle("active", buttonIndex === index);
      });
    }

    $("#pptMenu").innerHTML = pages.map(function (page, pageIndex) {
      return '<button type="button" data-index="' + pageIndex + '"><span>' + page.pageNumber + '</span><span>' + page.title + '</span></button>';
    }).join("");
    $$("#pptMenu button").forEach(function (button) {
      button.addEventListener("click", function () {
        index = Number(button.dataset.index);
        paint();
      });
    });
    if ($("#pptPrev")) $("#pptPrev").addEventListener("click", function () {
      index = (index + pages.length - 1) % pages.length;
      paint();
    });
    if ($("#pptNext")) $("#pptNext").addEventListener("click", function () {
      index = (index + 1) % pages.length;
      paint();
    });
    paint();
  }

  function renderUpdate() {
    var u = data.updates;
    $("#updateStats").innerHTML = [
      ["待整理", u.pendingOrganize, "场", "box"],
      ["已上架", u.published, "场", "shield"],
      ["待补飞书链接", u.pendingFeishu, "场", "file"],
      ["待补 PPT", u.pendingPpt, "场", "ppt"]
    ].map(function (item) {
      return '<article class="status-card panel"><div class="status-icon">' + icon(item[3]) + '</div><div><span>' + item[0] + '</span><strong>' + item[1] + '</strong><small>' + item[2] + '</small></div></article>';
    }).join("");
    $("#todoList").innerHTML = u.todoList.map(function (todo) {
      return '<li><input type="checkbox"><span>' + todo + '</span></li>';
    }).join("");
  }

  document.addEventListener("DOMContentLoaded", function () {
    shell();
    var page = document.body.dataset.page;
    if (page === "home") renderHome();
    if (page === "search") renderSearch();
    if (page === "sessions") renderSessions();
    if (page === "session") renderSession();
    if (page === "ppt") renderPpt();
    if (page === "update") renderUpdate();
  });
})();
