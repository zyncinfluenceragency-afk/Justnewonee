"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  Battery,
  Zap,
  Camera,
  Droplets,
  ShieldCheck,
  Wrench,
  Clock,
  Award,
  Star,
  ArrowRight,
  PlayCircle,
  Phone,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import VideoCard from "@/components/VideoCard";

const services = [
  {
    title: "Screen Replacement",
    description:
      "Fast and reliable screen replacement using high-quality OEM parts. Get your display looking brand new.",
    icon: Smartphone,
  },
  {
    title: "Battery Replacement",
    description:
      "Is your phone dying too quickly? We replace old batteries with new, high-capacity ones.",
    icon: Battery,
  },
  {
    title: "Charging Port Repair",
    description:
      "Having trouble charging? We clean, repair, or replace faulty charging ports.",
    icon: Zap,
  },
  {
    title: "Camera Repair",
    description:
      "Blurry photos or broken lens? We fix front and rear cameras for crystal clear shots.",
    icon: Camera,
  },
  {
    title: "Back Glass Replacement",
    description:
      "Cracked back glass? We use laser technology for precise and safe back glass removal.",
    icon: ShieldCheck,
  },
  {
    title: "Water Damage Repair",
    description:
      "Dropped your phone in water? Bring it to us immediately for professional liquid damage recovery.",
    icon: Droplets,
  },
];

const stats = [
  { label: "Phones Repaired", value: "10,000+", icon: Smartphone },
  { label: "Happy Customers", value: "9,500+", icon: Star },
  { label: "Years Experience", value: "8+", icon: Award },
];

const reviews = [
  {
    name: "Sarah Jenkins",
    rating: 5,
    text: "Absolutely amazing service! They fixed my iPhone 13 Pro Max screen in under an hour. Highly recommend!",
    imageUrl: "https://picsum.photos/seed/sarah/100/100",
  },
  {
    name: "Michael Chen",
    rating: 5,
    text: "Very professional and affordable. My battery was dying by noon, now it lasts all day. Thank you Just New One!",
    imageUrl: "https://picsum.photos/seed/michael/100/100",
  },
  {
    name: "Emily Rodriguez",
    rating: 4,
    text: "Great experience. The staff was friendly and explained exactly what was wrong with my charging port.",
    imageUrl: "https://picsum.photos/seed/emily/100/100",
  },
];

const videos = [
  {
    title: "iPhone Repair Short 1",
    videoId: "v2BNzU4HwBU",
    thumbnailUrl: "https://img.youtube.com/vi/v2BNzU4HwBU/maxresdefault.jpg",
  },
  {
    title: "iPhone Repair Short 2",
    videoId: "SxSExE8WeU0",
    thumbnailUrl: "https://img.youtube.com/vi/SxSExE8WeU0/maxresdefault.jpg",
  },
  {
    title: "iPhone Repair Short 3",
    videoId: "SxSExE8WeU0",
    thumbnailUrl: "https://img.youtube.com/vi/SxSExE8WeU0/maxresdefault.jpg",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200 text-blue-700 font-medium text-sm mb-6 shadow-sm backdrop-blur-sm">
                <Star className="w-4 h-4 fill-blue-700" /> Top Rated Repair Shop
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Professional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Mobile & iPhone
                </span>{" "}
                <br />
                Repair Experts
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Fast, reliable, and affordable repairs for all your devices. We
                use genuine parts and offer a warranty on all our services. Get
                your device back to life today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-repair"
                  className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center flex items-center justify-center gap-2"
                >
                  Book Repair <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:01143590937"
                  className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm hover:shadow-md text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://img.sanishtech.com/u/f3a6ea734827135a49f928831d32bff9.png"
                  alt="Smartphone Repair"
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-4 w-full">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">
                        90-Day Warranty
                      </p>
                      <p className="text-sm text-slate-600">On all repairs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">
                    Fast Turnaround
                  </p>
                  <p className="text-xs text-slate-500">Most repairs in 1hr</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-slate-900 mb-4"
            >
              Our Premium Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600"
            >
              We offer a comprehensive range of repair services for all major
              smartphone brands, specializing in Apple devices.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 0.1} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 rounded-full text-slate-700 font-medium hover:bg-slate-50 transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Stats */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1920/1080')] opacity-5 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-6"
              >
                Why Choose Just New One?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-300 mb-8 leading-relaxed"
              >
                We don&apos;t just fix phones; we restore your connection to the
                world. Our commitment to quality, speed, and transparency sets
                us apart.
              </motion.p>

              <div className="space-y-6">
                {[
                  {
                    title: "Experienced Technicians",
                    desc: "Certified experts with years of hands-on experience.",
                  },
                  {
                    title: "Genuine Parts",
                    desc: "We use only the highest quality OEM parts for repairs.",
                  },
                  {
                    title: "Fast Repairs",
                    desc: "Most common repairs are completed within 30-60 minutes.",
                  },
                  {
                    title: "Affordable Pricing",
                    desc: "Transparent pricing with no hidden fees or surprises.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl text-center ${index === 2 ? "sm:col-span-2" : ""}`}
                >
                  <stat.icon className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-slate-900 mb-4"
              >
                Watch Us Work
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-600"
              >
                Check out our YouTube channel for teardowns, repair guides, and
                behind-the-scenes looks at our process.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <a
                href="https://youtube.com/@justnewone1?si=JSXRz1dhiuxjmeGk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-600 font-medium hover:text-red-700 transition-colors bg-red-50 px-5 py-2.5 rounded-full"
              >
                <PlayCircle className="w-5 h-5" /> Subscribe on YouTube
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <VideoCard key={index} {...video} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-slate-900 mb-4"
            >
              Loved by Thousands
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600"
            >
              Don&apos;t just take our word for it. Here&apos;s what our
              customers have to say about their repair experience.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700" />
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/1000/1000')] opacity-10 mix-blend-overlay" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to get your device fixed?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 mb-10"
          >
            Book your repair online today and get a 10% discount on your first
            service.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/book-repair"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Book Your Repair Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Helper component for CheckCircle since it wasn't imported at the top
function CheckCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
