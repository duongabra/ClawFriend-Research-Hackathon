# Các câu prompt để paste vào Cursor và chụp ảnh

**Cho người / AI đọc:** File này liệt kê **12 khối prompt** đã dùng để tạo 3 deliverables (Competitive, Skill, Distribution). Mỗi prompt paste vào Cursor → chụp màn hình (prompt + response) → lưu vào `ai-showcase/screenshots/`. **Đã chụp đủ 12 ảnh;** tên file thực tế trong folder có dạng `cursor-competitive-1-danh-sach-doi-thu.png.png` (đuôi .png.png do cách lưu). Bảng checklist và map STT → nội dung → tên file nằm cuối file.

Copy từng **Khối prompt** bên dưới vào Cursor (chat hoặc Composer), chờ response xong rồi **chụp màn hình** (prompt + response). Lưu ảnh vào `ai-showcase/screenshots/` với đúng **Tên file** gợi ý.

**Lưu ý:** Một số prompt tham chiếu file trong repo (competitive-landscape.md, distribution-plan.md, skill-research.md). Mở đúng workspace ClawFriend Hackathon khi chat.

---

## PHẦN 1 — COMPETITIVE (5 ảnh)

### 1. Danh sách 6 đối thủ  
**Tên file ảnh:** `cursor-competitive-1-danh-sach-doi-thu.png`

**Bảng tham khảo (đã gen sẵn):**

| # | Tên | Link | Loại | Chain |
|---|-----|------|------|-------|
| 1 | ClawHub (OpenClaw) | https://claw-hub.net | Skill registry | Đa nền tảng |
| 2 | Heurist Mesh | https://mesh.heurist.ai | Agent marketplace (skill/tool) | Đa chain (Web3) |
| 3 | SkillGem | https://skillgem.ai | Skill marketplace | x402 / ERC-8004 (Ethereum, Base, Arbitrum, Optimism) |
| 4 | Hedera Agent Marketplace | https://hedera.opspawn.com | Agent + skill registry | Hedera |
| 5 | ClawMarket | https://www.claw-market.xyz | Skill marketplace | Base, Ethereum |
| 6 | MoltBazaar | https://moltbazaar.ai | Agent marketplace + skills | Base |

**Prompt gốc (để paste vào Cursor khi cần gen lại / chụp ảnh):**

```
Tổng hợp giúp tôi bảng 6 đối thủ trực tiếp trong phân khúc Web3 AI agent + skill/plugin marketplace (không gồm friend.tech, Virtuals). Mỗi dòng: Tên, Link chính, Loại (skill registry / marketplace / agent marketplace), Chain (BSC, Base, Hedera, đa chain...). Format markdown table với cột: #, Tên, Link, Loại, Chain. Chỉ platform cùng business model: AI agent + skill hoặc plugin marketplace Web3.
```

---

### 2. Số liệu có nguồn (block đối thủ)  
**Tên file ảnh:** `cursor-competitive-2-so-lieu-nguon.png`

```
Viết giúp block "Đối thủ 1: ClawHub (OpenClaw)" cho competitive landscape: LINK (openclaw.ai, docs.openclaw.ai, claw-hub.net), Mô tả ngắn (framework agent + skill registry, npx clawhub install), SỐ LIỆU với dòng *Nguồn:* cho từng số (vd 5.700+ skill — Nguồn: thecaio.ai; 1,5M+ download — Nguồn: claw-hub.net; 180K+ GitHub stars — Nguồn: docs.openclaw.ai), Cách monetize, Điểm mạnh, Điểm yếu, User chọn khi nào, User không chọn khi nào, Bài học cho marketplace mình. Mỗi số liệu phải có Nguồn rõ ràng.
```

---

### 3. TAM/CAGR + Section 4  
**Tên file ảnh:** `cursor-competitive-3-tam-cagr.png`

```
Viết Section "Tổng quan thị trường" cho competitive landscape Web3 skill marketplace: (1) Giai đoạn thị trường nascent, AI agent dẫn đầu. (2) Số liệu TAM/CAGR — TAM khoảng $50B–$183B đến 2030, CAGR ~45–50% (Grand View Research, PR Newswire), ghi rõ Nguồn. (3) So sánh chain (BSC, Base, Hedera...). (4) Gap thị trường: BSC + bonding curve + holder-gated skill chưa ai gom đủ. Format markdown, ngắn gọn.
```

---

### 4. Block đối thủ (ví dụ 1–2 block)  
**Tên file ảnh:** `cursor-competitive-4-block-doi-thu.png`

```
Viết 2 block phân tích đối thủ cho competitive landscape: (1) Đối thủ 1 ClawHub: LINK, Mô tả, Số liệu + Nguồn (≥2 số), Monetize, Điểm mạnh/yếu, User chọn/không chọn, Bài học. (2) Đối thủ 2 Heurist Mesh: tương tự (mesh.heurist.ai, 25 provider, 100 tool, 40 agent, X402 ERC-8004 — nguồn mesh.heurist.ai). Markdown, mỗi số có *Nguồn:*.
```

---

### 5. Section 5 Kết luận  
**Tên file ảnh:** `cursor-competitive-5-ket-luan.png`

```
Viết Section 5 Kết luận cho competitive landscape: (1) Marketplace khác ở đâu (đối thủ làm gì, thiếu gì). (2) Segment bỏ ngỏ / gap (vd BSC + bonding curve + holder-gated skill chưa ai gom đủ). (3) Lợi thế cạnh tranh cụ thể của mình. (4) Mình thua ở đâu (vd số skill, độ trưởng thành tool). Format markdown, 4 ý rõ ràng.
```

---

## PHẦN 2 — SKILL (3 ảnh)

### 6. 10 chủ đề + 20 skill draft  
**Tên file ảnh:** `cursor-skill-1-chu-de-draft.png`

```
Đề xuất 10 chủ đề skill cho marketplace AI agent Web3 (BSC, crypto, productivity), mỗi chủ đề 2 skill = 20 skill. Liệt kê: Chủ đề 1 (tên 2 skill), Chủ đề 2 (tên 2 skill), ... Chủ đề 10. Ví dụ chủ đề: Scrypto (Whale Tracker, Rug Pull Detector), DeFi (Yield Optimizer, Portfolio), Crypto Alert (Price Alert), Alpha & Social, Sức khỏe, Vĩ mô, Thể thao, AI/Bot, Công nghệ, Tin tức/Productivity. Chỉ cần tên chủ đề + tên 2 skill mỗi chủ đề, chưa cần chi tiết.
```

---

### 7. Demand + template skill (1 skill)  
**Tên file ảnh:** `cursor-skill-2-demand-template.png`

```
Viết 1 skill theo template cho skill-research: Tên skill (vd "Real-time Whale / Smart Money Tracker"), Target user, Vấn đề họ gặp, Alternative (tool hiện có, vd Nansen, Whale Alert), Skill giải quyết thế nào, Visibility (public free / holder-gated), Tech/API (BSC RPC, API nào, risk), Bằng chứng demand (số liệu + *Nguồn:*). Demand: Whale Alert 2.5M+ followers, Nansen thu phí — Nguồn: website tương ứng. Markdown.
```

---

### 8. 10 đề xuất + Visibility  
**Tên file ảnh:** `cursor-skill-3-10-de-xuat-visibility.png`

```
Từ 20 skill (10 chủ đề: Scrypto, DeFi, Alert, Alpha, Sức khỏe, Vĩ mô, Thể thao, AI/Bot, Công nghệ, Productivity), chọn 10 skill xuất sắc nhất cho BGK. Output: (1) Bảng 10 skill với cột: #, Tên skill, Chủ đề, Lý do chọn. (2) Bảng tóm tắt theo Visibility: Public free (bao nhiêu), Holder-gated (bao nhiêu). Markdown.
```

---

## PHẦN 3 — DISTRIBUTION (4 ảnh)

### 9. Đánh giá ý tưởng + Các hướng khác  
**Tên file ảnh:** `cursor-distribution-1-danh-gia-huong-khac.png`

```
(1) Viết đoạn "Đánh giá ý tưởng" cho cuộc thi hàng tuần (prize = BGK mua share winner): flywheel, gắn sản phẩm (skill + agent + share), nguồn skill từ người dự thi, FOMO, nguồn tester vô tận, kéo user từ skill market khác. 4–6 ý ngắn. (2) Viết bảng "Các hướng khác phân bổ ít hoặc free": mỗi dòng = Hướng (KOL, cộng đồng Telegram/Discord, Twitter/FB Ads, blog, bounty, creator fee), Cách làm ít/free, Lý do chỉ ít hoặc free. Markdown table.
```

---

### 10. Cơ chế thi + 4 lợi ích kép  
**Tên file ảnh:** `cursor-distribution-2-co-che-4-loi-ich.png`  
*(Đã có screenshot-1, screenshot-2 — chụp lại nếu cần)*

```
Viết bảng "Cơ chế cuộc thi hàng tuần": các dòng Đối tượng (skill mới trong tuần mặc định tham gia, không đăng ký), Đề bài (gắn skill), Tiêu chí tuần 1 (lượt tải skill, chỉ T2–T7), BXH (T2–T7 realtime, Chủ nhật đóng băng), Chốt CN (BGK quyết định winner, $2K mua share on-chain). Sau đó viết 4 lợi ích kép: (1) Nguồn skill từ người dự thi (2) FOMO mua share khi rẻ chờ BGK đẩy giá (3) Nguồn tester vô tận (4) Kéo user từ skill market khác. Mỗi lợi ích 1–2 câu. Markdown.
```

---

### 11. Phân bổ $10K + Kênh 2, Kênh 3  
**Tên file ảnh:** `cursor-distribution-3-phan-bo-kenh.png`

```
Viết cho distribution plan: (1) Bảng "Phân bổ $10.000": Prize cuộc thi $2.000×4 tuần = $8.000, Kênh 2 Technical blog $1.000, Kênh 3 Partnership OpenClaw $1.000, Tổng $10.000. (2) Mô tả ngắn Kênh 2: Technical blog, $1K cho boost/sponsor/ads nhỏ, 4–6 bài/tháng, tutorial skill, Owner Content/Marketing. (3) Kênh 3: Partnership OpenClaw, $1K incentive/bounty, integration 1-click install, Owner BD/Partnership. Markdown.
```

---

### 12. Action, Metric, Mục tiêu, Rủi ro, So sánh  
**Tên file ảnh:** `cursor-distribution-4-action-metric-risk.png`

```
Viết cho distribution plan 3 phần markdown: (1) Bảng Action plan & timeline: Trước tuần 1 (công bố thể lệ, build Leaderboard, cold start), Tuần 1 (BXH, CN chốt, blog 2 bài, gửi đề xuất OpenClaw), Tuần 2–4 (lặp thi, thêm bài, follow-up), Sau tuần 4 (prize từ fee). (2) Bảng Metric cuộc thi: Số agent tham gia, Số skill mới, Volume, Fee 5%, Sign-up, Engagement BXH — mỗi dòng có "Cách đo". (3) Bảng Rủi ro & dự phòng: 2–3 rủi ro (vd Tuần 1 quá ít agent, Volume thấp), Trigger, Hành động dự phòng. Ngắn gọn.
```

---

## Checklist sau khi chụp (đã hoàn thành)

| STT | Nội dung ảnh | Tên file trong folder (đã có) |
|-----|----------------|--------------------------------|
| 1 | 6 đối thủ (bảng Tên, Link, Loại, Chain) | `cursor-competitive-1-danh-sach-doi-thu.png.png` |
| 2 | Block ClawHub + số liệu có Nguồn | `cursor-competitive-2-so-lieu-nguon.png.png` |
| 3 | Tổng quan thị trường (TAM/CAGR, chain, gap) | `cursor-competitive-3-tam-cagr.png.png` |
| 4 | 2 block đối thủ (ClawHub, Heurist) | `cursor-competitive-4-block-doi-thu.png.png` |
| 5 | Section 5 Kết luận (4 ý) | `cursor-competitive-5-ket-luan.png.png` |
| 6 | 10 chủ đề + 20 skill (chỉ tên) | `cursor-skill-1-chu-de-draft.png.png` |
| 7 | 1 skill theo template (Whale Tracker, demand + Nguồn) | `cursor-skill-2-demand-template.png.png` |
| 8 | 10 skill xuất sắc + bảng Visibility | `cursor-skill-3-10-de-xuat-visibility.png.png` |
| 9 | Đánh giá ý tưởng + bảng Các hướng khác | `cursor-distribution-1-danh-gia-huong-khac.png.png` |
| 10 | Cơ chế cuộc thi + 4 lợi ích kép | `cursor-distribution-2-co-che-4-loi-ich.png.png` |
| 11 | Phân bổ $10K + Kênh 2, Kênh 3 | `cursor-distribution-3-phan-bo-kenh.png.png` |
| 12 | Action plan, Metric, Rủi ro & dự phòng | `cursor-distribution-4-action-metric-risk.png.png` |

Tất cả ảnh lưu trong **deliverables/ai-showcase/screenshots/**. Map đầy đủ file → deliverable: [screenshots/README.md](screenshots/README.md).
