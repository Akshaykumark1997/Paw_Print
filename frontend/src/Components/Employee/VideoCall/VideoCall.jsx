import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import {
  zegoCloudAppId,
  zegoCloudServerSecret,
} from "../../../Constance/Constance";

function VideoCall() {
  const { roomId } = useParams();
  const meeting = async (element) => {
    const appID = zegoCloudAppId;
    const serverSecret = zegoCloudServerSecret;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Akshay"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link",
          url: "http://localhost:3000/employee/consultation",
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };
  return (
    <div>
      <div ref={meeting} />
    </div>
  );
}

export default VideoCall;
