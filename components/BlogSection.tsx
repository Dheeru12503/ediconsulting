"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function VlogSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      title: "EDI Integration Best Practices",
      thumbnail: "https://img.youtube.com/vi/Hd4Xony9vpM/maxresdefault.jpg",
      videoId: "Hd4Xony9vpM",
    },
    {
      id: 2,
      title: "ERP System Implementation Guide",
      thumbnail: "https://img.youtube.com/vi/N3g8-aiDtW0/maxresdefault.jpg",
      videoId: "N3g8-aiDtW0",
    },
    {
      id: 3,
      title: "Supply Chain Automation Solutions",
      thumbnail: "https://img.youtube.com/vi/i8nr_dKCEgk/maxresdefault.jpg",
      videoId: "i8nr_dKCEgk",
    },
  ];

  return (
    <section id="vlogs" className="w-full bg-[#E8F3F4] py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#12373F] mb-4">
            Latest Insights & Tutorials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch our expert videos on EDI integration, ERP systems, and supply
            chain automation best practices.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md"
            >
              {/* Thumbnail */}
              <div 
                className="relative aspect-video overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => setSelectedVideo(video.videoId)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-[#1B505B]/40 flex items-center justify-center group-hover:bg-[#1B505B]/60 transition">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#1B505B] border-b-8 border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Popup Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition"
            >
              <X size={24} className="text-[#1B505B]" />
            </button>

            {/* YouTube Iframe */}
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
