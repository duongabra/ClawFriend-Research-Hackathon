import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Target,
  BarChart3,
  TrendingUp,
  Cpu,
  MessageSquare,
  Play,
  Pause,
  MonitorPlay,
  XCircle,
  CheckCircle2,
  Trophy,
  CalendarDays,
  Video,
  FileText,
  Volume2,
  Image as ImageIcon,
  Film,
  UploadCloud,
} from "lucide-react";

const Slide1 = () => (
  <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
    <div className="inline-block p-4 rounded-2xl bg-blue-600/20 border border-blue-500/30 backdrop-blur-md mb-4">
      <MonitorPlay className="w-16 h-16 text-blue-400" />
    </div>
    <h1 className="text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
      Cook a Web3 Skill Marketplace
    </h1>
    <h2 className="text-3xl font-medium text-slate-300 mt-4">
      ClawFriend — Skill Market Go-To-Market Plan
    </h2>
    <p className="text-xl text-slate-500 mt-8">Trình bày bởi: Agger</p>
  </div>
);

const Slide2 = () => (
  <div className="flex flex-col h-full justify-center">
    <h2 className="text-4xl font-bold mb-8 text-blue-400 flex items-center gap-3">
      <Target className="w-10 h-10" /> Competitive Landscape
    </h2>
    <div className="grid grid-cols-2 gap-8">
      <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Thị trường & Đối thủ
        </h3>
        <ul className="space-y-4 text-slate-300 text-lg">
          <li>
            <strong className="text-indigo-400">6 đối thủ:</strong> ClawHub
            (OpenClaw), Heurist Mesh, SkillGem, Hedera, ClawMarket, MoltBazaar.
          </li>
          <li>
            <strong className="text-indigo-400">Số liệu nổi bật:</strong>
            <ul className="list-disc ml-6 mt-2 text-base text-slate-400">
              <li>ClawHub: 5.7K+ skill, 1.5M+ tải, 180K+ GitHub stars.</li>
              <li>Heurist Mesh: 100 tool, 40 agent.</li>
              <li>ClawMarket: 15+ skills, USDC escrow.</li>
            </ul>
          </li>
          <li>
            <strong className="text-indigo-400">Thực trạng:</strong> Nascent (sơ
            khai). Chưa ai gom đủ: identity agent + bonding curve + skill market
            (holder-gated) + social.
          </li>
        </ul>
      </div>

      <div className="bg-blue-900/20 p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold mb-4 text-blue-300">
          ClawFriend Khác Ở Đâu?
        </h3>
        <ul className="space-y-6 text-slate-300 text-lg">
          <li className="p-4 rounded-xl bg-slate-800/50 border border-slate-600/50">
            <p className="text-slate-400 text-sm font-medium mb-1">So với ClawHub</p>
            <p className="text-red-400 line-through mb-2">
              ClawHub: Không có cơ chế monetization cho creator.
            </p>
            <p className="text-green-400">
              <strong>ClawFriend:</strong> Có Discovery (tìm skill) + thu phí 5% khi giao dịch + tích hợp Social.
            </p>
          </li>
          <li className="p-4 rounded-xl bg-slate-800/50 border border-slate-600/50">
            <p className="text-slate-400 text-sm font-medium mb-1">So với Heurist</p>
            <p className="text-red-400 line-through mb-2">
              Heurist: Không dùng Bonding curve, không chạy trên BSC.
            </p>
            <p className="text-green-400">
              <strong>ClawFriend:</strong> Chạy trên BSC + Bonding curve + Skill chỉ dành cho holder (holder-gated).
            </p>
          </li>
        </ul>
        <div className="mt-4 p-4 bg-indigo-500/20 rounded-xl border border-indigo-500/50">
          <p className="font-semibold text-indigo-300">Định vị chiến lược:</p>
          <p className="text-white mt-2">
            BSC + Bonding Curve + Skill Market (holder-gated) + Social. Đánh vào
            segment creator monetization bỏ ngỏ.
          </p>
        </div>
        <p className="mt-4 text-sm text-amber-200/90">
          <strong>Thua hiện tại:</strong> Số skill thua ClawHub; độ trưởng thành
          tool thua Heurist. Giảm thiểu: distribution + focus BSC + skill
          market.
        </p>
      </div>
    </div>
  </div>
);

const TOP_10_SKILLS: { name: string; topic: string; why: string }[] = [
  {
    name: "Real-time Whale / Smart Money Tracker",
    topic: "Scrypto",
    why: "Theo dõi ví cá mập, copy trade — demand cao (Nansen/Whale Alert thu phí).",
  },
  {
    name: "Rug Pull / Scam Token Detector (BSC)",
    topic: "Scrypto",
    why: "Cảnh báo token lừa đảo trước khi mua — BSC user cần bảo vệ vốn.",
  },
  {
    name: "DeFi Yield Optimizer / APY So sánh (BSC)",
    topic: "DeFi & Yield",
    why: "So sánh APY nhiều pool, gợi ý strategy — YO Protocol $1M+ volume chứng minh demand.",
  },
  {
    name: "Alpha / Sentiment từ Social (Twitter + TG)",
    topic: "Alpha & Social",
    why: "Tổng hợp sentiment, tin nóng từ KOL — trader cần edge thông tin nhanh.",
  },
  {
    name: "Token Price Alert (BSC + đa chain)",
    topic: "Crypto Alert",
    why: "Alert giá chạm ngưỡng 24/7 — thị trường crypto không ngủ, cần theo dõi liên tục.",
  },
  {
    name: "KOL / Influencer Track & Mention Alert",
    topic: "Alpha & Social",
    why: "Biết khi nào KOL nhắc đến token — alpha sớm = lợi thế mua/bán.",
  },
  {
    name: "Medication / Nhắc uống thuốc thông minh",
    topic: "Sức khỏe",
    why: "Nhắc uống thuốc đúng giờ, lịch — nhu cầu phổ biến, dễ viral, kéo user không crypto.",
  },
  {
    name: "Macro Indicator Digest (CPI, lãi suất)",
    topic: "Vĩ mô",
    why: "Tóm tắt CPI, FOMC, lãi suất — macro quyết định xu hướng thị trường.",
  },
  {
    name: "No-code Workflow Builder (app + trigger)",
    topic: "AI / Bot",
    why: "Tự động hóa task (if X then Y) không cần code — creator và team nhỏ cần tool đơn giản.",
  },
  {
    name: "Meeting Notes → Tasks (biên bản → action)",
    topic: "Productivity",
    why: "Chuyển biên bản họp thành task giao việc — tiết kiệm thời gian, tăng follow-through.",
  },
];

const Slide3 = () => (
  <div className="flex flex-col h-full justify-center">
    <h2 className="text-4xl font-bold mb-2 text-blue-400 flex items-center gap-3">
      <BarChart3 className="w-10 h-10" /> Skill Research
    </h2>
    <p className="text-slate-400 text-lg mb-3">
      20 skill trong 10 chủ đề.{" "}
      <span className="text-yellow-400 font-semibold">
        Đề xuất 10 skill xuất sắc nhất cho BGK:
      </span>
    </p>
    <p className="text-slate-500 text-sm mb-4">
      Bằng chứng demand: Nansen $99–$999/tháng, Whale Alert 2.5M+ followers,
      Token Sniffer 30K+ contract/ngày, YO Protocol $1M+ earn volume.
    </p>
    <p className="text-slate-400 text-sm mb-4 italic">
      Tại sao cần: Có demand thật (tool trả phí đang thu tiền), fit BSC +
      holder-gated, kéo user và tạo doanh thu cho creator.
    </p>

    <div className="grid grid-cols-5 gap-3 mb-6">
      {TOP_10_SKILLS.map((s, i) => (
        <div
          key={i}
          className="bg-slate-800/60 px-4 py-3 rounded-xl border border-slate-600/50 backdrop-blur-md hover:border-yellow-500/50 transition-colors"
        >
          <div className="text-amber-400/90 font-mono text-xs mb-0.5">
            #{i + 1}
          </div>
          <div className="text-white font-semibold text-sm leading-tight">
            {s.name}
          </div>
          <div className="text-slate-500 text-xs mt-1">{s.topic}</div>
          <div className="text-slate-400 text-xs mt-1.5 leading-snug border-t border-slate-700/60 pt-1.5">
            {s.why}
          </div>
        </div>
      ))}
    </div>

    <div className="bg-gradient-to-r from-indigo-900/50 to-blue-900/50 p-6 rounded-2xl border border-indigo-500/30 backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-3 text-indigo-300">
        Chiến lược Visibility & Monetization
      </h3>
      <div className="flex items-center justify-between text-lg">
        <div className="flex-1 bg-slate-900/80 p-4 rounded-xl text-center border border-slate-700">
          <span className="text-blue-400 font-bold">Public Free</span>
          <br />
          <span className="text-sm text-slate-400">(Lead Magnet)</span>
        </div>
        <ChevronRight className="w-8 h-8 text-slate-500 mx-4" />
        <div className="flex-1 bg-slate-900/80 p-4 rounded-xl text-center border border-green-700">
          <span className="text-green-400 font-bold">Holder-Gated</span>
          <br />
          <span className="text-sm text-slate-400">(Advanced, Real-time)</span>
        </div>
        <ChevronRight className="w-8 h-8 text-slate-500 mx-4" />
        <div className="flex-1 bg-slate-900/80 p-4 rounded-xl text-center border border-purple-700">
          <span className="text-purple-400 font-bold">Share Model</span>
          <br />
          <span className="text-sm text-slate-400">(Thay vì Subscription)</span>
        </div>
      </div>
    </div>
  </div>
);

const Slide4 = () => (
  <div className="flex flex-col h-full justify-center">
    <div className="mb-2 text-blue-400 font-semibold tracking-wider text-sm">
      DISTRIBUTION PLAN (1/4)
    </div>
    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-3">
      <TrendingUp className="w-10 h-10 text-blue-400" /> Ràng buộc & Lựa chọn
    </h2>

    <div className="grid grid-cols-2 gap-8 h-full items-start">
      {/* Quyết định: tập trung tối đa */}
      <div className="bg-blue-900/20 p-8 rounded-2xl border border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden h-[538px]">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10" />
        <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6" /> Quyết định: Tập Trung Tối Đa
        </h3>
        <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-700/50 mb-6">
          <p className="text-slate-300 text-lg">
            Ngân sách:{" "}
            <strong className="text-green-400 text-2xl">$10.000</strong> tháng
            đầu.
          </p>
        </div>
        <p className="text-xl text-white mb-4 leading-relaxed">
          $10K = $8K cuộc thi + $2K các kênh khác. Trụ chính:{" "}
          <span className="text-blue-300 font-bold text-2xl inline-block mt-2">
            Cuộc Thi Hàng Tuần
          </span>
        </p>
        <ul className="space-y-3 text-slate-300 mt-6">
          <li className="flex items-center gap-2">
            ✓ <strong>Kênh 1 (Paid):</strong> Cuộc thi hàng tuần ($8K = $2K × 4 tuần)
          </li>
          <li className="flex items-center gap-2">
            ✓ <strong>Kênh 2 (Paid):</strong> Technical Blog ($1K)
          </li>
          <li className="flex items-center gap-2">
            ✓ <strong>Kênh 3 (Paid):</strong> Partnership OpenClaw ($1K)
          </li>
        </ul>
      </div>

      {/* Các hướng khác: ít / free */}
      <div className="bg-amber-900/20 p-8 rounded-2xl border border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.15)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -mr-10 -mt-10" />
        <h3 className="text-2xl font-bold text-amber-400 mb-6 flex items-center gap-2">
          <TrendingUp className="w-6 h-6" /> Các hướng khác: phân bổ ít hoặc chỉ
          free
        </h3>
        <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-700/50 mb-6">
          <p className="text-slate-300 text-lg">
            KOL/ads không nhận phần lớn —{" "}
            <strong className="text-amber-300/90">ít hoặc free</strong>
          </p>
        </div>

        <p className="text-xl text-slate-300 mb-4 leading-relaxed">
          Lý do: KOL/ads trả lớn = reach một lần, không flywheel; cộng đồng tốn
          tiền ads dễ spam, post free đủ; blog/bounty free vẫn có traffic, trả
          BNB không phân biệt,creator fee = trả reach, prize + share mới tạo
          flywheel.
        </p>
        <br />
          <span className="text-blue-300 font-bold text-2xl inline-block mt-2">
            Cuộc Thi Hàng Tuần
          </span>
        <ul className="space-y-3 text-slate-300 mt-6">
          <li className="flex items-center gap-2">
            ✓ <strong>(1):</strong> 4 tuần = 4 lần thử, tránh
            all-in flop.
          </li>
          <li className="flex items-center gap-2">
            ✓ <strong>(2):</strong> Team tập trung skill giành giải.
          </li>
          <li className="flex items-center gap-2">
            ✓ <strong>(3):</strong> BGK công bằng — người ngoài tốt vẫn trao
            giải.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const Slide5 = () => (
  <div className="flex flex-col h-full justify-start pt-6 pb-24 overflow-y-auto">
    <div className="mb-2 text-blue-400 font-semibold tracking-wider text-sm">
      DISTRIBUTION PLAN (2/4)
    </div>
    <h2 className="text-4xl font-bold mb-6 text-white flex items-center gap-3">
      <Trophy className="w-10 h-10 text-yellow-400 shrink-0" /> Cơ chế Cuộc thi
      Hàng tuần
    </h2>

    <div className="bg-slate-800/60 p-8 rounded-2xl border border-yellow-500/30 mb-6 backdrop-blur-sm relative z-0">
      <div className="flex flex-col md:flex-row gap-8 items-stretch md:items-center justify-between">
        <div className="flex-1 min-w-0 space-y-4">
          <h3 className="text-2xl font-bold text-yellow-400">
            Ý tưởng & Phân bổ $10.000
          </h3>
          <p className="text-slate-400 text-base leading-relaxed">
            Cuộc thi hàng tuần trên Skill Market của ClawFriend: thí sinh đăng skill
            lên marketplace, xếp hạng theo tiêu chí (vd lượt tải, BGK chấm), mỗi
            tuần một winner nhận prize qua BGK mua share on-chain rồi burn.
          </p>
          <p className="text-xl text-slate-300 leading-relaxed">
            <strong className="text-white">$2.000 × 4 tuần = $8.000</strong> (cuộc thi). Còn <strong>$2.000</strong> cho Blog $1K + OpenClaw $1K.
            <br />
            Mỗi Chủ Nhật, BGK dùng{" "}
            <strong>$2.000 mua share của agent thắng</strong> ngay trên bonding
            curve (on-chain).
            <br />
            <span className="text-blue-400 text-base mt-2 inline-block">
              → Từ tháng 2: Prize lấy từ 5% fee volume giao dịch.
            </span>
          </p>
        </div>
        <div className="w-full md:w-1/3 md:shrink-0 bg-slate-900 p-6 rounded-xl border border-slate-700 text-center shadow-inner relative z-10">
          <div className="text-5xl font-black text-green-400 mb-2">$2K</div>
          <div className="text-slate-400 uppercase tracking-widest text-sm font-bold">
            Mua Share / Tuần
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-700">
        <h4 className="text-xl font-bold text-white mb-3 text-blue-300">
          Đối tượng tham gia
        </h4>
        <p className="text-slate-300 text-lg">
          Skill tạo mới trong tuần <strong className="text-green-400">mặc định tham gia</strong> — không cần đăng ký; cứ tạo skill là vào thi luôn.
        </p>
      </div>
      <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-700">
        <h4 className="text-xl font-bold text-white mb-3 text-blue-300">
          Tiêu chí chiến thắng
        </h4>
        <p className="text-slate-300 text-lg">
          Agent có skill được BGK đánh giá cao nhất HOẶC nhiều lượt tải nhất
          (50% BGK, 50% Lượt tải).
        </p>
      </div>
    </div>
  </div>
);

const Slide6 = () => (
  <div className="flex flex-col h-full justify-center">
    <div className="mb-2 text-blue-400 font-semibold tracking-wider text-sm">
      DISTRIBUTION PLAN (3/4)
    </div>
    <h2 className="text-4xl font-bold mb-6 text-white flex items-center gap-3">
      <CalendarDays className="w-10 h-10 text-indigo-400" /> Vận hành BXH & Lợi
      ích kép
    </h2>

    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/40 relative">
        <div className="absolute top-4 right-4 text-blue-400 font-mono text-sm bg-blue-950 px-3 py-1 rounded">
          Real-time
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Thứ 2 → Thứ 7</h3>
        <ul className="space-y-3 text-slate-300">
          <li>BXH cập nhật liên tục (mỗi 1-2h).</li>
          <li>Thứ hạng thay đổi dựa trên lượt tải/điểm mới.</li>
          <li>
            <strong className="text-blue-300">Hành vi User:</strong> Theo dõi,
            FOMO, cược hạng 2-4 bứt tốc, mua share sớm → Volume → Fee 5%.
          </li>
        </ul>
      </div>

      <div className="bg-indigo-900/30 p-6 rounded-xl border border-indigo-500/40 relative">
        <div className="absolute top-4 right-4 text-indigo-400 font-mono text-sm bg-indigo-950 px-3 py-1 rounded">
          Freeze
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Chủ Nhật</h3>
        <ul className="space-y-3 text-slate-300">
          <li>
            BXH <strong>ĐÓNG BĂNG</strong>. Không có dữ liệu mới.
          </li>
          <li>Ngăn user đổ xô "chạy nước rút" cuối giờ.</li>
          <li>
            <strong className="text-indigo-300">23:59 Chốt Snapshot:</strong>{" "}
            BGK công bố và dùng $2K mua on-chain share winner.
          </li>
        </ul>
      </div>
    </div>

    <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-600">
      <h3 className="text-lg font-bold text-green-400 mb-3 uppercase tracking-wider text-sm">
        3 Lợi ích cốt lõi (Flywheel)
      </h3>
      <div className="grid grid-cols-3 gap-4 text-slate-300 text-sm md:text-base">
        <div className="bg-slate-900 p-4 rounded border border-slate-700">
          <strong className="text-white block mb-1">1. Nguồn Skill</strong>
          Muốn thi phải tạo skill. Kho skill tự động đầy lên chất lượng.
        </div>
        <div className="bg-slate-900 p-4 rounded border border-slate-700">
          <strong className="text-white block mb-1">
            2. Incentive Tài chính
          </strong>
          FOMO mua share khi rẻ, chờ BGK mua đẩy giá. Tự sinh volume.
        </div>
        <div className="bg-slate-900 p-4 rounded border border-slate-700">
          <strong className="text-white block mb-1">3. Tester Miễn phí</strong>
          Để vote/tải skill phải dùng thử → Stress-test tự nhiên.
        </div>
      </div>
    </div>
  </div>
);

const Slide7 = () => (
  <div className="flex flex-col h-full justify-center">
    <div className="mb-2 text-blue-400 font-semibold tracking-wider text-sm">
      DISTRIBUTION PLAN (4/4)
    </div>
    <h2 className="text-4xl font-bold mb-8 text-white flex items-center gap-3">
      <TrendingUp className="w-10 h-10 text-green-400" /> Organic Channels &
      Timeline
    </h2>

    <div className="grid grid-cols-2 gap-8 mb-8">
      <div className="bg-slate-800/60 p-6 rounded-xl border border-slate-600/50">
        <h3 className="text-2xl font-bold text-white mb-4 text-blue-300">
          Kênh 2: Technical Blog ($1000)
        </h3>
        <ul className="space-y-2 text-slate-300 text-lg">
          <li>
            <strong>Tần suất:</strong> 4-6 bài/tháng (Mirror.xyz / blog nội bộ).
          </li>
          <li>
            <strong>Nội dung:</strong> Tutorial 1 skill cụ thể (Whale Tracker,
            Rug Check...).
          </li>
          <li>
            <strong>CTA:</strong> Cài skill trên ClawFriend.
          </li>
          <li>
            <strong>Cross-post:</strong> Twitter, r/crypto, Telegram BSC.
          </li>
        </ul>
      </div>

      <div className="bg-slate-800/60 p-6 rounded-xl border border-slate-600/50">
        <h3 className="text-2xl font-bold text-white mb-4 text-blue-300">
          Kênh 3: OpenClaw Partner ($1000)
        </h3>
        <ul className="space-y-2 text-slate-300 text-lg">
          <li>
            <strong>Liên hệ:</strong> Đề xuất PR/Docs với maintainer OpenClaw.
          </li>
          <li>
            <strong>Lợi ích:</strong> ClawFriend trở thành nguồn cung cấp skill
            mới cho hệ sinh thái. kéo user từ hệ sinh thái khác.
          </li>
        </ul>
      </div>
    </div>

    <div className="bg-blue-950/40 p-6 rounded-2xl border border-indigo-500/30">
      <h3 className="text-xl font-bold text-indigo-300 mb-4">
        Timeline Triển khai
      </h3>
      <div className="flex gap-4">
        <div className="flex-1 bg-slate-900 p-4 rounded border border-slate-700">
          <div className="text-blue-400 font-bold mb-1">Trước T1</div>
          <div className="text-sm text-slate-300">
            Công bố thể lệ, setup Leaderboard, chuẩn bị pipeline AI/chấm tay.
          </div>
        </div>
        <div className="flex-1 bg-slate-900 p-4 rounded border border-blue-700/50 shadow-[0_0_10px_rgba(37,99,235,0.2)]">
          <div className="text-blue-400 font-bold mb-1">
            T1 - T4 (Paid $8K contest + $2K blog/OpenClaw)
          </div>
          <div className="text-sm text-slate-300">
            T2–T7 chạy BXH (skill mới trong tuần tự động tham gia), CN chốt & BGK mua $2K share.
          </div>
        </div>
        <div className="flex-1 bg-slate-900 p-4 rounded border border-slate-700">
          <div className="text-green-400 font-bold mb-1">T5+ (Tự nuôi)</div>
          <div className="text-sm text-slate-300">
            Duy trì Prize từ 5% Fee volume giao dịch. Tối ưu Organic channels.
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Slide8 = () => (
  <div className="flex flex-col h-full justify-center">
    <h2 className="text-4xl font-bold mb-6 text-blue-400 flex items-center gap-3">
      <Cpu className="w-10 h-10" /> AI Showcase
    </h2>

    <div className="grid grid-cols-2 gap-6 h-full min-h-0">
      {/* AI cho Research — theo README §1 & Khi present */}
      <div className="flex flex-col bg-slate-800/50 p-6 rounded-2xl border border-slate-600/50 overflow-auto">
        <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
          <FileText className="w-5 h-5 text-purple-400" /> AI cho Research
        </h3>
        <p className="text-sm text-slate-400 mb-4">
          <strong className="text-purple-300">Cursor + Web search.</strong> Mọi số liệu đối chiếu nguồn (
          <strong>key-metrics.md</strong>) — không chỉ &quot;AI cho em&quot;.
        </p>
        <ul className="space-y-2 text-sm text-slate-300 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-purple-400 shrink-0">1.</span>
            Competitive: 6 đối thủ trực tiếp + TAM/CAGR (prompt + search từ website, GitHub).
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400 shrink-0">2.</span>
            Skill: bằng chứng demand + Tech/API cho 20 skill / 10 đề xuất.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400 shrink-0">3.</span>
            Distribution: cuộc thi hàng tuần, phân bổ ít/free có lý do, 4 lợi ích (kéo user từ market khác).
          </li>
        </ul>
        <div className="mt-auto pt-3 border-t border-slate-700 flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-slate-900/80 border border-slate-600 rounded-lg text-slate-300 text-xs">
            prompts-used.md
          </span>
          <span className="px-3 py-1.5 bg-slate-900/80 border border-slate-600 rounded-lg text-slate-300 text-xs">
            screenshots/
          </span>
        </div>
      </div>

      {/* AI cho Deliver — theo README §2 & §3 */}
      <div className="flex flex-col bg-blue-950/30 p-6 rounded-2xl border border-blue-500/30 overflow-auto">
        <h3 className="text-xl font-bold text-blue-300 mb-3 flex items-center gap-2">
          <Video className="w-5 h-5" /> AI Deliver: Video trợ lý ảo
        </h3>
        <p className="text-sm text-slate-300 mb-4">
          Script từ 3 deliverables → <strong>Edge TTS</strong> (vi-VN) → <strong>D-ID</strong> avatar nói →{" "}
          <strong>CapCut</strong> ghép với slide. Video MC.mp4 (link Drive trong README gốc repo); pipeline chi tiết trong
          file bên dưới.
        </p>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { label: "Script", value: "script-vi.txt (5 segment)" },
            { label: "Voice (TTS)", value: "Edge TTS → gen-audio.py → 5 MP3" },
            { label: "Avatar nói", value: "D-ID (avatar + MP3 → clip)" },
            { label: "Slide", value: "Export Gemini Canvas → slides/" },
            { label: "Ghép video", value: "CapCut → MP4 1080p" },
          ].map((row, i) => (
            <div key={i} className="bg-slate-900/60 px-3 py-2 rounded-lg border border-slate-700">
              <span className="text-blue-400 text-xs font-medium block">{row.label}</span>
              <span className="text-slate-300 text-xs">{row.value}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-3 border-t border-blue-500/30 flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-slate-800/80 border border-slate-600 rounded-lg text-slate-300 text-xs">
            video-step-by-step.md
          </span>
          <span className="px-3 py-1.5 bg-slate-800/80 border border-slate-600 rounded-lg text-slate-300 text-xs">
            ghép-video-capcut.md
          </span>
        </div>
      </div>
    </div>
  </div>
);

const Slide9 = () => (
  <div className="flex flex-col h-full justify-center items-center text-center">
    <h2 className="text-4xl font-bold mb-4 text-blue-400 flex items-center justify-center gap-3">
      <MessageSquare className="w-10 h-10" /> Q&A
    </h2>
    <p className="text-slate-400 text-lg">Sẵn sàng trả lời câu hỏi từ Ban Giám khảo.</p>
  </div>
);

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const slides = [
    <Slide1 key="1" />,
    <Slide2 key="2" />,
    <Slide3 key="3" />,
    <Slide4 key="4" />,
    <Slide5 key="5" />,
    <Slide6 key="6" />,
    <Slide7 key="7" />,
    <Slide8 key="8" />,
    <Slide9 key="9" />,
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const loadHls = () => {
      const hlsScript = document.createElement("script");
      hlsScript.src = "https://cdn.jsdelivr.net/npm/hls.js@latest";
      hlsScript.async = true;
      hlsScript.onload = () => {
        const video = videoRef.current;
        const hlsUrl = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

        if (window.Hls && window.Hls.isSupported() && video) {
          const hls = new window.Hls();
          hls.loadSource(hlsUrl);
          hls.attachMedia(video);
          hls.on(window.Hls.Events.MANIFEST_PARSED, () => {
            video.play().catch(() => setVideoError(true));
          });
          hls.on(window.Hls.Events.ERROR, () => setVideoError(true));
        } else if (
          video &&
          video.canPlayType("application/vnd.apple.mpegurl")
        ) {
          video.src = hlsUrl;
          video.addEventListener("loadedmetadata", () => {
            video.play().catch(() => setVideoError(true));
          });
        }
      };
      document.body.appendChild(hlsScript);
    };

    loadHls();
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative h-full w-full min-h-0 flex-1 bg-slate-950 text-slate-100 overflow-hidden font-sans select-none">
      <div className="absolute inset-0 z-0">
        {!videoError && (
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-30"
            loop
            muted
            playsInline
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-950/80 to-blue-950/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/60 to-slate-950/90" />
      </div>

      <div className="relative z-10 w-full min-h-[calc(100vh-100px)] flex flex-col max-w-7xl mx-auto px-8 py-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-blue-400 font-bold tracking-widest text-sm flex items-center gap-2">
            <MonitorPlay className="w-5 h-5" />
            CLAWFRIEND DECK
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleVideo}
              className="text-slate-500 hover:text-white transition-colors"
              title="Toggle Background Video"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
            <div className="flex gap-1">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? "w-8 bg-blue-500"
                      : "w-2 bg-slate-700"
                  }`}
                />
              ))}
            </div>
            <div className="text-slate-500 text-sm font-mono">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>

        <div className="flex-1 relative min-h-0 pt-2 overflow-hidden">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
                idx === currentSlide
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              {slide}
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 right-12 flex gap-4 z-[100]">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-3 rounded-full bg-slate-800/80 border border-slate-600 hover:bg-slate-700 hover:border-blue-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all backdrop-blur-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-3 rounded-full bg-blue-600/80 border border-blue-500 hover:bg-blue-500 hover:border-blue-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all backdrop-blur-md shadow-[0_0_15px_rgba(37,99,235,0.5)]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
