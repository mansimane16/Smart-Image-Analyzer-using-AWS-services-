"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

const DetectionForm = ({ detectionType }) => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [translated, setTranslated] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const [boundingBoxes, setBoundingBoxes] = useState([]);
  const [targetLang, setTargetLang] = useState("fr");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    setResult("");
    setTranslated("");

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPreviewUrl(reader.result);
        }
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreviewUrl("");
    }

    setBoundingBoxes([]);
  };

  const handleSubmit = async () => {
    if (!file) return alert("Please select a file.");
    setLoading(true);
    setBoundingBoxes([]);  // Clear bounding boxes
    setResult("");  // Clear previous result
    setTranslated("");  // Clear previous translation

    const reader = new FileReader();
    reader.onload = async () => {
      if (typeof reader.result === "string") {
        const base64Data = reader.result.split(",")[1];

        try {
          const response = await fetch(
            "https://rnjt9md2h1.execute-api.ap-south-1.amazonaws.com/prod/extract-text",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                image_data: base64Data,
                type: detectionType,
                target_lang: targetLang,
              }),
            }
          );

          const data = await response.json();

          if (detectionType === "text") {
            setResult(data.text || "No text detected.");

            // Only translate if it's text detection
            if (data.text && targetLang !== "auto") {
              setTranslated(data.translated_text || "Translation not available.");
            }

          } else if (detectionType === "labels") {
            setResult(data.labels?.join(", ") || "No labels detected.");
            setTranslated(""); // No translation for labels

            const boxes = data.bounding_boxes.map((box) => ({
              label: box.label,
              left: box.BoundingBox.Left * 100,
              top: box.BoundingBox.Top * 100,
              width: box.BoundingBox.Width * 100,
              height: box.BoundingBox.Height * 100,
            }));
            setBoundingBoxes(boxes);
          } else if (detectionType === "faces") {
            const faceSummary =
              data.faces
                ?.map(
                  (face, idx) =>
                    `Face ${idx + 1}:\nAge: ${face.AgeRange.Low}-${face.AgeRange.High}\nGender: ${face.Gender}\nTop Emotions: ${face.Emotions.map((e) => e.Type).join(", ")}`
                )
                .join("\n\n") || "No faces detected.";
            setResult(faceSummary);
            setTranslated(""); // No translation for faces
            const boxes = data.faces.map((face) => ({
              left: face.BoundingBox.Left * 100,
              top: face.BoundingBox.Top * 100,
              width: face.BoundingBox.Width * 100,
              height: face.BoundingBox.Height * 100,
            }));
            setBoundingBoxes(boxes);
          }
        } catch (error) {
          console.error(error);
          setResult("Error: " + (error.message || "Unknown error"));
        }

        setLoading(false);
      }
    };

    reader.readAsDataURL(file);
  };

  const languageOptions = [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "de", name: "German" },
    { code: "hi", name: "Hindi" },
    { code: "ar", name: "Arabic" },
    { code: "zh", name: "Chinese" },
    { code: "ja", name: "Japanese" },
    { code: "ru", name: "Russian" },
  ];

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6">
      <Card>
        <CardContent className="space-y-4 pt-6">
          <h2 className="text-xl font-bold capitalize">{detectionType} Detection</h2>

          <Input type="file" accept="image/*" onChange={handleFileChange} />

          {detectionType === "text" && (
            <div className="space-y-1">
              <label className="block text-sm font-medium">Target Language:</label>
              <select
                value={targetLang}
                onChange={(e) => setTargetLang(e.target.value)}
                className="w-full p-2 border rounded"
              >
                {languageOptions.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name} ({lang.code})
                  </option>
                ))}
              </select>
            </div>
          )}

          {previewUrl && (
            <div className="relative w-full max-h-64 border rounded-md overflow-hidden">
              <img
                src={previewUrl}
                alt="Uploaded Preview"
                className="w-full object-contain"
                style={{ maxHeight: "16rem" }}
              />
              {boundingBoxes.map((box, index) => (
                <div
                  key={index}
                  className="absolute border-2 border-red-500 rounded"
                  style={{
                    left: `${box.left}%`,
                    top: `${box.top}%`,
                    width: `${box.width}%`,
                    height: `${box.height}%`,
                  }}
                >
                  {box.label && (
                    <div className="absolute bottom-0 left-0 bg-black text-white text-xs px-1">
                      {box.label}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Processing..." : "Analyze Image"}
          </Button>
        </CardContent>
      </Card>

      {(result || translated) && (
        <Card>
          <CardContent className="pt-6 space-y-4">
            {result && (
              <>
                <h3 className="text-lg font-semibold">Original:</h3>
                <Textarea value={result} rows={6} readOnly className="resize-none" />
              </>
            )}
            {translated && (
              <>
                <h3 className="text-lg font-semibold">Translated:</h3>
                <Textarea value={translated} rows={6} readOnly className="resize-none" />
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DetectionForm;
