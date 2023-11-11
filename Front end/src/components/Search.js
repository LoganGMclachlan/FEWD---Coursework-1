import { useEffect, useState } from "react"


export default function Search({hostels,setFilterd}){
    const [searchField, setSearchField] = useState("")

    const filtered = hostels.filter(item => {
        return (item.name.toLowerCase().includes(searchField.toLowerCase()))
    })

    useEffect(() => {
        setFilterd(filtered)
    }, [filtered])

    return(
        <div>
            <input
                placeholder="Search..."
                onChange={e => setSearchField(e.target.value)}
            />
            <br/>
            <label>Has Cafe?:</label>
            <input type="checkbox"/>
        </div>
    )
}