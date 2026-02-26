# Script thuyết trình — từng slide (~15 phút)

Script rút gọn để trình bày **trong khoảng 15 phút** (Slide 1–9, chưa tính Q&A). Mỗi slide có thời lượng gợi ý; giữ ý chính và số liệu then chốt, bỏ chi tiết dài. Glossary và Q&A dự kiến giữ ở cuối để tra khi BGK hỏi.

**Thời lượng gợi ý:** Slide 1 ~30s | 2 ~2p | 3 ~2p | 4 ~1p | 5 ~1p | 6 ~1,5p | 7 ~1p | 8 ~1,5p | 9 ~30s → **~15 phút.**

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

## Slide 2 — Competitive Landscape (~2 phút)

Em trình bày Competitive Landscape. Em phân tích **sáu đối thủ trực tiếp** cùng phân khúc Web3 skill/agent marketplace; mọi số liệu có nguồn trong deliverable.

**Sáu đối thủ tóm tắt:** **ClawHub** — 5.700+ skill, 1,5M+ download, 180K+ GitHub stars (thecaio.ai, claw-hub.net); mạnh về kho skill, yếu là không monetization, không share agent — chỉ discovery. **Heurist Mesh** — 25 provider, 100 tool, 40 agent (mesh.heurist.ai); crypto-native, x402/ERC-8004; không bonding curve, không BSC. **SkillGem** — 20+ nền tảng, x402 no-code; không token hóa agent, không holder-gated. **Hedera Agent Marketplace** — privacy, HCS; gắn Hedera, không BSC. **ClawMarket** — 15+ skill, USDC trên Base/Ethereum; không share agent. **MoltBazaar** — thuê agent trên Base; focus task, không focus skill market.

**Gap và định vị:** Thị trường **nascent**; chưa ai gom đủ identity agent + bonding curve + skill holder-gated + social trong một nền tảng. **BSC chưa có player nào** chiếm skill/agent marketplace. **ClawFriend định vị:** BSC + Bonding Curve + Skill Market holder-gated + Social; creator monetization 5% fee và holder-gated. Mình thua ClawHub về số skill, thua Heurist về depth tool — giảm thiểu bằng distribution và focus BSC.

Em chuyển sang Skill Research.

---

## Slide 3 — Skill Research (~2 phút)

Em nghiên cứu **20 skill** trong **10 chủ đề**; mỗi skill có bằng chứng demand có nguồn. Em đề xuất **10 skill xuất sắc nhất** để ưu tiên — Nansen 99–999 đô/tháng, Whale Alert 2,5M+ followers, Token Sniffer 30K+ contract/ngày, YO Protocol 1M+ đô earn volume hai tuần; chi tiết trong skill-research.

**Mười skill đề xuất (một dòng mỗi cái):** (1) Whale / Smart Money Tracker BSC — Nansen/Whale Alert demand. (2) Rug Pull / Scam Detector BSC — Token Sniffer, lead magnet 5 lần/ngày. (3) DeFi Yield APY so sánh BSC — YO Protocol. (4) Alpha / Sentiment Twitter Telegram — LunarCrush. (5) Token Price Alert — freemium rồi holder-gated. (6) KOL Mention Alert — drive hold share. (7) Medication nhắc thuốc — Medisafe 10M+ download. (8) Macro Digest CPI lãi suất — Bloomberg/Refinitiv. (9) No-code Workflow Builder — Zapier. (10) Meeting Notes → Tasks — Otter/Fireflies.

**Visibility:** Public free làm lead magnet; holder-gated cho bản nâng cao (real-time, unlimited); share model thay subscription. Chi tiết từng skill và nguồn trong deliverable.

Em chuyển sang Distribution Plan.

---

## Slide 4 — Distribution: Ràng buộc và Lựa chọn (~1 phút)

Mục tiêu: user biết và dùng Skill Market tháng đầu với **10.000 đô**. Ràng buộc: 1 organic + 1 paid; plan cụ thể.

**Phân bổ ít/free có lý do:** KOL/ads — mua reach một lần, không flywheel; CPC cao. Telegram/Discord — post free đủ. Blog/bounty — free (blog là Kênh 2). **10K dồn prize** tạo flywheel rõ hơn. **Cuộc thi hàng tuần** (không all-in một lần): 4 tuần = 4 lần thử, giảm rủi ro; nhiều skill chất lượng; BGK minh bạch.

**Ba kênh:** Kênh 1 paid — Cuộc thi hàng tuần, toàn bộ 10K. Kênh 2 organic — Technical blog 0 đô. Kênh 3 organic — Partnership OpenClaw 0 đô.

---

## Slide 5 — Cơ chế Cuộc thi Hàng tuần (~1 phút)

**2.500 đô × 4 tuần = 10.000 đô.** Mỗi Chủ Nhật BGK dùng **2.500 đô mua share agent thắng** on-chain. Từ tuần 5: prize lấy từ fee 5% volume. Khi lãi đủ lớn — trích nuôi kênh khác (blog, partnership).

**Đối tượng:** Mọi agent trên ClawFriend. **Tiêu chí:** Gắn skill; tuần 1 xếp hạng theo **lượt tải skill**; từ tuần 2 có thể thêm BGK/LLM. Thể lệ công bố rõ trước tuần 1.

---

## Slide 6 — Bảng xếp hạng và Lợi ích kép (~1,5 phút)

**BXH:** Thứ Hai–Thứ Bảy **cập nhật realtime** (lượt tải, điểm) → FOMO, mua share → volume, fee 5%. **Chủ Nhật đóng băng** BXH đến khi chốt snapshot (vd 23:59), công bố winner, BGK mua 2.500 đô share on-chain.

**Bốn lợi ích:** (1) **Nguồn skill** — người thi publish skill, kho đầy. (2) **FOMO** — mua share sớm, BGK mua đẩy giá. (3) **Tester vô tận** — chấm = dùng skill, không cần thuê tester. (4) **Kéo user từ market khác** — prize + BXH thu hút creator → volume → fee → flywheel. Từ tuần 5 prize từ fee; lãi đủ lớn trích nuôi kênh khác.

---

## Slide 7 — Kênh organic và Timeline (~1 phút)

**Kênh 2 — Blog 0 đô:** 4–6 bài/tháng, mỗi bài tutorial **một skill** (vd Whale Tracker, Rug Check) + CTA Install; Mirror/blog, cross-post Twitter/Telegram. Metric: page views, sign-up UTM, download skill.

**Kênh 3 — Partnership OpenClaw 0 đô:** ClawHub 5.700+ skill, 180K stars — integration "install skill từ ClawFriend qua clawhub"; đề xuất maintainer, PR docs. Metric: install qua flow, referral UTM.

**Timeline:** Trước tuần 1 — công bố thể lệ, build Leaderboard (T2–T7 realtime, CN đóng băng), announce. Tuần 1–4 — mỗi tuần chốt CN, BGK mua share; blog + đề xuất OpenClaw. Sau tuần 4 — prize từ fee; trích nuôi kênh khác khi lãi đủ. **Metric cuộc thi:** agent/skill mỗi tuần, volume on-chain, fee 5%, sign-up, engagement BXH.

---

## Slide 8 — AI Showcase (~1,5 phút)

Hai nhánh: **AI research** và **AI deliver** (video trợ lý ảo).

**Research:** Em dùng **Cursor** và **web search**; mọi số liệu đối chiếu nguồn (key-metrics.md) — không chỉ "AI cho em". Competitive: search 6 đối thủ, số liệu từ website/docs, tổng hợp có nguồn. Skill: search demand (Nansen, Whale Alert, Token Sniffer…), viết 20 skill có bằng chứng. Distribution: thảo luận với AI — cuộc thi, BXH, đóng băng CN, flywheel. Chi tiết trong **prompts-used.md** và **screenshots/** trong repo.

**Deliver:** Video pitch — script từ deliverables → **Edge TTS** (vi-VN) → **D-ID** avatar nói → **CapCut** ghép slide. MC.mp4 trên Drive (link README); video-step-by-step.md trong repo. Q&A em trả lời trực tiếp.

---

## Slide 9 — Kết và Q&A (~30 giây)

Em xin hết phần trình bày. Repo public, link trong Telegram; Competitive 6 đối thủ có nguồn; Skill 20 skill có bằng chứng demand; Distribution 3 kênh, 10K prize, BXH + 4 lợi ích; AI Showcase có prompts-used và video. Mọi số liệu verify key-metrics. Em cảm ơn BGK và mọi người, sẵn sàng Q&A.

---

## Q&A dự kiến (tra khi BGK hỏi, không đọc trong 15 phút)

**Đối thủ đã có 50K user, mình thắng thế nào?** — Họ thiếu BSC + Bonding Curve; mình có BSC, bonding curve, holder-gated, social; creator monetization 5% + holder-gated trong một nền tảng (Competitive có số liệu).

**Skill có demand không?** — Nansen 99–999 đô/tháng, Whale Alert 2,5M followers, Token Sniffer 30K contract/ngày, YO 1M+ đô volume; skill-research có nguồn từng skill.

**10K đủ không?** — 100% dồn prize; BGK mua share on-chain minh bạch; từ tuần 5 prize từ fee; lãi đủ trích nuôi kênh khác.

**Sao không dùng ChatGPT/Claude?** — AI thiếu real-time on-chain, wallet, holder-gated; skill ClawFriend gắn BSC, data real-time, share — giá trị khác.
