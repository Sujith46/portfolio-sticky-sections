import Image from "next/image";

export const ImageCover = ({ img }: any) => {
  return (
    <div className="img-cover-container h-screeen transition-all">
      <Image src={img} alt="cover-img" fill objectFit="cover" />
    </div>
  );
};
