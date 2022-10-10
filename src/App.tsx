import type { FC } from "react";
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from "react-admin-firebase";
import { Admin, Resource } from "react-admin";
import { firebaseConfig } from "$lib/firebase";
import { theme } from "$lib/theme";
import galleryItems from "$resources/gallery-items";

const authProvider = FirebaseAuthProvider(firebaseConfig, {
  logging: false,
  disableMeta: true,
  relativeFilePaths: false,
});

const dataProvider = FirebaseDataProvider(firebaseConfig, {
  disableMeta: true,
});

const App: FC = () => {
  return (
    <Admin
      theme={theme}
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource {...galleryItems} />
    </Admin>
  );
};

export default App;
