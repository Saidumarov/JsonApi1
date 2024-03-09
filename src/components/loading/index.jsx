let arry = [{}, {}, {}, {}, {}, {}];
function Card1() {
  return (
    <>
      {arry?.map((_, i) => (
        <div key={i} className="user_card">
          <div className="loading_card"></div>
        </div>
      ))}
    </>
  );
}

export default Card1;

export function Card2() {
  return (
    <>
      {arry?.map((_, i) => (
        <div key={i} className="user_card1">
          <div className="loading_card"></div>
        </div>
      ))}
    </>
  );
}

export function Card3() {
  return (
    <>
      {arry?.map((_, i) => (
        <div key={i} className="user_card2">
          <div className="loading_card"></div>
        </div>
      ))}
    </>
  );
}

export function Card4() {
  return (
    <>
      {arry?.map((_, i) => (
        <div key={i} className="user_card3">
          <div className="loading_card"></div>
        </div>
      ))}
    </>
  );
}

export function Card5() {
  return (
    <>
      {arry?.map((_, i) => (
        <div key={i} className="user_card2" id="user_card2">
          <div className="loading_card"></div>
        </div>
      ))}
    </>
  );
}
