import DumpObject from './DumpObject';

import {useEffect, useState} from 'react'
import { fetchAllItems } from '../api/api';

const SupplyDump = () => {

const [dumpData, setDumpData] = useState([])

useEffect(() => {
    fetchAllItems().then(res => setDumpData(res.data));
}, [])



    return (
        <section className=" w-full container overflow-hidden mx-auto">
            <h3 className="text-center text-3xl mt-4">Local Supplies</h3>
            <div className="flex  items-center justify-around flex-wrap">
            {dumpData.slice(0,3).map(data => <DumpObject key={data._id} data={data}/>)}
            </div>
        </section>
    )
}

export default SupplyDump;