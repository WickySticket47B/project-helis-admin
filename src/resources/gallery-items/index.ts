import { PhotoAlbum as PhotoAlbumIcon } from "@mui/icons-material";
import GalleryItemList from "./GalleryItemList";
import GalleryItemCreate from "./GalleryItemCreate";
import GalleryItemEdit from "./GalleryItemEdit";
import type { ResourceProps } from "react-admin";

const resource: ResourceProps = {
  name: "gallery-items",
  icon: PhotoAlbumIcon,
  list: GalleryItemList,
  create: GalleryItemCreate,
  edit: GalleryItemEdit,
  options: {
    label: "Gallery Items",
  },
};

export default resource;
