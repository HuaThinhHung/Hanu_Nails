export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-cream">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 rounded-full border border-line border-t-dark-brown animate-spin" />
        <p className="mt-5 text-[11px] uppercase tracking-[0.28em] text-dark-brown">
          Preparing HANU
        </p>
      </div>
    </div>
  );
}
