import { list } from "@vercel/blob";
import ImageCuston from "./_image";

export default async function ImageList() {
  const { blobs } = await list();

  return (
    <>
      {blobs?.map((blob, key) => (
        <div key={key}>
          <a key={blob.pathname} href={blob.downloadUrl}>
            {blob.pathname}
          </a>
          {/* <ImageCuston alt={blob.pathname} src={blob.url} /> */}
        </div>
      ))}
    </>
  );
}
