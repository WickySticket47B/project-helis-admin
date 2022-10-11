import type { ResourceProps } from "react-admin";
import { ContactMail as ContactMailIcon } from "@mui/icons-material";
import ContactList from "./ContactList";

const resource: ResourceProps = {
  name: "contacts",
  icon: ContactMailIcon,
  list: ContactList,
  options: {
    label: "Contacts",
  },
};

export default resource;
