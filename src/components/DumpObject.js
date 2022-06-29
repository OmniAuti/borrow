const DumpObject = ({ data }) => {
  var cardBgColor;

  switch (data.type) {
    case "Pencil":
      cardBgColor = "#fee2e2";
      break;
    case "notebook":
      cardBgColor = "#dbeafe";
      break;
    case "highlighter":
      cardBgColor = "#dcfce7";
      break;
    case "binder":
      cardBgColor = "#fef9ce";
      break;
    case "ruler":
      cardBgColor = "#fce7f3";
      break;
    case "calculator":
      cardBgColor = "#f1f5f9";
      break;
    case "backpack":
      cardBgColor = "#f3e8ff";
      break;
    default:
      cardBgColor = "#fff";
      break;
  }

  return (
    <div className=" w-1/3 rounded-md my-2 p-2 h-96">
       <div
        className=" bg-white w-full h-full rounded-md p-5"
        style={{ outline: `5px solid ${cardBgColor}` }}
      >
        <img
          className="h-1/2 w-3/4 mx-auto object-contain"
          src="./imgs/71C4yuOHHdL._AC_SL1500_.jpg"
          alt=""
        />
        <ul className="my-5">
          <li className="text-black m-1">Type: {data.type}</li>
          <li className="text-black m-1">Quantity: {data.quantity}</li>
          <li className="text-black m-1">Description: {data.description}</li>
          <li className="text-black m-1">Condition: {data.condition}</li>
          <li className="text-black m-1">Location: {data.location} ZIP: {data.zipcode}</li>
        </ul>
      </div>
    </div>
  );
};

export default DumpObject;
