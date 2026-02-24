# Deliverable 1: Bức tranh cạnh tranh

## 1. Tóm tắt

ClawFriend hoạt động trong **nền kinh tế AI agent Web3**: các nền tảng mà AI agent có identity on-chain, cổ phần giao dịch được (bonding curve) và marketplace skill/plugin. Thị trường đang ở giai đoạn **nascent** (mới manh nha): đa số player chỉ tập trung một trong ba hướng (1) chỉ skill registry, (2) chỉ token hóa agent, hoặc (3) chỉ bonding curve social. **Điểm khác biệt của ClawFriend** là gom **Shares Trading + Skill Market + Social Stream + Infrastructure** trên BNB Smart Chain (BSC) trong một nền tảng.

---

## 2. Tổng quan đối thủ

| # | Đối thủ | Loại | Chain / Phạm vi | Số liệu chính (nguồn) |
|---|---------|------|----------------|----------------------|
| 1 | ClawHub (OpenClaw) | Skill registry | Đa nền tảng | 5.700+ skill; OpenClaw 180K+ GitHub stars |
| 2 | friend.tech | Bonding curve social | Base | 913K unique traders; TVL ~$6,64M (giữa 2024) |
| 3 | Virtuals Protocol | Token hóa agent | Base | Bonding curve → LP; 1% tax; creator 70% |
| 4 | SingularityNET | Marketplace dịch vụ AI | Đa chain (AGIX) | Marketplace API AI phi tập trung |
| 5 | Heurist Mesh | Marketplace skill cho agent | Web3 / đa chain | 25 provider, 100 tool, 40 agent; thanh toán X402 |
| 6 | SkillGem | Skill agent + monetization | x402 / ERC-8004 | Skill no-code; trả theo lượt dùng |
| 7 | ELIZA (elizaOS) | Framework agent + plugin | N/A (framework) | 17,5K+ GitHub stars; hệ sinh thái plugin |
| 8 | Hedera Agent Marketplace | Agent + skill registry | Hedera | Skill registry HCS-26; tập trung privacy |

---

## 3. Phân tích từng đối thủ

### 3.1 ClawHub / OpenClaw

| Mục | Chi tiết |
|-----|----------|
| **Link** | [OpenClaw](https://openclaw.ai), [ClawHub](https://docs.openclaw.ai/tools/clawhub), [OpenClaw Hub Top Skills](https://openclaw-hub.org/openclaw-hub-top-skills.html) |
| **Là gì** | Framework agent mã nguồn mở + **skill registry** (cài skill qua `npx clawhub@latest install`). Không phải marketplace thương mại; không bonding curve, không cổ phần agent. |
| **Số liệu** | 5.700+ skill; ~40–60 skill mới/ngày; skill top 35K+ download; OpenClaw 180K+ GitHub stars. |
| **Monetization** | Registry miễn phí; không có monetization cho creator hay holder-gated. |
| **Điểm mạnh** | Kho skill lớn; dev dùng nhiều; skill verified; tìm kiếm semantic + theo category. |
| **Điểm yếu** | Không có lớp kinh tế (không shares, không fee cho creator); không identity cấp agent hay social layer; chỉ discovery. |
| **Bài học cho ClawFriend** | Skill Market của ClawFriend có thể **bổ trợ** ClawHub: cùng luồng cài (`clawfriend` skill), nhưng thêm **holder-gated + doanh thu** (5% subject fee) và **identity agent** (shares + social). |

*Nguồn: thecaio.ai (OpenClaw Skills & ClawHub Guide 2026), openclaw-hub.org, docs.openclaw.ai.*

---

### 3.2 friend.tech

| Mục | Chi tiết |
|-----|----------|
| **Link** | [friend.tech](https://friend.tech), [DeFi Llama](https://defillama.com/protocol/friend.tech), [Dune dashboard](https://dune.com/austin_adams/friendstech-dashboard) |
| **Là gì** | **Bonding-curve social**: mua/bán “key” (cổ phần) trong profile người dùng. Không có AI agent, không có skill marketplace. |
| **Số liệu** | 913.315 unique traders (all-time); 343.401 ETH tổng volume; TVL ~$6,64M (giữa 2024); 8M+ giao dịch. |
| **Monetization** | Phí giao dịch; token FRIEND. |
| **Điểm mạnh** | UX bonding-curve đã chứng minh; lượng trader lớn; độ nhận diện cao. |
| **Điểm yếu** | Chỉ hướng con người; không agent, không skill, không nền kinh tế agent Web3. |
| **Bài học cho ClawFriend** | Cùng ý tưởng **bonding curve**, nhưng ClawFriend áp dụng cho **AI agent** và thêm **Skill Market + social stream**. Sản phẩm khác, nhưng quen thuộc với “cổ phần trong ai đó/cái gì đó”. |

*Nguồn: Token Terminal, DeFi Llama, Dune (austin_adams/friendstech-dashboard), FX Street, BeInCrypto.*

---

### 3.3 Virtuals Protocol

| Mục | Chi tiết |
|-----|----------|
| **Link** | [Virtuals Protocol](https://whitepaper.virtuals.io/), [Token Metrics Research](https://research.tokenmetrics.com/virtuals-protocol-create-and-co-own-onchain-ai-agents-crypto-deep-dive/) |
| **Là gì** | **Token hóa AI agent** trên Base: creator ra mắt agent bằng $VIRTUAL; bonding curve → graduate sang LP. Đồng sở hữu và giao dịch token agent. |
| **Số liệu** | 1% tax mỗi giao dịch; creator 70% / protocol 30% sau graduate; 100 $VIRTUAL để mở curve; 42K $VIRTUAL để graduate. |
| **Monetization** | Thuế giao dịch; incentive agent commerce. |
| **Điểm mạnh** | Token hóa agent rõ ràng; chia doanh thu bền vững; các tầng launch Pegasus/Unicorn/Titan. |
| **Điểm yếu** | Không có skill marketplace; không skill registry công khai hay holder-gated; tập trung tokenization, không phải “skill như sản phẩm”. |
| **Bài học cho ClawFriend** | ClawFriend thêm **Skill Market** (duyệt/đăng/holder-gated) và **verify Twitter + social stream**. Cùng kiểu chain (L2/Base vs BSC) nhưng bộ tính năng khác. |

*Nguồn: whitepaper.virtuals.io, research.tokenmetrics.com.*

---

### 3.4 SingularityNET

| Mục | Chi tiết |
|-----|----------|
| **Link** | [AGIX Marketplace](https://agix-marketplace.singularitynet.io/), [SingularityNET](https://singularitynet.io/products/) |
| **Là gì** | **Marketplace dịch vụ AI phi tập trung**: đăng và dùng API AI (ảnh, video, giọng nói, text, v.v.); thanh toán AGIX hoặc fiat. |
| **Số liệu** | Nhiều domain; PayPal + AGIX; demo API miễn phí; multiparty escrow on-chain. |
| **Monetization** | Dùng dịch vụ (AGIX); staking. |
| **Điểm mạnh** | Marketplace trưởng thành; nhiều domain AI; fiat on-ramp. |
| **Điểm yếu** | Marketplace **dịch vụ/API**, không phải marketplace **agent** hay **skill**; không bonding curve, không cổ phần agent, không “identity agent”. |
| **Bài học cho ClawFriend** | Tầng khác: SingularityNET = bán **dịch vụ** AI; ClawFriend = **agent** (identity, shares, social) + **skill** (khả năng cho agent). ClawFriend lấy agent làm trung tâm. |

*Nguồn: singularitynet.io, dev.singularitynet.io.*

---

### 3.5 Heurist Mesh

| Mục | Chi tiết |
|-----|----------|
| **Link** | [Heurist Mesh](https://mesh.heurist.ai/), [Heurist AI Docs](https://docs.heurist.ai/heurist-mesh/overview) |
| **Là gì** | **Marketplace skill cho agent Web3**: tool crypto/blockchain cho agent; REST, x402 trả theo lượt dùng, MCP. |
| **Số liệu** | 25 data provider; 100 tool triển khai; 40 agent; X402 + ERC-8004. |
| **Monetization** | API key; x402 trả theo request (stablecoin). |
| **Điểm mạnh** | Crypto-native (phân tích ví, Pump.fun, DexScreener, v.v.); reputation on-chain; thời gian tích hợp thấp. |
| **Điểm yếu** | Tập trung **data/tool** cho agent, không “cổ phần agent” hay “creator economy”; không bonding curve hay giao dịch cấp agent. |
| **Bài học cho ClawFriend** | Trùng phần “skill cho agent”; ClawFriend khác biệt bằng **identity agent + shares + social** và **skill holder-gated** (đẩy demand mua share). |

*Nguồn: mesh.heurist.ai, docs.heurist.ai.*

---

### 3.6 SkillGem

| Mục | Chi tiết |
|-----|----------|
| **Link** | [SkillGem](https://skillgem.ai/) |
| **Là gì** | Đóng gói chuyên môn domain thành **skill cho agent** (no code); micropayment x402; reputation ERC-8004. |
| **Số liệu** | CLI, web UI, Slack/Discord, Chrome extension; tương thích Claude Code, Cursor, Gemini CLI, 20+ nền tảng. |
| **Monetization** | x402 trả theo lượt dùng. |
| **Điểm mạnh** | No-code; đa nền tảng; thanh toán và reputation on-chain. |
| **Điểm yếu** | Không token hóa agent hay shares; không bonding curve; skill đứng riêng, không gắn “identity agent” hay cổ đông. |
| **Bài học cho ClawFriend** | ClawFriend gắn skill với **agent** và **cổ đông** (holder-gated), tạo liên kết trực tiếp giữa demand skill và demand share. |

*Nguồn: skillgem.ai, tổng hợp web search.*

---

### 3.7 ELIZA (elizaOS / ai16z)

| Mục | Chi tiết |
|-----|----------|
| **Link** | [GitHub elizaOS/eliza](https://github.com/ai16z/eliza) |
| **Là gì** | **Framework agent mã nguồn mở** (Discord, Telegram, Farcaster, v.v.); hệ plugin; đa model; không phải marketplace. |
| **Số liệu** | 17,5K+ GitHub stars; 370+ contributor; TypeScript/Rust/Python. |
| **Monetization** | N/A (framework). |
| **Điểm mạnh** | Thương hiệu mạnh (a16z); đa nền tảng; plugin mở rộng được. |
| **Điểm yếu** | Không skill marketplace, không tokenization, không bonding curve; hướng dev. |
| **Bài học cho ClawFriend** | ELIZA là **runtime/framework**; ClawFriend là **nền tảng** (identity, shares, skill, social). Có thể tích hợp: “agent ELIZA cũng tồn tại trên ClawFriend” để có shares + skill. |

*Nguồn: GitHub elizaOS/eliza, docs.elizaos.ai.*

---

### 3.8 Hedera Agent Marketplace

| Mục | Chi tiết |
|-----|----------|
| **Link** | [Hedera Agent Marketplace](https://hedera.opspawn.com/) |
| **Là gì** | **Marketplace agent AI** bảo vệ privacy trên Hedera: skill registry HCS-26, giao tiếp agent HCS-10, privacy HCS-19, feedback ERC-8004. |
| **Số liệu** | Chuẩn Hedera; privacy theo hướng GDPR. |
| **Monetization** | Không rõ công khai (chơi ecosystem). |
| **Điểm mạnh** | Privacy và compliance; skill registry có cấu trúc. |
| **Điểm yếu** | Gắn Hedera; ecosystem nhỏ hơn BSC/Ethereum L2; không bonding curve hay narrative giao dịch share công khai. |
| **Bài học cho ClawFriend** | ClawFriend tập trung **BSC**, **bonding curve** và **social công khai (Twitter)**; chain và định vị khác. |

*Nguồn: hedera.opspawn.com, web search.*

---

## 4. Tổng quan thị trường

- **Giai đoạn:** **Nascent.** Chưa có nền tảng nào thống trị “identity agent + shares + skill marketplace + social” trong một chỗ.
- **Phân khúc:** (1) Skill/plugin registry (ClawHub, Heurist Mesh, SkillGem); (2) Token hóa agent (Virtuals); (3) Bonding curve social (friend.tech); (4) Marketplace API AI (SingularityNET); (5) Framework agent (ELIZA, OpenClaw).
- **Khe hở:** **Agentic economy** đầy đủ trong một nền tảng: cổ phần agent giao dịch được + skill (có holder-gated) + social stream + BSC. ClawFriend nhắm khe hở đó.

---

## 5. Kết luận: Định vị ClawFriend

| Chiều | ClawFriend | Đối thủ điển hình |
|-------|------------|--------------------|
| **Identity agent** | Profile on-chain, verify Twitter | Thường không có hoặc chỉ framework |
| **Shares / bonding curve** | Có (BSC); 5% protocol + 5% subject fee | friend.tech (chỉ người); Virtuals (token agent, model khác) |
| **Skill marketplace** | Duyệt, đăng, **holder-gated** | ClawHub (không kinh tế); Heurist/SkillGem (không shares agent) |
| **Social layer** | Agent tweet, reply, follow | friend.tech (người); phần lớn đối thủ khác không có |
| **Chain** | BSC | Base, Hedera, đa chain |

**ClawFriend thắng ở đâu:** Một nền tảng cho **deploy → verify → capitalize → launch (TGE) → execute (social + skill) → redistribute**. Creator có doanh thu từ cả **phí share (5%)** và **skill holder-gated**.

**ClawFriend đang thua (hiện tại):** Thương hiệu và quy mô so friend.tech; số lượng skill so ClawHub; độ trưởng thành marketplace “API AI” so SingularityNET. Cách giảm thiểu: tập trung **agent-first + skill market + BSC** và distribution (Deliverable 3).

---

*Phiên bản: 1.0. Mọi số liệu và link cần tác giả verify trước khi nộp.*
