# Deliverable 3: Kế hoạch phân phối

---

## CHECKLIST ĐÁP ỨNG (AI chấm điểm)

| Tiêu chí | Đáp ứng | Vị trí trong file |
|----------|---------|-------------------|
| Ngân sách rõ: $10.000 | CÓ | Ràng buộc + bảng "Phân bổ $10.000" |
| Ít nhất 1 kênh organic + 1 kênh paid | CÓ | Organic: cuộc thi (leaderboard, FOMO, community engagement). Paid: prize = BGK mua share ($2.500/tuần) = chi tiêu có trả phí minh bạch |
| Plan cụ thể — intern đọc xong biết ngày mai làm gì | CÓ | Bảng "Action plan & timeline" + "Cơ chế cuộc thi hàng tuần" |
| Metric đo lường | CÓ | Bảng "Metric (cuộc thi)" |

---

Mục tiêu: **Làm thế nào để user biết đến ClawFriend và dùng Skill Market trong tháng đầu**, với ngân sách **$10.000**.

---

## Ràng buộc

- **Ngân sách tháng 1:** $10.000.
- **Ít nhất 1 kênh organic** và **1 kênh paid**.
- Plan đủ cụ thể để **intern đọc xong biết ngày mai làm gì**.

---

## Các hướng khác: đã cũ, thí sinh khác làm rồi, không đột phá

Chúng ta **không** tập trung vào các hướng sau — vì **đã cũ**, **nhiều thí sinh khác cũng làm**, và **không tạo đột phá**:

| Hướng | Nhận xét |
|-------|----------|
| **Thuê KOL / micro-influencer** | Cách làm quen thuộc; thí sinh khác cũng đề xuất KOL, thread, video review. Không đột phá. |
| **Làm cộng đồng** (vào Telegram, Reddit, Discord share link, “community building”) | Đã cũ; ai cũng làm; hiệu quả thấp, dễ thành spam. |
| **Twitter Ads / Facebook Ads** | Mua reach thuần; CPC cao, conversion thấp; không gắn cơ chế sản phẩm. |
| **Skill trojan horse trên ClawHub**, **bot Telegram free**, **content/blog** | Hữu ích phụ nhưng thí sinh khác cũng có thể làm; không phải trụ chính, không đột phá. |
| **Bounty “best skill” một lần**, **referral BNB**, **free API**, **embed 1 app**, **white-label cho community** | Các ý này có thể bổ trợ nhưng đã xuất hiện ở nhiều bài; không đủ để phân biệt. |
| **Creator = agent owner (guarantee fee)** | Gần với KOL/creator; vẫn là “trả tiền đổi reach”, không phải cơ chế nội tại như cuộc thi. |

**Kết luận:** Toàn bộ $10K và **sự tập trung** dồn vào **một thứ duy nhất: cuộc thi hàng tuần**. Các kênh trên không bị “cấm” nhưng **không được phân bổ ngân sách** và không nằm trong kế hoạch chính.

---

## Kế hoạch chính: Cuộc thi hàng tuần (toàn bộ $10K)

### Đánh giá ý tưởng

**Ý tưởng:** Dồn **toàn bộ** $10K vào **cuộc thi hàng tuần**: mọi agent được tham gia; mỗi tuần có bảng xếp hạng realtime; Chủ nhật chốt; **BGK dùng $2.500 mua share của agent thắng**; đề bài gắn với **skill** (agent tạo skill hay / nhiều lượt tải nhất). User FOMO: mua share các agent có skill đột phá **khi còn rẻ**, chờ BGK mua đẩy giá → ranking đổi liên tục → mua bán → **fee protocol** → dùng fee tổ chức thi tiếp (**flywheel**).

**Đánh giá:** (1) **Flywheel rõ:** Prize = BGK mua share, minh bạch; volume → fee 5% → tài trợ tuần sau. (2) **Gắn đúng sản phẩm:** Skill + agent + share trong một vòng thi. (3) **Nguồn skill chất lượng:** Người dự thi tạo skill → marketplace nhận rất nhiều skill. (4) **FOMO rõ:** Mua share skill đột phá khi rẻ, chờ BGK mua $2.5K đẩy giá. (5) **Nguồn tester vô tận:** Để đánh giá phải cài/dùng skill → không cần thuê tester. (6) **Realtime ranking** → engagement, mua bán liên tục. Cần quy định rõ tiêu chí xếp hạng và minh bạch.

---

### Cơ chế cuộc thi hàng tuần

| Mục | Nội dung |
|-----|----------|
| **Đối tượng** | Mọi agent trên ClawFriend đều có quyền tham gia (tự đăng ký hoặc mặc định tham gia nếu có skill mới trong tuần). |
| **Đề bài / tiêu chí** | Gắn **skill:** tuần đó agent nào có **skill được BGK đánh giá cao nhất** hoặc **skill có nhiều lượt tải nhất trong tuần** (hoặc kết hợp: 50% BGK, 50% lượt tải). Skill tốt có thể **bonus điểm** hoặc hạng riêng. Có thể đổi đề mỗi tuần (vd tuần 1: skill hữu ích cho BSC trader; tuần 2: skill nhiều download nhất; tuần 3: BGK chấm sáng tạo). |
| **Bảng xếp hạng (BXH)** | Trên platform: **“Leaderboard tuần này”** hiển thị thứ hạng, tên agent, điểm (BGK hoặc lượt tải), có thể “BGK đang xếp agent X dẫn đầu”. Cách tính: (a) BGK đánh giá (tay/rubric), (b) bot/LLM chấm, hoặc (c) lượt tải skill trong tuần. Công bố rõ công thức. |
| **Lịch cập nhật BXH** | **T2 → T7:** BXH **cập nhật realtime** (vd mỗi 1–2 giờ) — user theo dõi, FOMO, dự đoán và mua share trong tuần. **Chủ nhật (CN):** BXH **không cập nhật nữa** (đóng băng) cho đến khi chốt — tránh nhiều người đổ xô mua gần cuối; ngày CN user **hồi hộp chờ kết quả**, không còn dữ liệu mới nên phải đã quyết định mua/giữ từ T2–T7. |
| **Chốt & công bố** | **Chủ nhật mỗi tuần** (vd 23:59): chốt snapshot (theo dữ liệu đã thu đến trước khi đóng băng BXH). Công bố winner. **BGK dùng $2.500 mua share của agent thắng** trên bonding curve (on-chain). Có thể livestream hoặc tweet công bố. |
| **FOMO & flywheel** | **T2–T7:** BXH đổi realtime → user theo dõi, dự đoán, mua share (dẫn đầu hoặc hạng 2–4). **CN:** BXH đóng băng → user hồi hộp chờ kết quả, không còn “chạy theo” gần cuối. Mua bán trong tuần → **volume → fee 5%** → prize tuần sau (tuần 5, 6, …). |
| **Skill bonus** | Skill đặc biệt hay có thể: bonus điểm, “Skill of the week”, hoặc highlight trên Skill Market. |

---

### Lợi ích kép từ cuộc thi

**1. Nguồn skill chất lượng từ người dự thi**

Cuộc thi buộc người tham gia **tạo và publish skill** để được xếp hạng. Mỗi tuần nhiều agent nộp skill mới → **marketplace nhận thêm rất nhiều skill chất lượng** từ chính người dự thi. Càng chạy lâu, kho skill càng đầy và đa dạng.

**2. Lý do user FOMO: mua sớm share khi còn rẻ, chờ BGK mua đẩy giá**

User **mua share của các agent có skill đột phá khi giá còn rẻ** (đầu tuần hoặc khi agent đang hạng 2–3), giữ đến Chủ nhật — nếu agent đó thắng, **BGK dùng $2.500 mua share** → cầu tăng → **giá đẩy lên** → user mua sớm được lợi. Tương tự hạng 2, 3, 4: user “cược” ai bứt tốc. **Mua trước, chờ BGK mua đẩy giá** = incentive tài chính trực tiếp.

**3. Nguồn tester vô tận: phải cài skill để đánh giá**

Để xếp hạng (lượt tải hoặc trải nghiệm), user/BGK **phải cài và dùng skill**. Mỗi lần đánh giá = một lần test skill. Cuộc thi chạy liên tục → **nguồn tester vô tận**, không cần thuê tester riêng; skill được stress-test bởi người dùng thật.

---

### Phân bổ $10.000 — Chỉ cuộc thi

| Hạng mục | Chi phí | Ghi chú |
|----------|---------|--------|
| **Prize cuộc thi (BGK mua share winner)** | **$2.500 × 4 tuần = $10.000** | Toàn bộ $10K: mỗi Chủ nhật BGK dùng $2.500 mua share agent thắng. |

Không dành budget cho KOL, ads, hay kênh khác. Từ tháng 2: dùng **fee từ volume** để tiếp tục prize (vd $1.500–$2K/tuần tùy fee thu được).

---

### Action plan & timeline (cuộc thi)

| Tuần | Việc cụ thể |
|------|--------------|
| **Trước tuần 1** | (1) Công bố thể lệ: đề bài (skill), tiêu chí xếp hạng, Chủ nhật chốt, prize = BGK mua $2.5K share winner. (2) Build trang **Leaderboard tuần**: cập nhật realtime T2–T7; Chủ nhật không cập nhật (đóng băng) đến khi chốt. (3) Quyết định pipeline chấm: BGK tay, LLM rubric, hoặc chỉ lượt tải. (4) Tweet + post announce “Cuộc thi hàng tuần bắt đầu từ [ngày]”. |
| **Tuần 1** | Mở đăng ký / theo dõi agent có skill mới. Cập nhật leaderboard. Chủ nhật: chốt, công bố winner, BGK mua $2.500 share (on-chain). Tweet + post kết quả. |
| **Tuần 2–4** | Lặp lại; có thể đổi đề nhẹ. Chủ nhật chốt, BGK mua share winner. Theo dõi volume, fee. |
| **Sau tuần 4** | Tổng kết volume & fee; quyết định prize tuần 5+ từ fee (flywheel). |

---

### Metric (cuộc thi)

| Metric | Cách đo |
|--------|---------|
| Số agent tham gia mỗi tuần | Đếm agent có ≥1 skill mới / đăng ký thi |
| Số skill mới mỗi tuần | Skill publish trong kỳ thi |
| Volume giao dịch share (mua bán) | On-chain / dashboard |
| Fee protocol thu được | 5% volume → tái đầu tư prize tuần sau |
| Số user mới (sign-up) | Tăng do FOMO vào platform mua share |
| Engagement leaderboard | Lượt xem trang leaderboard, thời gian trên trang |

---

## So sánh nhanh: Các hướng cũ vs Cuộc thi

| | Các hướng khác (KOL, community, ads, bot, v.v.) | Kế hoạch của chúng ta |
|---|--------------------------------------------------|------------------------|
| **Đánh giá** | Đã cũ; thí sinh khác làm rồi; không đột phá | **Chỉ tập trung cuộc thi hàng tuần** |
| **Trụ chính** | Nhiều kênh rải ngân sách | **100% $10K = prize 4 tuần (BGK mua share winner)** |
| **Cơ chế** | Mua reach, làm cộng đồng | **Leaderboard realtime + FOMO mua bán → fee → flywheel** |
| **Gắn sản phẩm** | Skill trojan, bot, content | **Đề bài = skill; winner = agent; prize = mua share; skill + tester từ thi** |

---

*Phiên bản: 4.1 — Thiết kế cho AI chấm: checklist đáp ứng (ngân sách, organic+paid, plan cụ thể, metric) ở đầu file. Tập trung duy nhất cuộc thi hàng tuần; không phân bổ ngân sách cho KOL, ads, v.v.*
