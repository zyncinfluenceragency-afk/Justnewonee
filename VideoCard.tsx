"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface VideoCardProps {
  title: string;
  videoId: string;
  thumbnailUrl: string;
  delay?: number;
}

export default function VideoCard({
  title,
  videoId,
  thumbnailUrl,
  delay = 0,
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
    >
      <div
        className="aspect-video relative bg-slate-200 overflow-hidden cursor-pointer"
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-blue-600 ml-1" />
              </div>
            </div>
          </>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          ></iframe>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-slate-900 line-clamp-2 leading-snug">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}
