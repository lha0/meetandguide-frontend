export default function ChattingView() {
  return (
    <section className="w-[80%] mx-[162px] flex items-center]">
      <aside className="w-[15%] flex flex-col">
        <input type="search" className="w-[100%] rounded-2xl shadow-button" />
        <ul>
          <li> 채팅방 상대 이름</li>
          <li> 채팅방 상대 이름</li>
          <li> 채팅방 상대 이름</li>
        </ul>
      </aside>

      {
        //채팅 전체 컨테이너
      }
      <div className="w-[85%] h-[700px] flex flex-col rounded-2xl shadow-button">
        {
          //채팅 상태, 버튼 들어갈 헤더
        }
        <div className="h-[10%] shadow-button"></div>

        {
          //채팅 본문 컨테이너
        }
        <div className="h-[90%] flex flex-col shadow-button">
          <h1> ooo 님과의 채팅</h1>
          <ul>
            {
              //chatting item.map(() => return <li />)
            }
            <li> 메세지 1</li>
            <li> 메세지 2</li>
            <li> 메세지 3</li>
            <li> 메세지 4</li>
          </ul>
          <div>
            <input type="text" className="rounded-2xl shadow-button" />
            <button> send </button>
          </div>
        </div>
      </div>
    </section>
  );
}
