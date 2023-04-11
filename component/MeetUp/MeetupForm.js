import { Form, useFormApi, Button } from "@douyinfe/semi-ui";

let message = "该项为必填项";

export default function MeetupForm({ addMeetup }) {
  const formApi = useFormApi();

  const ComponentUsingFormApi = () => {
    const formApi = useFormApi();

    const change = () => {
      formApi
        .validate()
        .then((value) => {
          console.log(value);
          addMeetup(value);
        })
        .catch((errors) => {
          console.log(errors);
        });
    };
    return <Button onClick={change}>送出</Button>;
  };

  return (
    <div>
      <Form layout="vertical" onValueChange={(values) => console.log(values)}>
        <Form.Input
          field="title"
          label="Title"
          trigger="blur"
          rules={[{ required: true, message }]}
          style={{ width: "100%" }}
        />
        <Form.Input
          field="address"
          label="Address"
          trigger="blur"
          rules={[{ required: true, message }]}
          style={{ width: "100%" }}
        />
        <Form.Input
          field="image"
          label="Image"
          trigger="blur"
          rules={[{ required: true, message }]}
          style={{ width: "100%" }}
        />
        <ComponentUsingFormApi />
      </Form>
    </div>
  );
}
