import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const staticText =
    "تعلم مع أكثر من 1000 دورة تدريبية في مختلف المجالات ناطقة باللغة العربية، لك باشتراك واحد فقط، شاهدها الآن عبر تدرب بلا حدود وأحصل على شهادة إتمام للدورة التدريبية فور الانتهاء منها، مئات من الشهادات التعليمية بانتظارك. شاهد جميع الدورات المضافة حديثًا دون مصاريف إضافية. تعلم مع أكثر من 1000 دورة تدريبية في مختلف المجالات ناطقة باللغة العربية، لك باشتراك واحد فقط، شاهدها الآن عبر تدرب بلا حدود وأحصل على شهادة إتمام للدورة التدريبية فور الانتهاء منها، مئات من الشهادات التعليمية.";
  const accordionItems = [
    {
      value: "item-1",
      title: "ما هو اشتراك تدرب بلا حدود؟",
      content: staticText,
    },
    {
      value: "item-2",
      title: "هل يمكنني مشاهدة كل الدورات باشتراك تدرب بلا حدود؟",
      content: staticText,
    },
    {
      value: "item-3",
      title: "كيف اشتراك في نظام تدرب بلا حدود؟",
      content: staticText,
    },
  ];
  return (
    <div className="w-[90%] mx-auto py-8 sm:py-10 flex flex-col gap-4 sm:gap-6 text-right">
      <div className="w-full h-full flex flex-col gap-4 sm:gap-6 justify-center items-end mb-4 sm:mb-[18px]">
        <h1 className="text-2xl sm:text-3xl md:text-[32px] text-right font-extrabold text-white leading-tight">
          الأسئلة الشائعة
        </h1>
      </div>

      {["تدرب بلا حدود", "نظام الدفع", "الشهادات التدريبية"].map(
        (title, index) => (
          <div key={index} className="flex flex-col gap-4 sm:gap-6">
            <h3 className="text-white text-lg sm:text-xl md:text-[20px] font-extrabold leading-tight">
              {title}
            </h3>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
              dir="rtl"
            >
              {accordionItems.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger className="text-base sm:text-lg font-semibold text-white hover:text-gray-200 transition-colors">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3 sm:gap-4 text-balance">
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {item.content}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )
      )}
    </div>
  );
};

export default FAQ;
