import { Datagrid, List, ReferenceField, TextField, FunctionField } from "react-admin";

const PostList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" label=" Post title" />
        <FunctionField label="Excerpt" render={(record) => }/>
      <ReferenceField source="userId" reference="users" />
    </Datagrid>
  </List>
);

export default PostList;
