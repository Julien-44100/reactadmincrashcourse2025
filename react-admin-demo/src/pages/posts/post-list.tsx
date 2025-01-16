import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  FunctionField,
} from "react-admin";

const PostPanel = () => {
  return <div>Hello</div>;
};

const PostList = () => (
  <List>
    <Datagrid
      expand={<PostPanel />}
      sx={{
        "& .RaDatagrid-headerCell": {
          padding: "16px",
        },
      }}
    >
      <TextField source="id" />
      <TextField source="title" label="Post Title" />
      <FunctionField
        label="Excerpt"
        render={(record) => `${record.body.substring(0, 50)}...`}
      />
      <ReferenceField source="userId" reference="users" />
    </Datagrid>
  </List>
);

export default PostList;
