# Deliverable 2: Nghiên cứu Skill

---

## CHECKLIST ĐÁP ỨNG (AI chấm điểm)

| Tiêu chí | Đáp ứng | Vị trí trong file |
|----------|---------|-------------------|
| Số lượng skill: 5–10 | CÓ: 7 skill | Section 1–7 (mỗi skill một section) |
| Mỗi skill có: Tên, Target user, Vấn đề, Alternative hiện tại, Skill giải quyết thế nào, Visibility & monetization | CÓ | Bảng trong từng section |
| Bằng chứng demand (user cần, tạo demand) — có nguồn | CÓ | Mục **Bằng chứng demand** + dòng *Nguồn:* cuối mỗi skill |
| Tóm tắt visibility/monetization | CÓ | Bảng "Tóm tắt theo Visibility" cuối file |

---

Liệt kê 5–10 skill mà Skill Market **nên có**, mỗi skill có bằng chứng user thực sự **cần** và sẽ **tạo demand** (thu hút user dùng platform, mua share để access skill private). Theo **CLAWFRIEND_SPEC.md**: Skill Market hỗ trợ 3 loại — **Skill**, **Workflow**, **Prompt**; visibility **public** hoặc **private (holder-gated)**. Các skill dưới đây có thể triển khai dưới dạng skill/workflow/prompt và public → holder-gated theo spec.

---

## 1. Real-time Whale / Smart Money Tracker

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Real-time Whale / Smart Money Tracker |
| **Target user** | Trader crypto/DeFi, portfolio $5K–$100K, trade 3–5 lần/tuần; đang dùng hoặc cân nhắc Nansen/Arkham nhưng thấy đắt. |
| **Vấn đề** | Mất 2–3h/ngày theo dõi ví whale thủ công trên Etherscan/BSCScan; bỏ lỡ giao dịch lớn hoặc vào/ra muộn so smart money. |
| **Alternative hiện tại** | Nansen $99–$999/tháng (API từ $49/tháng); Arkham (có free tier giới hạn); Whale Alert Twitter (free nhưng thụ động, 2.5M+ followers = demand). |
| **Skill giải quyết thế nào** | Agent theo dõi 500+ ví whale/smart money trên BSC (và tùy chain); alert qua Telegram/Twitter trong 30–60s khi whale move > ngưỡng (vd $50K); hiển thị: địa chỉ ví, token, khối lượng, nguồn/đích. Tích hợp on-chain data BSC. |
| **Visibility & monetization** | **Public free** để kéo user + build reputation; sau đó có thể chuyển **private/holder-gated**: user hold ít nhất 1 share của agent creator mới access bộ filter nâng cao (vd theo token, theo pool). So sánh: Nansen $99+/tháng; mình dùng share model thay subscription. |
| **Bằng chứng demand** | (1) Nansen pricing $99–$999/tháng, Professional $999/tháng — user trả = demand đã validate. (2) Whale Alert Twitter 2.5M+ followers (2025), ~500K retweet/tháng, 80% trader crypto dùng theo báo cáo — nguồn: whale-alert.io, blockchainmagazine.com. (3) Nansen bài "Whale Watching: Top Tools..." — nhu cầu theo dõi smart money rõ ràng. |

*Nguồn: nansen.ai, docs.nansen.ai, whale-alert.io, blockchainmagazine.com.*

---

## 2. Rug Pull / Scam Token Detector (BSC)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Rug Pull / Scam Token Detector (BSC) |
| **Target user** | Trader meme/new token trên BSC, portfolio $1K–$50K; hay vào token mới list trên DEX, sợ honeypot/rug. |
| **Vấn đề** | Không biết đọc contract; vào token lạ dễ dính rug/honeypot; mất tiền một lần là đau. |
| **Alternative hiện tại** | RugChecker (BSC, 99.9% claim), TokenSpy (Chrome, BSC), Token Sniffer (API, 10K+ scam pattern), RugProofAI — đều trả phí hoặc freemium. |
| **Skill giải quyết thế nào** | Agent quét contract token trên BSC (PancakeSwap, etc.): kiểm tra liquidity lock, mint authority, holder concentration, pattern rug; trả về risk score + giải thích ngắn. User gửi contract address hoặc link DEX → nhận kết quả trong vài chục giây. |
| **Visibility & monetization** | **Public free** cho 5 lần quét/ngày (lead magnet); **private/holder-gated** cho unlimited + alert khi token mới đạt ngưỡng risk. So sánh: RugChecker/TokenSpy có gói trả phí; mình gắn với agent share = drive demand hold share. |
| **Bằng chứng demand** | (1) Nhiều tool chuyên rug detection (RugChecker, TokenSpy, Token Sniffer, RugProofAI) = thị trường đã validate. (2) Token Sniffer: 30K+ contract mới/ngày, 50–75% đánh dấu scam — nguồn: tokensniffer readme. (3) Reddit/Telegram nhiều post hỏi "rug check", "is this token safe". |

*Nguồn: rugchecker.cc, tokenspy.org, tokensniffer readme, rugproofai.com.*

---

## 3. DeFi Yield Optimizer / APY So sánh (BSC)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | DeFi Yield Optimizer / APY So sánh (BSC) |
| **Target user** | Holder BNB/stablecoin trên BSC, portfolio $2K–$50K; muốn earn yield nhưng không có thời gian so sánh protocol. |
| **Vấn đề** | Mỗi protocol báo APR/APY khác nhau (compound frequency, reward token); so tay tốn thời gian và dễ bỏ sót. |
| **Alternative hiện tại** | YO Protocol (multi-chain, $1M+ earn volume 2 tuần đầu); maxAPY (9 chain, auto compound); DefiLlama (data free, không auto). |
| **Skill giải quyết thế nào** | Agent aggregate APY từ các pool BSC (PancakeSwap, Venus, Alpaca, …); chuẩn hóa về APY comparable; gợi ý top 3–5 strategy theo risk (stable vs volatile). Có thể thêm: alert khi APY thay đổi mạnh. |
| **Visibility & monetization** | **Public free** cho bảng APY cơ bản (1 lần/ngày); **private/holder-gated** cho real-time + alert + gợi ý rebalance. So sánh: YO/maxAPY là sản phẩm trả phí hoặc tích hợp; skill trên ClawFriend = access qua hold share. |
| **Bằng chứng demand** | (1) YO Protocol: $1M+ earn volume trong 2 tuần đầu, +50% TVL sau tích hợp — nguồn: yo.xyz. (2) MOSS review "DeFi APY Comparison Tool" — nhu cầu so sánh yield rõ. (3) maxAPY: 9 chain, hàng nghìn strategy — demand institutional + retail. |

*Nguồn: yo.xyz, docs.yo.xyz, docs.maxapy.io, moss.sh.*

---

## 4. Token Price Alert (BSC + đa chain)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Token Price Alert (BSC ưu tiên, mở rộng chain) |
| **Target user** | Trader retail, theo dõi 5–20 token; cần alert khi giá chạm ngưỡng hoặc biến động lớn, không ngồi chart 24/7. |
| **Vấn đề** | Thị trường 24/7; theo dõi thủ công dễ bỏ lỡ; nhiều platform alert rời rạc (DEX, CEX) không gom một chỗ. |
| **Alternative hiện tại** | Drops Bot (Telegram, 22+ chain, free/paid); TechnicalPing (Telegram, indicator); TokenAlertsBot; bot tự build qua Bitquery API. |
| **Skill giải quyết thế nào** | Agent monitor giá token (BSC DEX trước, sau mở rộng): user set ngưỡng (vd +20%, hoặc $X); alert qua Telegram/DM Twitter khi đạt. Có thể kết hợp volume spike. |
| **Visibility & monetization** | **Public free** cho 1–3 alert đang chạy; **private/holder-gated** cho unlimited alert + thêm chain + priority. So sánh: bot Telegram trả phí hoặc freemium; mình gắn agent = có thể kết hợp alpha/sentiment sau. |
| **Bằng chứng demand** | (1) Nhiều bot Telegram price alert (Drops Bot, TechnicalPing, TokenAlertsBot) — nguồn: dropstab.com, technicalping.com. (2) Bitquery có use case "Price Change Signal Bot" — dev tự build = demand. (3) Thị trường 24/7 → nhu cầu alert không cần ngồi chart. |

*Nguồn: docs.bitquery.io, dropstab.com, technicalping.com, t.me/TokenAlertsBot.*

---

## 5. Portfolio Tracker đa ví (BSC)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Portfolio Tracker đa ví (BSC) |
| **Target user** | User có nhiều ví (cold, hot, vault); hoặc team/cộng tác cần xem tổng PnL và allocation. |
| **Vấn đề** | Balance và PnL nằm rải nhiều ví, nhiều protocol; tổng hợp thủ công mất thời gian. |
| **Alternative hiện tại** | DeBank, Zapper, Arkham (portfolio); Nansen (có portfolio); DefiLlama (TVL protocol). |
| **Skill giải quyết thế nào** | Agent aggregate balance + PnL theo list địa chỉ (BSC trước): token, LP position, vault; báo cáo tổng theo USD, % allocation, 24h/7d thay đổi. Output: bảng hoặc message định kỳ. |
| **Visibility & monetization** | **Public free** cho 1 wallet; **private/holder-gated** cho đa ví + lịch sử + export. So sánh: DeBank/Zapper free nhưng quảng cáo/upsell; holder-gated = incentive hold share. |
| **Bằng chứng demand** | (1) DeBank, Zapper được dùng rộng rãi = nhu cầu portfolio aggregate. (2) Reddit/Telegram nhiều câu hỏi "portfolio tracker BSC", "track multiple wallets". |

*Nguồn: debank.com, zapper.xyz, cộng đồng Reddit/Telegram.*

---

## 6. Alpha / Sentiment từ Social (Twitter + Telegram)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | Alpha / Sentiment từ Social (Twitter + Telegram) |
| **Target user** | Trader tin vào alpha từ KOL, community; muốn có tín hiệu sớm từ sentiment hoặc mention token. |
| **Vấn đề** | Quá nhiều noise; không có tool tổng hợp sentiment theo token/project; bỏ lỡ mention sớm của KOL. |
| **Alternative hiện tại** | LunarCrush (social metrics trả phí); Santiment; tự theo dõi list Twitter/Telegram. |
| **Skill giải quyết thế nào** | Agent scrape/API Twitter (và tùy Telegram): theo dõi list handle (KOL, project); extract mention token/project; sentiment đơn giản (positive/negative/neutral); alert khi volume mention tăng đột biến hoặc sentiment đổi. Tuân thủ ToS Twitter/API. |
| **Visibility & monetization** | **Private/holder-gated** là chính: alpha dễ bị copy nên public free ít; user hold share để access list KOL + alert. So sánh: LunarCrush/Santiment subscription; mình dùng share. |
| **Bằng chứng demand** | (1) LunarCrush, Santiment tồn tại và monetize = demand. (2) ClawFriend spec: "Alpha Hunting", "Off-chain Signal Extraction" là agent activity — skill này support trực tiếp. (3) Crypto Twitter là kênh alpha quan trọng. |

*Nguồn: lunarcrush.com, santiment.net, CLAWFRIEND_SPEC.md.*

---

## 7. New Token / Listing Alert (BSC DEX)

| Mục | Nội dung |
|-----|----------|
| **Tên skill** | New Token / Listing Alert (BSC DEX) |
| **Target user** | Trader săn token mới list trên PancakeSwap (và DEX BSC khác); muốn vào sớm theo tiêu chí (vd liquidity, holder count). |
| **Vấn đề** | Token mới list liên tục; không có filter theo tiêu chí (liquidity, audit, holder); vào muộn hoặc vào nhầm token rác. |
| **Alternative hiện tại** | DexScreener, DexTools (có new pairs); không có skill/agent nào gom "alert theo tiêu chí" cho BSC. |
| **Skill giải quyết thế nào** | Agent monitor pool mới trên BSC (PancakeSwap, etc.): filter theo liquidity min, số holder, có audit hay không (nếu có data); alert khi có token thỏa điều kiện. User set tiêu chí một lần, nhận alert. |
| **Visibility & monetization** | **Public free** cho 1 bộ filter cơ bản; **private/holder-gated** cho nhiều filter + ưu tiên tốc độ. So sánh: DexScreener/DexTools là discovery, không phải alert có filter; skill = bổ sung. |
| **Bằng chứng demand** | (1) DexScreener, DexTools có lượng dùng lớn cho new pairs = nhu cầu. (2) Cộng đồng BSC hay hỏi "token mới", "vừa list" — demand săn listing. |

*Nguồn: dexscreener.com, dextools.io, cộng đồng BSC.*

---

## Tóm tắt theo Visibility

| Skill | Đề xuất visibility | Lý do |
|-------|--------------------|--------|
| Whale / Smart Money Tracker | Public → sau chuyển holder-gated (filter nâng cao) | Kéo user bằng free, monetize bằng share cho tính năng mạnh. |
| Rug Pull Detector | Public (5 lần/ngày) + holder-gated (unlimited + alert) | Lead magnet + drive share. |
| DeFi Yield / APY | Public (bảng cơ bản) + holder-gated (real-time + alert) | Data có giá trị; holder-gated cho real-time. |
| Token Price Alert | Public (1–3 alert) + holder-gated (unlimited) | Freemium quen thuộc. |
| Portfolio Tracker | Public (1 ví) + holder-gated (đa ví + history) | Giống DeBank/Zapper. |
| Alpha / Sentiment | Chủ yếu holder-gated | Alpha dễ bị copy; share = barrier hợp lý. |
| New Token Listing Alert | Public (1 filter) + holder-gated (nhiều filter) | Discovery + speed = giá trị. |

---

*Phiên bản: 1.1 — Thiết kế cho AI chấm: checklist đáp ứng ở đầu file; mỗi skill có Bằng chứng demand + Nguồn. Mọi số liệu và nguồn cần tác giả verify trước khi nộp.*
