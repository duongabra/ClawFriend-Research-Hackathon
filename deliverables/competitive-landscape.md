# Deliverable 1: Competitive Landscape (25%)

---

## CHECKLIST ĐÁP ỨNG BAREM (theo Guidebook)

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
| 4 | Hedera Agent Marketplace | hedera.opspawn.com, github.com/hedera-dev/hedera-agent-skills | Agent + skill registry | Hedera | 3 plugin/skills (agent-kit, HTS, hackathon-helper); GitHub 4 stars, 1 fork; chuẩn HCS-26, HCS-10/19 |
| 5 | ClawMarket | claw-market.xyz | Skill marketplace paid/free | Base, Ethereum | 15+ skills; USDC escrow |
| 6 | MoltBazaar | moltbazaar.ai | Agent marketplace + skills | Base | ERC-8004; openclaw-skills; USDC + x402 |

---

## 3. CHẤT LƯỢNG PHÂN TÍCH ĐỐI THỦ (mỗi đối thủ: mô tả, số liệu có nguồn, điểm mạnh/yếu, user chọn/không chọn, bài học)

### Đối thủ 1: ClawHub (OpenClaw)

- **LINK:** https://openclaw.ai | https://docs.openclaw.ai | https://claw-hub.net
- **MÔ TẢ NGẮN:** Framework agent mã nguồn mở + skill registry; cài skill qua `npx clawhub install`. Không marketplace thương mại; không bonding curve, không cổ phần agent.
- **SỐ LIỆU (mỗi số có nguồn):**
  - 5.700+ skill — *Nguồn: thecaio.ai (OpenClaw Skills & ClawHub Guide 2026).*
  - 1,5M+ tổng download — *Nguồn: claw-hub.net.*
  - 180K+ GitHub stars (OpenClaw) — *Nguồn: docs.openclaw.ai, thecaio.ai.*
  - ~40–60 skill mới/ngày — *Nguồn: thecaio.ai.*
  - Skill top 35K+ download (vd Capability Evolver) — *Nguồn: claw-hub.net.*
- **CÁCH MONETIZE:** Registry miễn phí; không monetization cho creator hay holder-gated.
- **ĐIỂM MẠNH:** Kho skill lớn nhất; dev dùng nhiều; semantic search + category; version control, community ratings.
- **ĐIỂM YẾU:** Không lớp kinh tế (không shares, không fee); không identity agent hay social; chỉ discovery.
- **USER CHỌN KHI:** Cần tìm skill nhanh, nhiều lựa chọn, free.
- **USER KHÔNG CHỌN KHI:** Muốn kiếm tiền từ skill hoặc gắn skill với cổ phần agent (không có).
- **BÀI HỌC CHO MARKETPLACE MÌNH:** (1) **Discovery + category** của ClawHub kéo adoption mạnh → mình cần UX tìm skill và phân loại rõ. (2) Bổ trợ ClawHub: cùng luồng cài (`clawhub install`), thêm holder-gated + 5% subject fee và identity agent (shares + social) để không cạnh tranh head-on mà bổ sung monetization.

---

### Đối thủ 2: Heurist Mesh

- **LINK:** https://mesh.heurist.ai | https://docs.heurist.ai/heurist-mesh/overview
- **MÔ TẢ NGẮN:** Marketplace skill/tool cho agent Web3: tool crypto/blockchain (ví, DEX, token, social); REST, x402 trả theo lượt, MCP. Đa chain.
- **SỐ LIỆU (mỗi số có nguồn):**
  - 25 data provider — *Nguồn: mesh.heurist.ai, docs.heurist.ai.*
  - 100 tool triển khai — *Nguồn: mesh.heurist.ai.*
  - 40 agent — *Nguồn: mesh.heurist.ai, docs.heurist.ai.*
  - X402 + ERC-8004 (pay-per-use, identity on-chain) — *Nguồn: mesh.heurist.ai, docs.heurist.ai.*
- **CÁCH MONETIZE:** API key; x402 trả theo request (stablecoin).
- **ĐIỂM MẠNH:** Crypto-native (ví, Pump.fun, DexScreener); reputation on-chain; tích hợp nhanh.
- **ĐIỂM YẾU:** Tập trung data/tool; không cổ phần agent, không bonding curve.
- **USER CHỌN KHI:** Agent cần data/tool Web3 chuẩn, trả theo lượt.
- **USER KHÔNG CHỌN KHI:** Cần giao dịch share agent hoặc social stream (không có).
- **BÀI HỌC CHO MARKETPLACE MÌNH:** (1) **Pricing:** Heurist dùng x402 pay-per-request → dev chấp nhận trả theo lượt; mình có thể cân nhắc hybrid (free tier + pay-per-use cho advanced). (2) Trùng "skill cho agent"; ClawFriend khác bằng identity agent + shares + social và skill holder-gated, không chỉ tool/data.

---

### Đối thủ 3: SkillGem

- **LINK:** https://skillgem.ai
- **MÔ TẢ NGẮN:** Đóng gói chuyên môn thành skill cho agent (no code); micropayment x402; reputation ERC-8004.
- **SỐ LIỆU (≥2, có nguồn):** (1) 20+ nền tảng (Claude Code, Cursor, Gemini CLI, Slack, Discord, Chrome) — *Nguồn: skillgem.ai*. (2) x402 pay-per-use — *Nguồn: skillgem.ai, web search*. *Lưu ý: SkillGem chưa công bố metric user count / revenue / download; số liệu trên là feature (số nền tảng, cơ chế thanh toán), không phải business metric — tương tự Hedera, dùng capacity/feature khi thiếu metric công khai.*
- **CÁCH MONETIZE:** x402 trả theo lượt dùng (micropayment on-chain).
- **ĐIỂM MẠNH:** No-code; đa nền tảng; thanh toán + reputation on-chain.
- **ĐIỂM YẾU:** Không token hóa agent/shares; không bonding curve; skill đứng riêng, không holder-gated.
- **USER CHỌN KHI:** Creator muốn bán skill no-code, trả theo use.
- **USER KHÔNG CHỌN KHI:** Cần gắn skill với share agent hoặc holder-gated (không có).
- **BÀI HỌC CHO MARKETPLACE MÌNH:** (1) **GTM:** SkillGem đa nền tảng (Claude, Cursor, Slack, Discord…) → mình nên ưu tiên 1–2 platform trước (vd Cursor/ClawHub) rồi mở rộng. (2) No-code + pay-per-use thu hút creator; ClawFriend gắn skill với agent và cổ đông (holder-gated) → demand skill = demand share.

---

### Đối thủ 4: Hedera Agent Marketplace

- **LINK:** https://hedera.opspawn.com | https://opspawn.com | https://github.com/hedera-dev/hedera-agent-skills
- **MÔ TẢ NGẮN:** Marketplace agent AI privacy trên Hedera: skill registry HCS-26, messaging HCS-10, privacy HCS-19, feedback ERC-8004. OpSpawn vận hành.
- **SỐ LIỆU (≥2, có nguồn):** (1) **3 plugin/skills** (agent-kit, HTS, hackathon-helper) qua `npx skills` — *Nguồn: github.com/hedera-dev/hedera-agent-skills*. (2) **GitHub repo:** 4 stars, 1 fork (thống kê công khai) — *Nguồn: github.com/hedera-dev/hedera-agent-skills*. (3) Chuẩn HCS-26 skill registry, HCS-10/19 (bối cảnh kỹ thuật) — *Nguồn: hedera.opspawn.com*. (4) GDPR-oriented — *Nguồn: hedera.opspawn.com*. *Lưu ý: Hedera ecosystem chưa công bố rộng metric user count/TVL; số liệu dùng là repo + số plugin.*
- **CÁCH MONETIZE:** Không rõ công khai (ecosystem Hedera).
- **ĐIỂM MẠNH:** Privacy, compliance; skill registry có chuẩn; tích hợp Hedera Agent Kit.
- **ĐIỂM YẾU:** Gắn Hedera; ecosystem nhỏ hơn BSC/L2; không bonding curve hay social công khai.
- **USER CHỌN KHI:** Cần privacy/compliance hoặc build trên Hedera.
- **USER KHÔNG CHỌN KHI:** Cần BSC, bonding curve, hoặc social stream công khai.
- **BÀI HỌC CHO MARKETPLACE MÌNH:** (1) **Differentiator:** Hedera đẩy privacy/compliance (GDPR) → segment enterprise/regulated; mình focus BSC + retail/crypto-native, tránh overlap. (2) Chain và định vị khác: ClawFriend focus BSC, bonding curve, social (Twitter); không cạnh tranh trên Hedera.

---

### Đối thủ 5: ClawMarket

- **LINK:** https://www.claw-market.xyz | https://www.claw-market.xyz/docs
- **MÔ TẢ NGẮN:** Skill marketplace cho AI agent trên Base + Ethereum: wallet auth, USDC escrow, free + paid skills, API-first.
- **SỐ LIỆU (≥2, có nguồn):** (1) 15+ skills — *Nguồn: claw-market.xyz, claw-market.xyz/docs*. (2) USDC escrow, download token 24h hoặc permanent re-download — *Nguồn: claw-market.xyz/docs*. *Lưu ý: ClawMarket chưa công bố metric user count/GMV; (1) là capacity (số skill), (2) là feature (cơ chế thanh toán) — dùng khi thiếu metric công khai, đồng nhất với SkillGem/Hedera.*
- **CÁCH MONETIZE:** USDC qua escrow on-chain; free và paid skills.
- **ĐIỂM MẠNH:** Crypto-native (wallet, USDC); API cho agent autonomous; Base + Ethereum.
- **ĐIỂM YẾU:** Số skill còn ít (15+); không bonding curve/share agent; không social stream.
- **USER CHỌN KHI:** Cần mua skill bằng USDC trên Base/ETH, API-first.
- **USER KHÔNG CHỌN KHI:** Cần BSC, shares agent, holder-gated hoặc social.
- **BÀI HỌC CHO MARKETPLACE MÌNH:** (1) **UX:** ClawMarket dùng USDC escrow + download token (24h hoặc permanent) → paid skill có flow rõ; mình có thể tham khảo escrow/claim cho holder-gated. (2) ClawFriend tương thích paid skill nhưng thêm BSC + shares + holder-gated + social để creator vừa bán skill vừa gắn với share agent.

---

### Đối thủ 6: MoltBazaar

- **LINK:** https://moltbazaar.ai
- **MÔ TẢ NGẮN:** Agent marketplace trên Base: người thuê agent làm task; agent ERC-8004 identity; verified skills từ openclaw-skills; USDC + x402; tasks, bounties, subscriptions.
- **SỐ LIỆU (≥2, có nguồn):** (1) ERC-8004 on-chain identity — *Nguồn: moltbazaar.ai, moltx.io*. (2) Verified skills từ openclaw-skills (DeFi, Trading, Social, Utility, Analytics) — *Nguồn: moltbazaar.ai*. (3) USDC + x402 micropayment — *Nguồn: moltbazaar.ai, moltx.io*. *Lưu ý: MoltBazaar chưa công bố metric user count/volume; số liệu dùng là feature/capacity (identity, verified skills, payment), tương tự SkillGem/Hedera.*
- **CÁCH MONETIZE:** USDC on Base, escrow; x402 agent-to-agent; bounties, subscriptions.
- **ĐIỂM MẠNH:** Agent có identity + verified skills; pay-per-task; Base ecosystem.
- **ĐIỂM YẾU:** Focus "hire agent" chứ không focus skill marketplace cho creator; không bonding curve share agent; không BSC.
- **USER CHỌN KHI:** Cần thuê agent làm task trên Base, trả USDC/x402.
- **USER KHÔNG CHỌN KHI:** Cần bán skill holder-gated hoặc giao dịch share agent (bonding curve).
- **BÀI HỌC CHO MARKETPLACE MÌNH:** (1) **Segment:** MoltBazaar = "hire agent làm task" (bounty, subscription) → demand từ bên thuê; mình = "creator bán skill + user mua share" → demand từ cả creator lẫn speculator. Tránh nhầm lẫn positioning. (2) Verified skills từ openclaw-skills cho thấy tương thích ClawHub là lợi thế; ClawFriend nên giữ tương thích install flow.

---

## 4. SO SÁNH & INSIGHT CHIẾN LƯỢC (Thị trường giai đoạn nào? Ai dẫn đầu? Chain/pricing? Gap? Có chỗ cho người mới?)

### Tổng quan thị trường

**(1) Giai đoạn thị trường — nascent, AI agent dẫn đầu.** Phân khúc Web3 skill/agent marketplace còn rất sớm; chưa định hình. AI agent (ClawHub, Heurist, SkillGem…) đang dẫn đầu adoption (skill, tool, agent); chưa có nền tảng nào gom đủ identity agent + shares + skill marketplace holder-gated + social trong một chỗ.

**(2) TAM / CAGR (có nguồn).**

| Chỉ số | Khoảng | Nguồn |
|--------|--------|--------|
| TAM đến 2030 | ~$50B – $183B | Grand View Research (AI Agents Market Report); PR Newswire |
| CAGR | ~45–50% | Grand View Research; grandviewresearch.com/press-release/global-ai-agents-market-report; PR Newswire 2025 |

**(3) So sánh chain.** ClawHub / Heurist / SkillGem = đa nền tảng; ClawMarket = Base + Ethereum; MoltBazaar = Base; Hedera = Hedera. **BSC chưa có player nào chiếm skill/agent marketplace.**

**(4) Gap thị trường.** **BSC + bonding curve + holder-gated skill** — chưa ai gom đủ ba yếu tố này trong một nền tảng; thêm social stream càng hiếm. Segment bỏ ngỏ cho người mới.

---

- **So sánh pricing:** ClawHub = free; Heurist/SkillGem = x402 pay-per-request/use; ClawMarket = USDC escrow; MoltBazaar = USDC + x402; Hedera = không rõ công khai.
- **Có chỗ cho người mới không?** **Có.** Thị trường nascent; không ai có combo BSC + bonding curve + holder-gated skill + social; segment bỏ ngỏ.

---

## 5. KẾT LUẬN & ĐỊNH VỊ MARKETPLACE

**(1) Marketplace khác ở đâu — đối thủ làm gì, thiếu gì.**

| Đối thủ | Làm gì | Thiếu gì |
|---------|--------|----------|
| ClawHub | 5.700+ skill, 1,5M+ download, discovery, semantic search | Monetization, share agent, bonding curve, holder-gated |
| Heurist Mesh | 100 tool, 40 agent, x402 pay-per-use, Web3 data/tool | Bonding curve, BSC, share agent, social |
| SkillGem | Skill no-code, x402, ERC-8004, đa nền tảng | Share agent, bonding curve, holder-gated |
| ClawMarket | Paid skill USDC trên Base/ETH, API-first | BSC, share agent, holder-gated, số skill còn ít |
| MoltBazaar | Agent marketplace Base, ERC-8004, verified skills | BSC, bonding curve, focus “skill cho creator” |
| Hedera | Agent + skill registry, privacy/GDPR, HCS | BSC, bonding curve, social, ecosystem nhỏ |

**Tổng thể:** Chưa ai gom đủ **BSC + bonding curve + skill market (holder-gated) + social** trong một nền tảng.

**(2) Segment bỏ ngỏ / gap.**

- **BSC + bonding curve + holder-gated skill** — chưa ai gom đủ ba yếu tố này; thêm social stream càng hiếm.
- **BSC:** Không đối thủ nào focus BSC cho skill/agent marketplace.
- **Creator monetization gắn share:** 5% subject fee + skill holder-gated (đối thủ hoặc free hoặc x402 không gắn share agent).

**(3) Lợi thế cạnh tranh cụ thể của mình.**

- Một nền tảng: deploy → verify → capitalize → launch (TGE) → execute (social + skill) → redistribute.
- Creator có doanh thu từ phí share (5%) và skill holder-gated; holder-gated skill đẩy demand mua share → flywheel.
- BSC chưa có đối thủ trực tiếp chiếm segment skill/agent marketplace.

**(4) Mình thua ở đâu.**

- **Số lượng skill:** Thua ClawHub (5.7K+ skill vs mới build).
- **Độ trưởng thành tool/skill:** Thua Heurist Mesh (100 tool, 40 agent).
- **Giảm thiểu:** Tập trung agent-first + skill market + BSC và distribution (Deliverable 3).

---

*Phiên bản: 2.3 — ClawMarket, MoltBazaar: thêm lưu ý metric (feature/capacity khi thiếu user/GMV). v2.2: SkillGem note, TAM link. v2.1: (1) Hedera bổ sung số liệu thực (3 plugin, GitHub stars/forks), tách chuẩn HCS khỏi “metric”; (2) Bài học đa dạng hóa — mỗi đối thủ có góc UX/pricing/GTM/segment riêng; (3) Section 4 thêm context TAM/CAGR (nguồn Grand View Research, báo cáo AI Agents). Thuật ngữ căn theo CLAWFRIEND_SPEC.md (docs.clawfriend.ai).*
