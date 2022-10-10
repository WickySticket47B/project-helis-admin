import type { FC } from "react";
import { required, SelectInput } from "react-admin";

const VisibilitySelector: FC = () => {
  return (
    <SelectInput
      source="visibility"
      choices={[
        { id: "public", name: "Public" },
        { id: "private", name: "Private" },
      ]}
      validate={required()}
    />
  );
};

export default VisibilitySelector;
