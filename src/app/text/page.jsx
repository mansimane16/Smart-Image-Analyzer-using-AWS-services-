"use client";
import DetectionForm from "@/components/DetectionForm";
import { ImageIcon } from "lucide-react";

const TextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-10">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <div className="inline-flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 p-4 rounded-full text-white shadow-lg mb-4">
          <ImageIcon className="h-7 w-7" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-3 tracking-tight">
          Text Detection
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Upload an image to extract and translate text.
        </p>
      </div>

      {/* Landscape Layout */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl border border-blue-100 p-6 md:p-10">
        <DetectionForm detectionType="text" layout="horizontal" />
      </div>

      {/* Tip */}
      <div className="mt-10 text-center text-sm text-gray-500 animate-fade-in-up delay-200">
        💡 Pro Tip: Use scanned documents or receipts for best text extraction.
      </div>
    </div>
  );
};

export default TextPage;
