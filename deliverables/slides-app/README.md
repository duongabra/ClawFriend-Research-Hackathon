# ClawFriend Slides — Web Presentation

Slide deck **ClawFriend — Skill Market Go-To-Market Plan** chạy trên web (React + Vite + Tailwind). Dùng phím mũi tên ← → hoặc nút để chuyển slide.

---

## Chạy local

**Yêu cầu:** Node.js 18+

```bash
cd deliverables/slides-app
npm install
npm run dev
```

Mở trình duyệt tại **http://localhost:5173**.

---

## Build production

```bash
npm run build
```

Output nằm trong thư mục **`dist/`**. Có thể host thư mục này trên bất kỳ static hosting nào.

---

## Deploy lên domain miễn phí

Có thể deploy **miễn phí** lên các nền tảng sau (đều có subdomain miễn phí, không cần thẻ tín dụng).

### 1. Vercel (khuyến nghị)

- **Subdomain mẫu:** `clawfriend-slides.vercel.app`
- **Cách 1 — Kết nối GitHub:**
  1. Đẩy repo lên GitHub (nếu chưa có).
  2. Vào [vercel.com](https://vercel.com) → Sign in (GitHub).
  3. **Add New Project** → Import repo của bạn.
  4. **Root Directory:** chọn `deliverables/slides-app` (hoặc điền `deliverables/slides-app`).
  5. **Build Command:** `npm run build` (mặc định đã đúng).
  6. **Output Directory:** `dist` (mặc định Vite là `dist`).
  7. Deploy → Vercel sẽ cho URL dạng `xxx.vercel.app`. Có thể đổi tên trong Settings → Domains.

- **Cách 2 — Deploy bằng CLI (không cần GitHub):**
  ```bash
  cd deliverables/slides-app
  npx vercel
  ```
  Làm theo hướng dẫn (đăng nhập nếu cần). Sau khi xong, bạn nhận link dạng `clawfriend-slides-xxx.vercel.app`.

---

### 2. Netlify

- **Subdomain mẫu:** `clawfriend-slides.netlify.app`
- **Kết nối GitHub:**
  1. Vào [netlify.com](https://netlify.com) → Sign in (GitHub).
  2. **Add new site** → **Import an existing project** → chọn repo.
  3. **Base directory:** `deliverables/slides-app`
  4. **Build command:** `npm run build`
  5. **Publish directory:** `deliverables/slides-app/dist` (hoặc `dist` nếu Netlify đã set base = `deliverables/slides-app` thì để `dist`).
  6. Deploy → Netlify gán subdomain miễn phí.

- **Deploy bằng kéo thả:** Chạy `npm run build` trong `deliverables/slides-app`, rồi kéo thả thư mục **`dist`** vào [app.netlify.com/drop](https://app.netlify.com/drop).

---

### 3. GitHub Pages

1. Trong repo, **Settings** → **Pages** → Source chọn **GitHub Actions**.
2. Tạo file `.github/workflows/deploy-slides.yml` tại root repo với nội dung (điều chỉnh branch `main` nếu bạn dùng nhánh khác):

```yaml
name: Deploy slides to GitHub Pages
on:
  push:
    branches: [main]
    paths:
      - 'deliverables/slides-app/**'
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: deliverables/slides-app/package-lock.json
      - run: cd deliverables/slides-app && npm ci && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: deliverables/slides-app/dist
```

3. Push workflow → đợi chạy xong. Trang sẽ có tại: `https://<username>.github.io/<repo>/` (nếu dùng branch `gh-pages` và root của Pages là `/ (root)` thì có thể cần set **Settings → Pages → Source** là branch `gh-pages`, folder `/ (root)`).

*(Lưu ý: với repo public, GitHub Pages miễn phí; nếu dùng custom domain thì cấu hình thêm trong Settings → Pages.)*

---

## Cập nhật nội dung slide

- **Nguồn gốc:** File `deliverables/slide.tsx` là bản “master” (có thể chỉnh trực tiếp cho các bản khác).
- **App web:** Đang dùng bản copy trong `deliverables/slides-app/src/App.tsx`. Nếu bạn sửa `deliverables/slide.tsx`, nhớ copy nội dung sang `slides-app/src/App.tsx` rồi chạy lại `npm run build` / deploy.

---

## Tóm tắt lệnh

| Việc | Lệnh |
|------|------|
| Chạy local | `cd deliverables/slides-app && npm install && npm run dev` |
| Build | `cd deliverables/slides-app && npm run build` |
| Deploy nhanh (Vercel) | `cd deliverables/slides-app && npx vercel` |

Sau khi deploy, gửi link (vd `https://xxx.vercel.app`) trong README chính của repo để BGK mở presentation.
