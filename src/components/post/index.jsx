import { Link, useParams } from "react-router-dom";
import { Card2 } from "../loading";

function Posts({ data }) {
  const Data = data?.data;
  const { id } = useParams();
  const Comments = () => {
    localStorage.setItem("id", JSON.stringify(+id));
  };
  return (
    <>
      <div className="container">
        <div className="users">
          <div className="header">
            <p className="user_p">
              Posts Card <span id="id"></span>
            </p>
            <Link to={"/"}>
              <button>Orqaga</button>
            </Link>
          </div>
          <div className="user_cards">
            {Data ? (
              Data?.map((el, i) => {
                if (el?.userId == id) {
                  return (
                    <div key={i} className="user_card1">
                      <p>{el?.title}</p>
                      <Link to={`/comments/${el?.id}`}>
                        <button onClick={Comments}>Comments</button>
                      </Link>
                    </div>
                  );
                }
              })
            ) : (
              <Card2 />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
