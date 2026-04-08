"use client";

import Image from "next/image";
import { useState } from "react";

export default function EventCard({ event }) {
  const [liked, setLiked] = useState(false);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("pt-BR");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <Image
        src={event.image}
        alt={event.name}
        width={236}
        height={200}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">{event.name}</h3>
        <p className="text-blue-600 font-medium">{event.theme}</p>
        <p className="text-gray-600">{formatDate(event.date)}</p>
        <button
          type="button"
          onClick={() => setLiked(!liked)}
          className={`mt-3 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            liked
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {liked ? "❤️ Curtido" : "🤍 Curtir"}
        </button>
      </div>
    </div>
  );
}
