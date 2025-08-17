import { ChevronLeft, X } from "lucide-react";
import React from "react";

type NavigationData = {
  categories: string[];
  subTopics: Record<string, string[]>;
};
const MenueNav = ({
  setIsDropdownOpen,
  navigationData,
  selectedCategory,
  setSelectedCategory,
}: {
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navigationData: NavigationData;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="lg:hidden fixed inset-0 z-[9998] bg-black bg-opacity-50">
      <div className="fixed top-20 left-4 right-4 bg-[#191D25] rounded-lg shadow-2xl max-h-[80vh] overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold text-right">
              أقسام التعلم
            </h3>
            <button
              onClick={() => setIsDropdownOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-2 mb-4">
            {navigationData.categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-right p-3 rounded-lg transition-all flex items-center justify-between ${
                  selectedCategory === category
                    ? "bg-[#272A32] text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="text-sm">{category}</span>
              </button>
            ))}
          </div>

          <div className="border-t border-gray-700 pt-4">
            <h4 className="text-white font-semibold mb-3 text-right">
              أهم مواضيع {selectedCategory}
            </h4>
            <div className="space-y-2">
              {navigationData.subTopics[selectedCategory]?.map((topic) => (
                <button
                  key={topic}
                  className="w-full text-right p-3 rounded-lg text-white hover:bg-gray-700 transition-all"
                >
                  <span className="text-sm">{topic}</span>
                </button>
              ))}
            </div>
            <button className="w-full mt-4 bg-white text-[#00040D] font-bold text-[14px] py-3 px-4 rounded-[12px] hover:bg-gray-100 transition-colors">
              استكشف جميع الدورات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenueNav;
