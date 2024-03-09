import { Link, useParams } from "react-router-dom";
import { Card4 } from "../loading";

function Todos({ data }) {
  const Data = data?.data;
  const { id } = useParams();
  return (
    <>
      <div className="container">
        <div className="users">
          <div className="header">
            <p className="user_p">
              Todos Card <span id="id"></span>
            </p>
            <Link to="/">
              <button>Orqaga</button>
            </Link>
          </div>
          <div className="user_cards">
            {Data ? (
              Data?.map((el, i) => {
                if (el?.userId == id) {
                  return (
                    <div key={i} className="user_card3">
                      <p id="n">{el.completed ? "✔" : "❌"}</p>
                      <p>
                        Body:<span>{el?.title}</span>
                      </p>
                    </div>
                  );
                }
              })
            ) : (
              <Card4 />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todos;
