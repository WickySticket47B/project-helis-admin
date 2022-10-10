import type { FC } from "react";
import { type CreateProps, Create } from "react-admin";
import GalleryItemForm from "./GalleryItemForm";

const GalleryItemCreate: FC<CreateProps> = (props) => {
  return (
    <Create {...props}>
      <GalleryItemForm />
    </Create>
  );
};

export default GalleryItemCreate;
