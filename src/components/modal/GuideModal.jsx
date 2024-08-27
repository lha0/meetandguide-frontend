import { useEffect, useState } from "react";
import GuideModalView from "./GuideModalView";
import {
  createChatRoomAPI,
  getUserChatRoomsAPI,
  getGuideInfo,
} from "../../api/AuthApi";
import { useNavigate } from "react-router-dom";

export default function GuideModal({ isVisible, guideId, onClose }) {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [guideInfo, setGuideInfo] = useState({});

  useEffect(() => {
    if (guideId !== -1 && isVisible) {
      getGuideInfo(guideId)
        .then((response) => {
          setGuideInfo(response); // 받아온 데이터 설정
        })
        .catch((error) => {
          console.log("가이드 정보 받아오기 실패 ", error);
        });
    }
  }, [guideId, isVisible]);

  //채팅방 만들기
  const createChatRoom = async ({ userId, guideId }) => {
    // api로 userId, guideId 전송
    const roomInfo = await createChatRoomAPI({ userId, guideId });
    return roomInfo.roomId;
  };

  //roomId 있는지 확인 api
  const getUserChatRoom = async ({ userId }) => {
    const roomInfo = await getUserChatRoomsAPI(userId);
    const room = roomInfo.find((item) => item.guideId === guideId);
    if (room) {
      return room.roomId;
    } else {
      return null;
    }
  };

  //채팅 보내기 버튼 클릭 핸들러
  const handleChatBtn = () => {
    //기존 방 있는지 확인
    getUserChatRoom({ userId }).then((roomId) => {
      //없으면 새로 만들기
      if (!roomId) {
        createChatRoom({ userId, guideId }).then((newRoomId) => {
          //해당 방으로 이동
          navigate(`/chatting?roomId=${newRoomId}`);
          onClose();
        });
      } else {
        //해당 방으로 이동
        navigate(`/chatting?roomId=${roomId}`);
        onClose();
      }
    });
  };

  const props = { isVisible, guideInfo, onClose, handleChatBtn };
  return <GuideModalView {...props} />;
}
