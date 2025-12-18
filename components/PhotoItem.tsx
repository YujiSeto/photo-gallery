import { Photo } from "@/types/Photo";

type Props = {
  photo: Photo;
  onClick: () => void;
};

const basePath = process.env.NODE_ENV === "production" ? "/photo-gallery" : "";

export const PhotoItem = ({ photo, onClick }: Props) => {
  return (
    <div onClick={onClick} className="cursor-pointer hover:opacity-80">
      <img src={`${basePath}/assets/${photo.url}`} alt="" className="w-full" />
    </div>
  );
};
