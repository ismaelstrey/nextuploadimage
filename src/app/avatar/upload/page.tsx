"use client";

import ImageList from "@/components/ImageList";
import { type PutBlobResult } from "@vercel/blob";
import { upload } from "@vercel/blob/client";
import Image from "next/image";
import { useState, useRef } from "react";

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  const handleSubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }

    const file = inputFileRef.current.files[0];

    const newBlob = await upload(file.name, file, {
      access: "public",
      handleUploadUrl: "/api/avatar/upload",
    });

    setBlob(newBlob);
  };
  return (
    <>
      <h1>Upload Your Avatar</h1>

      <form onSubmit={handleSubmitForm}>
        <input name="file" ref={inputFileRef} type="file" required />
        <button type="submit">Upload</button>
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
          <Image src={blob.url} alt="Logo" width={800} height={800} />
        </div>
      )}
      <div>
        <ImageList />
      </div>
    </>
  );
}
