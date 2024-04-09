/* eslint-disable camelcase */
"use client";

import { useState } from "react";
// import { useRouter } from "next/navigation";
import HomeCard from "./HomeCard";
import MeetingModal from "./MeetingModal";
import { Dialog, DialogTrigger } from "./ui/dialog";

const MeetingTypeList = () => {
  // const router = useRouter();
  const [meetingState, setMeetingState] = useState<string>("");

  const [modalOpen, setOpenModel] = useState<boolean>(false);

  const createMeeting = async () => {};

  const handleClick = (val: string) => {
    setMeetingState(val);
    if (
      val === "isInstantMeeting" ||
      val === "isJoiningMeeting" ||
      val === "isScheduleMeeting"
    ) {
      setOpenModel(!modalOpen);
    }
  };

  const handleClose = () => {
    setMeetingState("");
    setOpenModel(!modalOpen);
  };

  console.log("meetingState", meetingState);

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <Dialog>
        <DialogTrigger>
          <HomeCard
            img="/icons/add-meeting.svg"
            title="New Meeting"
            description="Start an instant meeting"
            name={"isInstantMeeting"}
            handleClick={handleClick}
            className="bg-orange-1"
          />
        </DialogTrigger>
      </Dialog>
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        className="bg-blue-1"
        name={"isJoiningMeeting"}
        handleClick={handleClick}
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        className="bg-purple-1"
        name={"isScheduleMeeting"}
        handleClick={handleClick}
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting Recordings"
        className="bg-yellow-1"
        name={"recordings"}
        handleClick={handleClick}
      />
      <MeetingModal
        isOpen={modalOpen}
        onClose={handleClose}
        title="Create Meeting"
        handleClick={createMeeting} // This function will be called when the button is clicked
        className="text-center"
        buttonText="Start Meeting"
      />
    </section>
  );
};

export default MeetingTypeList;
