export default function WebsiteLoading() {
  return (
    <div className="min-h-[70vh] animate-pulse bg-white px-4 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="mx-auto h-12 max-w-2xl rounded-xl bg-slate-200 dark:bg-slate-800" />
        <div className="mx-auto h-6 max-w-3xl rounded-lg bg-slate-100 dark:bg-slate-900" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-64 rounded-2xl bg-slate-100 dark:bg-slate-900" />
          ))}
        </div>
      </div>
    </div>
  );
}
