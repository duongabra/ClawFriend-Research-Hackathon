# AI Showcase (theo Guidebook cuộc thi)

---

## CHECKLIST ĐÁP ỨNG (theo Guidebook)

| Tiêu chí | Đáp ứng | Vị trí trong folder |
|----------|---------|---------------------|
| Prompt / workflow dùng AI để research (Competitive, Skill, Distribution) | CÓ | **prompts-used.md** — từng deliverable có prompt cụ thể, công cụ (Cursor + web search) |
| Mọi số liệu verify nguồn — không chỉ "AI cho em" | CÓ | prompts-used.md ghi rõ; số liệu đối chiếu **deliverables/data/key-metrics.md** |
| AI dùng để deliver (nếu có) — ví dụ video trợ lý ảo | CÓ | Script → Edge TTS → **D-ID** → CapCut; **video-step-by-step.md**, **ghép-video-capcut.md** |
| Prompt/workflow rõ, có thể trích dẫn khi present | CÓ | **prompts-used.md** (hoặc screenshot Cursor trong folder) |

*Tham chiếu Guidebook: "Data / AI Showcase — Số liệu có nguồn; prompt/workflow dùng AI." Presentation: "Show cách dùng AI để research và (nếu có) để deliver — ví dụ video trợ lý ảo. Điểm cộng nếu có prompt/workflow rõ và verify nguồn."*

- **Slide AI Showcase khi present:** [deliverables/presentation-script.md](../presentation-script.md) (Slide 8 — AI Showcase ~2 phút).
- **Nguồn số liệu khi được hỏi "số từ đâu?":** [deliverables/data/key-metrics.md](../data/key-metrics.md).

---

## Khi present phần AI Showcase (~2 phút)

*Phần này là nội dung cần đọc nhất khi review AI Showcase.*

- Mở **prompts-used.md** (hoặc 1–2 screenshot Cursor) và tóm tắt: đã dùng Cursor + web search để (1) tìm 6 đối thủ trực tiếp + TAM/CAGR, (2) tìm bằng chứng demand + Tech/API cho 20 skill / 10 đề xuất, (3) thảo luận distribution (cuộc thi hàng tuần, phân bổ ít/free có lý do, 4 tuần, 4 lợi ích kể cả kéo user từ market khác). Nhấn mạnh: **mọi số liệu đã đối chiếu nguồn** (key-metrics.md) trước khi đưa vào deliverables. Script chi tiết: **Slide 8** trong [presentation-script.md](../presentation-script.md).
- (Tùy chọn) Phát **video MC.mp4** để show "AI deliver": trợ lý ảo + voice + slide. Video >100 MB nên không có trong repo; **link xem tại README.md gốc của repo (Google Drive)**. Nếu không xem được video: pipeline và output mô tả đầy đủ trong **video-step-by-step.md** và **ghép-video-capcut.md**.

---

## 1. Prompt/workflow & file chính

| File | Nội dung |
|------|----------|
| **prompts-used.md** | Mô tả từng prompt và workflow đã dùng cho Competitive, Skill, Distribution: mục tiêu, workflow tóm tắt, bảng ánh xạ, verify. Dùng khi present hoặc kết hợp với screenshot. |
| **screenshots/** | Folder đặt 1–2 ảnh chụp màn hình Cursor (prompt + trả lời). Xem [screenshots/README.md](screenshots/README.md) — nên chụp gì, tên file gợi ý. Tùy chọn; có thì show BGK khi hỏi "cho xem prompt thật". |

**Lưu ý (Guidebook):** Mọi số liệu trong deliverables phải **có nguồn**; "AI cho em" không được tính. Trong prompts-used.md có ghi rõ nguồn đã dùng (website, GitHub, báo cáo).

---

## 2. Cấu trúc folder — từng file / thư mục

### 2.1 Script (nội dung nói cho video / TTS)

| File | Mô tả |
|------|--------|
| **script.txt** | Script tiếng Anh, 5 segment tương ứng 5 slide (Title, Competitive, Skill, Distribution, AI Showcase). ~15 phút. Dùng cho TTS tiếng Anh hoặc tham khảo. |
| **script-vi.txt** | Script tiếng Việt, cùng cấu trúc 5 segment. Có mở đầu trịnh trọng (kính chào Lab3 & BGK, trợ lý thay mặt trình bày). Dùng cho Edge TTS tiếng Việt và video pitch. Mỗi block nằm giữa `--- SEGMENT N ---` để dễ cắt khi tạo audio từng đoạn. |

Nguồn nội dung script: `presentation-outline.md` + `competitive-landscape.md` + `skill-research.md` + `distribution-plan.md`.

### 2.2 Voice (TTS) — tạo file audio từ script

| File / thư mục | Mô tả |
|----------------|--------|
| **gen-audio.py** | Script Python dùng **Edge TTS** (Microsoft) để tạo 5 file MP3 từ `script-vi.txt`. Chạy: `pip install edge-tts` (hoặc dùng venv), rồi `python gen-audio.py`. Output: folder **audio/** với `script_01.mp3` … `script_05.mp3`. Giọng mặc định: `vi-VN-HoaiMyNeural` (nữ); có thể đổi trong file sang `vi-VN-NamMinhNeural` (nam) hoặc `vi-VN-AnNeural`. |
| **audio/** | Chứa file MP3 đã generate: script_01 (Title), script_02 (Competitive), script_03 (Skill), script_04 (Distribution), script_05 (AI Showcase). Nếu segment 4 bị tách đôi (vì giới hạn credit tool): có thể có script_04_a.mp3, script_04_b.mp3. |
| **tts-vietnamese-options.md** | Gợi ý TTS tiếng Việt thay thế CapCut (chất lượng tốt hơn): Edge TTS (free), FPT Voicemaker, Viettel TTS, Speechify. Cách chạy gen-audio.py với venv khi gặp lỗi "externally-managed-environment". |

### 2.3 Avatar & slide (input cho video)

| File / thư mục | Mô tả |
|----------------|--------|
| **mc.png**, **pikachu-mc.png** | Ảnh avatar dùng cho video “trợ lý ảo nói” (talking head). Tool chính: **D-ID** (avatar + audio → clip sync môi). Thay thế: SadTalker (local), CapCut Talking Photo. |
| **slides/** | Ảnh từng slide (slide-1.png … slide-10.png) export từ Gemini Canvas hoặc thiết kế. Dùng khi ghép video: nói đến đâu đổi slide đến đó (map segment 1→slide 1, 2→slide 2, …). |

### 2.4 Hướng dẫn tạo video (trợ lý ảo + voice + slide)

| File | Mô tả |
|------|--------|
| **video-step-by-step.md** | Hướng dẫn từng bước làm video: (0) Script, avatar, slide; (1) Audio (Edge TTS hoặc CapCut TTS); (2) Clip avatar nói — **tool chính D-ID** (avatar + MP3 → clip); thay thế SadTalker hoặc CapCut Talking Avatar; (3) Ghép clip + slide trong CapCut, export MP4. Hai workflow: SadTalker+Edge TTS+CapCut; hoặc chỉ CapCut. |
| **ghép-video-capcut.md** | Hướng dẫn ghép 5 clip với slide trong CapCut: map clip–slide, track nền vs avatar, export. Input: 5 clip từ D-ID (hoặc SadTalker/CapCut). |
| **ai-presentation-idea.md** | Ý tưởng dùng AI để thuyết trình: hybrid (AI voice trên slide), video AI presenter (avatar + voice), hoặc live co-presenter. Workflow, tool gợi ý, câu pitch với BGK, và section “Làm video với trợ lý ảo anime + voice — bộ tool FREE” (bảng avatar/TTS/ghép video, workflow SadTalker+Edge TTS+CapCut và CapCut-only). |

### 2.5 Clip trung gian & video cuối

| Thư mục / output | Mô tả |
|------------------|--------|
| **videos-draft/** | Clip từng đoạn (video-1 … video-5) tạo bằng **D-ID** (avatar + từng MP3). Input cho ghép trong CapCut theo **ghép-video-capcut.md**. |
| **Video cuối (MC.mp4)** | Video hoàn chỉnh (trợ lý ảo + voice + slide). >100 MB → không có trong repo; **link xem: README.md gốc repo (Google Drive)**. Nếu không xem được: pipeline đầy đủ trong video-step-by-step.md, ghép-video-capcut.md. |

---

## 3. Công cụ đã dùng (tóm tắt)

| Bước | Công cụ | Ghi chú |
|------|---------|--------|
| Script | script-vi.txt (5 segment) | Nội dung từ presentation-outline + 3 deliverables. |
| Voice (TTS) | Edge TTS (Microsoft) | `gen-audio.py` → 5 MP3; giọng vi-VN-HoaiMyNeural. |
| Avatar nói | **D-ID** (thay thế: SadTalker, CapCut Talking Photo) | Ảnh avatar + từng MP3 → clip sync môi. |
| Slide | Export từ Gemini Canvas / design | Ảnh trong **slides/**. |
| Ghép video | CapCut | Track nền = slide; track trên = clip avatar (góc); export MP4 1080p. |

---

## 4. Checklist trước khi present (liên quan AI Showcase)

- [ ] Có file **prompts-used.md** hoặc screenshot prompt trong folder.
- [ ] Có thể trả lời "Số liệu lấy ở đâu?" — không trả lời "AI cho em"; nêu nguồn → **deliverables/data/key-metrics.md**.
- [ ] **prompts-used.md** đồng bộ 3 deliverable: 6 đối thủ + TAM/CAGR; 20 skill (10 chủ đề), 10 đề xuất, Tech/API; phân bổ ít/free, thi hàng tuần, 4 lợi ích.
- [ ] Nếu có video pitch: link Google Drive trong **README.md gốc repo** (video >100 MB không trong repo).
- [ ] Prompt/workflow rõ; verify nguồn trong deliverables và key-metrics.

---

## 5. Liên kết với deliverables/data

Số liệu trong competitive-landscape.md, skill-research.md có **nguồn** tổng hợp tại **deliverables/data/key-metrics.md**. Khi được hỏi "số liệu từ đâu?", tham chiếu file đó và dòng *Nguồn:* trong từng deliverable.

---

*Cập nhật: Feb 2026 — Checklist theo Guidebook; đồng bộ với data/key-metrics; cấu trúc script, audio, slides, videos-draft, prompts-used.*
