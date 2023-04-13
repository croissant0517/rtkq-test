import React, { useEffect, useState } from "react";
import { Modal, Button } from "@douyinfe/semi-ui";

import MeetupList from "@/component/MeetUp/MeetupList";
import MeetupForm from "@/component/MeetUp/MeetupForm";

import { useAddMeetupMutation } from "@/service/meetupApi";

const FakeData = [
  {
    image:
      "https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Montreal Design Club",
    address: "Shopify, Rue de la Gauchetière Ouest, Montreal, QC, Canada",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "listen up yall",
    address: "NeONBRAND Digital Marketing, Las Vegas, United States",
  },
];

export default function Meetup() {
  const [openModal, setOpenModal] = useState(false);
  const [meetups, setMeetups] = useState([]);
  const [addMeetup, { isLoading, error }] = useAddMeetupMutation();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleModalCancel = () => {
    setOpenModal(false);
  };

  const handleAddMeetup = async (meetupData) => {
    const { data } = await addMeetup(JSON.stringify(meetupData));
    // const response = await fetch("/api/new-meetup", {
    //   method: "POST",
    //   body: JSON.stringify(meetupData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const data = await response.json();

    console.log(data, "data!!");
  };

  useEffect(() => {
    setMeetups(FakeData);
  }, []);

  return (
    <React.Fragment>
      <Button onClick={handleOpenModal}>Add Meetup</Button>
      <MeetupList meetups={meetups} />
      <Modal
        title="Add New Meetup"
        visible={openModal}
        okText="Cancel"
        onOk={handleModalCancel}
        hasCancel={false}
        onCancel={handleModalCancel}
        closeOnEsc={true}
        confirmLoading={isLoading}
      >
        <MeetupForm addMeetup={handleAddMeetup} />
      </Modal>
    </React.Fragment>
  );
}

// export async function getStaticProps(context) {
//   console.log(context, "context");

//   return {
//     props: {},
//   };
// }

// export async function getServerSideProps(context) {
//   console.log(context, "context");

//   return {
//     props: {},
//   };
// }
