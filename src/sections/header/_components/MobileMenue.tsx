import { ChevronLeft } from "lucide-react";
import { ReactSVG } from "react-svg";

type NavigationData = {
  categories: string[];
  subTopics: Record<string, string[]>;
};
const MobileMenue = ({
  navigationData,
  setSelectedCategory,
  setIsMobileMenuOpen,
}: {
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navigationData: NavigationData;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="lg:hidden mt-4 bg-[#191D25] rounded-lg p-4 space-y-4">
      <div className="space-y-3">
        <button className="w-full text-right px-4 py-3 bg-[#272A32] text-white rounded-lg hover:bg-gray-700 transition-colors">
          تسجيل الدخول
        </button>
        <button className="w-full text-right px-4 py-3 bg-[#292951] text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-between">
          <span>تدرب بلا حدود</span>
          <ReactSVG src={"/assets/icons/sparkles.svg"} />
        </button>
        <button className="w-full text-right px-4 py-3 bg-transparent text-white hover:bg-gray-700 rounded-lg transition-colors">
          تدرب للأعمال
        </button>
        <button className="w-full text-right px-4 py-3 bg-transparent text-white hover:bg-gray-700 rounded-lg transition-colors">
          انضم كمدرب
        </button>
      </div>

      <div className="border-t border-gray-700 pt-4">
        <h3 className="text-white font-semibold mb-3 text-right">
          استكشف الأقسام
        </h3>
        <div className="space-y-2">
          {navigationData.categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-right p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-all flex items-center justify-between"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm">{category}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenue;
