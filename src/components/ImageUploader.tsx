"use client";
import React, { useState } from "react";
import axios from "axios";

const ImageUploader: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageUpload = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await axios.post("/api/upload", formData);
      console.log("Image uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setSelectedImage(e.target.files?.[0] || null)}
      />
      <button onClick={handleImageUpload}>Upload</button>
    </div>
  );
};

export default ImageUploader;
