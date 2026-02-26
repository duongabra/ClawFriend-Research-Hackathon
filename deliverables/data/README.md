# Data — Số liệu chính và nguồn đối chiếu (theo Guidebook cuộc thi)

Folder này chứa **số liệu chính** dùng trong ba deliverable (Competitive Landscape, Skill Research, Distribution Plan) và **nguồn đối chiếu** cho từng con số. Mục đích: đạt tiêu chí *"số liệu có nguồn"*; khi được hỏi *"số liệu lấy ở đâu?"* có thể chỉ file key-metrics.md và dòng Nguồn trong từng deliverable.

---

## CHECKLIST ĐÁP ỨNG (theo Guidebook)

| Tiêu chí | Đáp ứng | Vị trí |
|----------|---------|--------|
| Số liệu có nguồn — mọi con số trong deliverables có thể verify | CÓ | **key-metrics.md** — Section 1 (Competitive), 2 (Skill), 3 (Distribution); mỗi số có Nguồn / Nguồn gốc |
| Đối chiếu với competitive-landscape.md, skill-research.md, distribution-plan.md | CÓ | key-metrics.md tổng hợp số liệu đã dùng trong cả 3 file + nguồn |
| Đối chiếu nguồn nhanh | CÓ | Mở key-metrics.md → tìm theo tên đối thủ / skill / mục distribution → chỉ dòng Nguồn tương ứng |

*Tham chiếu Guidebook (README gốc repo): "Data / AI Showcase — Số liệu có nguồn; prompt/workflow dùng AI." "Data / Số liệu — Số liệu chính + nguồn đối chiếu."*

---

## Nội dung folder

| File | Mô tả |
|------|--------|
| **key-metrics.md** | File chính: tổng hợp mọi số liệu trong competitive-landscape.md, skill-research.md, distribution-plan.md; mỗi số có **nguồn** (website, docs, Guidebook). Cấu trúc: (1) Competitive Landscape — 6 đối thủ + TAM/CAGR; (2) Skill Research — bằng chứng demand theo nhóm skill + bảng tổng hợp; (3) Distribution Plan — budget, target tháng 1, metric, contingency. Dùng để verify và trả lời Q&A. |
| **README.md** | File này — mô tả vai trò folder, checklist, cách dùng và quy trình cập nhật. |

---

## Vai trò của folder Data trong bài làm

- **Theo Guidebook:** Số liệu phải có nguồn. Folder **deliverables/data** là nơi **đối chiếu nguồn** tập trung: thay vì mở từng deliverable tìm dòng *Nguồn:*, mở một file (key-metrics.md) để xem toàn bộ số + nguồn.
- **Với 3 deliverable:** competitive-landscape.md, skill-research.md, distribution-plan.md **không** chứa bản sao toàn bộ key-metrics; họ chứa phân tích và narrative, còn **số liệu** và **nguồn** được tổng hợp và mở rộng trong key-metrics.md. Khi viết hoặc sửa 3 file đó, tác giả đảm bảo mọi con số **có mặt trong key-metrics.md** với nguồn rõ ràng.
- **Với AI Showcase:** Folder **deliverables/ai-showcase** mô tả prompt và workflow dùng AI (research, video). Số liệu do AI hỗ trợ tìm vẫn phải **verify** và **ghi nguồn** — nơi ghi là key-metrics.md (và dòng *Nguồn:* trong từng deliverable). Hai folder bổ sung nhau: ai-showcase = *cách* dùng AI; data = *số liệu* và *nguồn*.

---

## Cách dùng

### Khi viết hoặc chỉnh sửa deliverable

1. Mọi **con số** đưa vào competitive-landscape.md, skill-research.md hoặc distribution-plan.md (đối thủ, demand, target, metric, v.v.) phải có **nguồn** có thể kiểm chứng (website, tài liệu, Guidebook).
2. Cập nhật **key-metrics.md** tương ứng: thêm số và nguồn vào section đúng (Competitive / Skill / Distribution). Nếu số lấy từ deliverable nội bộ (vd distribution-plan.md), nguồn ghi là "distribution-plan.md" hoặc "Guidebook cuộc thi".
3. Trong deliverable, giữ dòng *Nguồn:* (hoặc cột Nguồn trong bảng) để người đọc có thể đối chiếu nhanh với key-metrics.md.

### Khi present hoặc trả lời Q&A

- Câu hỏi dạng *"Số liệu này lấy ở đâu?"* hoặc *"Làm sao verify con số X?"*: mở **key-metrics.md**, tìm theo tên đối thủ / skill / mục (vd "ClawHub", "Whale Alert", "Volume 4 tuần") và chỉ dòng **Nguồn gốc** / **Nguồn** tương ứng.
- Có thể trả lời ngắn: *"Mọi số liệu có nguồn trong file deliverables/data/key-metrics.md; ví dụ ClawHub 5.700+ skill từ thecaio.ai và claw-hub.net."*

### Khi đối chiếu nguồn

- Đối chiếu từng số trong 3 deliverable với **key-metrics.md**: mỗi số liệu phải có mục tương ứng trong key-metrics với nguồn rõ. Checklist ở đầu key-metrics.md và đầu README này giúp kiểm tra đáp ứng tiêu chí "số liệu có nguồn".

---

## Cấu trúc nhanh của key-metrics.md (để tìm nguồn)

| Section | Nội dung | Dùng khi cần verify |
|---------|----------|----------------------|
| **1. Competitive Landscape** | 6 đối thủ (ClawHub, Heurist, SkillGem, Hedera, ClawMarket, MoltBazaar); mỗi đối thủ có Số liệu + Nguồn gốc + Lưu ý. Subsection 1.7: TAM/CAGR, ai dẫn đầu, so sánh chain. | Số liệu đối thủ (skill count, download, stars, tool, agent, chain, v.v.) |
| **2. Skill Research** | Bằng chứng demand theo nhóm: Whale/Rug, DeFi yield, Portfolio, Price alert, Alpha/KOL, Sức khỏe, Vĩ mô, No-code/Productivity. Mỗi nhóm có bảng Số liệu | Nguồn. Cuối section: Bảng tổng hợp nhanh. | Demand (Nansen, Whale Alert, Token Sniffer, DeBank, YO Protocol, Medisafe, Zapier, Otter, v.v.) |
| **3. Distribution Plan** | 3.1 Ngân sách ($10K = $8K cuộc thi $2K×4 + $2K blog/OpenClaw, 3 kênh, 5% fee). 3.2 Cơ chế cuộc thi. 3.3 Mục tiêu tháng 1 (≥15 agent, ≥$8K volume, ≥20 skill). 3.4 Target kênh 2 & 3. 3.5 Rủi ro & dự phòng. 3.6 Chốt phương án $8K/$2K. | Số budget, target, metric, trigger dự phòng |
| **4. Đối thủ không trong bảng** | Giải thích vì sao friend.tech, Virtuals, SingularityNET, ELIZA không nằm trong Competitive (không cùng phân khúc). | Khi hỏi "tại sao chỉ 6 đối thủ?" |

---

## Quy trình cập nhật (khi thêm số mới)

1. Thêm số vào deliverable (competitive-landscape / skill-research / distribution-plan) với dòng *Nguồn:* trong đoạn hoặc cột Nguồn trong bảng.
2. Mở **key-metrics.md** → section tương ứng (1, 2 hoặc 3).
3. Thêm số và nguồn vào subsection đúng (vd 1.2 Heurist Mesh, 2.4 Portfolio, 3.3 Mục tiêu tháng 1). Nếu cần, cập nhật cả bảng tổng hợp (vd 2.10 Skill Research).
4. (Tùy chọn) Cập nhật dòng phiên bản ở cuối key-metrics.md.

---

## Liên kết với các phần khác của repo

- **README.md (gốc repo):** Bảng "Điểm & File" có dòng Data / Số liệu → link tới deliverables/data/ và deliverables/data/key-metrics.md.
- **deliverables/competitive-landscape.md:** Section 2 (bảng tổng quan) và Section 3 (từng đối thủ) — số liệu khớp với key-metrics.md Section 1.
- **deliverables/skill-research.md:** Các skill có mục "Bằng chứng demand" và *Nguồn:* — khớp với key-metrics.md Section 2.
- **deliverables/distribution-plan.md:** Bảng phân bổ, target, metric, contingency — khớp với key-metrics.md Section 3.
- **deliverables/ai-showcase:** Prompt và workflow AI; số liệu do AI hỗ trợ tìm vẫn verify và ghi nguồn trong key-metrics.md.

---

*Cập nhật: Feb 2026 — Vai trò folder, cách dùng (viết/chỉnh, present/Q&A, đối chiếu nguồn), cấu trúc key-metrics, quy trình cập nhật. Checklist theo Guidebook.*
