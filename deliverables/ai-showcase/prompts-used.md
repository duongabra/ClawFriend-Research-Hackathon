# AI Showcase — Prompts & Workflow

**Mục đích:** Mô tả cách team dùng AI (Cursor + web search) để research và viết 3 deliverables. (1) **Số liệu có nguồn** — mọi metric verify, không chỉ "AI cho em"; (2) **Prompt/workflow dùng AI** — từng bước có prompt, công cụ, output; (3) **Cách dùng AI để research** (và deliver nếu có). Khi present: mở file này hoặc **screenshot Cursor** trong [ai-showcase/screenshots/](screenshots/) (screenshot-1.png, screenshot-2.png); dùng phần "Gợi ý script present" và "Q&A dự kiến".

**Verify nguồn:** Số liệu trong Competitive và Skill đối chiếu **deliverables/data/key-metrics.md**; mỗi dòng trong deliverable có *Nguồn:*.

---

## Tổng quan workflow

| Giai đoạn | Deliverable | Công cụ | Số prompt ước lượng | Output |
|-----------|------------|---------|----------------------|--------|
| 1 | Competitive Landscape | Web search + Cursor | 27+ | competitive-landscape.md (6 đối thủ, TAM/CAGR, gap, kết luận) |
| 2 | Skill Research | Web search + Cursor | 37+ | skill-research.md (20 skill, 10 chủ đề, Tech/API, 10 đề xuất) |
| 3 | Distribution Plan | Cursor (Guidebook + spec) | 14+ | distribution-plan.md (3 kênh, cuộc thi, 4 lợi ích, phân bổ ít/free) |

---

# PHẦN 1 — COMPETITIVE LANDSCAPE

**Deliverable:** [competitive-landscape.md](../competitive-landscape.md)

**Mục tiêu theo barem:** 6 đối thủ trực tiếp (5–10); mỗi đối thủ ≥2 số liệu có nguồn; Điểm mạnh/yếu, User chọn/không chọn, Bài học; Section 4 so sánh chain + TAM/CAGR nascent; Section 5 kết luận định vị.

**Workflow tóm tắt:**

- **Bước 1 — Danh sách đối thủ:** Search *"Web3 AI agent marketplace skill plugin 2024 2025"*, *"OpenClaw ClawHub skill registry"*, *"ERC-8004 x402 skill payment"*. Cursor: tổng hợp 6 đối thủ (tên, link, loại, chain) — không gồm friend.tech/Virtuals.
- **Bước 2 — Số liệu có nguồn:** Search từng đối thủ — VD *"ClawHub OpenClaw skill registry stats download"* → 5.700+ skill, 1,5M+ download (thecaio.ai, claw-hub.net); *"OpenClaw GitHub stars"* → 180K+; *"Heurist Mesh providers tools agents"* → 25 provider, 100 tool, 40 agent (mesh.heurist.ai); *"SkillGem platforms x402"*; *"Hedera agent skills GitHub"*; *"ClawMarket skills Base USDC"*; *"MoltBazaar ERC-8004 openclaw"*. Mỗi số ghi *Nguồn:* trong file.
- **Bước 3 — TAM/CAGR:** Search *"AI agents market TAM CAGR 2030"*, *"Grand View Research AI agents"* → TAM ~$50B–$183B, CAGR ~45–50% (Grand View Research, PR Newswire). Cursor: viết Section 4 (nascent, ai dẫn đầu, so sánh chain, gap BSC + bonding curve + holder-gated).
- **Bước 4 — Phân tích từng đối thủ:** Cursor viết 6 block (ClawHub, Heurist, SkillGem, Hedera, ClawMarket, MoltBazaar): LINK, Mô tả, Số liệu + Nguồn, Monetize, Điểm mạnh/yếu, User chọn/không chọn, Bài học.
- **Bước 5 — Kết luận:** Cursor viết Section 5 (marketplace khác ở đâu, segment bỏ ngỏ, lợi thế, thua ở đâu). Kiểm tra key-metrics.md có đủ nguồn.

**Bảng ánh xạ Prompt → Deliverable**

| Nhóm prompt | Vị trí trong competitive-landscape.md |
|-------------|--------------------------------------|
| Search 6 đối thủ + Cursor tổng hợp | Section 2 bảng (Tên, Link, Loại, Chain) |
| Search số liệu từng đối thủ (ClawHub, Heurist, SkillGem, Hedera, ClawMarket, MoltBazaar) | Section 3 từng block SỐ LIỆU + *Nguồn:* |
| Search TAM/CAGR + Cursor Section 4 | Section 4 Tổng quan thị trường |
| Cursor block 6 đối thủ | Section 3 Đối thủ 1–6 |
| Cursor Section 5 + verify | Section 5 Kết luận; key-metrics.md |

**Verify (Competitive):** Mỗi đối thủ ≥2 số liệu; mỗi số có *Nguồn:*; key-metrics.md có mục tương ứng; không giữ số chỉ từ "AI nói" chưa đối chiếu.

---

# PHẦN 2 — SKILL RESEARCH

**Deliverable:** [skill-research.md](../skill-research.md)

**Mục tiêu theo barem:** 20 skill (10 chủ đề); mỗi skill có Tên, Target user, Vấn đề, Alternative, Giải pháp, Visibility, **Tech/API**; Bằng chứng demand có nguồn; 10 skill xuất sắc nhất; Bảng Tóm tắt Visibility.

**Workflow tóm tắt:**

- **Bước 1 — Chủ đề + draft:** Cursor đề xuất 10 chủ đề (Scrypto, DeFi, Crypto Alert, Alpha & Social, Sức khỏe, Vĩ mô, Thể thao, AI/Bot, Công nghệ, Tin tức & Productivity), mỗi chủ đề 2 skill.
- **Bước 2 — Bằng chứng demand (search):** Theo chủ đề — VD Nansen/Whale Alert, Token Sniffer, YO Protocol, DeBank, Medisafe, DexScreener, LunarCrush/X API, SofaScore/FPL, Zapier/Copilot, TLDR/deps.dev, Otter/Fireflies. Mỗi kết quả ghi nguồn (website, báo cáo).
- **Bước 3 — Viết 20 skill:** Cursor viết từng skill theo template: Tên, Target user, Vấn đề, Alternative, Skill giải quyết, Visibility, Tech/API (BSC RPC, API nào, risk/dependency), Bằng chứng demand, *Nguồn:*. Một số skill thêm Fit ClawFriend.
- **Bước 4 — 10 đề xuất + Visibility:** Cursor chọn 10 skill xuất sắc nhất (bảng + lý do); bảng Tóm tắt theo Visibility. Đối chiếu key-metrics.md.

**Bảng ánh xạ Prompt → Deliverable**

| Nhóm prompt | Vị trí trong skill-research.md |
|-------------|-------------------------------|
| Cursor 10 chủ đề + 20 skill draft | Cấu trúc Section theo chủ đề |
| Search demand từng chủ đề | Bằng chứng demand + *Nguồn:* từng skill |
| Cursor template + 20 skill | Chủ đề 1–10, Skill 1.1–10.2 |
| Cursor 10 đề xuất + Visibility | Section "10 skill xuất sắc nhất"; Bảng "Tóm tắt theo Visibility" |

**Verify (Skill):** Mỗi skill có Bằng chứng demand + *Nguồn:*; Tech/API nêu risk khi có (vd X API $100/tháng); key-metrics.md có metric tương ứng.

---

# PHẦN 3 — DISTRIBUTION PLAN

**Deliverable:** [distribution-plan.md](../distribution-plan.md)

**Mục tiêu theo Guidebook:** $10K; 3–5 kênh (3 kênh: Cuộc thi $10K, Blog $0, OpenClaw $0); 1 organic + 1 paid; mỗi kênh: Tại sao, Action, Timeline, Cost, Metric; plan cụ thể. Nội dung: phân bổ ít/free có lý do; 4 lợi ích (nguồn skill, FOMO, tester vô tận, kéo user từ skill market khác); khi lãi đủ lớn trích nuôi kênh khác.

**Workflow tóm tắt:**

- **Bước 1:** Cursor đọc Guidebook (ràng buộc $10K, 3–5 kênh, organic+paid). Brainstorm: cuộc thi hàng tuần, skill trojan ClawHub, Creator = agent owner.
- **Bước 2:** Cursor viết "Đánh giá ý tưởng" cuộc thi (flywheel, gắn sản phẩm, nguồn skill, FOMO, tester, kéo user từ market khác). Section "Các hướng khác": bảng phân bổ ít/free (KOL, cộng đồng, Ads, blog, bounty, creator fee) + lý do từng dòng.
- **Bước 3:** Cursor bảng "Cơ chế cuộc thi" (đối tượng, đề bài skill, tiêu chí tuần 1 = lượt tải skill, BXH T2–T7 realtime CN đóng băng, chốt CN BGK $2K mua share winner). Viết 4 lợi ích kép (nguồn skill, FOMO, tester vô tận, kéo user từ skill market khác).
- **Bước 4:** Cursor bảng "Phân bổ $10.000" ($8K cuộc thi = $2K×4 tuần + $2K blog/OpenClaw); khi lãi đủ lớn trích nuôi kênh khác. Kênh 2 Technical blog ($1K). Kênh 3 Partnership OpenClaw ($1K).
- **Bước 5:** Cursor bảng Action plan & timeline (trước tuần 1, tuần 1, tuần 2–4, sau tuần 4); Metric cuộc thi; Mục tiêu tháng 1 (≥15 agent, ≥$8K volume, ≥20 skill); Rủi ro & dự phòng. Bảng so sánh 3 kênh vs các hướng khác.

**Bảng ánh xạ Prompt → Deliverable**

| Nhóm prompt | Vị trí trong distribution-plan.md |
|-------------|-----------------------------------|
| Ràng buộc + brainstorm | Ràng buộc + ý tưởng cuộc thi |
| Đánh giá + Các hướng khác | Đánh giá ý tưởng + Bảng phân bổ ít/free |
| Cơ chế thi + 4 lợi ích | Bảng Cơ chế + 4 lợi ích kép |
| Phân bổ $10K + 2 kênh organic | Bảng Phân bổ; Kênh 2, Kênh 3 |
| Action, Metric, Mục tiêu, Rủi ro, So sánh | Bảng tương ứng |

**Verify (Distribution):** 3 kênh đủ Tại sao, Action, Timeline, Cost, Metric; phân bổ ít/free có lý do; 4 lợi ích đủ; "khi lãi đủ lớn trích nuôi kênh khác" đã ghi.

---

# VERIFY NGUỒN (CHUNG)

- **Competitive & Skill:** Mỗi số liệu có *Nguồn:* trong deliverable; tổng hợp **key-metrics.md**. Trả lời "số từ đâu?" → chỉ key-metrics.md và dòng *Nguồn:* trong từng file.
- **Distribution:** Budget và cơ chế theo Guidebook + distribution-plan.md.

---

# GỢI Ý KHI PRESENT

**Script (~60–90 giây):**  
*"Em dùng Cursor và web search cho cả 3 bài. Competitive: search 6 đối thủ và số liệu, TAM/CAGR Grand View Research, prompt Cursor tổng hợp bảng và phân tích từng đối thủ, kết luận định vị — mọi số có nguồn. Skill: search demand từng chủ đề (Nansen, Token Sniffer, DeBank, Medisafe, Zapier...), prompt Cursor viết 20 skill có Tech/API và nguồn, chọn 10 đề xuất. Distribution: Cursor đọc Guidebook, thảo luận cuộc thi hàng tuần, phân bổ ít/free có lý do, 4 lợi ích và trích nuôi kênh khi lãi đủ. Mọi số liệu verify nguồn (key-metrics.md). Chi tiết workflow và bảng ánh xạ trong prompts-used.md."*

**Q&A dự kiến**

- **Số liệu từ đâu?** Mỗi số có *Nguồn:* trong file; tổng hợp key-metrics.md. Không giữ số chỉ từ AI mà không đối chiếu.
- **Prompt cụ thể?** File này có workflow từng bước và bảng ánh xạ Prompt → vị trí deliverable. VD search "ClawHub OpenClaw skill registry stats" → 5.700+ skill, 1,5M+ download; prompt Cursor "Viết block Đối thủ 1 ClawHub..." → Section 3.
- **AI deliver?** Có: script, Edge TTS, D-ID, CapCut — video-step-by-step.md, ghép-video-capcut.md.
- **6 đối thủ không 10?** Barem 5–10; chọn 6 platform cùng phân khúc, mỗi cái ≥2 số có nguồn. Friend.tech/Virtuals khác business model nên không vào bảng.
- **20 skill từ đâu?** 10 chủ đề (Scrypto, DeFi, Alert, Alpha, Sức khỏe, Vĩ mô, Thể thao, AI/Bot, Công nghệ, Tin tức/Productivity), mỗi chủ đề 2 skill; search demand rồi Cursor viết template có Tech/API và Nguồn.

---

# TÓM TẮT ĐỒNG BỘ DELIVERABLE

| Deliverable | File | Nội dung chính |
|-------------|------|----------------|
| **Competitive** | competitive-landscape.md | 6 đối thủ; Điểm mạnh/yếu, User chọn/không chọn, Bài học; TAM/CAGR nascent; gap BSC + bonding curve + holder-gated; Kết luận định vị |
| **Skill** | skill-research.md | 20 skill (10 chủ đề); Tech/API + Bằng chứng demand + Nguồn; 10 skill xuất sắc nhất; Bảng Tóm tắt Visibility |
| **Distribution** | distribution-plan.md | Phân bổ ít/free + lý do; 3 kênh (Cuộc thi $10K, Blog $0, OpenClaw $0); BXH T2–T7 CN đóng băng; 4 lợi ích; khi lãi đủ lớn trích nuôi kênh khác |

**Nguồn số liệu:** **deliverables/data/key-metrics.md**

---

**Search query tham khảo (Competitive):** Web3 AI agent marketplace skill plugin 2024 2025 | ClawHub OpenClaw skill registry stats download | OpenClaw GitHub stars | Heurist Mesh providers tools agents | SkillGem platforms x402 | Hedera agent skills GitHub | ClawMarket skills Base USDC | MoltBazaar ERC-8004 openclaw | AI agents market TAM CAGR 2030 | Grand View Research AI agents

**Search query tham khảo (Skill):** Nansen Arkham whale tracking | Token Sniffer rug pull | YO Protocol DeBank portfolio | Medisafe medication | DexScreener new pairs | LunarCrush X API pricing | SofaScore FPL | Zapier Copilot | Otter Fireflies meeting notes

*Screenshot Cursor: [ai-showcase/screenshots/](screenshots/) — screenshot-1.png (prompt Competitive + Distribution + response), screenshot-2.png (prompt 4 lợi ích kép + response). Phiên bản rút gọn — Feb 2026.*
