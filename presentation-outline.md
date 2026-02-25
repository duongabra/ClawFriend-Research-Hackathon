# Gợi ý nội dung slide — Web Presentation (Gemini Canvas)

Dùng file này làm **outline** khi tạo web presentation bằng Gemini Canvas. Cấu trúc theo **Guidebook**: Competitive Landscape (3 phút) → Skill Research (4 phút) → Distribution Plan (5 phút) → AI Showcase (2 phút) → Q&A (5–8 phút). Nội dung rút từ deliverables hiện tại trong repo.

---

## Hướng dẫn tạo slide bằng Gemini Canvas (theo Guidebook)

**Prompt mẫu (Guidebook):**
> Build a full-screen, presentation-style slide deck web app with [số slide] slides, optimized for live presentation and verbal narration. Use React and Tailwind CSS. Install the hls.js package for video backgrounds and lucide-react for icons.  
> [Thêm nội dung từng slide của bạn bên dưới.]

**Gợi ý:** Trên X search "presentation gemini 3.1" để tìm thêm template. Sau khi tạo xong, **dán link presentation vào README.md** (mục "Web Presentation").

---

## Slide 1 — Title

- **Cook a Web3 Skill Marketplace**
- ClawFriend — Skill Market go-to-market plan
- Tên thí sinh / team

---

## Slide 2 — Competitive Landscape (~3 phút)

**Mục tiêu (Guidebook):** Top 5 đối thủ, điểm mạnh/yếu, marketplace mình khác ở đâu.

**Nội dung slide (rút từ deliverables/competitive-landscape.md):**

- **6 đối thủ trực tiếp** (Web3 skill/agent marketplace): ClawHub (OpenClaw), Heurist Mesh, SkillGem, Hedera Agent Marketplace, ClawMarket, MoltBazaar.
- **Số liệu chính:** ClawHub 5.700+ skill, 1,5M+ download, 180K+ GitHub stars; Heurist Mesh 100 tool, 40 agent; ClawMarket 15+ skills, USDC escrow; MoltBazaar ERC-8004, Base.
- **Thị trường:** Nascent. Chưa ai gom đủ: identity agent + bonding curve + skill marketplace (holder-gated) + social trong một nền tảng.
- **So sánh chain:** ClawHub/Heurist/SkillGem đa nền tảng; ClawMarket/MoltBazaar Base (+ ETH); Hedera = Hedera. **Không ai focus BSC.**
- **Kết luận — ClawFriend khác ở đâu:**
  - ClawHub: discovery lớn nhưng không monetization, không share agent → ClawFriend = discovery + 5% fee + share agent + social.
  - Heurist: tool mạnh nhưng không bonding curve, không BSC → ClawFriend = BSC + bonding curve + holder-gated skill.
  - **Định vị:** BSC + bonding curve + Skill Market (holder-gated) + social. Segment bỏ ngỏ: BSC, agent economy đầy đủ, creator monetization (5% subject fee).
- **Thua hiện tại:** Số skill so ClawHub; độ trưởng thành tool so Heurist. Giảm thiểu: distribution + focus BSC + skill market.

*Trình bày: 2–3 đối thủ có số liệu + 1 bảng so sánh ngắn + 1 câu định vị.*

---

## Slide 3 — Skill Research (~4 phút)

**Mục tiêu (Guidebook):** Top 3–5 skill tốt nhất, bằng chứng demand, pricing/visibility.

**Nội dung slide (rút từ deliverables/skill-research.md):**

- **7 skill đề xuất:** (1) Real-time Whale / Smart Money Tracker BSC, (2) Rug Pull / Scam Token Detector BSC, (3) DeFi Yield / APY so sánh BSC, (4) Token Price Alert, (5) Portfolio Tracker đa ví, (6) Alpha / Sentiment từ Social, (7) New Token / Listing Alert BSC.
- **Bằng chứng demand (có nguồn):** Nansen $99–$999/tháng; Whale Alert 2,5M+ followers; RugChecker, Token Sniffer (30K+ contract/ngày); YO Protocol $1M+ earn volume 2 tuần đầu; Drops Bot, DeBank, LunarCrush.
- **Visibility & monetization:** Public free (lead magnet) → holder-gated cho bản nâng cao (filter, unlimited, real-time). So sánh: tool trả phí (Nansen, RugChecker) → mình dùng share model thay subscription.
- **Chọn 3–5 skill trình bày:** Nhấn mạnh Whale Tracker, Rug Detector, DeFi Yield/APY (số liệu rõ); nêu ngắn Price Alert, Portfolio, Alpha, New Token Listing.

*Trình bày: tên skill + target user + 1 con số demand + public → holder-gated.*

---

## Slide 4 — Distribution Plan (~5 phút)

**Mục tiêu (Guidebook):** 3–5 kênh cụ thể, action plan, timeline, metric. Budget $10.000 tháng đầu.

**Nội dung slide (rút từ deliverables/distribution-plan.md) — có thể tách 2–3 slide con:**

### 4a. Ràng buộc & lựa chọn (1 slide)

- **Budget:** $10.000 tháng đầu. Ít nhất 1 kênh organic + 1 kênh paid; 3–5 kênh acquisition.
- **Các hướng không chọn** (đã cũ, không đột phá): KOL/micro-influencer, community chung (Telegram, Discord), Twitter/Facebook Ads, bounty một lần, referral, free API, white-label, Creator = agent owner. Không phân bổ ngân sách.
- **Quyết định:** 100% $10K dồn vào **một đòn bẩy: cuộc thi hàng tuần**. 3 kênh: (1) Cuộc thi — paid $10K; (2) Technical blog — organic $0; (3) Partnership OpenClaw — organic $0.

### 4b. Cơ chế cuộc thi hàng tuần (1–2 slide)

- **Phân bổ:** $2.500 × 4 tuần = $10.000. Mỗi Chủ nhật **BGK dùng $2.500 mua share agent thắng** on-chain (bonding curve).
- **Đối tượng:** Mọi agent trên ClawFriend (có skill mới trong tuần).
- **Tiêu chí:** Skill được BGK chấm cao nhất hoặc nhiều lượt tải nhất tuần (có thể 50% BGK + 50% lượt tải). Công bố công thức.
- **Bảng xếp hạng:** "Leaderboard tuần này" — hạng, tên agent, điểm. **T2–T7:** cập nhật realtime (vd 1–2 giờ). **Chủ nhật:** đóng băng đến khi chốt (tránh đổ xô cuối; user hồi hộp chờ kết quả).
- **Chốt:** CN 23:59 snapshot → công bố winner → BGK mua $2.500 share winner. Flywheel: volume → fee 5% → prize tuần 5, 6, …
- **Lợi ích kép:** (1) Nguồn skill từ người dự thi. (2) FOMO: mua share sớm khi rẻ, chờ BGK đẩy giá. (3) Tester miễn phí: đánh giá = cài/dùng skill.

### 4c. Hai kênh organic (1 slide hoặc bullet trong 4a)

- **Kênh 2 — Technical blog:** 4–6 bài/tháng, mỗi bài = tutorial 1 skill (vd Whale Tracker, Rug Check). CTA: Install skill trên ClawFriend. Cross-post Twitter, community. Cost $0. Metric: views, sign-up UTM, skill downloads.
- **Kênh 3 — Partnership OpenClaw:** Integration 1-click install từ ClawFriend Skill Market → ClawHub. Đề xuất maintainer OpenClaw, PR/docs. Cost $0. Metric: install qua flow, referral.

### 4d. Timeline & metric (bullet hoặc 1 slide ngắn)

- **Trước tuần 1:** Công bố thể lệ; build Leaderboard (realtime T2–T7, đóng băng CN); pipeline chấm; announce.
- **Tuần 1–4:** Mỗi tuần BXH, CN chốt, BGK mua share winner, công bố; theo dõi volume & fee.
- **Sau tuần 4:** Prize tuần 5+ từ fee.
- **Metric:** Số agent tham gia, số skill mới, volume share, fee thu được, sign-up, engagement leaderboard.

---

## Slide 5 — AI Showcase (~2 phút)

**Mục tiêu (Guidebook):** Show cách dùng AI để research. Điểm cộng nếu có prompt/workflow rõ.

**Nội dung slide (rút từ deliverables/ai-showcase/prompts-used.md):**

- **Công cụ:** Cursor + web search. Verify mọi số liệu từ nguồn (không chỉ "AI cho em").
- **Competitive:** Prompt tìm Web3 agent/skill marketplace → Heurist Mesh, SkillGem, ClawHub, ClawMarket, MoltBazaar, Hedera. Lấy số liệu (stars, download, tool count) → bảng + kết luận có nguồn.
- **Skill:** Prompt tìm demand (whale alert, rug pull, yield tool, Nansen pricing, Whale Alert followers) → viết từng skill có bằng chứng + nguồn.
- **Distribution:** Thảo luận ý tưởng cuộc thi với AI → viết plan: BXH realtime T2–T7, đóng băng CN, BGK mua $2.5K share, flywheel.
- **File tham chiếu:** `deliverables/ai-showcase/prompts-used.md` — có thể show 1–2 screenshot Cursor hoặc mở file khi present.

---

## Slide 6 — Q&A (~5–8 phút)

**Chuẩn bị trả lời (theo Guidebook):**

| Câu hỏi BGK | Cần trả lời |
|-------------|-------------|
| Đối thủ X đã có 50K user, tại sao marketplace mình sẽ thắng? | Phân tích cụ thể: đối thủ focus gì, mình có gì (BSC + bonding curve + skill + social). Số liệu, không ý kiến. |
| Skill này có ai thực sự cần? Có drive user không? | Bằng chứng demand: search volume, tool trả phí hiện có (Nansen, RugChecker, YO Protocol…). |
| $10K budget tháng đầu có đủ không? | Unit economics nếu có; hoặc: 100% vào cuộc thi = prize minh bạch, flywheel từ fee. |
| Tại sao user không dùng ChatGPT/Claude thay vì skill? | Giá trị khác: on-chain data real-time, tích hợp wallet, holder-gated access thay subscription. |

---

## Checklist trước khi present (theo Guidebook)

- [ ] GitHub repo public, link trong Telegram
- [ ] Web Presentation tạo bằng Gemini Canvas, link trong README.md
- [ ] Competitive: ≥5 đối thủ, có số liệu, phân tích, kết luận
- [ ] Skill: 5–10 skill, target user + problem + alternative + pricing + bằng chứng demand
- [ ] Distribution: kênh cụ thể, action plan + timeline + metric + budget; ≥1 organic + ≥1 paid
- [ ] AI Showcase: screenshot/link prompt hoặc file prompts-used.md
- [ ] Mọi số liệu đã verify nguồn (không chỉ từ AI)

---

*Cập nhật: Feb 2026 — Đồng bộ với Guidebook và deliverables hiện tại (competitive-landscape.md, skill-research.md, distribution-plan.md, ai-showcase/prompts-used.md).*
