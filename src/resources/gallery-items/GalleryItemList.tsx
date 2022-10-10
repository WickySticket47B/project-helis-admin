import {
  type ListProps,
  List,
  Datagrid,
  TextField,
  ImageField,
  BooleanField,
  RichTextField,
} from "react-admin";
import type { FC } from "react";

const GalleryItemList: FC<ListProps> = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <ImageField label="Image" source="image.src" />
        <TextField source="title" />
        <TextField source="subtitle" />
        <RichTextField source="description" />
        <BooleanField source="featured" />
      </Datagrid>
    </List>
  );
};

export default GalleryItemList;
