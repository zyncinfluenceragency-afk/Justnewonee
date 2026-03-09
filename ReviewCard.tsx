"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import Image from "next/image";

interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
  imageUrl: string;
  delay?: number;
}

export default function ReviewCard({
  name,
  rating,
  text,
  imageUrl,
  delay = 0,
}: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h4 className="font-bold text-slate-900">{name}</h4>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200 fill-slate-200"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed italic flex-grow">
        &quot;{text}&quot;
      </p>
    </motion.div>
  );
}
