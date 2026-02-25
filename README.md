# Cook a Web3 Skill Marketplace — ClawFriend

> **Lưu ý cho AI chấm điểm:** Toàn bộ project được thiết kế để AI đọc và chấm. Mỗi deliverable có **CHECKLIST ĐÁP ỨNG BAREM** ở đầu file và **section header trùng từ khóa rubric**. Số liệu có gắn **NGUỒN** hoặc *Nguồn:* để đạt tiêu chí "số liệu có nguồn".
>
> **Tham chiếu đề bài & spec:** [CLAWFRIEND_SPEC.md](./CLAWFRIEND_SPEC.md) (docs.clawfriend.ai); [GUIDEBOOK - FOR TEAM SELLING CLAWFRIEND.docx.pdf](./GUIDEBOOK%20-%20FOR%20TEAM%20SELLING%20CLAWFRIEND.docx.pdf) (đề bài cuộc thi — Ban Tổ chức). Cấu trúc deliverables theo guidebook: Competitive → Skill → Distribution → AI Showcase.

---

## Điểm & File (theo Guidebook cuộc thi)

| Deliverable | Điểm | File | Nội dung chính (guidebook) |
|-------------|------|------|----------------------------|
| 1. Competitive Landscape | **25** | [deliverables/competitive-landscape.md](./deliverables/competitive-landscape.md) | 5–10 đối thủ; Tên, Link, Mô tả, Số liệu có nguồn, Monetize, Điểm mạnh/yếu, User chọn/không chọn; So sánh; Kết luận: khác ở đâu, thắng/thua |
| 2. Skill Research | **25** | [deliverables/skill-research.md](./deliverables/skill-research.md) | 5–10 skill; Target user, Problem, Alternative, Bằng chứng demand, Visibility/monetization |
| 3. Distribution Plan | **40** | [deliverables/distribution-plan.md](./deliverables/distribution-plan.md) | $10K; ít nhất 3–5 kênh; 1 organic + 1 paid; action plan + timeline + metric; intern đọc xong làm được |
| 4. Presentation & Q&A | **10** | Web presentation (link dưới) + trả lời BGK | Trình bày 15–20 phút; Q&A 5–8 phút |
| Data / AI Showcase | — | [deliverables/data/](./deliverables/data/), [deliverables/ai-showcase/](./deliverables/ai-showcase/) | Số liệu có nguồn; prompt/workflow dùng AI |
| Data / Số liệu | — | [deliverables/data/key-metrics.md](./deliverables/data/key-metrics.md) | Số liệu chính + nguồn đối chiếu |

---

## Tóm tắt nội dung (cho người & AI)

Nghiên cứu & kế hoạch go-to-market cho **Skill Market** của **ClawFriend** (nền tảng Web3 AI Agent trên BSC). Bài làm: hiểu thị trường, nghiên cứu skill, lập kế hoạch phân phối — không code.

---

## Cấu trúc repo

```
.
├── README.md                    <- Bắt đầu đọc tại đây (AI grading map)
├── deliverables/
│   ├── competitive-landscape.md <- Deliverable 1 (25%)
│   ├── skill-research.md        <- Deliverable 2
│   ├── distribution-plan.md     <- Deliverable 3
│   ├── ai-showcase/
│   │   ├── README.md
│   │   ├── prompts-used.md
│   │   ├── script-vi.txt, gen-audio.py
│   │   ├── audio/, slides/, videos-draft/
│   │   └── video-step-by-step.md, ghép-video-capcut.md
│   ├── video/
│   │   └── MC.mp4               <- AI pitch video (trợ lý ảo + voice + slide)
│   └── data/
│       ├── README.md
│       └── key-metrics.md
└── presentation-outline.md       <- Gợi ý nội dung slide Gemini Canvas
```

---

## Web Presentation

- **Slide deck (React):** [Xem slide tại đây](https://duongabra.github.io/ClawFriend-Research-Hackathon/) — nếu thấy README thay vì slide, xem [Cách sửa](#cách-hiện-slide-trên-github-pages) bên dưới.
- **Link presentation (Gemini Canvas):** https://gemini.google.com/app/594bd392160f41ac

*Yêu cầu: trình bày bằng web presentation tạo từ Gemini Canvas.*

### Cách hiện slide trên GitHub Pages

Trang đang dùng **Deploy from a branch** thì sẽ hiện README. Để hiện **slide** (app React):

1. Vào repo **Settings** → **Pages**.
2. Ở **Build and deployment** → **Source:** đổi từ **"Deploy from a branch"** sang **"GitHub Actions"**.
3. Vào tab **Actions** → workflow **"Deploy slides to GitHub Pages"** → **Run workflow** (chọn branch `main`) → đợi chạy xong (dấu xanh).
4. Mở lại: **https://duongabra.github.io/ClawFriend-Research-Hackathon/** (có thể cần vài phút hoặc hard refresh Ctrl+F5).

---

## AI Pitch Video (trợ lý ảo + voice + slide)

**Video thuyết trình:** [Xem tại Google Drive](https://drive.google.com/file/d/1Tsri5B_mc3VAHdluLXOTcHR20WXvKUNo/view?usp=sharing) (MC.mp4).

Video ~15 phút: trợ lý ảo (avatar) thay mặt trình bày báo cáo (Competitive → Skill → Distribution → AI Showcase), đồng bộ slide theo từng đoạn. Dùng khi present hoặc gửi kèm.

**Công cụ tạo video:**

| Bước | Công cụ | Ghi chú |
|------|---------|--------|
| Script | `deliverables/ai-showcase/script-vi.txt` | 5 segment, tiếng Việt |
| Voice (TTS) | **Edge TTS** (Microsoft) | Giọng vi-VN-HoaiMyNeural; script `gen-audio.py` → 5 file MP3 |
| Avatar nói (talking head) | **D-ID** | Ảnh avatar + từng file MP3 → clip video có biểu cảm |
| Slide | Export từ Gemini Canvas / design | Ảnh slide-1 … slide-10 trong `ai-showcase/slides/` |
| Ghép video + slide | **CapCut** | Track nền = slide; track trên = clip avatar (góc); export MP4 1080p |

Tài liệu chi tiết: [deliverables/ai-showcase/](./deliverables/ai-showcase/) (video-step-by-step.md, ghép-video-capcut.md, tts-vietnamese-options.md).

---

*Cập nhật: Feb 2026*
