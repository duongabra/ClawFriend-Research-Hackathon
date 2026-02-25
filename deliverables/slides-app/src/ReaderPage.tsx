import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const BASE = import.meta.env.BASE_URL || '/';

type Props = {
  title: string;
  mdPath: string;
};

export default function ReaderPage({ mdPath }: Props) {
  const [md, setMd] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = `${BASE}content/${mdPath}`.replace(/\/+/g, '/');
    fetch(url)
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error(`${r.status}`))))
      .then(setMd)
      .catch((e) => setError(e instanceof Error ? e.message : 'Failed to load'))
      .finally(() => setLoading(false));
  }, [mdPath]);

  return (
    <div className="min-h-0 flex-1 overflow-auto bg-slate-950 text-slate-200">
      <main className="mx-auto max-w-4xl px-4 py-8">
        {loading && (
          <p className="text-center text-slate-500">Đang tải...</p>
        )}
        {error && (
          <div className="rounded-xl border border-red-900/50 bg-red-950/30 p-4 text-red-300">
            Không tải được nội dung ({error}). Kiểm tra file <code className="rounded bg-slate-800 px-1">content/{mdPath}</code>.
          </div>
        )}
        {!loading && !error && md && (
          <article className="reader-content markdown-body">
            <ReactMarkdown
              components={{
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
              }}
            >
              {md}
            </ReactMarkdown>
          </article>
        )}
      </main>
    </div>
  );
}
