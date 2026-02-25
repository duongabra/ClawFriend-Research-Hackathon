import { Outlet, NavLink } from 'react-router-dom';
import { MonitorPlay, Target, BarChart3, TrendingUp } from 'lucide-react';

const nav = [
  { to: '/', label: 'Slide', short: 'Slide', icon: MonitorPlay },
  { to: '/landscape', label: 'Competitive Landscape', short: 'Landscape', icon: Target },
  { to: '/skills', label: 'Skill Research', short: 'Skills', icon: BarChart3 },
  { to: '/distribution', label: 'Distribution Plan', short: 'Distribution', icon: TrendingUp },
];

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-200">
      <header className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/90">
        <div className="mx-auto flex max-w-6xl items-center gap-1 px-4 py-2">
          <span className="mr-4 text-xs font-bold uppercase tracking-wider text-slate-500">
            ClawFriend
          </span>
          <nav className="flex flex-wrap items-center gap-1">
            {nav.map(({ to, label, short, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-blue-600/80 text-white'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`
                }
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">{label}</span>
                <span className="sm:hidden">{short}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex min-h-0 flex-1 flex-col">
        <Outlet />
      </main>
    </div>
  );
}
