type SkillCardProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

const SkillCard = ({ title, subtitle, icon }: SkillCardProps) => {
  return (
    <div
      className="
        group
        min-w-[170px]
        sm:min-w-[190px]
        flex items-center gap-3
        px-4 py-3
        rounded-2xl
        bg-white/90
        border border-zinc-200
        shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-xl
        hover:border-blue-200
        hover:bg-white
      "
    >
      {/* Icon */}
      <div
        className="
          w-10 h-10
          rounded-xl
          bg-zinc-100
          flex items-center justify-center
          text-xl
          transition-all duration-300
          group-hover:scale-110
          group-hover:bg-white
          group-hover:shadow-md
        "
      >
        {icon}
      </div>

      {/* Text */}
      <div>
        <h3 className="text-sm sm:text-base font-semibold text-zinc-800 leading-tight">
          {title}
        </h3>

        <p className="text-xs text-zinc-500 mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;