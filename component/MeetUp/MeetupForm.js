import { Form, useFormApi } from "@douyinfe/semi-ui";

export default function MeetupForm({ handleSubmit }) {
  const formApi = useFormApi();

  return (
    <div>
      <Form
        layout="vertical"
        onValueChange={(values) => console.log(values)}
        onSubmit={() => handleSubmit(formApi)}
      >
        <Form.Input field="title" label="Title" style={{ width: "100%" }} />
        <Form.Input field="address" label="Address" style={{ width: "100%" }} />
        <Form.Input field="image" label="Image" style={{ width: "100%" }} />
      </Form>
    </div>
  );
}
