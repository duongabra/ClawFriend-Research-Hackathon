# Ghép 5 video + slide trong CapCut

## File bạn có

**5 clip (avatar nói):**
- `video-1(audio 1+2).mp4` — Mở đầu + Competitive
- `video-2(audio 3).mp4` — Skill
- `video-3(audio 4-a).mp4` — Distribution phần 1
- `video-4(audio 4-b).mp4` — Distribution phần 2
- `video-5(audio 5).mp4` — AI Showcase

**Slide:** `slides/slide-1.png` … `slide-10.png`

---

## Cách ghép trong CapCut (Layout: slide nền + avatar góc)

### Bước 1: Tạo project mới
- Mở **CapCut** (web hoặc app) → **+ Tạo mới** → **Video mới**.

### Bước 2: Import
- Kéo vào Media (hoặc bấm Import): **cả 5 file video** từ `videos-draft/`.
- Import **slide-1.png** … **slide-10.png** (hoặc ít nhất slide-1 đến slide-8).

### Bước 3: Xếp timeline — 2 track

**Track dưới (nền — slide):**  
Kéo **ảnh slide** vào, mỗi đoạn tương ứng 1 clip. Độ dài mỗi slide = đúng bằng độ dài clip đang đè lên.

| Thứ tự | Clip (track trên)        | Slide nền (track dưới)     |
|--------|--------------------------|----------------------------|
| 1      | video-1 (audio 1+2)     | slide-1, rồi slide-2       |
| 2      | video-2 (audio 3)       | slide-3                    |
| 3      | video-3 (audio 4-a)     | slide-4 (hoặc 4 + 5)       |
| 4      | video-4 (audio 4-b)     | slide-5 + 6 (hoặc 6 + 7)   |
| 5      | video-5 (audio 5)       | slide-8 hoặc slide-9       |

**Cách làm nhanh:**
- Kéo **video-1** vào timeline trước → xem độ dài (vd 2 phút).
- Kéo **slide-1** vào track dưới, đặt cùng vị trí đầu với video-1. Slide-1 mặc định có thể ngắn → **kéo mép phải slide-1** cho dài bằng **một nửa** video-1 (nếu video-1 = audio 1+2 thì nửa đầu dùng slide-1, nửa sau slide-2). Hoặc đơn giản: cả video-1 dùng 1 slide (slide-1 hoặc slide-2).
- Tiếp tục: **video-2** → **slide-3** (kéo dài slide-3 = độ dài video-2). **video-3** → **slide-4**. **video-4** → **slide-5** hoặc **slide-6**. **video-5** → **slide-8**.

**Track trên (avatar):**  
- Kéo lần lượt **video-1, video-2, video-3, video-4, video-5** vào **cùng một track**, xếp **nối đuôi** (clip 1 hết đến clip 2, 2 hết đến 3, …).
- Chọn từng clip → thu nhỏ (Scale) và đặt **góc** (vd góc dưới phải) để thấy slide phía sau. Có thể dùng **Vị trí** (Position) kéo avatar vào góc.

### Bước 4: Đồng bộ slide với clip
- Đảm bảo **đầu** mỗi slide trùng **đầu** clip tương ứng.
- **Kéo dài/ngắn** ảnh slide (kéo mép phải) cho bằng độ dài clip đó. Nếu 1 clip dùng 2 slide: cắt clip tại chỗ đổi ý (Split) rồi đoạn 1 = slide A, đoạn 2 = slide B.

### Bước 5: Export
- Bấm **Xuất / Export** → chọn **1080p**, **MP4** → lưu (vd: `clawfriend-pitch-final.mp4`).

---

## Tóm tắt nhanh
1. Import 5 video + ảnh slide.
2. Track dưới: slide-1, 2, 3, 4, 5 (hoặc 6), 8 — mỗi cái dài bằng clip tương ứng.
3. Track trên: video-1 → video-2 → video-3 → video-4 → video-5 (nối đuôi), thu nhỏ từng clip đặt góc.
4. Export MP4.
