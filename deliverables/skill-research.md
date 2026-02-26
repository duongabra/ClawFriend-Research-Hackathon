# Deliverable 2: Nghiên cứu Skill

---

## CHECKLIST ĐÁP ỨNG (theo Guidebook)

| Tiêu chí | Đáp ứng | Vị trí trong file |
|----------|---------|-------------------|
| Số lượng skill: 5–10 (mở rộng: 20 skill) | CÓ: 20 skill | 10 chủ đề, mỗi chủ đề 2 skill (Section theo chủ đề) |
| Mỗi skill có: Tên, Target user, Vấn đề, Alternative, Giải pháp, Visibility & monetization, **Tính khả thi kỹ thuật (Tech/API)** | CÓ | Bảng trong từng skill + bảng tổng hợp cuối file |
| Bằng chứng demand (user cần, tạo demand) — có nguồn | CÓ | Mục **Bằng chứng demand** + dòng *Nguồn:* cuối mỗi skill |
| Tóm tắt visibility/monetization | CÓ | Bảng "Tóm tắt theo Visibility" cuối file |
| 10 skill xuất sắc nhất (đề xuất ưu tiên) | CÓ | Section "10 skill xuất sắc nhất" trước bảng Visibility |

---

Liệt kê **20 skill** trong **10 chủ đề** (Scrypto, Sức khỏe, Vĩ mô, Thể thao, AI/Bot, Công nghệ, v.v.) mà Skill Market **nên có**, mỗi skill có bằng chứng user thực sự **cần** và sẽ **tạo demand**. Theo **CLAWFRIEND_SPEC.md**: Skill Market hỗ trợ **Skill**, **Workflow**, **Prompt**; visibility **public** hoặc **private (holder-gated)**. Các skill có thể triển khai public → holder-gated theo spec.

---

## Chủ đề 1: Scrypto / Crypto (BSC, on-chain)

### Skill 1.1 — Real-time Whale / Smart Money Tracker

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Real-time Whale / Smart Money Tracker |
| **Target user** | Trader crypto/DeFi, portfolio $5K–$100K, trade 3–5 lần/tuần; đang dùng hoặc cân nhắc Nansen/Arkham nhưng thấy đắt. |
| **Vấn đề** | Mất 2–3h/ngày theo dõi ví whale thủ công trên Etherscan/BSCScan; bỏ lỡ giao dịch lớn hoặc vào/ra muộn so smart money. |
| **Alternative hiện tại** | Nansen $99–$999/tháng; Arkham (free tier giới hạn); Whale Alert Twitter (2.5M+ followers). |
| **Skill giải quyết thế nào** | Agent theo dõi 500+ ví whale/smart money trên BSC; alert qua Telegram/Twitter trong 30–60s khi whale move > ngưỡng (vd $50K); hiển thị địa chỉ ví, token, khối lượng, nguồn/đích. |
| **Visibility & monetization** | **Public free** kéo user; **private/holder-gated** cho bộ filter nâng cao (theo token, pool). Nansen $99+/tháng; mình dùng share model. |
| **Tính khả thi kỹ thuật (Tech/API)** | BSC RPC; BSCScan hoặc indexer (list ví whale, on-chain tx); backend cache + pipeline alert (Telegram/DM). Có thể dùng subgraph hoặc API bên thứ 3 (vd Moralis) cho real-time. |
| **Bằng chứng demand** | (1) Nansen $99–$999/tháng — user trả = demand. (2) Whale Alert 2.5M+ followers, ~500K retweet/tháng. (3) Nansen "Whale Watching: Top Tools..." — nhu cầu rõ. |

*Nguồn: nansen.ai, whale-alert.io, blockchainmagazine.com.*

---

### Skill 1.2 — Rug Pull / Scam Token Detector (BSC)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Rug Pull / Scam Token Detector (BSC) |
| **Target user** | Trader meme/new token trên BSC, portfolio $1K–$50K; sợ honeypot/rug. |
| **Vấn đề** | Không biết đọc contract; vào token lạ dễ dính rug/honeypot. |
| **Alternative hiện tại** | RugChecker, TokenSpy, Token Sniffer, RugProofAI — trả phí hoặc freemium. |
| **Skill giải quyết thế nào** | Agent quét contract token BSC: liquidity lock, mint authority, holder concentration, pattern rug; trả về risk score + giải thích ngắn. User gửi contract address → kết quả trong vài chục giây. |
| **Visibility & monetization** | **Public free** 5 lần quét/ngày; **holder-gated** unlimited + alert token mới đạt ngưỡng risk. |
| **Tính khả thi kỹ thuật (Tech/API)** | BSC RPC; đọc contract (liquidity lock, mint, holder distribution); có thể dùng RugChecker/Token Sniffer API hoặc tự build logic từ bytecode. Backend cache kết quả theo contract. |
| **Bằng chứng demand** | (1) Nhiều tool rug detection = thị trường validate. (2) Token Sniffer: 30K+ contract/ngày, 50–75% scam. (3) Reddit/Telegram "rug check", "is this token safe". |

*Nguồn: rugchecker.cc, tokenspy.org, tokensniffer readme, rugproofai.com.*

---

## Chủ đề 2: DeFi & Yield

### Skill 2.1 — DeFi Yield Optimizer / APY So sánh (BSC)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | DeFi Yield Optimizer / APY So sánh (BSC) |
| **Target user** | Holder BNB/stablecoin BSC, portfolio $2K–$50K; muốn earn yield, không có thời gian so protocol. |
| **Vấn đề** | Mỗi protocol báo APR/APY khác nhau; so tay tốn thời gian, dễ bỏ sót. |
| **Alternative hiện tại** | YO Protocol ($1M+ earn volume 2 tuần đầu); maxAPY (9 chain); DefiLlama (free, không auto). |
| **Skill giải quyết thế nào** | Agent aggregate APY từ pool BSC (PancakeSwap, Venus, Alpaca…); chuẩn hóa APY; gợi ý top 3–5 strategy theo risk; có thể alert khi APY thay đổi mạnh. |
| **Visibility & monetization** | **Public free** bảng APY cơ bản (1 lần/ngày); **holder-gated** real-time + alert + rebalance. |
| **Tính khả thi kỹ thuật (Tech/API)** | BSC RPC; DefiLlama API hoặc PancakeSwap/Venus/Alpaca subgraph (APR/APY theo pool); chuẩn hóa + so sánh trong backend; optional alert pipeline. |
| **Bằng chứng demand** | (1) YO Protocol $1M+ earn volume 2 tuần đầu. (2) maxAPY 9 chain, hàng nghìn strategy. (3) MOSS "DeFi APY Comparison Tool". |

*Nguồn: yo.xyz, docs.maxapy.io, moss.sh.*

---

### Skill 2.2 — Portfolio Tracker đa ví (BSC)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Portfolio Tracker đa ví (BSC) |
| **Target user** | User nhiều ví (cold, hot, vault); team cần xem tổng PnL và allocation. |
| **Vấn đề** | Balance và PnL rải nhiều ví, nhiều protocol; tổng hợp thủ công mất thời gian. |
| **Alternative hiện tại** | DeBank, Zapper, Arkham, Nansen (portfolio). |
| **Skill giải quyết thế nào** | Agent aggregate balance + PnL theo list địa chỉ BSC: token, LP, vault; báo cáo tổng USD, % allocation, 24h/7d thay đổi. Output bảng hoặc message định kỳ. |
| **Visibility & monetization** | **Public free** 1 wallet; **holder-gated** đa ví + lịch sử + export. |
| **Tính khả thi kỹ thuật (Tech/API)** | BSC RPC; BSCScan API hoặc indexer (balance, tx theo list địa chỉ); LP/vault data (subgraph hoặc protocol API); aggregate USD + PnL trong backend. |
| **Bằng chứng demand** | (1) DeBank 15M+ users, ~170K DAU, 6,8M+ ví theo dõi, $105B TVL monitored — *Nguồn: DeBank 2024, iwebtech.in/debank-review*. (2) Zapper tương tự; Reddit/Telegram "portfolio tracker BSC", "track multiple wallets" có lượng search. |

*Nguồn: debank.com, zapper.xyz, iwebtech.in/debank-review-2024, Reddit/Telegram.*

---

## Chủ đề 3: Crypto Alert & Discovery

### Skill 3.1 — Token Price Alert (BSC + đa chain)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Token Price Alert (BSC ưu tiên, mở rộng chain) |
| **Target user** | Trader retail, theo dõi 5–20 token; cần alert giá chạm ngưỡng hoặc biến động lớn. |
| **Vấn đề** | Thị trường 24/7; theo dõi thủ công dễ bỏ lỡ; alert rời rạc DEX/CEX. |
| **Alternative hiện tại** | Drops Bot, TechnicalPing, TokenAlertsBot (Telegram); Bitquery API tự build. |
| **Skill giải quyết thế nào** | Agent monitor giá token BSC DEX; user set ngưỡng (+20%, $X); alert qua Telegram/DM khi đạt; có thể kết hợp volume spike. |
| **Visibility & monetization** | **Public free** 1–3 alert; **holder-gated** unlimited + thêm chain + priority. |
| **Tính khả thi kỹ thuật (Tech/API)** | BSC DEX price API (DexScreener, PancakeSwap price feed); backend poll hoặc websocket; pipeline alert (Telegram/DM). User set ngưỡng trong DB. |
| **Bằng chứng demand** | (1) Nhiều bot Telegram price alert. (2) Bitquery "Price Change Signal Bot". (3) Thị trường 24/7 → nhu cầu alert. |

*Nguồn: docs.bitquery.io, dropstab.com, technicalping.com.*

---

### Skill 3.2 — New Token / Listing Alert (BSC DEX)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | New Token / Listing Alert (BSC DEX) |
| **Target user** | Trader săn token mới list PancakeSwap/DEX BSC; muốn vào sớm theo tiêu chí (liquidity, holder). |
| **Vấn đề** | Token mới list liên tục; không có filter theo tiêu chí; vào muộn hoặc vào nhầm token rác. |
| **Alternative hiện tại** | DexScreener, DexTools (new pairs); chưa có agent "alert theo tiêu chí" BSC. |
| **Skill giải quyết thế nào** | Agent monitor pool mới BSC: filter liquidity min, số holder, audit (nếu có data); alert khi token thỏa điều kiện. |
| **Visibility & monetization** | **Public free** 1 bộ filter; **holder-gated** nhiều filter + ưu tiên tốc độ. |
| **Tính khả thi kỹ thuật (Tech/API)** | BSC DEX new-pairs API (DexScreener, PancakeSwap factory events); filter theo liquidity, holder count; backend + alert khi token thỏa điều kiện. |
| **Bằng chứng demand** | (1) DexScreener 24H volume $9B+, 19M+ giao dịch; mục "New Pairs" dùng nhiều — *Nguồn: dexscreener.com*. (2) DexTools tương tự; cộng đồng BSC "token mới", "vừa list" có lượng tìm kiếm lớn. |

*Nguồn: dexscreener.com, dextools.io, cộng đồng BSC.*

---

## Chủ đề 4: Alpha & Social (crypto)

### Skill 4.1 — Alpha / Sentiment từ Social (Twitter + Telegram)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Alpha / Sentiment từ Social (Twitter + Telegram) |
| **Target user** | Trader tin alpha từ KOL, community; muốn tín hiệu sớm từ sentiment hoặc mention token. |
| **Vấn đề** | Quá nhiều noise; không có tool tổng hợp sentiment theo token/project; bỏ lỡ mention KOL. |
| **Alternative hiện tại** | LunarCrush, Santiment (trả phí); tự theo dõi list Twitter/Telegram. |
| **Skill giải quyết thế nào** | Agent API Twitter (tùy Telegram): list handle KOL/project; extract mention token/project; sentiment đơn giản; alert khi volume mention tăng đột biến hoặc sentiment đổi. Tuân ToS Twitter/API. |
| **Visibility & monetization** | **Holder-gated** là chính (alpha dễ copy); user hold share để access list KOL + alert. |
| **Tính khả thi kỹ thuật (Tech/API)** | Twitter API (X) hoặc scrape (tuân ToS); Telegram Bot API; list handle + keyword; optional sentiment (LLM hoặc rule). Backend cache + alert pipeline. **Risk/dependency:** X API Basic ~$100/tháng, Pro/enterprise $5K/tháng; rate limit theo tier — nhiều project gặp blocker chi phí; cần chọn tier phù hợp hoặc fallback scrape (tuân ToS). **Plan:** bắt đầu Basic $100/tháng; scale lên Pro khi có revenue từ holder-gated. |
| **Bằng chứng demand** | (1) LunarCrush, Santiment monetize = demand. (2) CLAWFRIEND_SPEC "Alpha Hunting", "Off-chain Signal". (3) Crypto Twitter kênh alpha quan trọng. |

*Nguồn: lunarcrush.com, santiment.net, CLAWFRIEND_SPEC.md, developer.x.com (X API pricing).*

---

### Skill 4.2 — KOL / Influencer Track & Mention Alert

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | KOL / Influencer Track & Mention Alert |
| **Target user** | Trader/investor theo dõi 10–50 KOL; muốn biết khi KOL mention token/project cụ thể, không muốn scroll timeline cả ngày. |
| **Vấn đề** | Tweet KOL tràn; mention quan trọng chìm trong feed; bỏ lỡ tín hiệu mua/bán hoặc FUD. |
| **Alternative hiện tại** | TweetDeck (free, thủ công); Nansen/Token Metrics (đắt); tự build script theo API. |
| **Skill giải quyết thế nào** | Agent theo dõi list handle (KOL/project); detect mention token ticker hoặc contract; alert qua Telegram/DM khi có mention + link tweet. Có thể gắn sentiment (bullish/bearish) nếu có model. |
| **Visibility & monetization** | **Public free** 3–5 KOL; **holder-gated** list lớn + filter theo token + priority. |
| **Tính khả thi kỹ thuật (Tech/API)** | Twitter/X API (mention, search); detect token ticker/contract trong text; Telegram alert. DB lưu list KOL + user preference. **Risk/dependency:** X API Basic ~$100/tháng, enterprise $5K/tháng; rate limit theo tier — đây là blocker thực tế nhiều project; cần budget API hoặc fallback (scrape tuân ToS / bên thứ 3). **Plan:** bắt đầu Basic $100/tháng; scale lên khi có revenue từ holder-gated (list KOL lớn). |
| **Bằng chứng demand** | (1) Nansen, Arkham có "smart money" = theo dõi hành vi/KOL. (2) Crypto Twitter "when did X mention Y" rất phổ biến. (3) KOL call thường move giá ngắn hạn. |

*Nguồn: nansen.ai, developer.x.com (X API pricing), cộng đồng crypto.*

---

## Chủ đề 5: Sức khỏe

### Skill 5.1 — Health Metrics Digest (giấc ngủ, bước chân, nhịp tim)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Health Metrics Digest (sleep, steps, heart rate) |
| **Target user** | Người đeo wearable (Apple Watch, Fitbit, Garmin); muốn tổng hợp tuần/tháng thay vì mở từng app. |
| **Vấn đề** | Data nằm rải nhiều app; không có báo cáo "một trang" theo xu hướng (ngủ kém tuần này, bước chân giảm). |
| **Alternative hiện tại** | Apple Health, Google Fit (aggregate); không có agent "digest + insight" tự động. |
| **Skill giải quyết thế nào** | Workflow/prompt: user connect OAuth (hoặc export CSV) từ Health/Google Fit; agent tạo digest tuần: giấc ngủ TB, bước chân, nhịp tim; so sánh với tuần trước; gợi ý ngắn (vd "ngủ ít hơn 10% → cân nhắc giảm caffeine"). |
| **Visibility & monetization** | **Public free** digest 1 tuần; **holder-gated** lịch sử dài + so sánh nhiều tháng + export PDF. |
| **Tính khả thi kỹ thuật (Tech/API)** | OAuth Apple Health / Google Fit; hoặc CSV import. Backend aggregate (sleep, steps, HR); so sánh tuần; optional LLM gợi ý ngắn. |
| **Fit ClawFriend (tại sao trong ecosystem)** | User crypto/DeFi cũng đeo wearable; một agent vừa xem portfolio vừa xem health digest → stickiness, ít app chuyển. Holder-gated = premium digest dài hạn, phù hợp user trả bằng share thay subscription. |
| **Bằng chứng demand** | (1) Wearable market lớn; user đã sẵn sàng share data cho app (Strava, MyFitnessPal). (2) Nhiều app "health insights" trả phí (Whoop, Oura). (3) Reddit r/QuantifiedSelf, r/fitbit hỏi "best way to track trends". |

*Nguồn: Apple HealthKit, Google Fit API, Whoop/Oura positioning, Reddit.*

---

### Skill 5.2 — Medication / Nhắc uống thuốc thông minh

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Medication / Nhắc uống thuốc thông minh |
| **Target user** | Người uống thuốc định kỳ (cao huyết áp, tiểu đường, vitamin); hay quên hoặc uống không đúng giờ. |
| **Vấn đề** | App nhắc thuốc đơn giản chỉ báo giờ; không nhắc theo bữa ăn (trước/sau ăn); không gợi ý tương tác thuốc thường gặp. |
| **Alternative hiện tại** | Medisafe, Mango Health, nhắc lịch điện thoại. |
| **Skill giải quyết thế nào** | Agent nhắc theo lịch user (sáng/trưa/tối, trước/sau ăn); cho phép log "đã uống" qua chat/button; gợi ý ngắn về tương tác thuốc phổ biến (dựa trên database public, không thay bác sĩ). Có thể tích hợp calendar. |
| **Visibility & monetization** | **Public free** 1–3 thuốc, nhắc cơ bản; **holder-gated** nhiều thuốc + lịch phức tạp + báo cáo tuân thủ cho bác sĩ. |
| **Tính khả thi kỹ thuật (Tech/API)** | DB lịch thuốc (user nhập); cron/scheduler nhắc; optional drug interaction API (open data); log "đã uống" qua chat/button; calendar sync (optional). |
| **Fit ClawFriend (tại sao trong ecosystem)** | Mở rộng audience: holder có thể mua share cho người thân dùng nhắc thuốc (gift); hoặc cùng một agent vừa theo dõi crypto vừa nhắc thuốc. Holder-gated = nhiều thuốc + báo cáo = upsell bằng share, không cạnh tranh trực tiếp Otter/Zapier vì gắn với agent + share. |
| **Bằng chứng demand** | (1) Medisafe 10M+ download; Mango Health được dùng trong trial lâm sàng. (2) Non-adherence thuốc gây chi phí y tế lớn — WHO, CDC. (3) Aging population → nhu cầu tăng. |

*Nguồn: Medisafe, Mango Health, WHO adherence reports.*

---

## Chủ đề 6: Vĩ mô

### Skill 6.1 — Macro Indicator Digest (CPI, lãi suất, việc làm)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Macro Indicator Digest (CPI, rates, employment) |
| **Target user** | Trader/investor quan tâm vĩ mô; muốn tóm tắt số liệu Mỹ/EU (CPI, NFP, FOMC) không đọc 10 bài. |
| **Vấn đề** | Số liệu ra rải ngày; báo chí dài; khó so "actual vs consensus" nhanh. |
| **Alternative hiện tại** | Investing.com calendar, Forexlive, Bloomberg Terminal (đắt). |
| **Skill giải quyết thế nào** | Agent scrape/API calendar (Investing, FX Street): khi có release (CPI, NFP, FOMC), tóm tắt 3–5 dòng: số thực tế vs consensus, ý nghĩa (hawkish/dovish). Có thể alert trước 1h khi có event. |
| **Visibility & monetization** | **Public free** digest ngày (top 3 event); **holder-gated** full calendar + alert + lịch sử so sánh. |
| **Tính khả thi kỹ thuật (Tech/API)** | Calendar API (Investing.com, FX Street) hoặc scrape; khi có release → fetch actual vs consensus; LLM hoặc template tóm tắt 3–5 dòng; alert pipeline. |
| **Bằng chứng demand** | (1) Forex/crypto react mạnh vào macro. (2) Bloomberg Terminal, Refinitiv bán data macro = demand. (3) Subreddit r/Forex, r/investing hỏi "CPI summary". |

*Nguồn: Investing.com, Forexlive, Bloomberg/Refinitiv positioning.*

---

### Skill 6.2 — Fed / ECB Calendar & Impact (lịch họp + tóm tắt)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Fed / ECB Calendar & Impact (meeting schedule + summary) |
| **Target user** | Trader bonds, forex, crypto; cần biết lịch FOMC/ECB và tóm tắt quyết định + dot plot. |
| **Vấn đề** | Lịch họp thay đổi; sau mỗi meeting cần đọc statement + dot plot nhanh. |
| **Alternative hiện tại** | Fed website, ECB website, Reuters/Bloomberg recap. |
| **Skill giải quyết thế nào** | Agent lấy lịch Fed/ECB (có API/calendar); trước ngày họp gửi nhắc; sau họp tóm tắt: giữ/cắt/tăng lãi suất, dot plot thay đổi, tone (hawkish/dovish) + 1–2 câu "market impact". |
| **Visibility & monetization** | **Public free** lịch + tóm tắt 1 lần sau meeting; **holder-gated** alert real-time + so sánh với kỳ trước. |
| **Tính khả thi kỹ thuật (Tech/API)** | Fed/ECB calendar (API hoặc scrape); sau meeting fetch statement + dot plot; LLM tóm tắt (giữ/cắt/tăng, tone, market impact); alert trước/sau event. |
| **Bằng chứng demand** | (1) FOMC day volatility cao; trader theo dõi sát. (2) Các tool "Fed calendar" có traffic lớn. (3) r/investing, r/Forex "FOMC summary" rất phổ biến. |

*Nguồn: federalreserve.gov, ecb.europa.eu, Reuters/Bloomberg.*

---

## Chủ đề 7: Thể thao

### Skill 7.1 — Match Result & Highlight Summary (bóng đá, bóng rổ, v.v.)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Match Result & Highlight Summary (football, basketball, etc.) |
| **Target user** | Fan không xem trực tiếp; muốn biết kết quả + diễn biến chính trong 1–2 phút đọc. |
| **Vấn đề** | Highlight dài 10–15 phút; tin tức rải rác; muốn "TL;DR" trận đấu. |
| **Alternative hiện tại** | ESPN, SofaScore, YouTube highlight; không có agent tóm tắt "text + key moments" theo giọng ngắn. |
| **Skill giải quyết thế nào** | Agent lấy kết quả + timeline (API hoặc scrape SofaScore/ESPN): tóm tắt 5–7 câu: tỷ số, bàn thắng/điểm quan trọng, thẻ phạt, thay người then chốt. Có thể gửi qua Telegram/DM sau trận. |
| **Visibility & monetization** | **Public free** 1 giải/league; **holder-gated** nhiều giải + alert theo đội yêu thích. |
| **Tính khả thi kỹ thuật (Tech/API)** | SofaScore/ESPN API hoặc scrape (kết quả, timeline); LLM tóm tắt 5–7 câu; gửi qua Telegram/DM sau trận. |
| **Bằng chứng demand** | (1) SofaScore, ESPN app triệu user. (2) Reddit r/soccer, r/nba "match summary" threads. (3) Highlight video views rất cao. |

*Nguồn: SofaScore API, ESPN, Reddit.*

---

### Skill 7.2 — Fantasy / Tip Assistant (gợi ý đội hình, captain)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Fantasy / Tip Assistant (lineup suggestion, captain pick) |
| **Target user** | Chơi Fantasy Premier League, UEFA, NBA Fantasy; cần gợi ý đội hình, captain, transfer theo form và lịch. |
| **Vấn đề** | Phân tích form, injury, fixture difficulty tốn thời gian; nhiều nguồn không gom một chỗ. |
| **Alternative hiện tại** | FPL Review, Fantasy Football Scout (trả phí); Twitter tipster; tự tính. |
| **Skill giải quyết thế nào** | Agent aggregate form (gần 5 trận), injury news, fixture difficulty; gợi ý 11 người + captain + 1–2 transfer; giải thích ngắn (vd "X form tốt, Y dễ bảng"). Có thể nhắc deadline. |
| **Visibility & monetization** | **Public free** gợi ý 1 lần/tuần; **holder-gated** nhiều league + alert injury + optimal chip strategy. |
| **Tính khả thi kỹ thuật (Tech/API)** | FPL API (squad, fixtures, form); scrape injury news; logic form + fixture difficulty; LLM gợi ý 11 + captain + transfer; nhắc deadline. |
| **Bằng chứng demand** | (1) FPL hàng chục triệu manager. (2) Fantasy Football Scout, FPL Review thu phí. (3) Reddit r/FantasyPL rất active. |

*Nguồn: Fantasy Premier League, FPL Review, Fantasy Football Scout, Reddit.*

---

## Chủ đề 8: AI / Bot

### Skill 8.1 — No-code Workflow Builder (kết nối app + trigger)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | No-code Workflow Builder (connect apps + triggers) |
| **Target user** | User không code; muốn "khi A xảy ra thì làm B" (vd email mới → ghi vào Notion, tweet mention → alert Telegram). |
| **Vấn đề** | Zapier/Make đắt khi nhiều task; không linh hoạt "chat + logic" (hỏi thêm điều kiện). |
| **Alternative hiện tại** | Zapier, Make (Integromat), n8n self-host; API + script tự viết. |
| **Skill giải quyết thế nào** | Workflow/prompt: user mô tả bằng ngôn ngữ tự nhiên (vd "khi có email từ X, tóm tắt và gửi Slack"); agent gợi ý bước (trigger → action); có thể chạy trên ClawFriend agent với connector (email, Slack, Telegram). Holder-gated = workflow phức tạp hoặc nhiều run. |
| **Visibility & monetization** | **Public free** 1 workflow, 50 run/tháng; **holder-gated** nhiều workflow + unlimited run + connector premium. |
| **Tính khả thi kỹ thuật (Tech/API)** | Webhook + OAuth (Slack, Telegram, Notion, email); workflow engine (state machine hoặc n8n-style); chạy trên agent ClawFriend với connector; DB lưu workflow definition + run count. **Risk:** phụ thuộc OAuth/API từng app (Slack, Notion, Google…); rate limit theo provider; cần monitor quota run/tháng để không vượt free tier — holder-gated "unlimited run" cần ước lượng cost backend. |
| **Bằng chứng demand** | (1) Zapier valuation tỷ USD; Make, n8n tăng trưởng mạnh. (2) No-code/low-code trend. (3) Reddit r/automation "alternative to Zapier". |

*Nguồn: Zapier, Make, n8n, Gartner low-code reports.*

---

### Skill 8.2 — Code Review / Doc from Repo (tóm tắt PR, tạo doc)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Code Review / Doc from Repo (PR summary, generate doc) |
| **Target user** | Dev/tech lead; cần tóm tắt PR nhanh hoặc tạo doc từ codebase (README, API doc). |
| **Vấn đề** | PR dài, nhiều file; doc cũ không update; tốn thời gian đọc diff. |
| **Alternative hiện tại** | GitHub Copilot (review); Codium; tự prompt ChatGPT với paste code. |
| **Skill giải quyết thế nào** | Agent đọc diff (qua API GitHub/GitLab): tóm tắt "thay đổi gì, risk gì, test đã cover chưa"; hoặc đọc repo → tạo/update README, API doc. Có thể chạy qua webhook "khi có PR mới". |
| **Visibility & monetization** | **Public free** 5 review/tháng; **holder-gated** unlimited + private repo + doc generation. |
| **Tính khả thi kỹ thuật (Tech/API)** | GitHub/GitLab API (PR diff, repo tree); LLM (prompt diff → summary, risk, test); optional webhook "on PR open"; doc generation từ codebase qua API. |
| **Bằng chứng demand** | (1) GitHub Copilot, Codium bán cho review/doc. (2) Dev tools market lớn. (3) "AI code review" search trend tăng. |

*Nguồn: GitHub, Codium, Gartner dev tools.*

---

## Chủ đề 9: Công nghệ

### Skill 9.1 — Tech News Digest by Stack (theo ngôn ngữ/framework)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Tech News Digest by Stack (by language/framework) |
| **Target user** | Developer theo dõi React, Python, Rust, v.v.; muốn tin quan trọng (release, CVE, best practice) 1 lần/ngày hoặc/tuần. |
| **Vấn đề** | Tin rải Hacker News, Reddit, blog; không filter theo stack; dễ miss CVE hoặc major release. |
| **Alternative hiện tại** | HN Daily, newsletter (TLDR, Bytes); tự lọc. |
| **Skill giải quyết thế nào** | Agent aggregate từ HN, Reddit r/programming, blog (RSS): filter theo keyword (React, Python, Rust…); digest 5–10 tin/tuần với tóm tắt 1–2 câu + link. User chọn stack một lần. |
| **Visibility & monetization** | **Public free** 1 stack, 1 lần/tuần; **holder-gated** nhiều stack + tần suất cao + CVE alert. |
| **Tính khả thi kỹ thuật (Tech/API)** | RSS/API (HN, Reddit r/programming, blog); filter theo keyword (React, Python, Rust…); LLM tóm tắt 1–2 câu/tin; digest 5–10 tin/tuần; CVE từ NVD/deps.dev. |
| **Bằng chứng demand** | (1) TLDR, Bytes newsletter triệu subscriber. (2) HN, Reddit traffic lớn. (3) "tech news digest" search. |

*Nguồn: Hacker News, Reddit, TLDR newsletter.*

---

### Skill 9.2 — Changelog / Release Summarizer (release note → tóm tắt)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Changelog / Release Summarizer (release note → summary) |
| **Target user** | Dev dùng nhiều thư viện; cần biết "bản mới có gì, breaking change không" không đọc full changelog. |
| **Vấn đề** | Changelog dài (React, Next.js, Vue…); không biết có nên upgrade ngay. |
| **Alternative hiện tại** | GitHub Releases, blog; tự đọc. |
| **Skill giải quyết thế nào** | Agent đọc release note (GitHub API hoặc RSS): tóm tắt 3–5 bullet: tính năng mới, breaking change (có/không), migration ngắn nếu có. Có thể alert khi repo X release tag mới. |
| **Visibility & monetization** | **Public free** 3 repo; **holder-gated** nhiều repo + alert + so sánh version. |
| **Tính khả thi kỹ thuật (Tech/API)** | GitHub API (releases, tags); đọc release note; LLM tóm tắt 3–5 bullet (tính năng, breaking change, migration); optional deps.dev/Renovate; alert khi repo X có tag mới. |
| **Bằng chứng demand** | (1) Dev phải follow nhiều dependency. (2) "release notes summary" được hỏi trên Reddit/Stack Overflow. (3) Deps.dev, Renovate = demand theo dõi dependency. |

*Nguồn: GitHub API, deps.dev, Renovate.*

---

## Chủ đề 10: Tin tức & Productivity

### Skill 10.1 — News Summarizer by Topic (tin tức theo chủ đề)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | News Summarizer by Topic (news by topic) |
| **Target user** | User quan tâm 2–5 chủ đề (crypto, AI, chính trị, thể thao); muốn tóm tắt tin trong ngày/tuần, không click 20 link. |
| **Vấn đề** | Tin tức tràn; không có một nơi "chỉ tin tôi quan tâm" đã tóm tắt. |
| **Alternative hiện tại** | Google News, Feedly; ChatGPT paste link; newsletter. |
| **Skill giải quyết thế nào** | Agent lấy headline + snippet từ RSS/API (Reuters, BBC, VnExpress, niche site); filter theo topic user chọn; tóm tắt 3–5 dòng/tin, gửi digest 1 lần/ngày hoặc/tuần qua Telegram/email. |
| **Visibility & monetization** | **Public free** 1 topic, 1 lần/ngày; **holder-gated** nhiều topic + tần suất + nguồn premium. |
| **Tính khả thi kỹ thuật (Tech/API)** | RSS/API (Reuters, BBC, VnExpress, niche); filter theo topic; LLM tóm tắt 3–5 dòng/tin; digest gửi Telegram/email. |
| **Fit ClawFriend (tại sao trong ecosystem)** | User crypto đã dùng agent cho alpha/portfolio; thêm topic tin tức (crypto, macro, AI) trong cùng agent = one-stop, không chuyển sang Feedly/Google News. Holder-gated = nhiều topic + tần suất = monetize bằng share; khác Zapier/Otter vì gắn agent + share. |
| **Bằng chứng demand** | (1) Newsletter (The Morning, The Verge) triệu reader. (2) "news summary" app nhiều. (3) Reddit "best news aggregator". |

*Nguồn: RSS feeds, newsletter benchmarks, Reddit.*

---

### Skill 10.2 — Meeting Notes → Tasks (biên bản → action items)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Meeting Notes → Tasks (transcript → action items) |
| **Target user** | Nhân viên văn phòng, PM; họp xong cần list "ai làm gì, deadline" từ notes/transcript. |
| **Vấn đề** | Ghi chép dài; extract action items thủ công tốn thời gian; dễ sót. |
| **Alternative hiện tại** | Otter.ai, Fireflies (transcript); Notion AI, ChatGPT paste; tự gõ. |
| **Skill giải quyết thế nào** | User upload transcript hoặc paste notes; agent extract: action items (task + owner + deadline nếu có); output checklist hoặc gửi sang Notion/Asana/Trello. Có thể tích hợp calendar "sau meeting X gửi vào Y". |
| **Visibility & monetization** | **Public free** 5 meeting/tháng; **holder-gated** unlimited + integration Notion/Asana + lưu lịch sử. |
| **Tính khả thi kỹ thuật (Tech/API)** | Input: transcript (paste/upload) hoặc Otter/Fireflies export; LLM extract action items (task + owner + deadline); output checklist; optional Notion/Asana API để push tasks. |
| **Fit ClawFriend (tại sao trong ecosystem)** | Team crypto/startup họp nhiều; meeting notes trong cùng agent với alpha/portfolio = một dashboard (chat) vừa trade vừa productivity. Holder-gated = unlimited + integration = B2B/team trả bằng share; không thay Otter mà bổ sung "trong agent ClawFriend". |
| **Bằng chứng demand** | (1) Otter, Fireflies thu phí = demand. (2) Meeting fatigue → cần tool tiết kiệm thời gian. (3) "meeting notes to tasks" search. |

*Nguồn: Otter.ai, Fireflies, Notion, G2 reviews.*

---

## 10 skill xuất sắc nhất (đề xuất ưu tiên)

Trong 20 skill trên, dưới đây là **10 skill xuất sắc nhất** để ưu tiên triển khai hoặc pitch cho Skill Market — chọn theo: bằng chứng demand rõ, fit với ClawFriend (BSC/crypto + holder-gated), và tiềm năng kéo user / monetization.

| # | Skill | Chủ đề | Lý do chọn |
|---|-------|--------|------------|
| 1 | Real-time Whale / Smart Money Tracker | Scrypto | Demand đã validate (Nansen $99–999/tháng, Whale Alert 2.5M+ followers); core use case BSC; public → holder-gated rõ. |
| 2 | Rug Pull / Scam Token Detector (BSC) | Scrypto | Pain point cao (mất tiền 1 lần là đau); nhiều tool trả phí = thị trường có sẵn; lead magnet 5 lần/ngày → drive share. |
| 3 | DeFi Yield Optimizer / APY So sánh (BSC) | DeFi & Yield | YO Protocol $1M+ earn volume 2 tuần = demand; BSC holder cần so pool; data có giá trị → holder-gated real-time hợp lý. |
| 4 | Alpha / Sentiment từ Social (Twitter + Telegram) | Alpha & Social | Khớp spec "Alpha Hunting", "Off-chain Signal"; LunarCrush/Santiment monetize; holder-gated tự nhiên (alpha dễ copy). |
| 5 | Token Price Alert (BSC + đa chain) | Crypto Alert | Thị trường 24/7, nhu cầu alert phổ biến; nhiều bot Telegram = demand; freemium 1–3 alert → unlimited gated. |
| 6 | KOL / Influencer Track & Mention Alert | Alpha & Social | Khác biệt so tool truyền thống; "when did X mention Y" rất phổ biến; drive hold share cho list KOL lớn. |
| 7 | Medication / Nhắc uống thuốc thông minh | Sức khỏe | Medisafe 10M+ download; WHO/CDC nhấn mạnh adherence; tác động xã hội lớn; mở rộng sang user không crypto. |
| 8 | Macro Indicator Digest (CPI, lãi suất, việc làm) | Vĩ mô | Trader/investor react mạnh vào macro; Bloomberg/Refinitiv bán data = demand; digest ngắn phù hợp agent. |
| 9 | No-code Workflow Builder (kết nối app + trigger) | AI / Bot | Zapier valuation tỷ USD; no-code trend; platform play — nhiều workflow = stickiness + holder-gated run. |
| 10 | Meeting Notes → Tasks (biên bản → action items) | Tin tức & Productivity | Otter, Fireflies thu phí; meeting fatigue; productivity use case dễ demo, phù hợp B2B/team. |

*Có thể điều chỉnh 10 skill này theo chiến lược GTM (ví dụ nhấn mạnh crypto trước thì tăng tỷ trọng Scrypto/DeFi/Alpha; muốn đa dạng thì giữ sức khỏe, vĩ mô, productivity).*

---

## Tóm tắt theo Visibility

| # | Skill | Đề xuất visibility | Lý do |
|---|-------|--------------------|--------|
| 1.1 | Whale / Smart Money Tracker | Public → holder-gated (filter nâng cao) | Kéo user free, monetize bằng share. |
| 1.2 | Rug Pull Detector | Public (5 lần/ngày) + holder-gated (unlimited + alert) | Lead magnet + drive share. |
| 2.1 | DeFi Yield / APY | Public (bảng cơ bản) + holder-gated (real-time + alert) | Data có giá trị. |
| 2.2 | Portfolio Tracker | Public (1 ví) + holder-gated (đa ví + history) | Giống DeBank/Zapper. |
| 3.1 | Token Price Alert | Public (1–3 alert) + holder-gated (unlimited) | Freemium. |
| 3.2 | New Token Listing Alert | Public (1 filter) + holder-gated (nhiều filter) | Discovery + speed. |
| 4.1 | Alpha / Sentiment | Chủ yếu holder-gated | Alpha dễ copy. |
| 4.2 | KOL Mention Alert | Public (3–5 KOL) + holder-gated (list lớn) | Alpha-adjacent. |
| 5.1 | Health Metrics Digest | Public (1 tuần) + holder-gated (lịch sử + export) | Data nhạy cảm, premium = history. |
| 5.2 | Medication Reminder | Public (1–3 thuốc) + holder-gated (nhiều + báo cáo) | Freemium quen thuộc. |
| 6.1 | Macro Indicator Digest | Public (top 3 event) + holder-gated (full + alert) | Data có giá trị. |
| 6.2 | Fed / ECB Calendar | Public (lịch + 1 tóm tắt) + holder-gated (alert + so sánh) | Event-driven demand. |
| 7.1 | Match Summary | Public (1 giải) + holder-gated (nhiều giải + alert) | Engagement. |
| 7.2 | Fantasy / Tip Assistant | Public (1 lần/tuần) + holder-gated (nhiều league + chip) | Seasonal demand. |
| 8.1 | No-code Workflow Builder | Public (1 workflow, 50 run) + holder-gated (unlimited) | Giống Zapier freemium. |
| 8.2 | Code Review / Doc | Public (5 review/tháng) + holder-gated (unlimited + private) | Dev tool freemium. |
| 9.1 | Tech News Digest | Public (1 stack/tuần) + holder-gated (nhiều stack + CVE) | Newsletter model. |
| 9.2 | Changelog Summarizer | Public (3 repo) + holder-gated (nhiều repo + alert) | Dev productivity. |
| 10.1 | News Summarizer | Public (1 topic/ngày) + holder-gated (nhiều topic + nguồn) | Content aggregation. |
| 10.2 | Meeting Notes → Tasks | Public (5 meeting/tháng) + holder-gated (unlimited + integration) | Productivity. |

---

*Phiên bản: 3.0 — (1) Skill 4.1, 4.2: thêm Plan — bắt đầu X API Basic $100/tháng, scale khi có revenue holder-gated. (2) v2.1: Tech risk/dependency (X API, No-code OAuth/quota). v2.0: 20 skill, Bằng chứng demand, Fit ClawFriend, Tính khả thi Tech/API. Số liệu và nguồn cần tác giả verify trước khi nộp.*
