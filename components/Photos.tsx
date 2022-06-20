import { useContext } from "react";
import Image from "./Image";
import { Context } from "../lib/Context";
import { getClass } from "../lib/utils";

function Photos() {
  const { allPhotos } = useContext(Context);

  const imageElements = allPhotos.map((img: any, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));

  return (
    <div className="container-main">
      <main className="photos">{imageElements}</main>;
    </div>
  );
}

export default Photos;
