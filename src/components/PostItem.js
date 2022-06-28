import {useState} from 'react'

import { postSingleItem } from '../api/api'

const PostItem = () => {

    const [formData, setFormData] = useState({name: '', count: 0, condition: '', location: ''})


const handleNameChange = (e) => {
    setFormData({...formData, name: e.target.value})
}

const handleCountChange = (e) => {
    setFormData({...formData, count: e.target.value})
}


const handleConditionChange = (e) => {
    setFormData({...formData, condition: e.target.value})
    console.log(formData)
}

const handleLocationChange =(e) => {
    setFormData({...formData, location: e.target.value})
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData, 'logged')
    postSingleItem(formData);
}

    return(
        <section className="text-center flex items-center justify-center">
    <form onSubmit={(e) => handleSubmit(e)} method='post' action='/api/v1/allItems' className="text-black">
        <input onChange={(e) => handleNameChange(e)} className="block my-2" type="text" name="name"/>
        <input onChange={(e) => handleCountChange(e)} className="block my-2" type="number" name="count"/>
        <select onChange={(e) => handleConditionChange(e)} className="block my-2">
            <option>new</option>
            <option>slightly used</option>
            <option>moderately used</option>
            <option>heavily used</option>
        </select>
        <input onChange={(e) => handleLocationChange(e)} className="block my-2" type="text" name="location"/>
        <input type="submit" className="text-white cursor-pointer"/>
    </form>
    </section>
    )
}

export default PostItem;