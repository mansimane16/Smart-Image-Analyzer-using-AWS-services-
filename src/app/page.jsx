"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon, TagIcon, SmileIcon } from "lucide-react";
import { Toaster } from 'sonner';


const HomePage = () => {
  const router = useRouter();

  const categories = [
    {
      label: "Text Detection",
      href: "/text",
      description: "Extract and translate text from images.",
      icon: (
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-full text-white shadow-lg">
          <ImageIcon className="h-6 w-6" />
        </div>
      ),
    },
    {
      label: "Label Detection",
      href: "/labels",
      description: "Detect labels and objects present in an image.",
      icon: (
        <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-full text-white shadow-lg">
          <TagIcon className="h-6 w-6" />
        </div>
      ),
    },
    {
      label: "Face Detection",
      href: "/faces",
      description: "Identify facial attributes, emotions, and age range.",
      icon: (
        <div className="bg-gradient-to-br from-pink-400 to-pink-600 p-3 rounded-full text-white shadow-lg">
          <SmileIcon className="h-6 w-6" />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 py-16 px-6">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Smart Image Detection
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Choose a detection category below to explore our image analyzer.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <Card
            key={cat.href}
            onClick={() => router.push(cat.href)}
            className="group cursor-pointer rounded-3xl p-1 bg-white shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-1 hover:border-blue-300 border border-transparent"
          >
            <CardContent className="p-6 text-center space-y-4">
              <div className="flex justify-center">{cat.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {cat.label}
              </h2>
              <p className="text-gray-500 text-sm">{cat.description}</p>
            </CardContent>
          </Card>
          
        ))}
      </div>
      <Toaster />
    </div>
  );
};

export default HomePage;
