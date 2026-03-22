const categories = [
  { id: "business", label: "Business" },
  { id: "entertainment", label: "Entertainment" },
  { id: "general", label: "General" },
  { id: "health", label: "Health" },
  { id: "science", label: "Science" },
  { id: "sports", label: "Sports" },
  { id: "technology", label: "Technology" },
];

const CategoryTabs = ({ category, setCategory }) => {
  return (
    <div className="flex gap-3 md:gap-4 mb-10 md:mb-16 overflow-x-auto no-scrollbar">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setCategory(cat.id)}
          className={`whitespace-nowrap px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition tracking-widest text-sm md:text-base ${
            category === cat.id
              ? "bg-yellow-300 text-slate-900"
              : "border border-white hover:bg-yellow-300 hover:text-slate-900"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
