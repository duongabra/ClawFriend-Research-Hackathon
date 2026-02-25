# Làm video thuyết trình — từng bước

File này hướng dẫn **từng bước** để tạo video có **trợ lý ảo (anime/2D) + voice + slide**: nói đến đâu thì đổi slide đến đó. Chọn **1 trong 2 cách** tạo clip (SadTalker+Edge TTS hoặc CapCut) rồi làm theo thứ tự.

---

## BẮT ĐẦU TỪ ĐẦU — Checklist tuần tự

Làm **đúng thứ tự** từ Step 1 xuống. Đến Step 5 chọn Cách 1 hoặc Cách 2 rồi làm tiếp.

| # | Việc cần làm | Xong? |
|---|-----------------------|-------|
| **1** | **Thu thập nội dung** — Mở `presentation-outline.md` + `competitive-landscape.md` + `skill-research.md` + `distribution-plan.md`. Ghi nhớ: Slide 1 → 2 → 3 → 4 → 5 tương ứng Title, Competitive, Skill, Distribution, AI Showcase. | [ ] |
| **2** | **Viết script** — Tạo file `deliverables/ai-showcase/script.txt`. Viết từng đoạn theo từng slide (Đoạn 1 = Title, Đoạn 2 = Competitive, …). Mỗi đoạn ~150–250 từ (~1–2 phút nói). Tổng ~10–12 phút. | [ ] |
| **3** | **Chọn ảnh avatar** — 1 ảnh mặt rõ (anime/2D/người), lưu vd: `deliverables/ai-showcase/avatar.png`. | [ ] |
| **4** | **Chuẩn bị ảnh slide** — Export từng slide thành ảnh (chụp màn hình Gemini Canvas hoặc export PDF/PNG). Đặt tên slide_01, slide_02, … Lưu vào `deliverables/ai-showcase/slides/`. | [ ] |
| **5** | **Chọn cách làm clip:** **Cách 1** (SadTalker + Edge TTS + CapCut — không watermark) hoặc **Cách 2** (chỉ CapCut — nhanh). | [ ] |
| **6a** | **Nếu chọn Cách 1:** Cài `edge-tts` → tạo file MP3 từ từng đoạn script → SadTalker: upload avatar + từng MP3 → tải từng clip (clip_01, 02, …). | [ ] |
| **6b** | **Nếu chọn Cách 2:** Vào CapCut → Talking Avatar: upload avatar + paste từng đoạn script + TTS → tải từng clip. | [ ] |
| **7** | **Ghép video trong CapCut** — Import clip + ảnh slide. Layout A (slide nền + avatar góc) hoặc B (xen kẽ slide → clip). Nói đến đâu đổi slide đến đó. Export MP4 1080p. | [ ] |
| **8** | **Hoàn tất** — Kiểm tra độ dài ~10–12 phút; ghi link/đường dẫn video vào README; sẵn sàng phát khi present hoặc gửi kèm. | [ ] |

**Bạn bắt đầu ngay từ Step 1.** Chi tiết từng bước nằm ở các section bên dưới.

---

## Chuẩn bị chung (cả 2 cách)

### Bước 0.1 — Thu thập nội dung cho script

- [ ] Mở **`presentation-outline.md`** (trong thư mục gốc project).
- [ ] Mở thêm **`deliverables/competitive-landscape.md`**, **`deliverables/skill-research.md`**, **`deliverables/distribution-plan.md`**.
- [ ] Ghi chú: Slide 1 (title) → Slide 2 (Competitive) → Slide 3 (Skill) → Slide 4 (Distribution) → Slide 5 (AI Showcase). Mỗi slide tương ứng ~1–4 phút nói.

### Bước 0.2 — Viết script (text để đọc / TTS)

- [ ] Tạo file **`deliverables/ai-showcase/script.txt`** (hoặc `.md`).
- [ ] Viết từng đoạn tương ứng từng slide. Ví dụ:
  - **Đoạn 1 (Title):** "Cook a Web3 Skill Marketplace. ClawFriend — Skill Market go-to-market plan. [Tên team]."
  - **Đoạn 2 (Competitive):** Rút từ competitive-landscape: 6 đối thủ, số liệu, kết luận ClawFriend khác ở đâu.
  - **Đoạn 3 (Skill):** Rút từ skill-research: 3–5 skill, bằng chứng demand.
  - **Đoạn 4 (Distribution):** Rút từ distribution-plan: $10K, cuộc thi 4 tuần, BXH T2–T7, đóng băng CN, flywheel.
  - **Đoạn 5 (AI Showcase):** Cách dùng AI (Cursor, search), verify nguồn.
- [ ] Mỗi đoạn nên **~1–2 phút nói** (khoảng 150–250 từ). Tổng ~10–12 phút.

### Bước 0.3 — Chọn ảnh avatar (trợ lý ảo)

- [ ] Chọn **1 ảnh** khuôn mặt rõ (anime, 2D, hoặc chân dung). Lưu vào máy (vd: `deliverables/ai-showcase/avatar.png`).
- [ ] Lưu ý: mặt thẳng hoặc gần thẳng, ít bị tóc/đồ che, ảnh càng sạch càng dễ sync môi.

### Bước 0.4 — Chuẩn bị slide (để tích hợp vào video)

- [ ] Có **ảnh từng slide** (Slide 1, 2, 3, …) để khi edit video: **nói đến đâu đổi slide đến đó**.
- [ ] Cách lấy ảnh slide:
  - **Gemini Canvas:** Mở link presentation → chụp màn hình từng slide (hoặc in/export PDF rồi chuyển mỗi trang thành ảnh). Đặt tên rõ: `slide_01.png`, `slide_02.png`, …
  - **Canva / PowerPoint:** Export từng slide dạng PNG/JPG.
- [ ] Lưu tất cả vào một folder (vd: `deliverables/ai-showcase/slides/`). Số ảnh = số slide (vd: 6 ảnh cho Slide 1–6).

---

## Cách 1: SadTalker + Edge TTS + CapCut (không watermark, chất lượng tốt)

### Bước 1.1 — Tạo file audio (voice) bằng Edge TTS

- [ ] Cài Python (nếu chưa có). Trên terminal:
  ```bash
  pip install edge-tts
  ```
- [ ] Tạo từng file MP3 từ từng đoạn script. Ví dụ (chạy từng lệnh, đổi nội dung `--text` và tên file):
  ```bash
  edge-tts --text "Nội dung đoạn 1 ở đây..." --write-media script_01.mp3
  edge-tts --text "Nội dung đoạn 2..." --write-media script_02.mp3
  ```
- [ ] **Tiếng Việt:** thêm `--voice vi-VN-HoaiMyNeural` (hoặc `vi-VN-NamMinhNeural`). Xem danh sách: `edge-tts --list-voices`.
- [ ] Lưu tất cả file MP3 vào một folder (vd: `deliverables/ai-showcase/audio/`).

### Bước 1.2 — Tạo clip talking head (avatar nói) bằng SadTalker

- [ ] Vào **SadTalker** online: [Hugging Face Space](https://huggingface.co/spaces/vinthony/SadTalker) hoặc tìm "SadTalker" trên Hugging Face.
- [ ] Upload **ảnh avatar** đã chọn (Bước 0.3).
- [ ] Lần lượt: với **từng file MP3** (script_01, 02, …), upload audio → bấm Generate → tải video xuống. Đặt tên rõ (vd: `clip_01.mp4`, `clip_02.mp4`).
- [ ] Chọn resolution 512px nếu muốn chất lượng cao hơn (chậm hơn 256px).

### Bước 1.3 — Ghép video + slide trong CapCut (nói đến đâu đổi slide đến đó)

- [ ] Mở **CapCut** (Web: capcut.com hoặc app desktop).
- [ ] Import **tất cả clip** SadTalker (clip_01, 02, …) + **tất cả ảnh slide** (slide_01, 02, …) từ Bước 0.4.

**Cách edit — chọn 1 trong 2 layout:**

**Layout A — Avatar nhỏ + slide lớn (cùng màn hình):**
- [ ] Track 1 (nền): Kéo **ảnh slide** vào. Mỗi đoạn = 1 slide: đoạn 1 = slide_01 (kéo dài đúng bằng độ dài clip_01), đoạn 2 = slide_02 (độ dài = clip_02), …
- [ ] Track 2 (trên): Kéo **clip avatar** (clip_01, 02, …) xếp khớp với từng đoạn. Thu nhỏ avatar đặt góc (vd: góc dưới phải), để slide chiếm phần lớn màn hình.
- [ ] Kết quả: Xem slide full, avatar nói góc màn hình; hết đoạn 1 → chuyển sang slide_02 + clip_02 → **nói đến đâu đổi slide đến đó**.

**Layout B — Xen kẽ: full slide → avatar nói:**
- [ ] Track 1: Xếp lần lượt: **slide_01** (vài giây) → **clip_01** (avatar nói đoạn 1) → **slide_02** (vài giây) → **clip_02** (avatar nói đoạn 2) → …
- [ ] Mỗi lần đổi nội dung = đổi slide rồi đến clip tương ứng. Có thể rút ngắn “vài giây” slide xuống 1–2 giây hoặc bỏ hẳn nếu muốn chỉ còn avatar nói trên nền slide (dùng Layout A).

- [ ] (Tuỳ chọn) Thêm subtitle: CapCut có auto subtitle hoặc paste text từng đoạn.
- [ ] Export: MP4, 1080p. Lưu vào `deliverables/ai-showcase/` (vd: `clawfriend-pitch.mp4`).

---

## Cách 2: Chỉ dùng CapCut (nhanh, ít bước)

### Bước 2.1 — Vào CapCut

- [ ] Mở **CapCut** (Web hoặc app): [capcut.com](https://capcut.com) hoặc tải app.

### Bước 2.2 — Tạo talking avatar từ ảnh + script

- [ ] Tìm tính năng **"Talking photo"** / **"AI Avatar"** / **"Talking Avatar"** (tuỳ phiên bản).
- [ ] Upload **ảnh avatar** (Bước 0.3).
- [ ] Paste **đoạn script** tương ứng (từ script đã viết Bước 0.2). Chọn **giọng TTS** (tiếng Việt hoặc tiếng Anh) trong CapCut.
- [ ] Generate → tải clip. Lặp lại cho **từng đoạn** (Slide 1 → 2 → 3 → 4 → 5), mỗi đoạn một clip.

### Bước 2.3 — Ghép clip + slide và export (nói đến đâu đổi slide đến đó)

- [ ] New project → Import **tất cả clip** avatar + **tất cả ảnh slide** (Bước 0.4).
- [ ] Dùng **Layout A** hoặc **Layout B** giống Bước 1.3:
  - **Layout A:** Track nền = slide (slide_01 đúng độ dài clip_01, slide_02 đúng clip_02, …); track trên = clip avatar thu nhỏ góc. Nói đến đâu đổi slide đến đó.
  - **Layout B:** Xen kẽ slide → clip 1 → slide → clip 2 → …
- [ ] Thêm subtitle nếu cần. Export MP4, 1080p. Lưu vào `deliverables/ai-showcase/`.

---

## Sau khi xong

- [ ] Kiểm tra độ dài video: nên ~10–12 phút phần nội dung.
- [ ] Ghi vào **README.md** (hoặc file nộp): link hoặc đường dẫn tới file video, ghi chú "AI pitch video (trợ lý ảo + voice)".
- [ ] Nếu present live: có thể phát video này trước, sau đó bạn trả lời Q&A trực tiếp.

---

## Tóm tắt nhanh

| Bước | Cách 1 (SadTalker + Edge TTS + CapCut) | Cách 2 (CapCut only) |
|------|----------------------------------------|----------------------|
| 0 | Script + avatar + **export slide thành ảnh** (0.1–0.4) | Cùng (0.1–0.4) |
| 1 | Edge TTS → MP3 | — |
| 2 | SadTalker: ảnh + MP3 → clip | CapCut: ảnh + script + TTS → clip |
| 3 | CapCut: **slide + clip** (Layout A hoặc B) → export | CapCut: **slide + clip** (Layout A hoặc B) → export |

**Tích hợp slide (nói đến đâu đổi slide đến đó):** Chuẩn bị ảnh từng slide (Bước 0.4). Trong CapCut: **Layout A** = slide làm nền, avatar nhỏ góc, mỗi đoạn nói = 1 slide tương ứng; **Layout B** = xen kẽ full slide → clip avatar → slide tiếp → …

**Nguồn script:** `presentation-outline.md` + `competitive-landscape.md` + `skill-research.md` + `distribution-plan.md`.

**File tham chiếu thêm:** `deliverables/ai-showcase/ai-presentation-idea.md` (Section 6 — bảng tool, workflow, lưu ý).
