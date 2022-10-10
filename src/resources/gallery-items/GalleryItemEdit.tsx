import type { FC } from "react";
import { type EditProps, Edit } from "react-admin";
import GalleryItemForm from "./GalleryItemForm";

const GalleryItemEdit: FC<EditProps> = (props) => {
  return (
    <Edit {...props}>
      <GalleryItemForm />
    </Edit>
  );
};

export default GalleryItemEdit;
