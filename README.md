## WEB UI : https://duongabra.github.io/ClawFriend-Research-Hackathon

# Cook a Web3 Skill Marketplace — ClawFriend

> **Hai đối tượng phục vụ:** (1) **AI chấm điểm** — toàn bộ project có file markdown + checklist barem, section trùng từ khóa rubric, số liệu có nguồn; (2) **Người / giám khảo** — **web UI**: slide deck thuyết trình + 3 trang đọc (Competitive Landscape, Skill Research, Distribution Plan) tại link bên dưới.
>
> **Lưu ý cho AI:** Mỗi deliverable có **CHECKLIST ĐÁP ỨNG BAREM** ở đầu file và **section header trùng từ khóa rubric**. Số liệu có gắn **NGUỒN** hoặc *Nguồn:* để đạt tiêu chí "số liệu có nguồn".
>
> **Tham chiếu đề bài & spec:** [CLAWFRIEND_SPEC.md](./CLAWFRIEND_SPEC.md) (docs.clawfriend.ai); [GUIDEBOOK - FOR TEAM SELLING CLAWFRIEND.docx.pdf](./GUIDEBOOK%20-%20FOR%20TEAM%20SELLING%20CLAWFRIEND.docx.pdf) (đề bài cuộc thi — Ban Tổ chức). Cấu trúc deliverables theo guidebook: Competitive → Skill → Distribution → AI Showcase.

---

## Điểm & File (theo Guidebook cuộc thi)

| Deliverable | Điểm | File | Nội dung chính (guidebook) |
|-------------|------|------|----------------------------|
| 1. Competitive Landscape | **25** | [deliverables/competitive-landscape.md](./deliverables/competitive-landscape.md) | 6 đối thủ; Tên, Link, Mô tả, Số liệu có nguồn, Monetize, Điểm mạnh/yếu, User chọn/không chọn; So sánh; TAM/CAGR; Kết luận: khác ở đâu, thắng/thua |
| 2. Skill Research | **25** | [deliverables/skill-research.md](./deliverables/skill-research.md) | 20 skill (10 chủ đề), 10 đề xuất; Target user, Problem, Alternative, Bằng chứng demand, Visibility/monetization, Tech/API |
| 3. Distribution Plan | **40** | [deliverables/distribution-plan.md](./deliverables/distribution-plan.md) | $10K; 3 kênh (cuộc thi $10K, blog $0, OpenClaw $0); phân bổ ít/free + lý do; thi hàng tuần 4 tuần; flywheel; target tháng 1 + contingency |
| 4. Presentation & Q&A | **10** | Web presentation (link dưới) + trả lời BGK | Trình bày 15–20 phút; Q&A 5–8 phút |
| Data / AI Showcase | — | [deliverables/data/](./deliverables/data/README.md), [deliverables/ai-showcase/](./deliverables/ai-showcase/) | Số liệu có nguồn; prompt/workflow dùng AI (data: key-metrics, README; ai-showcase: README, prompts-used.md) |
| Data / Số liệu | — | [deliverables/data/key-metrics.md](./deliverables/data/key-metrics.md) | Số liệu chính + nguồn đối chiếu (Competitive, Skill, Distribution) |

---

## Link web UI (cho giám khảo / người đọc)

Chúng ta phục vụ **cả AI lẫn UI**: ngoài file markdown cho AI chấm, có **web presentation** để giám khảo xem slide và đọc 3 deliverable trên trình duyệt.

| Phần | Link |
|------|------|
| **Slide deck** (mặc định, trang chủ) | [https://duongabra.github.io/ClawFriend-Research-Hackathon/](https://duongabra.github.io/ClawFriend-Research-Hackathon/) |
| **Competitive Landscape** | [https://duongabra.github.io/ClawFriend-Research-Hackathon/#/landscape](https://duongabra.github.io/ClawFriend-Research-Hackathon/#/landscape) |
| **Skill Research** | [https://duongabra.github.io/ClawFriend-Research-Hackathon/#/skills](https://duongabra.github.io/ClawFriend-Research-Hackathon/#/skills) |
| **Distribution Plan** | [https://duongabra.github.io/ClawFriend-Research-Hackathon/#/distribution](https://duongabra.github.io/ClawFriend-Research-Hackathon/#/distribution) |

*Trang gốc `/` là slide; `#/landscape`, `#/skills`, `#/distribution` là 3 trang UI riêng (nội dung đồng bộ với file .md): Competitive Landscape, Skill Research, Distribution Plan. Script đọc khi present: [presentation-script.md](./deliverables/presentation-script.md).*

---

## Tóm tắt nội dung (cho người & AI)

Nghiên cứu & kế hoạch go-to-market cho **Skill Market** của **ClawFriend** (nền tảng Web3 AI Agent trên BSC). Bài làm: hiểu thị trường, nghiên cứu skill, lập kế hoạch phân phối — không code.

---

## Cấu trúc repo

```
.
├── README.md                    <- Bắt đầu đọc tại đây (AI grading map)
├── .gitignore
├── package.json                 <- npm run dev / build:slides (từ gốc repo)
├── package-lock.json
├── tsconfig.json
├── plan.ini
├── CLAWFRIEND_SPEC.md           <- Tham chiếu spec (docs.clawfriend.ai)
├── presentation-outline.md      <- Gợi ý nội dung slide
├── .github/workflows/
│   └── deploy-slides.yml        <- Deploy web UI lên GitHub Pages
└── deliverables/
    ├── competitive-landscape.md <- Deliverable 1 (25%)
    ├── skill-research.md        <- Deliverable 2
    ├── distribution-plan.md     <- Deliverable 3
    ├── presentation-script.md   <- Script thuyết trình từng slide (synced với 3 deliverable)
    ├── SELF-ASSESSMENT-BY-GUIDEBOOK.md <- Tự đánh giá theo barem
    ├── slide.tsx, slide.d.ts    <- Nguồn slide (dùng cho slides-app)
    ├── slides-app/              <- Web UI: slide deck + 3 trang đọc (header chung)
    │   ├── index.html
    │   ├── package.json, package-lock.json
    │   ├── vite.config.ts, tsconfig.json, tailwind.config.js, postcss.config.js
    │   ├── README.md
    │   ├── public/content/      <- competitive-landscape.md, skill-research.md, distribution-plan.md (copy để serve)
    │   └── src/
    │       ├── main.tsx, index.css, vite-env.d.ts
    │       ├── App.tsx           <- Slide deck
    │       ├── Layout.tsx       <- Header chung (nav Slide | Landscape | Skills | Distribution)
    │       ├── RouterApp.tsx    <- Routes /, /landscape, /skills, /distribution
    │       ├── ReaderPage.tsx   <- Trang đọc markdown (tùy chọn)
    │       └── pages/
    │           ├── LandscapePage.tsx   <- UI Competitive Landscape (data từ competitive-landscape.md)
    │           ├── SkillsPage.tsx      <- UI Skill Research (data từ skill-research.md)
    │           └── DistributionPage.tsx<- UI Distribution Plan (data từ distribution-plan.md)
    ├── ai-showcase/
    │   ├── README.md
    │   ├── prompts-used.md
    │   ├── script-vi.txt, script.txt, gen-audio.py
    │   ├── video-step-by-step.md, ghép-video-capcut.md, tts-vietnamese-options.md, ai-presentation-idea.md
    │   ├── audio/, slides/, videos-draft/
    │   └── mc.png, pikachu-mc.png  <- Avatar cho video
    ├── video/                   <- MC.mp4 không đẩy repo (.gitignore, >100MB); xem link Google Drive trong README
    └── data/
        ├── README.md
        └── key-metrics.md
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

**Kịch bản slides:** [deliverables/presentation-script.md](./deliverables/presentation-script.md) — script chi tiết từng slide, có giải thích thuật ngữ (glossary).

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

## Kiểm tra nhanh (checklist cho BGK / AI)

| Mục | Có trong repo |
|-----|----------------|
| 3 deliverable markdown (Competitive, Skill, Distribution) | CÓ — deliverables/*.md |
| Số liệu có nguồn | CÓ — deliverables/data/key-metrics.md + dòng *Nguồn:* trong từng deliverable |
| Web UI (slide + 3 trang đọc) | CÓ — link GitHub Pages; build từ deliverables/slides-app |
| Script thuyết trình | CÓ — deliverables/presentation-script.md (+ glossary thuật ngữ) |
| AI Showcase (prompt, video) | CÓ — deliverables/ai-showcase/ (prompts-used.md, video link Google Drive) |

---

*Cập nhật: Feb 2026*
