type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: "4.9/5", label: "Google Rating" },
  { value: "55+", label: "Verified Reviews" },
  { value: "359+", label: "Trips Completed" },
  { value: "24/7", label: "Always Available" },
];

export default function StatsSection() {
  return (
    <section className="mx-auto w-[90vw] px-6 py-12 sm:px-10 lg:px-16">
      <div className="reveal rounded-3xl border border-zinc-100 bg-zinc-50 px-8 py-10 sm:px-12">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:items-center">
          {/* Heading */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <h2 className="text-2xl font-bold tracking-tight text-[#132238]">
              Our Stats
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Trusted by travelers across Telangana &amp; India.
            </p>
          </div>

          {/* Stats */}
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-sm font-medium text-zinc-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
