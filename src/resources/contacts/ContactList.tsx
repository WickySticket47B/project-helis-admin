import type { FC } from "react";
import { type ListProps, List, Datagrid, TextField } from "react-admin";

const ContactList: FC<ListProps> = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="message" />
      </Datagrid>
    </List>
  );
};

export default ContactList;
