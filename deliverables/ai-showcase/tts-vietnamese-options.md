# TTS tiếng Việt chuẩn — thay thế CapCut

CapCut TTS tiếng Việt thường kém. Dùng một trong các option bên dưới để tạo **file MP3**, sau đó **import vào CapCut làm voiceover** (không dùng giọng AI của CapCut).

---

## 1. Edge TTS (Microsoft) — khuyến nghị, free

- **Chất lượng:** Giọng neural tiếng Việt, nghe tự nhiên hơn CapCut.
- **Chi phí:** Free, không giới hạn thực tế.
- **Cách dùng trong project:** Đã có sẵn script `gen-audio.py`.

```bash
cd deliverables/ai-showcase

# Nếu gặp lỗi "externally-managed-environment" (macOS/Homebrew):
python3 -m venv .venv
source .venv/bin/activate

pip install edge-tts
python gen-audio.py
```

(Lần sau chỉ cần: `source .venv/bin/activate` rồi `python gen-audio.py` nếu đã cài edge-tts trong venv.)

→ Tạo folder `audio/` với `script_01.mp3` … `script_05.mp3`. Trong `gen-audio.py` có thể đổi biến `VOICE`:
- `vi-VN-HoaiMyNeural` (nữ)
- `vi-VN-NamMinhNeural` (nam)
- `vi-VN-AnNeural` (nam)

Xem tất cả giọng Việt: `edge-tts --list-voices | grep vi-VN`

**Sau khi có MP3:** Mở CapCut → project video → Import 5 file MP3 → kéo từng file vào timeline **làm track âm thanh**, khớp với slide (slide 1 = script_01, …). Có thể để ảnh Pikachu tĩnh hoặc slide full, không cần dùng “Talking photo” của CapCut nữa.

---

## 2. FPT Voicemaker

- **Chất lượng:** Tiếng Việt rất tốt, nhiều giọng.
- **Chi phí:** Có bản dùng thử / evaluation.
- **Cách dùng:** Vào [voicemaker.fpt.ai](https://voicemaker.fpt.ai/), đăng ký (nếu cần), paste từng đoạn script → chọn giọng Việt → tải MP3. Làm 5 lần cho 5 segment.

---

## 3. Viettel Text to Speech

- **Chất lượng:** Giọng Bắc / Nam / Trung, ổn định.
- **Chi phí:** 50.000 ký tự free khi đăng ký.
- **Cách dùng:** Vào [viettelai.vn](https://viettelai.vn) (mục chuyển giọng nói), đăng ký, paste text → tải file âm thanh.

---

## 4. Speechify (online, không cần đăng ký)

- **Chất lượng:** Có tiếng Việt, nghe ổn.
- **Chi phí:** Free online.
- **Cách dùng:** Vào speechify.com (hoặc app), paste text → chọn Vietnamese → tải audio. Làm từng đoạn rồi import vào CapCut.

---

## Tóm tắt

| Option      | Chất lượng | Free?        | Trong project              |
|------------|------------|-------------|----------------------------|
| **Edge TTS** | Tốt        | Có          | Chạy `python gen-audio.py` |
| FPT        | Rất tốt    | Eval/trial  | Thủ công trên web          |
| Viettel    | Tốt        | 50k ký tự   | Thủ công trên web          |
| Speechify  | Ổn         | Có          | Thủ công                   |

**Nên thử trước:** Chạy `gen-audio.py` (Edge TTS) → nghe thử `audio/script_01.mp3`. Nếu ổn thì dùng 5 file MP3 đó làm voiceover trong CapCut, bỏ hẳn TTS của CapCut.
