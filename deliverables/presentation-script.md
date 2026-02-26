# Script thuyết trình chi tiết — từng slide

Script đầy đủ để đọc khi present. Mỗi slide có nội dung chi tiết, số liệu và giải thích rút từ deliverables. Có thể rút gọn khi thiếu thời gian nhưng giữ ý chính.

---

## Giải thích thuật ngữ (glossary)

Dùng khi BGK hoặc người nghe hỏi, hoặc khi cần nói rõ ý trong lúc present.

| Thuật ngữ | Giải thích |
|-----------|------------|
| **Identity on-chain** | Danh tính (identity) của agent được ghi và xác minh trên blockchain — không lưu trên server tập trung. Mỗi agent có thể có địa chỉ ví, token hoặc contract riêng trên chain; ai nắm key thì sở hữu/điều khiển agent đó. Chuẩn như ERC-8004 dùng để “token hóa” agent (agent = identity on-chain). |
| **Bonding curve** | Đường cong định giá: giá mua/bán **share** (cổ phần) của agent phụ thuộc vào số share đã bán. Càng nhiều người mua, giá càng tăng; bán ra thì giá giảm. Cho phép giao dịch share không cần sàn order book; thanh khoản và giá do công thức curve quyết định. |
| **BSC** | Binance Smart Chain — blockchain tương thích EVM do Binance vận hành. Phí gas thấp, tốc độ nhanh; ecosystem DeFi và user lớn. Trong script: ClawFriend chạy trên BSC, đối thủ chưa ai chiếm skill/agent marketplace trên BSC. |
| **Web3** | Internet phi tập trung dựa trên blockchain: ví, smart contract, token, dữ liệu on-chain. Ở đây: AI agent + skill/plugin marketplace gắn với ví, thanh toán on-chain, identity on-chain. |
| **Skill / plugin marketplace** | Nơi user hoặc agent có thể cài thêm “skill” (tính năng, plugin) — ví dụ Whale Alert, Rug Check — để mở rộng chức năng. Marketplace = catalog skill + cơ chế cài, có thể trả phí hoặc holder-gated. |
| **Holder-gated** | Chỉ người **đang nắm share** (holder) của agent mới được dùng bản nâng cao của skill (filter mạnh hơn, real-time, unlimited alert…). Không có share thì dùng bản free/giới hạn. Thay cho mô hình subscription. |
| **Shares (cổ phần agent)** | “Cổ phần” của một agent — mua/bán trên bonding curve. Holder được quyền lợi (vd holder-gated skill, chia fee). BGK mua share winner = mua cổ phần agent thắng cuộc thi on-chain. |
| **5% fee / subject fee** | Protocol thu **5%** trên volume giao dịch (mua/bán share). Phần fee này dùng để tài trợ prize tuần sau (flywheel) hoặc nuôi kênh khác khi đủ lãi. “Subject” = gắn với chủ thể (agent/skill). |
| **Discovery** | Bước “tìm thấy” — user tìm skill/agent (search, category, ranking). ClawHub chỉ làm discovery (tìm và cài skill); ClawFriend thêm monetization (fee, share, holder-gated). |
| **Flywheel** | Vòng lặp tự cường: volume mua bán → fee 5% → prize tuần sau → thu hút thêm agent/user → volume tăng → fee tăng… Càng chạy càng to. |
| **FOMO** | Fear of missing out — sợ bỏ lỡ. User mua share sớm vì sợ giá lên sau khi agent thắng (BGK mua $2.5K đẩy giá); hoặc sợ bỏ lỡ cơ hội vào platform. |
| **On-chain** | Giao dịch hoặc dữ liệu được ghi trên blockchain (minh bạch, không đổi được). VD: BGK mua share winner on-chain = giao dịch thật trên chain. |
| **Snapshot** | Chốt dữ liệu tại một thời điểm — VD Chủ nhật 23:59 chốt BXH theo dữ liệu đến lúc đó để xác định winner, không nhận thêm dữ liệu sau. |
| **BXH** | Bảng xếp hạng (leaderboard) — thứ hạng agent theo tiêu chí (lượt tải skill, điểm BGK…). |
| **BGK** | Ban Giám khảo — trong cơ chế cuộc thi: BGK chấm/chốt winner và dùng $2.500 mua share agent thắng. |
| **Prize** | Giải thưởng — ở đây = BGK mua $2.500 share của agent thắng mỗi tuần (4 tuần = $10K). Từ tuần 5: prize lấy từ fee. |
| **Cold start** | Giai đoạn khởi động khi chưa có user/agent: cần announce, waitlist, seeding 5–10 agent (team/partner) để BXH có nội dung, FOMO hoạt động. |
| **Organic / paid channel** | **Organic:** kênh không trả tiền quảng cáo — blog, partnership, SEO. **Paid:** trả tiền — ở đây toàn bộ $10K = prize cuộc thi (paid cho winner qua mua share). |
| **KOL** | Key Opinion Leader — người có ảnh hưởng (influencer). Script nói không dùng ngân sách cho KOL/ads. |
| **Lead magnet** | Nội dung hoặc lợi ích miễn phí để “kéo” user vào (vd skill free 5 lần quét/ngày) rồi chuyển sang holder-gated hoặc mua share. |
| **UTM** | Tham số trong link (utm_source, utm_medium…) để đo nguồn traffic (vd sign-up từ blog, từ OpenClaw). |
| **CTA** | Call to action — lời kêu gọi hành động (vd “Install skill”, “Mua share”). |
| **GTM** | Go-to-market — chiến lược đưa sản phẩm ra thị trường (kênh, timeline, metric). |
| **x402 / ERC-8004** | **x402:** chuẩn thanh toán theo request (pay-per-use) cho API/tool. **ERC-8004:** chuẩn token/identity cho agent trên Ethereum-compatible chain. Đối thủ Heurist, SkillGem, MoltBazaar dùng; ClawFriend dùng BSC + bonding curve. |
| **USDC** | Stablecoin neo 1:1 với USD; dùng để thanh toán (vd ClawMarket dùng USDC escrow cho skill). |
| **Nascent** | Sơ khai, mới nổi — thị trường skill/agent Web3 đang ở giai đoạn nascent. |
| **Creator monetization** | Creator (người tạo skill/agent) kiếm tiền — qua fee share, holder-gated, prize… ClawFriend giải bài toán này; ClawHub không có lớp monetization. |

---

## Slide 1 — Title (khoảng 30 giây)

Kính chào Ban Giám khảo, kính chào Lab3 và mọi người.

Hôm nay em trình bày đề tài kế hoạch go-to-market cho Skill Market của **ClawFriend**. ClawFriend là nền tảng AI agent Web3 với identity on-chain, bonding curve và marketplace skill/plugin, chạy trên BSC. Bài làm của em gồm ba phần chính theo Guidebook: Competitive Landscape, Skill Research, và Distribution Plan; cuối cùng là phần AI Showcase.

Trình bày bởi [Tên thí sinh / Team của bạn]. Em xin phép được bắt đầu.

---

## Slide 2 — Competitive Landscape (khoảng 3 phút)

Em xin trình bày phần Competitive Landscape. Em đã phân tích **sáu đối thủ trực tiếp** trong cùng phân khúc Web3 skill marketplace và agent marketplace: ClawHub hay OpenClaw, Heurist Mesh, SkillGem, Hedera Agent Marketplace, ClawMarket, và MoltBazaar. Tất cả đều cùng business model: AI agent cộng skill hoặc plugin marketplace trên Web3.

**Số liệu từng đối thủ:**

**ClawHub (OpenClaw):** Đây là skill registry và framework agent mã nguồn mở, cài qua lệnh npx clawhub install. Theo nguồn thecaio.ai và claw-hub.net: ClawHub có **hơn 5.700 skill**, **hơn 1,5 triệu lượt tải** tổng cộng, và OpenClaw có **hơn 180 nghìn GitHub stars**. Skill top như Capability Evolver có hơn 35 nghìn lượt tải. Khoảng 40 đến 60 skill mới mỗi ngày. Điểm mạnh: kho skill lớn nhất, dev dùng nhiều, có semantic search và category, version control và community ratings. Điểm yếu: không có lớp kinh tế — không shares, không fee — không identity agent, không social; chỉ làm discovery. Cách monetize: registry miễn phí, không có monetization cho creator hay holder-gated. User chọn ClawHub khi cần tìm skill nhanh, nhiều lựa chọn, free. User không chọn khi muốn kiếm tiền từ skill hoặc gắn skill với cổ phần agent. Bài học cho mình: ClawFriend có thể bổ trợ ClawHub — cùng luồng cài, thêm holder-gated, 5% subject fee và identity agent với shares và social.

**Heurist Mesh:** Marketplace skill cho agent Web3, tập trung tool crypto và blockchain. Nguồn mesh.heurist.ai và docs.heurist.ai: **25 data provider**, **100 tool** triển khai, **40 agent**, dùng X402 và ERC-8004. Monetize qua API key và x402 trả theo request bằng stablecoin. Điểm mạnh: crypto-native với ví, Pump.fun, DexScreener; reputation on-chain; tích hợp nhanh. Điểm yếu: tập trung data và tool; không có cổ phần agent, không bonding curve. User chọn khi agent cần data hoặc tool Web3 chuẩn, trả theo lượt. User không chọn khi cần giao dịch share agent hoặc social stream. Bài học: ClawFriend khác ở chỗ có identity agent, shares, social và skill holder-gated.

**SkillGem:** Đóng gói chuyên môn thành skill cho agent no-code, micropayment x402, reputation ERC-8004. Nguồn skillgem.ai: **hơn 20 nền tảng** gồm Claude Code, Cursor, Gemini CLI, Slack, Discord, Chrome; x402 pay-per-use. Điểm mạnh: no-code, đa nền tảng, thanh toán và reputation on-chain. Điểm yếu: không token hóa agent hay shares, không bonding curve, skill đứng riêng không holder-gated. Bài học: ClawFriend gắn skill với agent và cổ đông holder-gated, nên demand skill bằng demand share.

**Hedera Agent Marketplace:** Marketplace agent AI privacy trên Hedera, skill registry HCS-26, messaging HCS-10, privacy HCS-19, OpSpawn vận hành. Điểm mạnh: privacy, compliance, skill registry có chuẩn. Điểm yếu: gắn Hedera, ecosystem nhỏ hơn BSC và L2, không bonding curve hay social công khai. Bài học: ClawFriend focus BSC, bonding curve và social; chain và định vị khác.

**ClawMarket:** Skill marketplace paid và free trên Base và Ethereum, wallet auth, USDC escrow. Nguồn claw-market.xyz: **hơn 15 skill**, USDC escrow, download token 24h hoặc permanent re-download. Điểm mạnh: crypto-native, API cho agent autonomous. Điểm yếu: số skill còn ít, không bonding curve hay share agent, không social stream. Bài học: ClawFriend tương thích paid skill nhưng thêm BSC, shares, holder-gated và social.

**MoltBazaar:** Agent marketplace trên Base, người thuê agent làm task, agent ERC-8004 identity, verified skills từ openclaw-skills, USDC và x402. Focus "thuê agent" chứ không focus skill marketplace cho creator; không bonding curve share agent, không BSC. Bài học: ClawFriend focus skill market và share trading và social; MoltBazaar focus task và bounty; segment khác.

**Tổng quan thị trường:** Thị trường đang ở giai đoạn **nascent** — sơ khai. Chưa có nền tảng nào gom đủ bốn thứ trong một chỗ: identity agent, shares hay bonding curve, skill marketplace holder-gated, và social stream. Theo volume và adoption thì ClawHub đang dẫn đầu về skill và download; Heurist Mesh dẫn về depth Web3 và tool. **BSC hiện chưa có player nào chiếm skill hay agent marketplace.** So sánh chain: ClawHub, Heurist, SkillGem đa nền tảng; ClawMarket và MoltBazaar trên Base và Ethereum; Hedera trên Hedera. **Không ai focus BSC.** Gap chưa ai lấp: BSC, bonding curve cộng share agent, holder-gated skill, và social stream trong cùng nền tảng. Có chỗ cho người mới vì thị trường nascent và không ai có combo BSC cộng bonding curve cộng holder-gated skill cộng social.

**ClawFriend khác ở đâu:** ClawHub có 5.700+ skill và 1,5M+ download nhưng chỉ discovery, không monetization, không share agent — ClawFriend là discovery cộng monetization 5% fee cộng share agent cộng social. Heurist có 100 tool và 40 agent nhưng không bonding curve, không BSC — ClawFriend có BSC, bonding curve và holder-gated skill trong một nền tảng. ClawMarket có USDC paid skill trên Base và Ethereum nhưng 15+ skill và không share agent — ClawFriend có BSC, shares và holder-gated. **Định vị chiến lược:** BSC cộng Bonding Curve cộng Skill Market holder-gated cộng Social. Đánh vào ba segment đối thủ bỏ ngỏ: thứ nhất là **BSC** — không đối thủ nào focus BSC cho skill và agent marketplace; thứ hai là **agent economy đầy đủ** — bonding curve, holder-gated skill và social trong một nền tảng; thứ ba là **creator monetization** — 5% subject fee và skill holder-gated, trong khi đối thủ hoặc free hoặc x402 không gắn share agent.

**Thua hiện tại:** Mình thua ClawHub về số lượng skill; thua Heurist về độ trưởng thành tool. Cách giảm thiểu: tập trung distribution, focus BSC và đẩy mạnh skill market như trong Distribution Plan.

Em xin chuyển sang phần Skill Research.

---

## Slide 3 — Skill Research (khoảng 4 phút)

Phần Skill Research em nghiên cứu **20 skill** trong **10 chủ đề**: Scrypto, DeFi và Yield, Crypto Alert, Alpha và Social, Sức khỏe, Vĩ mô, Thể thao, AI và Bot, Công nghệ, Tin tức và Productivity. Mỗi skill có target user, vấn đề cần giải quyết, alternative hiện tại, cách skill giải quyết, visibility và monetization, và **bằng chứng demand có nguồn**. Em đề xuất **10 skill xuất sắc nhất** để ưu tiên triển khai hoặc pitch cho BGK — chọn theo bằng chứng demand rõ, fit với ClawFriend BSC và holder-gated, và tiềm năng kéo user cùng monetization.

**Tại sao các skill này cần thiết:** Có demand thật — nhiều tool trả phí đang thu tiền; fit BSC và holder-gated; vừa kéo user vừa tạo doanh thu cho creator. Số liệu demand: **Nansen** từ 99 đến 999 đô mỗi tháng; **Whale Alert** hơn 2,5 triệu followers và khoảng 500 nghìn retweet mỗi tháng; **Token Sniffer** hơn 30 nghìn contract mỗi ngày, 50 đến 75% là scam; **YO Protocol** hơn 1 triệu đô earn volume trong hai tuần đầu. Các nguồn này có ghi trong deliverable skill-research.

**Mười skill đề xuất và lý do chọn ngắn gọn:**

1. **Real-time Whale / Smart Money Tracker** — Scrypto. Demand đã validate: Nansen 99–999 đô mỗi tháng, Whale Alert 2,5M+ followers; core use case BSC; public rồi holder-gated rõ. Target user: trader crypto DeFi portfolio 5K–100K đô, trade 3–5 lần mỗi tuần, đang dùng hoặc cân nhắc Nansen Arkham nhưng thấy đắt. Skill: agent theo dõi 500+ ví whale trên BSC, alert trong 30–60 giây khi whale move trên ngưỡng, ví dụ 50K đô.

2. **Rug Pull / Scam Token Detector BSC** — Scrypto. Pain point cao — mất tiền một lần là đau; nhiều tool trả phí nên thị trường có sẵn; lead magnet 5 lần quét mỗi ngày để drive share. Token Sniffer 30K+ contract mỗi ngày; Reddit Telegram đầy câu hỏi "rug check", "is this token safe".

3. **DeFi Yield Optimizer / APY So sánh BSC** — DeFi và Yield. YO Protocol hơn 1M đô earn volume hai tuần là bằng chứng demand; holder BSC cần so pool; data có giá trị nên holder-gated real-time hợp lý.

4. **Alpha / Sentiment từ Social Twitter và Telegram** — Alpha và Social. Khớp spec Alpha Hunting và Off-chain Signal; LunarCrush và Santiment đang monetize; holder-gated tự nhiên vì alpha dễ copy.

5. **Token Price Alert BSC và đa chain** — Crypto Alert. Thị trường 24/7, nhu cầu alert phổ biến; nhiều bot Telegram; freemium 1–3 alert rồi unlimited gated.

6. **KOL / Influencer Track và Mention Alert** — Alpha và Social. Khác biệt so tool truyền thống; câu hỏi "when did X mention Y" rất phổ biến; drive hold share cho list KOL lớn.

7. **Medication / Nhắc uống thuốc thông minh** — Sức khỏe. Medisafe hơn 10 triệu download; WHO và CDC nhấn mạnh adherence; tác động xã hội lớn; mở rộng sang user không crypto.

8. **Macro Indicator Digest — CPI, lãi suất, việc làm** — Vĩ mô. Trader và investor react mạnh vào macro; Bloomberg và Refinitiv bán data nên demand có; digest ngắn phù hợp agent.

9. **No-code Workflow Builder — kết nối app và trigger** — AI và Bot. Zapier valuation tỷ đô; no-code trend; platform play — nhiều workflow tạo stickiness và holder-gated run.

10. **Meeting Notes chuyển thành Tasks — biên bản thành action items** — Productivity. Otter và Fireflies thu phí; meeting fatigue; productivity use case dễ demo, phù hợp B2B và team.

**Chiến lược Visibility và Monetization:** **Public free** làm lead magnet — kéo user vào. **Holder-gated** cho bản nâng cao — filter nâng cao, real-time, unlimited alert tùy skill. **Share model** thay vì subscription — giống Nansen RugChecker đang thu subscription; mình dùng mô hình share và holder-gated. Có thể điều chỉnh 10 skill này theo chiến lược GTM — ví dụ nhấn mạnh crypto trước thì tăng tỷ trọng Scrypto DeFi Alpha; muốn đa dạng thì giữ sức khỏe, vĩ mô, productivity.

Em xin chuyển sang Distribution Plan.

---

## Slide 4 — Distribution: Ràng buộc và Lựa chọn (khoảng 1 phút)

Kế hoạch phân phối với mục tiêu: làm thế nào để user biết đến ClawFriend và dùng Skill Market trong tháng đầu, với ngân sách **10.000 đô**. Ràng buộc: ngân sách tháng 1 là 10.000 đô; ít nhất một kênh organic và một kênh paid; plan đủ cụ thể để intern đọc xong biết ngày mai làm gì.

**Các hướng khác:** Chúng ta **phân bổ ít** hoặc **chỉ free** — và nêu rõ **tại sao**. KOL và ads: trả nhiều = mua reach một lần, không tạo flywheel (user xem xong đi, không gắn skill/share); CPC cao, conversion thấp; thí sinh khác cũng làm nên không phân biệt — ít tiền hoặc barter thì thử được mà không đốt 10K. Cộng đồng Telegram Discord: tốn tiền mua ads trong group thường hiệu quả thấp, dễ spam; post free vẫn dẫn link, đủ hỗ trợ. Blog, bounty, referral: làm free (blog đã là Kênh 2) vẫn có traffic và install; trả BNB reward lớn từ 10K thì nhiều bài khác cũng đề xuất, không đủ phân biệt, và không gắn trực tiếp prize cộng fee. Creator guarantee fee: là trả tiền đổi reach giống KOL — không phải cơ chế nội tại; 10K dồn prize tạo flywheel rõ hơn.

**Tại sao tổ chức cuộc thi hàng tuần chứ không phải tháng hay một lần?** Thứ nhất: không muốn all-in một lần vì có thể flop — chia 4 tuần là 4 lần thử, mỗi tuần học và điều chỉnh được, giảm rủi ro. Thứ hai: team dev sẽ tập trung làm skill tốt để cố gắng giành giải ở cả 4 tuần đầu → marketplace có nhiều skill chất lượng, giảm rủi ro tuần 1 không có ai ra skill hay. Thứ ba: có lợi thế BGK chống lưng nhưng không được lộ liễu; nếu người ngoài làm tốt thì vẫn trao giải như thường — công bằng, minh bạch.

**Quyết định: tập trung tối đa.** Toàn bộ 10.000 đô và sự tập trung dồn vào **một thứ duy nhất** để tạo flywheel: **Cuộc thi hàng tuần.** Guidebook yêu cầu ít nhất 3–5 kênh; ở đây có **ba kênh**: Kênh 1 paid — Cuộc thi hàng tuần, toàn bộ 10K; Kênh 2 organic — Technical blog, 0 đô; Kênh 3 organic — Partnership OpenClaw, 0 đô. Hai kênh organic không chia budget; trụ chính là cuộc thi.

---

## Slide 5 — Cơ chế Cuộc thi Hàng tuần (khoảng 1,5 phút)

Cơ chế cuộc thi: **2.500 đô nhân 4 tuần bằng 10.000 đô.** Toàn bộ budget là giải thưởng — Prize. Không dành cho KOL, ads hay kênh khác. Mỗi **Chủ Nhật**, BGK dùng **2.500 đô mua share của agent thắng** ngay trên bonding curve on-chain. Từ tháng 2 trở đi: dùng fee từ volume giao dịch để tiếp tục prize — ví dụ 1.500 đến 2K đô mỗi tuần tùy fee thu được. **Khi cuộc thi có lợi nhuận đủ lớn** — fee vượt mức prize cần thiết — thì trích một phần để **nuôi các kênh khác**: blog trả phí, partnership incentive, hoặc kênh paid bổ sung; flywheel không chỉ tự nuôi prize mà còn mở rộng acquisition.

**Đối tượng tham gia:** Mọi agent trên ClawFriend đều có quyền tham gia — tự đăng ký hoặc mặc định tham gia nếu có skill mới trong tuần.

**Đề bài và tiêu chí:** Gắn với **skill**. **Tuần 1 chốt:** xếp hạng theo **lượt tải skill trong tuần** (on-chain hoặc platform verifiable), công bố rõ trong thể lệ. Từ tuần 2 trở đi có thể thêm BGK hoặc LLM — ví dụ 50% lượt tải, 50% BGK. Skill tốt có thể bonus điểm hoặc hạng riêng "Skill of the week". Có thể đổi đề mỗi tuần — ví dụ tuần 1 skill hữu ích cho BSC trader, tuần 2 skill nhiều download nhất, tuần 3 BGK chấm sáng tạo.

---

## Slide 6 — Bảng xếp hạng và Lợi ích kép (khoảng 1,5 phút)

Trên platform có trang **Leaderboard tuần này** hiển thị thứ hạng, tên agent, điểm từ BGK hoặc lượt tải; có thể hiển thị "BGK đang xếp agent X dẫn đầu".

**Lịch cập nhật BXH:**

**Thứ Hai đến Thứ Bảy:** BXH **cập nhật realtime** — ví dụ mỗi 1 đến 2 giờ. Số liệu mới như lượt tải và điểm BGK được cập nhật liên tục nên thứ hạng đổi. Hành vi user: theo dõi, FOMO, dự đoán ai sẽ thắng, mua share trong tuần — agent dẫn đầu hoặc hạng 2 đến 4. Mua bán tạo volume và fee 5%.

**Chủ Nhật:** BXH **không cập nhật nữa** — đóng băng từ đầu ngày Chủ Nhật cho đến khi chốt. Không có dữ liệu mới đẩy vào BXH. Tại sao đóng băng: tránh nhiều người đổ xô mua share ngay trước giờ chốt; ngày Chủ Nhật chỉ còn việc chờ snapshot và công bố winner, không còn dữ liệu mới để sprint cuối. User hồi hộp chờ kết quả; mọi quyết định mua hoặc giữ đã phải thực hiện từ Thứ Hai đến Thứ Bảy. **Chốt và công bố:** Chủ Nhật ví dụ **23:59** chốt snapshot theo dữ liệu đã thu trước khi đóng băng BXH. Công bố winner. BGK dùng 2.500 đô mua share của agent thắng trên bonding curve on-chain. Có thể livestream hoặc tweet công bố.

**Bốn lợi ích cốt lõi — Flywheel:**

1. **Nguồn skill chất lượng:** Người dự thi phải tạo và publish skill để được xếp hạng. Marketplace nhận rất nhiều skill từ chính người thi; càng chạy lâu kho skill càng đầy.

2. **Incentive tài chính — FOMO:** User mua share của agent có skill đột phá khi giá còn rẻ — đầu tuần hoặc khi agent đang hạng 2–3 — giữ đến Chủ Nhật. Nếu agent đó thắng, BGK dùng 2.500 đô mua share → cầu tăng → giá đẩy lên → user mua sớm được lợi. Mua trước, chờ BGK mua đẩy giá là incentive tài chính trực tiếp. Cược hạng 2–4 bứt tốc cũng tạo engagement.

3. **Nguồn tester vô tận:** Để đánh giá — lượt tải hoặc trải nghiệm — user và BGK phải cài và dùng skill. Mỗi lần đánh giá là một lần test skill; không cần thuê tester; skill được stress-test bởi người dùng thật.

4. **Kéo user từ skill market khác:** Các nền tảng skill khác dù build tốt nhưng **không có sự chú ý** — visibility, prize, spotlight — nên creator **mất động lực**. Họ sẽ chuyển sang nền tảng có cuộc thi, có giải thưởng, có BXH realtime. Ta thu hút nguồn lực đông đảo — agent, skill, user — → volume tăng → fee tăng → prize mạnh hơn → càng thu hút thêm → **vòng lặp càng ngày càng to** → tiền.

Mua bán trong tuần → volume → fee 5% → prize tuần sau từ tuần 5 trở đi. Khi lợi nhuận đủ lớn thì trích ra nuôi các kênh khác — cuộc thi tự nuôi sau 4 tuần đầu và có thể mở rộng acquisition.

---

## Slide 7 — Kênh organic và Timeline (khoảng 1 phút)

**Kênh 2 — Technical blog, 0 đô:** Tại sao chọn: DeFi và crypto dev cùng power user đọc tutorial; blog dẫn về skill cụ thể trên marketplace là traffic có intent. Không tốn tiền, bổ trợ SEO và credibility. Action plan: Viết 4 đến 6 bài mỗi tháng trên Mirror.xyz hoặc blog clawfriend.ai. Mỗi bài là tutorial dùng **một skill cụ thể** từ marketplace — ví dụ "Cách dùng Whale Alert Skill theo dõi smart money trên BSC". Mỗi bài có CTA: Install skill trên ClawFriend, link thẳng tới skill detail. Cross-post tóm tắt lên Twitter, r/cryptocurrency, Telegram nhóm BSC và DeFi — không spam, chỉ khi có giá trị. Timeline: Tuần 1–2 hai bài đầu — skill Whale Tracker và Rug Check; tuần 3–4 hai bài — Yield APY và Price Alert; từ tháng 2 duy trì 4–6 bài mỗi tháng. Cost 0 đô. Metric: page views; sign-up từ UTM link trong bài; số download skill được feature trong bài.

**Kênh 3 — Partnership OpenClaw, 0 đô:** Tại sao chọn: OpenClaw ClawHub có 5.700+ skill và 180K+ stars; user đã dùng lệnh npx clawhub install. Integration "1-click install skill từ ClawFriend" — họ có thêm nguồn skill, mình có user từ community họ. Win-win, không tốn tiền. Action plan: (1) Build flow từ ClawFriend Skill Market đến "Install với ClawHub" — link hoặc script tương thích clawhub install. (2) Liên hệ maintainer ClawHub OpenClaw qua Twitter, GitHub issue hoặc PR: đề xuất integration — skill trên ClawFriend có thể install qua clawhub. (3) Đề xuất PR hoặc docs: thêm ClawFriend như một nguồn skill trong docs OpenClaw. (4) Tweet và post trong community OpenClaw khi có integration. Timeline: Tháng 1 hoàn thành flow kỹ thuật và draft đề xuất; tuần 2–3 gửi đề xuất và 1–2 follow-up; từ tháng 2 duy trì nếu đạt hợp tác. Cost 0 đô. Metric: số install qua flow ClawHub đến ClawFriend; số referral từ OpenClaw community qua UTM; response từ maintainer.

**Timeline tổng hợp:** **Trước tuần 1:** Kênh 1 — Công bố thể lệ: đề bài skill, tiêu chí xếp hạng, Chủ Nhật chốt, prize bằng BGK mua 2.500 đô share winner. Build trang Leaderboard tuần: cập nhật realtime Thứ Hai đến Thứ Bảy; Chủ Nhật không cập nhật — đóng băng — đến khi chốt. Quyết định pipeline chấm: BGK tay, LLM rubric, hoặc chỉ lượt tải. Tweet và post announce "Cuộc thi hàng tuần bắt đầu từ [ngày]". **Tuần 1 đến 4:** Kênh 1 — Mỗi tuần mở đăng ký, cập nhật BXH, Chủ Nhật chốt, BGK mua 2.500 đô share, công bố; theo dõi volume và fee. Kênh 2 và 3 — Publish bài, gửi đề xuất OpenClaw. **Sau tuần 4:** Prize tuần 5 trở đi từ fee — flywheel. Khi fee đủ lớn thì trích phần nuôi kênh khác — blog, partnership, paid. Kênh 2 và 3 duy trì 4–6 bài mỗi tháng và partnership.

**Metric cuộc thi:** Số agent tham gia mỗi tuần; số skill mới mỗi tuần; volume giao dịch share mua bán on-chain; fee protocol thu được — 5% volume để tái đầu tư prize tuần sau; số user mới sign-up do FOMO vào platform mua share; engagement leaderboard — lượt xem trang leaderboard, thời gian trên trang.

---

## Slide 8 — AI Showcase (khoảng 2 phút)

Phần AI Showcase gồm hai nhánh: AI cho research và AI để deliver — video trợ lý ảo thuyết trình.

**AI cho research:** Em dùng **Cursor** và **web search**. Mọi số liệu đều đối chiếu với nguồn thực tế trước khi đưa vào deliverables — không dừng ở "AI cho em". Competitive Landscape: prompt tìm Web3 agent và skill marketplace — Heurist Mesh, SkillGem, ClawHub, ClawMarket, MoltBazaar, Hedera — lấy số liệu GitHub stars, download, tool count từ website và docs, tổng hợp bảng và kết luận có nguồn. Skill Research: prompt tìm demand — whale alert, rug pull, yield tool, Nansen pricing, Whale Alert followers — viết từng skill có bằng chứng số liệu và tool trả phí hiện có, có nguồn. Distribution Plan: thảo luận ý tưởng với AI — cuộc thi hàng tuần, BXH realtime, đóng băng Chủ Nhật, BGK mua share, flywheel — viết plan chi tiết; cơ chế BXH Thứ Hai đến Thứ Bảy cập nhật, Chủ Nhật đóng băng được mô tả rõ trong deliverable. Chi tiết prompt có trong file **ai-showcase prompts-used.md** — BGK có thể xem trong repo.

**AI để deliver — Video trợ lý ảo thuyết trình:** Thay vì chỉ đọc slide bằng miệng, em tạo **video pitch khoảng 15 phút**: avatar trợ lý ảo đọc script từ ba deliverables; slide đổi theo từng đoạn — nói đến đâu đổi slide đến đó. Video dùng khi present phát trên màn hình hoặc gửi kèm; phần Q&A vẫn do người trả lời trực tiếp.

**Quy trình đã dùng:** (1) **Script** — file script-vi.txt, tiếng Việt, năm segment (Title, Competitive, Skill, Distribution, AI Showcase), nội dung rút từ presentation-outline và ba deliverables; mỗi segment nằm giữa dấu SEGMENT N để dễ cắt khi tạo audio. (2) **Voice TTS** — Edge TTS của Microsoft, script Python gen-audio đọc script-vi.txt, tách năm đoạn, gọi Edge TTS giọng vi-VN-HoaiMyNeural, xuất năm file MP3 vào folder audio. (3) **Avatar nói** — D-ID hoặc SadTalker: upload ảnh avatar và từng file MP3, tool tạo clip video có biểu cảm và sync môi theo audio; mỗi segment một clip. (4) **Slide** — export ảnh từng slide từ Gemini Canvas vào folder slides, map segment với slide. (5) **Ghép video** — CapCut: import clip avatar và ảnh slide; track nền là slide, track trên là clip avatar thu nhỏ đặt góc; nói đến đâu đổi slide đến đó; export MP4 1080p. (6) **Video cuối** — file MC.mp4 host trên Google Drive vì lớn hơn 100 MB; link ghi trong README. Chi tiết từng bước có trong **ai-showcase video-step-by-step.md** và các file ghép-video-capcut, tts-vietnamese-options trong repo.

Tóm tắt: Em dùng AI không chỉ để research — Cursor và web search, có verify nguồn — mà còn để deliver: script từ deliverables → Edge TTS giọng Việt → D-ID avatar nói → CapCut ghép với slide → video pitch MC.mp4. Video có thể phát khi present; phần Q&A em trả lời trực tiếp.

---

## Slide 9 — Q&A và Checklist (5–8 phút)

Em xin kết thúc phần trình bày và sẵn sàng Q&A. Dưới đây là một số câu em đã chuẩn bị:

**Đối thủ X đã có 50K user, tại sao marketplace mình sẽ thắng?** — Em phân tích cụ thể: đối thủ focus gì, mình có gì. Họ thiếu BSC và Bonding Curve; mình có BSC, bonding curve, skill market holder-gated và social. Mình giải bài toán creator monetization bằng 5% fee share và holder-gated skill mà đối thủ chưa gom đủ trong một nền tảng. Kết luận dựa trên số liệu trong Competitive Landscape, không chỉ ý kiến.

**Skill này có ai thực sự cần không? Có drive user không?** — Có bằng chứng demand: Nansen đang thu 99 đến 999 đô mỗi tháng; Whale Alert có 2,5 triệu followers; Token Sniffer 30K+ contract mỗi ngày; YO Protocol hơn 1M đô earn volume hai tuần; RugChecker, DeBank, LunarCrush đang được dùng. Các tool trả phí và freemium này chứng tỏ user sẵn sàng trả hoặc dùng — demand là có thật. Chi tiết từng skill có trong deliverable skill-research với nguồn.

**10.000 đô budget tháng đầu có đủ không?** — 100% mười nghìn đô dồn vào giải thưởng công khai: mỗi Chủ Nhật BGK dùng 2.500 đô mua share winner on-chain — minh bạch. Không rải tiền cho KOL hay ads. Tạo flywheel: volume giao dịch → fee 5% → prize tuần sau từ tuần 5 trở đi; cuộc thi tự nuôi sau bốn tuần đầu. Khi cuộc thi có lợi nhuận đủ lớn thì trích ra nuôi các kênh khác — blog, partnership, paid. Unit economics: prize gắn trực tiếp với sản phẩm — skill và share — nên mỗi đô tạo cả awareness lẫn engagement và fee.

**Tại sao user không dùng ChatGPT hay Claude thay vì skill?** — AI thường không có real-time on-chain data; không tích hợp wallet trực tiếp để user giao dịch ngay; không có holder-gated access thay cho subscription. Skill trên ClawFriend gắn với BSC, data real-time, wallet và share — giá trị khác với chatbot đa dụng.

**Checklist hoàn thành:** Repo GitHub public và link trong Telegram; Web Presentation tạo bằng Gemini Canvas, link trong README; Competitive đủ từ 5 đối thủ trở lên, có số liệu và kết luận; Skill từ 5 đến 10 skill, có bằng chứng demand có nguồn; Distribution có kênh cụ thể, action plan, timeline, metric, budget, ít nhất một organic và một paid với plan 10K và BXH; AI Showcase và video trợ lý ảo thuyết trình đã có; mọi số liệu đã verify nguồn không chỉ từ AI.

Em xin hết phần trình bày. Em cảm ơn Ban Giám khảo và mọi người, sẵn sàng trả lời câu hỏi.
