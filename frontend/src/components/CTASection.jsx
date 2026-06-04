export default function CTASection({ setIsLoginModalOpen }) {
  return (
    <section className="py-20 px-6 bg-mmcoe-maroon text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Commence Your Preparation</h2>
        <p className="text-lg text-red-100 mb-10 leading-relaxed">
          Ensure you are logged in to the Central Hub to gain immediate access to the entire suite of SmartPrep resources provided by the Training & Placement Cell.
        </p>
        <button onClick={() => setIsLoginModalOpen(true)} className="px-10 py-4 text-sm font-bold text-mmcoe-maroon bg-white rounded shadow-lg hover:bg-slate-100 transition-all uppercase tracking-widest">
          Authenticate / Log In
        </button>
      </div>
    </section>
  );
}