import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../../types/technology";

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);

  // Load JSON data
  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
      })
      .catch((error) => {
        console.error("Failed to load technologies:", error);
      });
  }, []);

  // Add technology to stack
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    // Duplicate warning
    if (alreadyAdded) {
      alert(`${technology.name} is already in your stack!`);
      return;
    }

    setStack((previousStack) => [...previousStack, technology]);
  };

  // Remove one technology
  const handleRemoveFromStack = (id: string) => {
    setStack((previousStack) =>
      previousStack.filter((technology) => technology.id !== id),
    );
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <section className="container mx-auto px-4 py-10">
      {/* =========================
          Section Heading
      ========================== */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Explore the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] via-[#EC4899] to-[#7C3AED]">
            Technologies
          </span>
        </h2>

        <p className="text-xs text-base-content/50 mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* =========================
          Main Layout
      ========================== */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-5">
        {/* =========================
            Technology Grid
        ========================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAdd={handleAddToStack}
              isAdded={stack.some((item) => item.id === technology.id)}
            />
          ))}
        </div>

        {/* =========================
            Your Stack Sidebar
        ========================== */}
        <div className="border border-base-300 rounded-xl p-4 h-fit lg:sticky lg:top-5">
          {/* Sidebar Header */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold">Your Stack</h3>

              <p className="text-[10px] text-base-content/50 mt-1">
                {stack.length}{" "}
                {stack.length === 1 ? "Technology" : "Technologies"} Selected
              </p>
            </div>

            {/* Remove All */}
            {stack.length > 0 && (
              <button
                onClick={handleRemoveAll}
                className="text-[10px] text-red-500 hover:text-red-600 font-medium whitespace-nowrap"
              >
                Remove All
              </button>
            )}
          </div>

          {/* =========================
              Empty State
          ========================== */}
          {stack.length === 0 ? (
            <div className="border border-dashed border-base-300 rounded-lg p-8 mt-4 text-center">
              <p className="text-[10px] text-base-content/40">
                Your stack is empty.
              </p>
            </div>
          ) : (
            /* =========================
               Stack Items
            ========================== */
            <div className="mt-4 flex flex-col gap-2">
              {stack.map((technology) => (
                <div
                  key={technology.id}
                  className="flex items-center justify-between gap-2 border border-base-200 rounded-lg p-2"
                >
                  {/* Icon + Name + Category */}
                  <div className="flex items-center gap-2 min-w-0">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-6 h-6 object-contain shrink-0"
                    />

                    <div className="min-w-0">
                      <p className="text-xs font-semibold truncate">
                        {technology.name}
                      </p>

                      <p className="text-[9px] text-base-content/50">
                        {technology.category}
                      </p>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => handleRemoveFromStack(technology.id)}
                    className="text-base-content/40 hover:text-red-500 text-sm font-bold shrink-0"
                    title={`Remove ${technology.name}`}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
