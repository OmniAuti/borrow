
const DumpObject = ({data}) => {


    return (           
    <div className=" h-80  w-1/3 rounded-md my-2 p-2">
        <div className="bg-white w-full h-full rounded-md p-2">
            <img className="h-1/2 w-3/4 mx-auto object-contain ob" src="./imgs/71C4yuOHHdL._AC_SL1500_.jpg" alt=""/>
            <ul className="mt-5">
                <li className="text-black m-1">Type: {data.name}</li>
                <li className="text-black m-1">Count: {data.count}</li>
                <li className="text-black m-1">Condition: {data.condition}</li>
                <li className="text-black m-1">Location: Chicago, 60625</li>
            </ul>               
        </div>
    </div>
)
}

export default DumpObject;