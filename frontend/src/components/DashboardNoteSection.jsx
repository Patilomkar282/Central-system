export default function DashboardNoteSection() {
  return (
    <section className="py-24 px-6 bg-mmcoe-navy text-white text-center">
      <div className="max-w-4xl mx-auto">
        <svg className="w-16 h-16 mx-auto text-mmcoe-maroon mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Centralized Identity Management</h2>
        <p className="text-lg text-slate-300 leading-relaxed mb-10">
          A single, highly secure authentication gateway acts as the backbone of the SmartPrep ecosystem. Eliminate the need for multiple accounts and ensure absolute data privacy under the jurisdiction of the MMCOE administration.
        </p>
      </div>
    </section>
  );
}