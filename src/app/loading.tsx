export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[100]">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-t-2 border-white rounded-full animate-spin mb-4"></div>
        <p className="text-brand-grey-500 uppercase tracking-widest text-[10px] animate-pulse">Initializing BVA Ecosystem...</p>
      </div>
    </div>
  );
}
