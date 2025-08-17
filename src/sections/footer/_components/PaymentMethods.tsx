import { ReactSVG } from "react-svg";

const paymentMethods = [
  { src: "/assets/icons/apple-pay.svg", alt: "Apple Pay" },
  { src: "/assets/icons/mada.svg", alt: "Mada" },
  { src: "/assets/icons/paypal.svg", alt: "PayPal" },
  { src: "/assets/icons/key-net.svg", alt: "Key Net" },
  { src: "/assets/icons/visa.svg", alt: "Visa" },
  { src: "/assets/icons/master-card.svg", alt: "Master Card" },
];

export default function PaymentMethods() {
  return (
    <div className="flex flex-col items-center sm:items-end gap-2 text-center sm:text-right">
      <p className="text-sm sm:text-base text-[#B0B0BA]">
        وسائل الدفع عبر تدرب
      </p>
      <div className="flex items-center justify-center sm:justify-end gap-2 flex-wrap">
        {paymentMethods.map((method, index) => (
          <ReactSVG
            key={index}
            src={method.src}
            className="flex items-center justify-center"
          />
        ))}
      </div>
    </div>
  );
}
