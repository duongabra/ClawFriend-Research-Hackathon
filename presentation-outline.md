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

**Mục tiêu (Guidebook):** 3–5 kênh cụ thể, action plan, timeline, metric. Budget $10.000 tháng đầu. Plan đủ chi tiết để intern đọc xong biết ngày mai làm gì.

**Nội dung slide (rút từ deliverables/distribution-plan.md) — nên tách 3–4 slide con để đủ ý.**

---

### 4a. Ràng buộc & lựa chọn (1 slide)

- **Budget:** $10.000 tháng đầu. Yêu cầu: ít nhất 1 kênh organic + 1 kênh paid; 3–5 kênh acquisition.
- **Các hướng không chọn** (đã cũ, thí sinh khác làm, không đột phá): Thuê KOL / micro-influencer; làm cộng đồng chung (Telegram, Reddit, Discord); Twitter/Facebook Ads; skill trojan ClawHub, bot Telegram, content; bounty một lần, referral, free API, embed app, white-label; Creator = agent owner (guarantee fee). **Không phân bổ ngân sách** cho các hướng trên.
- **Quyết định:** 100% $10K và **sự tập trung** dồn vào **một thứ duy nhất: cuộc thi hàng tuần**. 3 kênh đáp ứng guidebook: (1) **Cuộc thi hàng tuần** — paid $10K; (2) **Technical blog** — organic $0; (3) **Partnership OpenClaw** — organic $0.

---

### 4b. Cơ chế cuộc thi hàng tuần — ý tưởng & phân bổ (1 slide)

- **Ý tưởng:** Mọi agent trên ClawFriend được tham gia; mỗi tuần có bảng xếp hạng realtime; Chủ nhật chốt; **BGK dùng $2.500 mua share agent thắng** on-chain; đề bài gắn **skill** (agent tạo skill hay / nhiều lượt tải nhất). User FOMO: mua share agent có skill đột phá **khi còn rẻ**, chờ BGK mua đẩy giá → volume → fee 5% → prize tuần sau (**flywheel**).
- **Phân bổ $10.000:** **$2.500 × 4 tuần = $10.000**. Toàn bộ budget = prize: mỗi Chủ nhật BGK dùng $2.500 mua share của agent thắng trên bonding curve. Không dành cho KOL, ads hay kênh khác. Từ tháng 2: prize tuần 5, 6, … từ **fee 5% volume**.
- **Đối tượng:** Mọi agent trên ClawFriend (tự đăng ký hoặc mặc định tham gia nếu có skill mới trong tuần).
- **Đề bài / tiêu chí:** Gắn **skill** — agent nào có **skill được BGK đánh giá cao nhất** hoặc **skill có nhiều lượt tải nhất trong tuần** (hoặc kết hợp: 50% BGK, 50% lượt tải). Công bố rõ công thức. Cách tính điểm: (a) BGK đánh giá tay/rubric, (b) bot/LLM chấm, hoặc (c) lượt tải skill trong tuần. Skill đặc biệt hay có thể bonus điểm hoặc "Skill of the week".

---

### 4c. Bảng xếp hạng (BXH) — hoạt động như thế nào (1–2 slide, rất chi tiết)

**Trên platform có trang "Leaderboard tuần này" (BXH) hiển thị:** thứ hạng, tên agent, điểm (từ BGK hoặc lượt tải). Có thể hiển thị thêm "BGK đang xếp agent X dẫn đầu". Công thức tính điểm được **công bố rõ** từ đầu tuần.

**Lịch cập nhật BXH — phân biệt rõ từng ngày:**

| Giai đoạn | BXH hoạt động thế nào | Hành vi user |
|-----------|------------------------|--------------|
| **Thứ Hai → Thứ Bảy (T2–T7)** | BXH **cập nhật realtime** (ví dụ mỗi 1–2 giờ). Số liệu mới (lượt tải, điểm BGK) được cập nhật liên tục → thứ hạng đổi. | User theo dõi, FOMO, **dự đoán** ai sẽ thắng, **mua share** trong tuần (agent dẫn đầu hoặc hạng 2–4). Mua bán → volume → fee 5%. |
| **Chủ nhật (CN)** | BXH **không cập nhật nữa** (đóng băng) từ đầu ngày CN cho đến khi chốt. Không có dữ liệu mới đẩy vào BXH. | User **hồi hộp chờ kết quả**. Không còn "chạy theo" mua gần cuối — mọi quyết định mua/giữ đã phải thực hiện từ T2–T7. Tạo cảm giác công bằng và kịch tính. |

**Tại sao đóng băng BXH vào Chủ nhật?** Tránh nhiều người đổ xô mua share **ngay trước giờ chốt**; ngày CN chỉ còn việc chờ snapshot và công bố winner, không còn dữ liệu mới để "sprint" cuối.

**Chốt & công bố:** Chủ nhật (vd **23:59**) chốt **snapshot** — dùng dữ liệu đã thu **trước khi đóng băng BXH**. Công bố winner. **BGK dùng $2.500 mua share của agent thắng** trên bonding curve (on-chain). Có thể livestream hoặc tweet công bố.

**FOMO & flywheel (tóm tắt):** T2–T7 user mua share → volume → fee 5% → dùng fee tài trợ prize tuần sau (tuần 5, 6, …). Cuộc thi **tự nuôi** sau 4 tuần đầu.

---

### 4d. Lợi ích kép từ cuộc thi (1 slide)

1. **Nguồn skill chất lượng:** Người dự thi phải **tạo và publish skill** để được xếp hạng → marketplace nhận rất nhiều skill từ chính người thi; càng chạy lâu kho skill càng đầy.
2. **Lý do FOMO rõ:** User mua share agent có skill đột phá **khi giá còn rẻ**, giữ đến CN — nếu thắng, BGK mua $2.5K → giá đẩy lên → user lợi. **Mua trước, chờ BGK đẩy giá** = incentive tài chính trực tiếp. Cược hạng 2–4 "bứt tốc" cũng tạo engagement.
3. **Nguồn tester vô tận:** Để đánh giá (lượt tải hoặc trải nghiệm) phải **cài và dùng skill** → mỗi lần đánh giá = test skill; không cần thuê tester; skill được stress-test bởi user thật.

---

### 4e. Hai kênh organic (1 slide hoặc bullet)

- **Kênh 2 — Technical blog:** 4–6 bài/tháng (Mirror.xyz hoặc blog clawfriend.ai), mỗi bài = tutorial **1 skill cụ thể** (vd Whale Tracker, Rug Check, Yield/APY, Price Alert). CTA: "Install skill trên ClawFriend", link tới skill detail. Cross-post tóm tắt Twitter, r/cryptocurrency, Telegram BSC/DeFi. Cost $0. Metric: page views, sign-up từ UTM, skill downloads.
- **Kênh 3 — Partnership OpenClaw:** Build flow ClawFriend Skill Market → "Install với ClawHub" (tương thích `clawhub install`). Liên hệ maintainer OpenClaw (Twitter, GitHub); đề xuất PR/docs thêm ClawFriend làm nguồn skill. Cost $0. Metric: install qua flow, referral.

---

### 4f. Timeline & metric (bullet hoặc 1 slide ngắn)

- **Trước tuần 1:** Công bố thể lệ (đề bài skill, tiêu chí, CN chốt, prize = BGK mua $2.5K share); build trang **Leaderboard** (realtime T2–T7, đóng băng CN); quyết định pipeline chấm (BGK tay / LLM rubric / lượt tải); announce.
- **Tuần 1–4:** Mỗi tuần mở đăng ký, cập nhật BXH, CN chốt, BGK mua share winner, công bố; theo dõi volume & fee. Kênh 2 & 3: publish bài, gửi đề xuất OpenClaw.
- **Sau tuần 4:** Prize tuần 5+ từ fee (flywheel). Duy trì blog 4–6 bài/tháng và partnership.
- **Metric (cuộc thi):** Số agent tham gia, số skill mới mỗi tuần, volume giao dịch share, fee thu được, sign-up, engagement leaderboard (lượt xem, thời gian trên trang BXH).

---

## Slide 5 — AI Showcase (~2 phút)

**Mục tiêu (Guidebook):** Show cách dùng AI để research và (nếu có) để **deliver** — ví dụ video trợ lý ảo thuyết trình. Điểm cộng nếu có prompt/workflow rõ và verify nguồn.

**Nội dung slide gồm hai phần: (1) AI research; (2) Video trợ lý ảo thuyết trình (chi tiết).**

---

### 5a. AI dùng để research (prompt & workflow)

- **Công cụ:** Cursor + web search. **Mọi số liệu đều đối chiếu nguồn** trước khi đưa vào deliverables — không dừng ở "AI cho em".
- **Competitive Landscape:** Prompt tìm Web3 agent/skill marketplace (Heurist Mesh, SkillGem, ClawHub, ClawMarket, MoltBazaar, Hedera) → lấy số liệu (GitHub stars, download, tool count) từ website/docs → tổng hợp bảng + kết luận có nguồn.
- **Skill Research:** Prompt tìm demand (whale alert, rug pull, yield tool, Nansen pricing, Whale Alert followers) → viết từng skill có bằng chứng (số liệu, tool trả phí hiện có) + nguồn.
- **Distribution Plan:** Thảo luận ý tưởng với AI (cuộc thi hàng tuần, BXH realtime, đóng băng Chủ nhật, BGK mua share, flywheel) → viết plan chi tiết; cơ chế BXH (T2–T7 cập nhật, CN đóng băng) được mô tả rõ trong deliverable.
- **File tham chiếu khi present:** `deliverables/ai-showcase/prompts-used.md` — có thể mở file hoặc show 1–2 screenshot Cursor.

---

### 5b. Video trợ lý ảo thuyết trình — chi tiết (AI dùng để deliver)

Phần này mô tả **cách làm video pitch** có trợ lý ảo (avatar) nói theo script, đồng bộ slide, dùng toàn bộ tool có thể free hoặc trial. Có thể dùng 1 slide riêng "AI Showcase — Video" hoặc bullet trong Slide 5.

**Ý tưởng:** Thay vì chỉ đọc slide bằng miệng, tạo **video** (~15 phút): avatar (trợ lý ảo) đọc script từ 3 deliverables; slide đổi theo từng đoạn (nói đến đâu đổi slide đến đó). Video dùng khi present (phát trên màn hình) hoặc gửi kèm; phần Q&A vẫn do người trả lời trực tiếp.

**Công cụ & quy trình đã dùng (chi tiết):**

| Bước | Công cụ / file | Mô tả chi tiết |
|------|-----------------|----------------|
| **1. Script** | `deliverables/ai-showcase/script-vi.txt` | Script tiếng Việt, 5 segment (Title, Competitive, Skill, Distribution, AI Showcase). Nội dung rút từ `presentation-outline.md` + 3 deliverables. Mở đầu trịnh trọng (kính chào Lab3 & BGK, trợ lý thay mặt trình bày). Mỗi segment nằm giữa `--- SEGMENT N ---` để dễ cắt khi tạo audio. |
| **2. Voice (TTS)** | **Edge TTS** (Microsoft) + `gen-audio.py` | Script Python đọc `script-vi.txt`, tách 5 đoạn, gọi Edge TTS (giọng `vi-VN-HoaiMyNeural`) → xuất 5 file MP3 vào folder `audio/` (script_01.mp3 … script_05.mp3). Chất lượng tiếng Việt tốt hơn TTS mặc định của CapCut. Chạy: `pip install edge-tts` (hoặc venv), rồi `python gen-audio.py`. |
| **3. Avatar nói (talking head)** | **D-ID** (hoặc SadTalker / CapCut Talking Photo) | Upload **ảnh avatar** (vd `pikachu-mc.png`, `mc.png`) + **từng file MP3** → tool tạo clip video có **biểu cảm / sync môi** theo audio. Mỗi segment = 1 clip (clip_01 … clip_05). Nếu segment 4 dài quá (giới hạn credit), tách MP3 thành 4a + 4b → 2 clip rồi ghép. Output: 5 (hoặc 6) clip video. |
| **4. Slide** | `deliverables/ai-showcase/slides/` | Ảnh từng slide (slide-1.png … slide-10.png) export từ Gemini Canvas hoặc thiết kế. Map: segment 1 → slide 1; segment 2 → slide 2; …; segment 4 (Distribution) có thể dùng slide 4–7; segment 5 → slide 8 hoặc 9. |
| **5. Ghép video** | **CapCut** | Import tất cả clip avatar + ảnh slide. **Track nền:** slide (mỗi slide kéo dài đúng bằng độ dài clip tương ứng). **Track trên:** clip avatar thu nhỏ đặt góc (vd góc dưới phải) — "Layout A". Hoặc xen kẽ full slide → clip (Layout B). Nói đến đâu đổi slide đến đó. Export MP4 1080p. |
| **6. Video cuối** | **MC.mp4** (link Google Drive) | File video hoàn chỉnh >100 MB nên host trên Google Drive; link ghi trong README.md gốc repo. Khi present có thể phát video này trước, sau đó chuyển sang Q&A trực tiếp. |

**Tài liệu chi tiết trong repo:** `deliverables/ai-showcase/README.md` (cấu trúc folder, từng file), `video-step-by-step.md` (checklist từng bước), `ghép-video-capcut.md` (map clip–slide), `tts-vietnamese-options.md` (TTS tiếng Việt thay thế), `ai-presentation-idea.md` (ý tưởng hybrid, tool free).

**Tóm tắt cho slide:** "Em dùng AI không chỉ để research (Cursor + web search, có verify nguồn) mà còn để **deliver**: script từ deliverables → Edge TTS (giọng Việt) → D-ID (avatar nói) → CapCut (ghép với slide) → video pitch MC.mp4. Video có thể phát khi present; phần Q&A em trả lời trực tiếp."

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
