# AI Showcase

Folder này phục vụ **hai mục đích**: (1) **Đáp ứng tiêu chí "AI Showcase"** khi chấm điểm — mô tả prompt và workflow dùng AI để research và viết deliverables; (2) **Tài nguyên để tạo video thuyết trình** (script, voice TTS, avatar, slide, hướng dẫn ghép video). Khi present phần AI Showcase (~2 phút), có thể mở file **prompts-used.md** hoặc show screenshot Cursor.

---

## 1. Cho AI chấm điểm & phần present AI Showcase

| File | Nội dung |
|------|----------|
| **prompts-used.md** | **File chính để show BGK.** Mô tả từng prompt và workflow đã dùng cho Competitive Landscape, Skill Research, Distribution Plan. Mỗi deliverable có: mục tiêu, prompt cụ thể (từ khóa search, câu hỏi cho AI), công cụ (Cursor + web search), và cách verify (số liệu có nguồn). Có thể đọc trực tiếp khi present hoặc chụp screenshot 1–2 đoạn chat Cursor lưu vào folder này. |
| **Screenshot (tùy chọn)** | Chụp màn hình đoạn chat Cursor (vd prompt tìm đối thủ, prompt viết distribution plan) → lưu vào `ai-showcase/` để show BGK. |

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
| **mc.png**, **pikachu-mc.png** | Ảnh avatar dùng cho video “trợ lý ảo nói” (talking head). Một ảnh mặt rõ (khuôn mặt không bị che) để tool D-ID / SadTalker / CapCut Talking Photo sync môi theo audio. |
| **slides/** | Ảnh từng slide (slide-1.png … slide-10.png) export từ Gemini Canvas hoặc thiết kế. Dùng khi ghép video: nói đến đâu đổi slide đến đó (map segment 1→slide 1, 2→slide 2, …). |

### 2.4 Hướng dẫn tạo video (trợ lý ảo + voice + slide)

| File | Mô tả |
|------|--------|
| **video-step-by-step.md** | Hướng dẫn từng bước làm video: (0) Thu thập nội dung, viết script, chọn avatar, chuẩn bị ảnh slide; (1) Tạo audio (Edge TTS hoặc CapCut TTS); (2) Tạo clip avatar nói (SadTalker, D-ID, hoặc CapCut Talking Avatar); (3) Ghép clip + slide trong CapCut (Layout A: slide nền + avatar góc; Layout B: xen kẽ), export MP4. Có checklist tuần tự và hai workflow (Cách 1: SadTalker+Edge TTS+CapCut; Cách 2: chỉ CapCut). |
| **ghép-video-capcut.md** | Hướng dẫn cụ thể ghép 5 clip (video-1 … video-5) với slide trong CapCut: map clip nào với slide nào, track nền vs track avatar, export. Áp dụng khi đã có sẵn 5 clip từ D-ID/SadTalker/CapCut. |
| **ai-presentation-idea.md** | Ý tưởng dùng AI để thuyết trình: hybrid (AI voice trên slide), video AI presenter (avatar + voice), hoặc live co-presenter. Workflow, tool gợi ý, câu pitch với BGK, và section “Làm video với trợ lý ảo anime + voice — bộ tool FREE” (bảng avatar/TTS/ghép video, workflow SadTalker+Edge TTS+CapCut và CapCut-only). |

### 2.5 Clip trung gian & video cuối

| Thư mục / output | Mô tả |
|------------------|--------|
| **videos-draft/** | Các clip video từng đoạn (vd video-1 đến video-5) do D-ID hoặc tool talking head tạo ra (avatar + từng file MP3). Dùng làm input khi ghép trong CapCut theo **ghép-video-capcut.md**. |
| **Video cuối (MC.mp4)** | Video thuyết trình hoàn chỉnh (trợ lý ảo + voice + slide) đã export. File >100 MB nên không đẩy lên GitHub; link xem: **Google Drive** (ghi trong README.md gốc của repo). |

---

## 3. Công cụ đã dùng (tóm tắt)

| Bước | Công cụ | Ghi chú |
|------|---------|--------|
| Script | script-vi.txt (5 segment) | Nội dung từ presentation-outline + 3 deliverables. |
| Voice (TTS) | Edge TTS (Microsoft) | `gen-audio.py` → 5 MP3; giọng vi-VN-HoaiMyNeural. |
| Avatar nói | D-ID (hoặc SadTalker / CapCut Talking Photo) | Ảnh avatar + từng MP3 → clip có biểu cảm/môi. |
| Slide | Export từ Gemini Canvas / design | Ảnh trong **slides/**. |
| Ghép video | CapCut | Track nền = slide; track trên = clip avatar (góc); export MP4 1080p. |

---

## 4. Khi present phần AI Showcase (~2 phút)

- Mở **prompts-used.md** (hoặc 1–2 screenshot Cursor) và tóm tắt: đã dùng Cursor + web search để (1) tìm đối thủ và số liệu, (2) tìm bằng chứng demand cho skill, (3) thảo luận ý tưởng distribution (cuộc thi hàng tuần, BXH, flywheel). Nhấn mạnh: **mọi số liệu đã đối chiếu nguồn** trước khi đưa vào deliverables.
- (Tùy chọn) Phát **video MC.mp4** (link Google Drive trong README gốc) để show sản phẩm “AI deliver” — trợ lý ảo + voice + slide.

---

## 5. Checklist trước khi present (liên quan AI Showcase)

- [ ] Có file **prompts-used.md** hoặc screenshot prompt trong folder.
- [ ] Có thể trả lời: “Số liệu lấy ở đâu?” — không trả lời “AI cho em”; phải nêu nguồn (website, GitHub, báo cáo).
- [ ] Nếu có video pitch: link Google Drive đã ghi trong README.md gốc.

---

*Cập nhật: Feb 2026 — Đồng bộ với cấu trúc hiện tại (script, audio, slides, videos-draft, hướng dẫn video, prompts-used).*
