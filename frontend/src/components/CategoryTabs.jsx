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
    <div className="categories flex flex-wrap gap-4 mb-16">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setCategory(cat.id)}
          className={`px-6 py-3 rounded-lg font-semibold transition cursor-pointer tracking-widest ${
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
