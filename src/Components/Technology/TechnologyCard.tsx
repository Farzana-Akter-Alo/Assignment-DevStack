import type { Technology } from "../../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div className="border border-base-300 rounded-xl p-3 bg-base-100 shadow-sm hover:shadow-md transition">
      {/* Icon & Badge */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-8 h-8 object-contain"
        />

        <span className="text-[9px] px-2 py-1 rounded-full bg-base-200">
          {technology.badge}
        </span>
      </div>

      {/* Technology Name */}
      <h3 className="text-sm font-bold mt-3">{technology.name}</h3>

      {/* Description */}
      <p className="text-[10px] text-base-content/60 mt-1 leading-4 min-h-[40px]">
        {technology.description}
      </p>

      {/* Category / Difficulty / Rating */}
      <div className="flex items-center justify-between gap-1 mt-3 text-[9px]">
        <span className="bg-base-200 px-2 py-1 rounded">
          {technology.category}
        </span>

        <span className="text-base-content/60">{technology.difficulty}</span>

        <span>⭐ {technology.rating}</span>
      </div>

      {/* Add Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`w-full mt-3 py-2 rounded-md text-[10px] font-medium transition ${
          isAdded
            ? "bg-green-500 text-white cursor-not-allowed"
            : "bg-[#111827] text-white hover:bg-[#1f2937]"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
