"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  Search,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { ReactSVG } from "react-svg";

type Category = string;
type SubTopic = string;
type NavigationData = {
  categories: Category[];
  subTopics: Record<Category, SubTopic[]>;
};

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("تربية الأبناء");

  const navigationData: NavigationData = {
    categories: [
      "تربية الأبناء",
      "علوم الحاسب والتكنولوجيا",
      "الفنون والمهارات",
      "ديكور المنزل",
      "الاقتصاد والأعمال",
      "تعلم اللغات",
      "تطوير الذات",
      "العلوم والرياضيات",
    ],
    subTopics: {
      "تربية الأبناء": [
        "تربية الأطفال",
        "التربية في سن المراهقة",
        "التربية الجنسية للأطفال",
        "تحسين سلوكيات الطفل",
        "التربية الحديثة",
      ],
      "علوم الحاسب والتكنولوجيا": [
        "برمجة الويب",
        "تطوير التطبيقات",
        "الذكاء الاصطناعي",
        "أمن المعلومات",
        "قواعد البيانات",
      ],
      "الفنون والمهارات": [
        "الرسم والتلوين",
        "التصميم الجرافيكي",
        "التصوير الفوتوغرافي",
        "الحرف اليدوية",
        "الموسيقى",
      ],
      "ديكور المنزل": [
        "تصميم داخلي",
        "تنسيق الحدائق",
        "إعادة تدوير الأثاث",
        "اختيار الألوان",
        "تنظيم المساحات",
      ],
      "الاقتصاد والأعمال": [
        "إدارة الأعمال",
        "التسويق الرقمي",
        "الاستثمار",
        "ريادة الأعمال",
        "المحاسبة",
      ],
      "تعلم اللغات": [
        "اللغة الإنجليزية",
        "اللغة العربية",
        "اللغة الفرنسية",
        "اللغة الألمانية",
        "اللغة الإسبانية",
      ],
      "تطوير الذات": [
        "إدارة الوقت",
        "التواصل الفعال",
        "القيادة",
        "حل المشكلات",
        "الذكاء العاطفي",
      ],
      "العلوم والرياضيات": [
        "الرياضيات",
        "الفيزياء",
        "الكيمياء",
        "الأحياء",
        "الإحصاء",
      ],
    },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="flex justify-center gap-4 items-center h-12 relative">
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full"
          style={{
            backgroundImage: "url('/assets/nav-bar/offer-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="flex-col-reverse md:flex-row flex gap-2 items-center justify-center relative">
          <button className="text-sm text-white hover:text-gray-200 transition-colors underline">
            اشترك الان
          </button>
          <span className="text-sm text-white">
            خصم 80% بمناسبة شهر رمضان الكريم لفترة محدودة
          </span>
        </div>
      </div>

      <div className="bg-[#00040D] px-3 sm:px-5 py-3 border-b border-gray-800 relative">
        <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-6 items-center w-full">
          <div className="flex lg:hidden items-center justify-between w-full">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 transition-colors p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <ReactSVG src={"/assets/nav-bar/logo.svg"} className="w-24 h-8" />
            <button className="text-white hover:text-gray-300 transition-colors p-2">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button className="text-white hover:text-gray-300 transition-colors p-2">
              <ShoppingCart className="w-6 h-6" />
            </button>
            <button className="px-4 py-2 bg-[#191D25] h-10 rounded-[12px] text-white hover:bg-[#272A32] transition-colors flex items-center space-x-2">
              تسجيل الدخول
            </button>
            <button className="px-4 py-2 bg-[#292951] h-10 rounded-[12px] text-white hover:bg-purple-700 transition-colors flex items-center space-x-2">
              <span>تدرب بلا حدود</span>
              <ReactSVG src={"/assets/icons/sparkles.svg"} />
            </button>
            <button className="bg-transparent text-white text-[14px] font-bold">
              تدرب للأعمال
            </button>
            <button className="bg-transparent text-white text-[14px] font-bold">
              انضم كمدرب
            </button>
          </div>

          <div className="relative w-full lg:flex-1 max-w-2xl">
            <input
              type="text"
              dir="rtl"
              placeholder="ماذا تريد ان تتعلم اليوم؟"
              className="w-full px-4 py-3 pr-12 bg-gray-800 text-white placeholder-gray-400 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm sm:text-base"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          <div className="hidden lg:flex justify-end items-center space-x-2">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button
                  onClick={() => {
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  className="flex items-center space-x-2 px-4 py-3 text-white hover:text-gray-300 transition-colors rounded-lg hover:bg-gray-800"
                >
                  <span>استكشف الأقسام</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full right-0 bg-[#191D25] border border-[#191D25] mt-4 rounded-[12px] shadow-2xl z-[9999] min-h-[400px]">
                    <div className="flex rounded-[12px]">
                      <div className="p-5 w-[335px] rounded-[12px] bg-[#272A32]">
                        <h3 className="text-white font-semibold mb-4 text-right">
                          أهم مواضيع {selectedCategory}
                        </h3>
                        <div>
                          {navigationData.subTopics[selectedCategory]?.map(
                            (topic) => (
                              <button
                                key={topic}
                                className="w-full text-right p-3 rounded-lg text-white hover:bg-gray-700 hover:text-white transition-all flex items-center justify-end"
                              >
                                <span>{topic}</span>
                              </button>
                            )
                          )}
                        </div>
                      </div>{" "}
                      <div className="w-[335px] rounded-[12px] rounded-l-none p-4 border-r bg-[#141820] border-gray-700">
                        <h3 className="text-white font-semibold mb-4 text-right">
                          أقسام التعلم
                        </h3>
                        <div className="bg-[#141820]">
                          {navigationData.categories.map((category) => (
                            <button
                              key={category}
                              onClick={() => setSelectedCategory(category)}
                              className={`w-full text-right p-3 rounded-[12px] transition-all flex items-center justify-between ${
                                selectedCategory === category
                                  ? "bg-[#272A32] text-white w-full"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
                              }`}
                            >
                              <ChevronLeft className="w-4 h-4" />
                              <span className="text-[16px] font-normal">
                                {category}
                              </span>
                            </button>
                          ))}
                        </div>
                        <button className="w-full mt-4 bg-white text-[#00040D] font-bold text-[14px] py-3 px-4 rounded-[12px] hover:bg-gray-100 transition-colors">
                          استكشف جميع الدورات
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <ReactSVG src={"/assets/nav-bar/logo.svg"} />
          </div>
        </div>

        {isMobileMenuOpen && (
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
        )}
      </div>

      {isDropdownOpen && (
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
      )}

      {isDropdownOpen && (
        <div
          className="hidden lg:block fixed inset-0 z-[9998]"
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </header>
  );
}
