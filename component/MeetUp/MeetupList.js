import { Spin } from "@douyinfe/semi-ui";

import MeetupItem from "./MeetupItem";

export default function MeetupList({ meetups }) {
  return (
    <div>
      {meetups.map((data, index) => {
        return <MeetupItem key={index} data={data} />;
      })}
    </div>
  );
}
