import { useNavigate, useParams } from "react-router-dom";
import { Card5 } from "../loading";

function Photos({ data }) {
  const Data = data?.data;
  const { id } = useParams();
  const naveget = useNavigate();
  const back = () => {
    let id = localStorage.getItem("id");
    naveget(`/albums/${id}`);
  };

  return (
    <>
      <div className="container">
        <div className="users">
          <div className="header">
            <p className="user_p">
              Photos Card <span id="id"></span>
            </p>
            <span id="back">
              <button onClick={back}>Orqaga</button>
            </span>
          </div>
          <div className="user_cards">
            {Data ? (
              Data?.map((el, i) => {
                if (el?.albumId == id) {
                  return (
                    <div key={i} className="user_card2" id="user_card2">
                      <div id="photos">
                        <p>Body:{el?.title}</p>
                        <img src={el?.url} className="photos1" />
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <Card5 />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Photos;
