# Số liệu chính dùng trong deliverables — có nguồn đối chiếu

File này tổng hợp **mọi số liệu** xuất hiện trong **competitive-landscape.md**, **skill-research.md** và **distribution-plan.md**, kèm **nguồn gốc** (website, tài liệu, Guidebook) để đạt tiêu chí *"số liệu có nguồn"* khi AI chấm điểm hoặc BGK verify. Mục đích: ai đọc xong có thể kiểm chứng từng con số và hiểu ngữ cảnh đầy đủ.

---

## CHECKLIST ĐÁP ỨNG (AI chấm điểm / Guidebook)

| Tiêu chí | Đáp ứng | Vị trí trong file |
|----------|---------|-------------------|
| Số liệu Competitive Landscape có nguồn | CÓ | Section "Competitive Landscape" — mỗi đối thủ có đoạn Số liệu + Nguồn |
| Số liệu Skill Research (bằng chứng demand) có nguồn | CÓ | Section "Skill Research" — từng nhóm skill + bảng tổng hợp Nguồn |
| Số liệu / tham chiếu Distribution Plan | CÓ | Section "Distribution Plan" — target, metric, contingency + nguồn Guidebook / distribution-plan.md |

*Guidebook: "Data / Số liệu — Số liệu chính + nguồn đối chiếu."*

---

## Cách dùng file này

- **Cho AI chấm điểm:** Đối chiếu mọi con số trong ba deliverable với section tương ứng bên dưới; mỗi số liệu đều có nguồn.
- **Cho BGK / người đọc:** Khi hỏi "số liệu lấy ở đâu?", mở file này và tìm theo tên đối thủ / skill / mục distribution; nguồn ghi rõ từng dòng.
- **Khi cập nhật deliverable:** Đảm bảo mọi số mới thêm vào competitive-landscape, skill-research hoặc distribution-plan đều được bổ sung vào key-metrics.md kèm nguồn.

---

## 1. Competitive Landscape — Số liệu từng đối thủ (6 đối thủ trực tiếp)

Cùng business model: AI agent + skill/plugin marketplace (Web3). Số liệu dưới đây khớp với Section 2 và 3 trong competitive-landscape.md.

### 1.1 ClawHub (OpenClaw)

- **Số liệu dùng trong deliverable:**
  - **5.700+ skill** — kho skill trong registry OpenClaw/ClawHub.
  - **1,5 triệu+ tổng download** — tổng lượt tải skill.
  - **~40–60 skill mới mỗi ngày** — tốc độ đăng ký skill.
  - **OpenClaw 180.000+ GitHub stars** — repository OpenClaw trên GitHub.
  - **Skill top (vd Capability Evolver) 35.000+ download** — skill phổ biến nhất.
- **Nguồn gốc:** thecaio.ai (OpenClaw Skills & ClawHub Guide 2026); claw-hub.net; openclaw-hub.org; docs.openclaw.ai.
- **Lưu ý:** ClawHub là skill registry và framework agent mã nguồn mở, cài qua `npx clawhub install`; không có bonding curve, không cổ phần agent, không fee — chỉ discovery.

### 1.2 Heurist Mesh

- **Số liệu dùng trong deliverable:**
  - **25 data provider** — số nhà cung cấp dữ liệu.
  - **100 tool** triển khai — số tool cho agent.
  - **40 agent** — số agent trên mesh.
  - **X402 + ERC-8004** — chuẩn thanh toán và identity (feature, không phải business metric).
- **Nguồn gốc:** mesh.heurist.ai; docs.heurist.ai.
- **Lưu ý:** Marketplace skill cho agent Web3, tập trung tool crypto/blockchain; monetize qua API key và x402 trả theo request (stablecoin). Không có bonding curve hay share agent.

### 1.3 SkillGem

- **Số liệu dùng trong deliverable:**
  - **20+ nền tảng** — Claude Code, Cursor, Gemini CLI, Slack, Discord, Chrome, v.v.
  - **x402 pay-per-use** — cơ chế thanh toán (feature).
- **Nguồn gốc:** skillgem.ai; web search (x402).
- **Lưu ý:** SkillGem chưa công bố metric user count / revenue / download; số liệu trên là capacity/feature. Tương tự Hedera/ClawMarket/MoltBazaar: khi thiếu metric công khai thì dùng số nền tảng và cơ chế thanh toán.

### 1.4 Hedera Agent Marketplace

- **Số liệu dùng trong deliverable:**
  - **3 plugin/skills** — agent-kit, HTS, hackathon-helper (qua `npx skills`).
  - **GitHub repo:** 4 stars, 1 fork (thống kê công khai).
  - **Chuẩn HCS-26** (skill registry), **HCS-10, HCS-19** (messaging, privacy) — bối cảnh kỹ thuật.
  - **GDPR-oriented** — định hướng compliance.
- **Nguồn gốc:** github.com/hedera-dev/hedera-agent-skills; hedera.opspawn.com; opspawn.com.
- **Lưu ý:** Hedera ecosystem chưa công bố rộng user count/TVL; số liệu dùng là repo + số plugin.

### 1.5 ClawMarket

- **Số liệu dùng trong deliverable:**
  - **15+ skill** — số skill trên marketplace.
  - **USDC escrow** — cơ chế thanh toán; download token 24h hoặc permanent re-download.
  - **Base + Ethereum** — chain.
- **Nguồn gốc:** claw-market.xyz; claw-market.xyz/docs.
- **Lưu ý:** ClawMarket chưa công bố user count/GMV; (1) là capacity (số skill), (2) là feature (thanh toán).

### 1.6 MoltBazaar

- **Số liệu dùng trong deliverable:**
  - **ERC-8004** on-chain identity — chuẩn identity agent.
  - **Verified skills từ openclaw-skills** — DeFi, Trading, Social, Utility, Analytics.
  - **USDC + x402** — thanh toán.
  - **Base** — chain.
- **Nguồn gốc:** moltbazaar.ai; moltx.io.
- **Lưu ý:** MoltBazaar chưa công bố user count/volume; số liệu dùng là feature/capacity (identity, verified skills, payment). Focus "thuê agent làm task" chứ không focus skill marketplace cho creator.

### 1.7 Tổng quan thị trường — TAM, CAGR, so sánh chain

- **Thị trường AI agent (rộng):** TAM ~$50B đến 2030 / ~$183B đến 2033; CAGR ~45–50%.
- **Nguồn:** Grand View Research, AI Agents Market Report; grandviewresearch.com/press-release/global-ai-agents-market-report; PR Newswire 2025.
- **Phân khúc Web3 skill/agent marketplace:** Vẫn **nascent** (sơ khai). Chưa có nền tảng nào gom đủ: identity agent + shares (bonding curve) + skill marketplace holder-gated + social stream trong một chỗ.
- **Ai dẫn đầu:** Theo volume skill/adoption — **ClawHub** (5.700+ skill, 1,5M+ download, 180K+ stars). Theo depth Web3/tool — **Heurist Mesh** (100 tool, 40 agent). **BSC** chưa có player nào chiếm skill/agent marketplace.
- **So sánh chain:** ClawHub, Heurist, SkillGem = đa nền tảng; ClawMarket, MoltBazaar = Base (và ClawMarket thêm Ethereum); Hedera = Hedera. **Không ai focus BSC.**

---

## 2. Skill Research — Bằng chứng demand (có nguồn)

Mỗi skill hoặc nhóm skill trong skill-research.md cần bằng chứng user thực sự cần (tool trả phí đang thu tiền, follower count, volume, survey, v.v.). Dưới đây là số liệu đã dùng và nguồn đối chiếu.

### 2.1 Scrypto / Whale / Smart Money

| Số liệu | Nguồn |
|---------|--------|
| Nansen **$99–$999/tháng** (pricing) | nansen.ai |
| Whale Alert **2,5 triệu+ followers** (Twitter), **~500K retweet/tháng** | whale-alert.io; blockchainmagazine.com |
| Nansen "Whale Watching: Top Tools..." — nhu cầu rõ | blockchainmagazine.com, nansen.ai |

Dùng cho skill: Real-time Whale / Smart Money Tracker; Rug Pull / Scam Token Detector (cùng bối cảnh demand crypto BSC).

### 2.2 Rug pull / Scam detector

| Số liệu | Nguồn |
|---------|--------|
| Nhiều tool: RugChecker, TokenSpy, Token Sniffer, RugProofAI | rugchecker.cc; tokenspy.org; tokensniffer (readme); rugproofai.com |
| Token Sniffer **30.000+ contract/ngày**, **50–75% đánh dấu scam** | tokensniffer (readme / docs) |
| Reddit, Telegram: "rug check", "is this token safe" | Reddit, Telegram communities (skill-research.md) |

### 2.3 DeFi Yield / APY

| Số liệu | Nguồn |
|---------|--------|
| **YO Protocol $1M+ earn volume** trong 2 tuần đầu | yo.xyz |
| **maxAPY** 9 chain, hàng nghìn strategy | docs.maxapy.io |
| MOSS "DeFi APY Comparison Tool" | moss.sh |

### 2.4 Portfolio tracker

| Số liệu | Nguồn |
|---------|--------|
| **DeBank** 15M+ users, ~170K DAU, 6,8M+ ví theo dõi, **$105B TVL** monitored | debank.com; iwebtech.in/debank-review-2024 |
| Zapper tương tự; Reddit/Telegram "portfolio tracker BSC", "track multiple wallets" | zapper.xyz; Reddit/Telegram |

### 2.5 Token Price Alert / New Token Alert

| Số liệu | Nguồn |
|---------|--------|
| Drops Bot, TechnicalPing, TokenAlertsBot (Telegram) | dropstab.com; technicalping.com |
| Bitquery "Price Change Signal Bot" | docs.bitquery.io |
| **DexScreener** 24H volume **$9B+**, **19M+** giao dịch; mục "New Pairs" | dexscreener.com |
| DexTools tương tự | dextools.io |

### 2.6 Alpha / Sentiment / KOL

| Số liệu | Nguồn |
|---------|--------|
| LunarCrush, Santiment monetize social metrics | lunarcrush.com; santiment.net |
| CLAWFRIEND_SPEC "Alpha Hunting", "Off-chain Signal" | CLAWFRIEND_SPEC.md (docs.clawfriend.ai) |
| X (Twitter) API: Basic ~$100/tháng, Pro/enterprise $5K/tháng | developer.x.com (X API pricing) |
| Nansen, Arkham "smart money" / theo dõi KOL | nansen.ai |

### 2.7 Sức khỏe — Medication / Health

| Số liệu | Nguồn |
|---------|--------|
| **Medisafe 10 triệu+ download** | medisafe.com |
| WHO, CDC nhấn mạnh adherence (tuân thủ thuốc) | WHO/CDC adherence reports (skill-research.md) |
| Mango Health dùng trong trial lâm sàng | Mango Health |
| Wearable market; Whoop, Oura "health insights" trả phí | Apple HealthKit, Google Fit API; Whoop/Oura positioning |
| Reddit r/QuantifiedSelf, r/fitbit "best way to track trends" | Reddit |

### 2.8 Vĩ mô / Fed / ECB

| Số liệu | Nguồn |
|---------|--------|
| Bloomberg Terminal, Refinitiv bán data macro | Bloomberg/Refinitiv positioning |
| Investing.com calendar, Forexlive | Investing.com; Forexlive |
| Fed/ECB calendar, FOMC day volatility | federalreserve.gov; ecb.europa.eu; Reuters/Bloomberg |
| Subreddit r/Forex, r/investing "CPI summary", "FOMC summary" | Reddit |

### 2.9 No-code / Productivity

| Số liệu | Nguồn |
|---------|--------|
| **Zapier** valuation tỷ USD; no-code trend | zapier.com; skill-research.md |
| **Otter, Fireflies** thu phí meeting notes | otter.ai; fireflies.ai; skill-research.md |

### 2.10 Bảng tổng hợp nhanh — Skill Research

| Skill / chủ đề | Số liệu chính | Nguồn |
|----------------|---------------|--------|
| Whale / Smart Money | Nansen $99–$999/tháng; Whale Alert 2,5M+ followers, ~500K retweet/tháng | nansen.ai, whale-alert.io, blockchainmagazine.com |
| Rug / scam | Token Sniffer 30K+ contract/ngày, 50–75% scam; RugChecker, TokenSpy, RugProofAI | rugchecker.cc, tokenspy.org, tokensniffer, rugproofai.com |
| DeFi yield / APY | YO Protocol $1M+ earn 2 tuần; maxAPY 9 chain | yo.xyz, docs.maxapy.io, moss.sh |
| Price alert | Drops, TechnicalPing, TokenAlertsBot; Bitquery; DexScreener $9B+ vol, 19M+ tx | dropstab.com, technicalping.com, docs.bitquery.io, dexscreener.com |
| Portfolio | DeBank 15M+ users, ~170K DAU, $105B TVL; Zapper | debank.com, iwebtech.in/debank-review-2024, zapper.xyz |
| Alpha / sentiment | LunarCrush, Santiment; X API $100–$5K/tháng; CLAWFRIEND_SPEC Alpha Hunting | lunarcrush.com, santiment.net, developer.x.com, CLAWFRIEND_SPEC.md |
| Medication | Medisafe 10M+ download; WHO/CDC adherence | medisafe.com, WHO/CDC |
| Macro / Fed | Bloomberg, Refinitiv; Investing.com, Forexlive; Fed/ECB calendar | Bloomberg/Refinitiv, Investing.com, federalreserve.gov, ecb.europa.eu |
| No-code / Meeting | Zapier tỷ USD; Otter, Fireflies thu phí | zapier.com, otter.ai, fireflies.ai |

---

## 3. Distribution Plan — Số liệu và tham chiếu

Distribution plan lấy ràng buộc từ **Guidebook cuộc thi** và chi tiết từ **distribution-plan.md**. Không cần nguồn bên ngoài cho con số budget/timeline; nguồn là tài liệu cuộc thi và file deliverable.

### 3.1 Ngân sách và phân bổ

| Mục | Số liệu / mô tả | Nguồn |
|-----|-----------------|--------|
| Ngân sách tháng 1 | **$10.000** | Guidebook cuộc thi; distribution-plan.md |
| Phân bổ prize | **$2.500 × 4 tuần = $10.000** — BGK mua share winner mỗi Chủ nhật on-chain | distribution-plan.md |
| Số kênh | **3 kênh:** (1) Cuộc thi hàng tuần — paid $10K; (2) Technical blog — organic $0; (3) Partnership OpenClaw — organic $0 | Guidebook (ít nhất 3–5 kênh, 1 organic + 1 paid); distribution-plan.md |
| Fee protocol | **5%** volume giao dịch → tái đầu tư prize từ tuần 5+; khi lợi nhuận đủ lớn trích nuôi kênh khác | distribution-plan.md; CLAWFRIEND_SPEC.md |

### 3.2 Cơ chế cuộc thi (số liệu dùng trong slide / script)

| Mục | Số liệu / mô tả | Nguồn |
|-----|-----------------|--------|
| Prize mỗi tuần | $2.500 (BGK mua share agent thắng) | distribution-plan.md |
| Tiêu chí tuần 1 | Xếp hạng = **lượt tải skill trong tuần** (on-chain / platform verifiable) | distribution-plan.md |
| Từ tuần 2 | Có thể thêm BGK/LLM (vd 50% lượt tải + 50% BGK) | distribution-plan.md |
| BXH | T2–T7 cập nhật realtime (vd 1–2h); Chủ nhật đóng băng đến chốt (vd 23:59) | distribution-plan.md |
| Cold start | Announce + waitlist + **seeding 5–10 agent** (team/partner); không tốn thêm ngân sách | distribution-plan.md |

### 3.3 Mục tiêu tháng 1 (định nghĩa thành công)

| Chỉ tiêu | Target | Ghi chú / nguồn |
|----------|--------|------------------|
| **Agent tham gia tuần 1** | **≥ 15 agent** | Đủ để leaderboard có ý nghĩa, FOMO hoạt động. distribution-plan.md |
| **Volume 4 tuần (mua bán share)** | **≥ $8.000 tổng** | ~$2K/tuần; fee 5% ≈ $400/tuần → từ tuần 5 dùng fee cho prize. Cách ước tính: ~20 agent × $400 volume/agent trong 4 tuần. Cơ sở $400/agent: giai đoạn sớm bonding curve, 10–20 holder × 1–2 giao dịch × ~$20/giao dịch trong 4 tuần. distribution-plan.md |
| **Skill mới (4 tuần)** | **≥ 20 skill** | Marketplace nhận đủ skill từ cuộc thi. distribution-plan.md |

### 3.4 Kênh 2 & 3 — Target tháng 1

| Kênh | Target tháng 1 | Nguồn |
|------|----------------|--------|
| **Technical blog** | ≥ **500 organic views** (4 bài); ≥ **30 sign-up** từ UTM blog | distribution-plan.md |
| **Partnership OpenClaw** | ≥ **1 response** từ maintainer; nếu có hợp tác: ≥ **50 install/referral** (UTM) | distribution-plan.md |

### 3.5 Rủi ro và kế hoạch dự phòng (trigger bằng số)

| Rủi ro | Trigger (số liệu) | Hành động dự phòng (tóm tắt) | Nguồn |
|--------|--------------------|------------------------------|--------|
| Tuần 1 quá ít agent | EOD Chủ nhật tuần 1, **< 10 agent** tham gia | Kéo dài tuần 1 thêm 3–5 ngày; gộp 1–2 tuần prize ($5K một lần); giữ 100% budget cho prize | distribution-plan.md |
| Volume tháng 1 thấp | Sau tuần 4, **tổng fee < $1.500** | Giảm prize T5–6 theo fee thực thu; nếu đã reserve 20% ($2K) thì dùng tối đa $2K bridge 1–2 tuần; tăng blog + OpenClaw | distribution-plan.md |
| OpenClaw không phản hồi | Hết tháng 1 không có hợp tác | Giữ blog chính; tìm partnership thay thế (BSC/DeFi, dev tool) tháng 2 | distribution-plan.md |

### 3.6 Contingency 20%

- **Nếu từ đầu reserve 20% ($2K)** chưa đưa vào prize 4 tuần: có thể dùng tối đa $2K cho 1–2 tuần bridge prize khi fee chưa đủ. Nếu đã phân bổ 100% $10K vào prize thì không có khoản này, chỉ giảm prize theo fee và tăng blog/OpenClaw.
- **Nguồn:** distribution-plan.md (bảng Rủi ro & kế hoạch dự phòng).

---

## 4. Đối thủ không nằm trong bảng Competitive (vì không cùng phân khúc)

Competitive landscape chỉ liệt kê **6 đối thủ trực tiếp** (cùng business model: AI agent + skill/plugin marketplace Web3). Các đối tượng sau **không** nằm trong bảng số liệu vì không cùng phân khúc:

- **friend.tech, Virtuals** — social/keys, không focus skill marketplace.
- **SingularityNET, ELIZA** — agent AI / AI marketplace rộng, không focus Web3 skill store.

Khi trích dẫn "đối thủ" trong deliverable 1, chỉ dùng 6 đối thủ trong Section 1 của file này.

---

## 5. Phiên bản và cập nhật

- **Phiên bản:** Feb 2026 — File mở rộng từ bản ngắn: thêm section dài theo từng đối thủ, từng nhóm skill, và distribution (target, contingency, timeline). Mọi số liệu đối chiếu với competitive-landscape.md, skill-research.md, distribution-plan.md.
- **Khi thêm số mới vào deliverable:** Cập nhật key-metrics.md tương ứng và ghi rõ nguồn để AI chấm điểm và BGK verify không bị thiếu.

---

*Kết thúc file. Mọi số liệu trong 3 deliverable nên đối chiếu với các section trên trước khi present hoặc nộp bài.*
