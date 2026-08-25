export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white">
      <div className="absolute -left-1/4 -top-1/4 h-[40rem] w-[40rem] animate-aurora rounded-full bg-primary/10 blur-3xl" />
      <div
        className="absolute -right-1/4 top-1/3 h-[36rem] w-[36rem] animate-aurora rounded-full bg-primary/10 blur-3xl"
        style={{ animationDelay: "5s" }}
      />
      <div
        className="absolute -bottom-1/4 left-1/3 h-[34rem] w-[34rem] animate-aurora rounded-full bg-[#f5d485]/10 blur-3xl"
        style={{ animationDelay: "10s" }}
      />
    </div>
  );
}
