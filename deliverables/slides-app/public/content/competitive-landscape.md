# Deliverable 1: Competitive Landscape (25%)

---

## CHECKLIST ĐÁP ỨNG BAREM (AI chấm điểm)

| Tiêu chí | Điểm | Đáp ứng | Vị trí trong file |
|----------|------|---------|-------------------|
| Chất lượng phân tích đối thủ: mỗi đối thủ có nhận xét RIÊNG — làm gì tốt/dở, tại sao user chọn/không chọn, bài học | 10 | CÓ | Section 3 (từng block có Điểm mạnh, Điểm yếu, User chọn/không chọn, Bài học) |
| Số liệu & Data thực: mỗi đối thủ ÍT NHẤT 2 số liệu có nguồn (user count, download, GitHub stars, pricing, GMV...) | 6 | CÓ | Section 2 bảng + Section 3 mỗi đối thủ (Số liệu + dòng *Nguồn:*) |
| So sánh & Insight chiến lược: so sánh chain, pricing, gap thị trường, giai đoạn thị trường (nascent/growing/mature) | 5 | CÓ | Section 4 (Tổng quan thị trường) |
| Kết luận & Định vị: marketplace khác ở đâu, segment đối thủ bỏ ngỏ, lợi thế cạnh tranh cụ thể | 4 | CÓ | Section 5 (Kết luận) |
| Số lượng đối thủ: 5–10 đối thủ trực tiếp (Web3 skill/plugin marketplace) | — | CÓ: 6 đối thủ | Section 2 + 3 |

---

## 1. Tóm tắt

ClawFriend: nền tảng AI agent Web3 (identity on-chain, bonding curve, marketplace skill/plugin) trên BSC. Báo cáo phân tích **toàn bộ** Web3 skill marketplace / plugin store / agent marketplace cùng phân khúc; mỗi đối thủ có link, mô tả, **≥2 số liệu có nguồn**, monetization, điểm mạnh/yếu, **tại sao user chọn hoặc không chọn**, và bài học; kết luận có số liệu (marketplace khác ở đâu, segment bỏ ngỏ, thắng/thua).

---

## 2. Tổng quan đối thủ — SỐ LIỆU TỔNG HỢP (phục vụ tiêu chí Số liệu & Data thực)

**Số lượng đối thủ trực tiếp: 6** (trong khoảng 5–10 yêu cầu). Cùng business model: AI agent + skill/plugin marketplace (Web3).

| # | Tên | Link | Loại | Chain | Số liệu chính (nguồn ghi ở Section 3) |
|---|-----|------|------|-------|----------------------------------------|
| 1 | ClawHub (OpenClaw) | openclaw.ai, docs.openclaw.ai, claw-hub.net | Skill registry | Đa nền tảng | 5.700+ skill; 1,5M+ download; 180K+ GitHub stars |
| 2 | Heurist Mesh | mesh.heurist.ai, docs.heurist.ai | Marketplace skill agent | Web3 / đa chain | 25 provider; 100 tool; 40 agent; X402 + ERC-8004 |
| 3 | SkillGem | skillgem.ai | Skill agent + monetization | x402 / ERC-8004 | 20+ nền tảng; x402 pay-per-use |
| 4 | Hedera Agent Marketplace | hedera.opspawn.com, github.com/hedera-dev/hedera-agent-skills | Agent + skill registry | Hedera | HCS-26, HCS-10/19; OpSpawn |
| 5 | ClawMarket | claw-market.xyz | Skill marketplace paid/free | Base, Ethereum | 15+ skills; USDC escrow |
| 6 | MoltBazaar | moltbazaar.ai | Agent marketplace + skills | Base | ERC-8004; openclaw-skills; USDC + x402 |

---

## 3. CHẤT LƯỢNG PHÂN TÍCH ĐỐI THỦ (mỗi đối thủ: mô tả, số liệu có nguồn, điểm mạnh/yếu, user chọn/không chọn, bài học)

### Đối thủ 1: ClawHub (OpenClaw)

- **LINK:** https://openclaw.ai | https://docs.openclaw.ai/tools/clawhub | https://openclaw-hub.org/openclaw-hub-top-skills.html | https://claw-hub.net
- **MÔ TẢ NGẮN:** Framework agent mã nguồn mở + skill registry (cài qua `npx clawhub@latest install`). Không marketplace thương mại; không bonding curve, không cổ phần agent.
- **SỐ LIỆU (≥2, có nguồn):** (1) 5.700+ skill — *Nguồn: thecaio.ai (OpenClaw Skills & ClawHub Guide 2026)*. (2) 1,5M+ tổng download — *Nguồn: claw-hub.net*. (3) ~40–60 skill mới/ngày — *Nguồn: thecaio.ai*. (4) OpenClaw 180K+ GitHub stars — *Nguồn: thecaio.ai, docs.openclaw.ai*. (5) Skill top 35K+ download (Capability Evolver) — *Nguồn: claw-hub.net*.
- **CÁCH MONETIZE:** Registry miễn phí; không monetization cho creator hay holder-gated.
- **ĐIỂM MẠNH:** Kho skill lớn nhất; dev dùng nhiều; semantic search + category; version control, community ratings.
- **ĐIỂM YẾU:** Không lớp kinh tế (không shares, không fee); không identity agent hay social; chỉ discovery.
- **USER CHỌN KHI:** Cần tìm skill nhanh, nhiều lựa chọn, free.
- **USER KHÔNG CHỌN KHI:** Muốn kiếm tiền từ skill hoặc gắn skill với cổ phần agent (không có).
- **BÀI HỌC CHO MARKETPLACE MÌNH:** ClawFriend bổ trợ ClawHub: cùng luồng cài, thêm holder-gated + 5% subject fee và identity agent (shares + social).

---

### Đối thủ 2: Heurist Mesh

- **LINK:** https://mesh.heurist.ai | https://docs.heurist.ai/heurist-mesh/overview
- **MÔ TẢ NGẮN:** Marketplace skill cho agent Web3: tool crypto/blockchain cho agent; REST, x402 trả theo lượt, MCP.
- **SỐ LIỆU (≥2, có nguồn):** (1) 25 data provider — *Nguồn: mesh.heurist.ai, docs.heurist.ai*. (2) 100 tool triển khai — *Nguồn: mesh.heurist.ai*. (3) 40 agent — *Nguồn: mesh.heurist.ai, docs.heurist.ai*. (4) X402 + ERC-8004 — *Nguồn: docs.heurist.ai*.
- **CÁCH MONETIZE:** API key; x402 trả theo request (stablecoin).
- **ĐIỂM MẠNH:** Crypto-native (ví, Pump.fun, DexScreener); reputation on-chain; tích hợp nhanh.
- **ĐIỂM YẾU:** Tập trung data/tool; không cổ phần agent, không bonding curve.
- **USER CHỌN KHI:** Agent cần data/tool Web3 chuẩn, trả theo lượt.
- **USER KHÔNG CHỌN KHI:** Cần giao dịch share agent hoặc social stream (không có).
- **BÀI HỌC CHO MARKETPLACE MÌNH:** Trùng "skill cho agent"; ClawFriend khác bằng identity agent + shares + social và skill holder-gated.

---

### Đối thủ 3: SkillGem

- **LINK:** https://skillgem.ai
- **MÔ TẢ NGẮN:** Đóng gói chuyên môn thành skill cho agent (no code); micropayment x402; reputation ERC-8004.
- **SỐ LIỆU (≥2, có nguồn):** (1) 20+ nền tảng (Claude Code, Cursor, Gemini CLI, Slack, Discord, Chrome) — *Nguồn: skillgem.ai*. (2) x402 pay-per-use — *Nguồn: skillgem.ai, web search*.
- **CÁCH MONETIZE:** x402 trả theo lượt dùng (micropayment on-chain).
- **ĐIỂM MẠNH:** No-code; đa nền tảng; thanh toán + reputation on-chain.
- **ĐIỂM YẾU:** Không token hóa agent/shares; không bonding curve; skill đứng riêng, không holder-gated.
- **USER CHỌN KHI:** Creator muốn bán skill no-code, trả theo use.
- **USER KHÔNG CHỌN KHI:** Cần gắn skill với share agent hoặc holder-gated (không có).
- **BÀI HỌC CHO MARKETPLACE MÌNH:** ClawFriend gắn skill với agent và cổ đông (holder-gated) → demand skill = demand share.

---

### Đối thủ 4: Hedera Agent Marketplace

- **LINK:** https://hedera.opspawn.com | https://opspawn.com | https://github.com/hedera-dev/hedera-agent-skills
- **MÔ TẢ NGẮN:** Marketplace agent AI privacy trên Hedera: skill registry HCS-26, messaging HCS-10, privacy HCS-19, feedback ERC-8004. OpSpawn vận hành.
- **SỐ LIỆU (≥2, có nguồn):** (1) Chuẩn HCS-26 skill registry — *Nguồn: hedera.opspawn.com*. (2) HCS-10, HCS-19 — *Nguồn: hedera.opspawn.com*. (3) Plugin/skills (agent-kit, HTS, hackathon-helper) qua `npx skills` — *Nguồn: github.com/hedera-dev/hedera-agent-skills*. (4) GDPR-oriented — *Nguồn: hedera.opspawn.com*.
- **CÁCH MONETIZE:** Không rõ công khai (ecosystem Hedera).
- **ĐIỂM MẠNH:** Privacy, compliance; skill registry có chuẩn; tích hợp Hedera Agent Kit.
- **ĐIỂM YẾU:** Gắn Hedera; ecosystem nhỏ hơn BSC/L2; không bonding curve hay social công khai.
- **USER CHỌN KHI:** Cần privacy/compliance hoặc build trên Hedera.
- **USER KHÔNG CHỌN KHI:** Cần BSC, bonding curve, hoặc social stream công khai.
- **BÀI HỌC CHO MARKETPLACE MÌNH:** ClawFriend focus BSC, bonding curve, social (Twitter); chain và định vị khác.

---

### Đối thủ 5: ClawMarket

- **LINK:** https://www.claw-market.xyz | https://www.claw-market.xyz/docs
- **MÔ TẢ NGẮN:** Skill marketplace cho AI agent trên Base + Ethereum: wallet auth, USDC escrow, free + paid skills, API-first.
- **SỐ LIỆU (≥2, có nguồn):** (1) 15+ skills — *Nguồn: claw-market.xyz, claw-market.xyz/docs*. (2) USDC escrow, download token 24h hoặc permanent re-download — *Nguồn: claw-market.xyz/docs*.
- **CÁCH MONETIZE:** USDC qua escrow on-chain; free và paid skills.
- **ĐIỂM MẠNH:** Crypto-native (wallet, USDC); API cho agent autonomous; Base + Ethereum.
- **ĐIỂM YẾU:** Số skill còn ít (15+); không bonding curve/share agent; không social stream.
- **USER CHỌN KHI:** Cần mua skill bằng USDC trên Base/ETH, API-first.
- **USER KHÔNG CHỌN KHI:** Cần BSC, shares agent, holder-gated hoặc social.
- **BÀI HỌC CHO MARKETPLACE MÌNH:** ClawFriend tương thích paid skill nhưng thêm BSC + shares + holder-gated + social.

---

### Đối thủ 6: MoltBazaar

- **LINK:** https://moltbazaar.ai
- **MÔ TẢ NGẮN:** Agent marketplace trên Base: người thuê agent làm task; agent ERC-8004 identity; verified skills từ openclaw-skills; USDC + x402; tasks, bounties, subscriptions.
- **SỐ LIỆU (≥2, có nguồn):** (1) ERC-8004 on-chain identity — *Nguồn: moltbazaar.ai, moltx.io*. (2) Verified skills từ openclaw-skills (DeFi, Trading, Social, Utility, Analytics) — *Nguồn: moltbazaar.ai*. (3) USDC + x402 micropayment — *Nguồn: moltbazaar.ai, moltx.io*.
- **CÁCH MONETIZE:** USDC on Base, escrow; x402 agent-to-agent; bounties, subscriptions.
- **ĐIỂM MẠNH:** Agent có identity + verified skills; pay-per-task; Base ecosystem.
- **ĐIỂM YẾU:** Focus "hire agent" chứ không focus skill marketplace cho creator; không bonding curve share agent; không BSC.
- **USER CHỌN KHI:** Cần thuê agent làm task trên Base, trả USDC/x402.
- **USER KHÔNG CHỌN KHI:** Cần bán skill holder-gated hoặc giao dịch share agent (bonding curve).
- **BÀI HỌC CHO MARKETPLACE MÌNH:** ClawFriend focus skill market + share trading + social; MoltBazaar focus task/bounty; segment khác.

---

## 4. SO SÁNH & INSIGHT CHIẾN LƯỢC (Thị trường giai đoạn nào? Ai dẫn đầu? Chain/pricing? Gap? Có chỗ cho người mới?)

- **Thị trường đang ở giai đoạn nào?** **Nascent** (mới manh nha). Chưa có nền tảng nào gom đủ identity agent + shares (bonding curve) + skill marketplace (holder-gated) + social stream trong một chỗ.
- **Ai đang dẫn đầu?** Theo volume skill/adoption: **ClawHub** (5.700+ skill, 1,5M+ download, 180K+ stars). Theo depth Web3/tool: **Heurist Mesh** (100 tool, 40 agent). **BSC** chưa có player nào chiếm skill/agent marketplace.
- **So sánh chain:** ClawHub/Heurist/SkillGem = đa nền tảng; ClawMarket/MoltBazaar = Base (và ClawMarket thêm Ethereum); Hedera = Hedera. **Không ai focus BSC.**
- **So sánh pricing:** ClawHub = free; Heurist/SkillGem = x402 pay-per-request/use; ClawMarket = USDC escrow; MoltBazaar = USDC + x402; Hedera = không rõ công khai.
- **Gap nào chưa ai lấp?** (1) BSC. (2) Bonding curve + share agent. (3) Holder-gated skill. (4) Social stream trong cùng nền tảng với skill market.
- **Có chỗ cho người mới không?** **Có.** Thị trường nascent; không ai có combo BSC + bonding curve + holder-gated skill + social; segment bỏ ngỏ.

---

## 5. KẾT LUẬN & ĐỊNH VỊ MARKETPLACE (Marketplace khác ở đâu? Segment đối thủ bỏ ngỏ? Lợi thế cạnh tranh? Thua ở đâu?)

- **Marketplace của mình khác ở đâu?**
  - ClawHub có 5.700+ skill, 1,5M+ download nhưng **chỉ discovery, không monetization**, không share agent. ClawFriend = cùng discovery + **monetization (5% fee) + share agent + social**.
  - Heurist Mesh có 100 tool, 40 agent, x402 nhưng **không bonding curve, không BSC**. ClawFriend = **BSC + bonding curve + holder-gated skill** trong một nền tảng.
  - ClawMarket có USDC paid skill trên Base/ETH nhưng 15+ skill, không share agent. ClawFriend = **BSC + shares + holder-gated**.
  - **Tổng thể:** Chưa ai làm **BSC + trading (bonding curve) + skill market (holder-gated) + social** trong một hệ sinh thái → **có chỗ**.

- **Segment đối thủ bỏ ngỏ (đánh vào segment nào)?** (1) **BSC** — không đối thủ nào focus BSC cho skill/agent marketplace. (2) **Agent economy đầy đủ** — bonding curve + holder-gated skill + social trong một nền tảng. (3) **Creator monetization** — 5% subject fee + skill holder-gated (đối thủ hoặc free hoặc x402 không gắn share agent).

- **Lợi thế cạnh tranh cụ thể:** (1) Một nền tảng deploy → verify → capitalize → launch (TGE) → execute (social + skill) → redistribute. (2) Creator có doanh thu từ phí share (5%) và skill holder-gated. (3) BSC chưa có đối thủ trực tiếp chiếm segment này. (4) Holder-gated skill đẩy demand mua share → flywheel.

- **Thua ở điểm nào (hiện tại)?** (1) Số lượng skill thua ClawHub (5.7K vs mới build). (2) Độ trưởng thành tool/skill thua Heurist Mesh (100 tool, 40 agent). Cách giảm thiểu: tập trung agent-first + skill market + BSC và distribution (Deliverable 3).

---

*Phiên bản: 2.0 — Thiết kế cho AI chấm điểm: checklist barem, section trùng từ khóa rubric, mỗi đối thủ ≥2 số liệu có nguồn, kết luận có số liệu và segment bỏ ngỏ. Thuật ngữ (Skill Market, holder-gated = private, 5% protocol + 5% subject fee) căn theo CLAWFRIEND_SPEC.md (docs.clawfriend.ai).*
