# Ý tưởng: AI thuyết trình thay / hỗ trợ người present

> Cuộc thi đánh giá **cách sử dụng AI**. Việc dùng AI không chỉ để research mà còn để **deliver** phần thuyết trình = thể hiện tư duy "AI end-to-end", có thể gây ấn tượng với BGK.

---

## 1. Đánh giá ý tưởng

**Ưu điểm**
- **Đúng chủ đề cuộc thi:** "Thúc đẩy văn hóa ứng dụng AI vào nghiên cứu, phân tích, và lập kế hoạch" — đưa AI vào cả bước **trình bày** là nhất quán.
- **Khác biệt rõ:** Các thí sinh khác thuyết trình bằng miệng; mình dùng AI = dễ nhớ, dễ bàn.
- **Chứng minh năng lực:** Biết dùng tool AI để generate script, voice, hoặc video từ nội dung project.

**Rủi ro / cần lưu ý**
- **Q&A bắt buộc có người:** Guidebook: "Q&A với BGK 5–8 phút" — BGK sẽ hỏi và cần **bạn trả lời trực tiếp**. Không thể để AI trả lời thay (trễ, không tự nhiên, có thể bị coi là trốn).
- **Cảm giác "trốn" present:** Nếu 100% là video AI, không có mặt bạn "live", BGK có thể nghĩ bạn không dám nói. Cách giảm: **hybrid** — AI làm phần scripted (intro + 3 deliverable), **bạn** xuất hiện live cho phần tóm tắt + **toàn bộ Q&A**.
- **Guidebook:** "Web presentation bằng Gemini Canvas" — nếu bạn nộp **video** thay vì link Gemini Canvas, cần xác nhận BTC có chấp nhận. An toàn nhất: **Gemini Canvas vẫn là file chính**, AI voice/video dùng **khi present** (phát trên màn hình) hoặc làm **bản backup** "AI pitch video" gửi kèm.

---

## 2. Gợi ý cách làm (3 hướng)

### Cách A: Hybrid — AI voiceover trên slide (khuyến nghị)

- **Slide:** Vẫn tạo bằng Gemini Canvas (đúng yêu cầu).
- **Khi present:** Mở slide, bật **AI đọc script** (text-to-speech) thay vì bạn đọc. Bạn đứng cạnh, có thể bổ sung 1–2 câu hoặc im lặng cho AI nói. Hết phần scripted → **bạn tắt AI, tự nói** phần kết và **trả lời Q&A**.
- **Tool:** ElevenLabs (giọng tự nhiên), OpenAI TTS (API), Google Cloud TTS, hoặc extension trình duyệt đọc text. Script lấy từ `presentation-outline.md` + tóm tắt 3 deliverable.
- **Ưu:** Đúng format Gemini Canvas; BGK thấy bạn có mặt; AI "present" phần dài; bạn vẫn chủ đạo ở Q&A.

### Cách B: Video AI presenter (avatar + giọng)

- **Ý tưởng:** Tạo **video** 10–15 phút: avatar AI (hoặc ảnh tĩnh + giọng AI) đọc script giới thiệu Competitive → Skill → Distribution. Gửi link video **kèm** link Gemini Canvas. Khi present live: phát video trước (hoặc xen kẽ), sau đó bạn live cho Q&A và nhấn mạnh điểm.
- **Tool:** [HeyGen](https://www.heygen.com/), [D-ID](https://www.d-id.com/), [Synthesia](https://www.synthesia.io/) — upload script + chọn avatar, export video. Hoặc đơn giản: slide + **ElevenLabs** voiceover (không cần avatar) → export video (OBS, Loom, hoặc tool record màn hình).
- **Ưu:** Có sản phẩm "AI pitch video" để khoe; có thể gửi trước cho BGK xem. **Nhược:** Cần confirm với BTC là video có được dùng thay phần nói live không, hay chỉ bổ trợ.

### Cách C: Live "AI co-presenter"

- **Ý tưởng:** Mở 2 màn hình: 1 = Gemini Canvas slide; 1 = cửa sổ AI (Claude/ChatGPT) đang "đọc" từng đoạn script (bạn paste từng block, AI đọc bằng TTS hoặc bạn dùng tool đọc). Bạn giới thiệu: "Phần Competitive Landscape em để AI đọc script từ research, phần Q&A em trả lời trực tiếp."
- **Tool:** Cursor/Claude với TTS, hoặc ElevenLabs API gọi từ script có sẵn.
- **Ưu:** Rất "meta" — vừa show slide vừa show AI đang làm. **Nhược:** Cần test kỹ (latency, lỗi mic), tránh lúng túng trên sân khấu.

---

## 3. Workflow gợi ý (Cách A hoặc B)

1. **Viết script từ nội dung project**
   - Nguồn: `presentation-outline.md` + `competitive-landscape.md` (phần tóm tắt + kết luận) + `skill-research.md` (3–5 skill + bằng chứng) + `distribution-plan.md` (3 kênh, cuộc thi, flywheel).
   - Format: 1 file text/markdown, chia theo slide (Slide 1: ..., Slide 2: ..., mỗi đoạn ~1–2 phút nói).

2. **Chọn tool giọng / video**
   - **Chỉ cần giọng:** ElevenLabs (free tier có giới hạn), OpenAI TTS, Google TTS.
   - **Cần avatar + video:** HeyGen, D-ID, Synthesia (trial/paid). Hoặc đơn giản: Canva video (slide + voiceover) hoặc PowerPoint export video + dub bằng ElevenLabs.

3. **Generate**
   - Paste từng đoạn script vào tool → export audio (mp3) hoặc video (mp4).
   - Nếu dùng slide live: chuẩn bị từng file audio theo thứ tự slide, bấm phát khi đổi slide.

4. **Khi present**
   - **Mở đầu:** "Phần nội dung 3 deliverable em dùng AI voice để trình bày từ bản research đã làm; phần Q&A em trả lời trực tiếp để BGK hỏi sâu."
   - Phát AI voice / video → hết phần scripted → chuyển sang **bạn nói** tóm tắt 1–2 câu + sẵn sàng Q&A.

---

## 4. Câu pitch với BGK (tránh hiểu nhầm)

- *"Cuộc thi yêu cầu show cách dùng AI — em dùng AI không chỉ để research mà còn để deliver phần thuyết trình: script từ deliverables, AI đọc/avatar nói. Phần phản biện em trả lời trực tiếp để chứng minh em nắm nội dung."*
- Nếu BGK hỏi "Sao không tự nói?": *"Em muốn thể hiện end-to-end use case của AI: từ input là research đến output là presentation. Em vẫn ở đây để trả lời mọi câu hỏi chi tiết."*

---

## 5. Lưu ý kỹ thuật

- **Thời lượng:** Guidebook ~15–20 phút present + 5–8 phút Q&A. Phần AI nên ~10–12 phút (Competitive + Skill + Distribution + AI Showcase), còn 2–3 phút bạn nói intro/kết + Q&A full.
- **File nộp:** Link **Gemini Canvas** vẫn bắt buộc trong README. Video AI (nếu có) có thể gửi thêm trong repo (folder `ai-showcase/`) hoặc link trong README với ghi chú "AI pitch video (bổ trợ)".

---

*Tóm lại: Ý tưởng AI thuyết trình là đột phá và đúng theme. Nên làm **hybrid** (AI phần scripted + bạn live Q&A) và chuẩn bị script + tool sớm để test. Nếu BTC chỉ chấp nhận "người present", vẫn có thể dùng AI voice như **bản backup** hoặc gửi kèm video để show khả năng dùng AI.*

---

## 6. Làm video với trợ lý ảo anime + voice — bộ tool FREE

Phần này gợi ý **toàn bộ free** (hoặc free tier đủ dùng) để tạo video thuyết trình có **avatar/trợ lý ảo** (anime hoặc 2D) + **voice** (TTS) + ghép thành một video.

### 6.1 Avatar / trợ lý ảo (anime hoặc 2D)

| Tool / nguồn | Mô tả | Free? | Giới hạn / lưu ý |
|--------------|--------|-------|-------------------|
| **CapCut** (Web hoặc app) | Talking avatar: upload **ảnh** (kể cả anime/2D) → tạo video nói, lip-sync. Có sẵn 150+ giọng. | ✅ Free | Dùng ảnh anime từ web (không bản quyền) hoặc tự vẽ; có watermark nhẹ tùy plan. |
| **Toki AI** | Talking head: upload ảnh (kể cả anime) + script hoặc audio → video nói. | ✅ Free tier | Video tối đa **30 giây**, có watermark. Cắt script thành nhiều clip 30s rồi ghép. |
| **SadTalker** (Hugging Face / Colab) | Open source: **1 ảnh bất kỳ** (anime, chân dung) + **audio** → video talking head, lip-sync. | ✅ Free | Chạy trên Colab (free) hoặc local. Chất lượng 256px hoặc 512px. Không watermark. |
| **D-ID** (qua Canva hoặc trực tiếp) | Avatar AI có sẵn hoặc upload ảnh → video nói. | Free trial | Trial có **watermark full màn hình**; số credit/phút giới hạn. |
| **Boba** (anime video) | Tạo clip anime từ text, có beta sound + lip-sync. | Free / trial | Clip 5–8 giây; phù hợp clip ngắn, không phải presenter dài. |

**Gợi ý nhanh:** Dùng **ảnh anime/2D** (tìm free trên Pixiv, free stock, hoặc tự tạo) → **SadTalker** (ảnh + audio) hoặc **CapCut** (ảnh + TTS tích hợp) để có trợ lý ảo nói.

### 6.2 Voice (TTS) — free

| Tool | Ngôn ngữ | Free? | Cách dùng |
|------|----------|-------|-----------|
| **Edge TTS** (Microsoft) | Tiếng Việt, tiếng Anh, 100+ giọng | ✅ Free, không giới hạn thực tế | Dùng script Python (thư viện `edge-tts`) hoặc extension/trình duyệt. Export file MP3. |
| **Speechify** | Tiếng Việt | ✅ Free online | Paste text → tải audio. Không cần đăng ký. |
| **FPT Voicemaker** | Tiếng Việt (chất lượng tốt) | Free evaluation | [voicemaker.fpt.ai](https://voicemaker.fpt.ai/) — đăng ký eval. |
| **Viettel TTS** | Tiếng Việt (giọng Bắc/Nam/Trung) | 50.000 ký tự free khi đăng ký | Web Viettel AI. |
| **CapCut** (built-in) | Nhiều thứ tiếng, 150+ giọng | ✅ Free trong app | Ghi âm trực tiếp từ script trong CapCut, đồng bộ với avatar. |

**Gợi ý:** **Edge TTS** (Python hoặc web) để tạo toàn bộ file audio từ script, không giới hạn; sau đó đưa audio vào SadTalker hoặc CapCut.

### 6.3 Ghép video (avatar + slide / nền) — free

| Tool | Mô tả |
|------|--------|
| **CapCut** (Web / desktop) | Ghép clip avatar + slide/ảnh nền, subtitle, cắt theo thời gian. Free. |
| **DaVinci Resolve** | Editor chuyên nghiệp, bản free đủ dùng. |
| **Canva** (free tier) | Kéo thả, có template video, xuất MP4. |
| **OBS Studio** | Quay màn hình (slide) + webcam/overlay avatar; không “edit” nhưng dùng để record live hoặc composite. |

### 6.4 Workflow cụ thể (100% free)

**Workflow 1: SadTalker + Edge TTS + CapCut (avatar anime từ 1 ảnh)**

1. **Script:** Viết từ `presentation-outline.md` + 3 deliverable (competitive, skill, distribution). Chia đoạn ~1–2 phút/đoạn (để dễ sync với slide nếu cần).
2. **Voice:** Dùng **Edge TTS** (Python: `edge-tts --text "..." --write-media intro.mp3`) tạo từng file MP3 theo đoạn.
3. **Avatar:** Chọn **1 ảnh anime/2D** (face rõ, không bị che). Vào **SadTalker** (Hugging Face Space hoặc Colab): upload ảnh + từng file audio → generate từng clip talking head.
4. **Ghép:** Import clip SadTalker + (tuỳ chọn) slide/ảnh nền vào **CapCut**. Sắp xếp: đoạn 1 → đoạn 2 → …; thêm subtitle nếu cần. Export video ~10–15 phút.

**Workflow 2: CapCut all-in-one (nhanh, ít bước)**

1. **Script:** Chuẩn bị text theo từng slide/đoạn.
2. **CapCut:** Dùng tính năng **Talking Avatar** (upload ảnh anime/người) + chọn **giọng TTS có sẵn** trong CapCut, paste script từng đoạn → tạo clip. Hoặc dùng **AI Avatar** từ ảnh + voice.
3. Ghép các clip với nhau, thêm slide/background trong CapCut → export.

**Lưu ý:** CapCut có thể có watermark hoặc giới hạn export tùy phiên bản; kiểm tra điều khoản hiện tại. SadTalker + Edge TTS không watermark.

### 6.5 Định dạng xuất và thời lượng

- **Độ dài:** Nên ~10–12 phút phần nội dung (Competitive + Skill + Distribution + AI Showcase), còn 2–3 phút intro/kết hoặc để dành cho Q&A khi present live.
- **Xuất:** MP4, 1080p nếu tool hỗ trợ (SadTalker 512px; CapCut thường 1080p).
- **File nộp:** Video có thể đặt trong `deliverables/ai-showcase/` hoặc link trong README với ghi chú "AI pitch video (trợ lý ảo + voice)".
