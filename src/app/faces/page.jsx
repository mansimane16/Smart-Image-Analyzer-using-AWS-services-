import DetectionForm from "@/components/DetectionForm";
import { SmileIcon } from "lucide-react";

const FacePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white px-4 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
        <div className="inline-flex items-center justify-center bg-gradient-to-br from-pink-500 to-pink-700 p-4 rounded-full text-white shadow-lg mb-4">
          <SmileIcon className="h-7 w-7" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-3 tracking-tight">
          Face Detection
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Analyze emotions, age range, and gender of detected faces.
        </p>
      </div>

      {/* Detection Form */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-pink-100 transition-all">
          <DetectionForm detectionType="faces" />
        </div>

        {/* Tip */}
        <div className="mt-6 text-center text-sm text-gray-500 animate-fade-in-up delay-200">
          📸 Tip: Clear frontal faces in well-lit images work best for emotion analysis.
        </div>
      </div>
    </div>
  );
};

export default FacePage;
