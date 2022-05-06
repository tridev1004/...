import MeetupDetail from "../../components/meetups/MeetupDetails";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
      title="A first Meetup"
      address="some 5 street"
      description="the Meetup Desc."
    />
  );
}
export async function getStaticPaths() {
  return {
    fallback:true,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "First_meetup",
        address: "some 5 street",
        description: "the Meetup Desc.",
      },
    },
  };
}

export default MeetupDetails;
