import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const FAQ = () => {
  return (
    <div className="w-[90%] mx-auto py-10 flex flex-col gap-6 text-right">
      <div className="w-full h-full flex flex-col gap-6 justify-center items-end mb-[18px]">
        <h1 className="text-[32px] text-right font-extrabold text-white">
          الأسئلة الشائعة
        </h1>
      </div>

      {["تدرب بلا حدود", "نظام الدفع", "الشهادات التدريبية"].map(
        (title, index) => (
          <div key={index} className="flex flex-col gap-6">
            <h3 className="text-white text-[20px] font-extrabold leading-[16px]">
              {title}
            </h3>
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
              dir="rtl"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="">
                  ما هو اشتراك تدرب بلا حدود؟
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="text-white">
                    تعلم مع أكثر من 1000 دورة تدريبية في مختلف المجالات ناطقة
                    باللغة العربية، لك باشتراك واحد فقط، شاهدها الآن عبر تدرب
                    بلا حدود وأحصل على شهادة إتمام للدورة التدريبية فور الانتهاء
                    منها، مئات من الشهادات التعليمية بانتظارك. شاهد جميع الدورات
                    المضافة حديثًا دون مصاريف إضافية. تعلم مع أكثر من 1000 دورة
                    تدريبية في مختلف المجالات ناطقة باللغة العربية، لك باشتراك
                    واحد فقط، شاهدها الآن عبر تدرب بلا حدود وأحصل على شهادة
                    إتمام للدورة التدريبية فور الانتهاء منها، مئات من الشهادات
                    التعليمية.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="">
                  هل يمكنني مشاهدة كل الدورات باشتراك تدرب بلا حدود؟
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="text-white">
                    تعلم مع أكثر من 1000 دورة تدريبية في مختلف المجالات ناطقة
                    باللغة العربية، لك باشتراك واحد فقط، شاهدها الآن عبر تدرب
                    بلا حدود وأحصل على شهادة إتمام للدورة التدريبية فور الانتهاء
                    منها، مئات من الشهادات التعليمية بانتظارك. شاهد جميع الدورات
                    المضافة حديثًا دون مصاريف إضافية. تعلم مع أكثر من 1000 دورة
                    تدريبية في مختلف المجالات ناطقة باللغة العربية، لك باشتراك
                    واحد فقط، شاهدها الآن عبر تدرب بلا حدود وأحصل على شهادة
                    إتمام للدورة التدريبية فور الانتهاء منها، مئات من الشهادات
                    التعليمية.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="">
                  كيف اشتراك في نظام تدرب بلا حدود؟
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p className="text-white">
                    تعلم مع أكثر من 1000 دورة تدريبية في مختلف المجالات ناطقة
                    باللغة العربية، لك باشتراك واحد فقط، شاهدها الآن عبر تدرب
                    بلا حدود وأحصل على شهادة إتمام للدورة التدريبية فور الانتهاء
                    منها، مئات من الشهادات التعليمية بانتظارك. شاهد جميع الدورات
                    المضافة حديثًا دون مصاريف إضافية. تعلم مع أكثر من 1000 دورة
                    تدريبية في مختلف المجالات ناطقة باللغة العربية، لك باشتراك
                    واحد فقط، شاهدها الآن عبر تدرب بلا حدود وأحصل على شهادة
                    إتمام للدورة التدريبية فور الانتهاء منها، مئات من الشهادات
                    التعليمية.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )
      )}
    </div>
  );
};

export default FAQ;
