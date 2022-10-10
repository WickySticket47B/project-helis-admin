import type { FC } from "react";
import {
  required,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
  BooleanInput,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";
import VisibilitySelector from "$components/VisibilitySelector";

const GalleryItemForm: FC = () => {
  return (
    <SimpleForm>
      <ImageInput
        source="image"
        label="Image"
        accept="image/*"
        multiple={false}
        validate={required()}
      >
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="title" validate={required()} />
      <TextInput source="subtitle" validate={required()} />
      <TextInput source="alt" validate={required()} />
      <RichTextInput source="description" />
      <BooleanInput source="featured" />
      <VisibilitySelector />
    </SimpleForm>
  );
};

export default GalleryItemForm;
