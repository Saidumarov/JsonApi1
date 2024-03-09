import { useNavigate, useParams } from "react-router-dom";
import { Card3 } from "../loading";

function Comments({ data }) {
  const Data = data?.data;
  const { id } = useParams();
  const naveget = useNavigate();
  const back = () => {
    let id = localStorage.getItem("id");
    naveget(`/posts/${id}`);
  };
  return (
    <>
      <div className="container">
        <div className="users">
          <div className="header">
            <p className="user_p">
              Comments Card <span id="id"></span>
            </p>
            <span id="back">
              <button onClick={back}>Orqaga</button>
            </span>
          </div>
          <div className="user_cards">
            {Data ? (
              Data?.map((el, i) => {
                if (el?.postId == id) {
                  return (
                    <div key={i} className="user_card2">
                      <p id="n">
                        Name:<span>{el?.name}</span>
                      </p>
                      <p id="e">
                        Email:<span>{el?.email}</span>
                      </p>
                      <p>
                        Body:<span>{el?.body}</span>
                      </p>
                    </div>
                  );
                }
              })
            ) : (
              <Card3 />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
