import '../App.css'
import { useEffect, useState } from "react"
function Table(props) {
    const [search, setSearch] = useState("")
    let { data } = props;
    const handleChange = (e) => {
        // console.log(e.target.value);
        setSearch(e.target.value)
    }

// console.log(search,"searchh");
    let fc =  data && data.filter((c)=>{
        // console.log(c,"cc");
return        c.Country.toLowerCase().includes(search.toLowerCase())
// console.log(fc,"fc-------->");    
    })

    return (

        <div className="container">
            {/* <h1>Made by Vihang Patel</h1> */}
            <h1 className='text-dark'>Corona Details </h1>
            <div className="coin-search row " >
                <form action="" className="col-12  mb-4" >
                    <input
                        type="text"
                        className="coin-input"
                        placeholder="Type the Country name"
                        onChange={handleChange}
                    />
                </form>
            </div>

            <table className="rwd-table">
                <tbody>
                    <tr>
                        <th>Country Name</th>
                        <th>TotalConfirmed</th>
                        <th>TotalDeaths</th>
                        <th>TotalRecovered</th>
                    </tr>
                    {/* When you use array function, make sure you check if array length is > 0 */}
                    {
                       fc && fc.length >0 && fc.map((e) => {
                            return (
                                <>

                                    <tr key={e.id}>
                                        <td data-th="Country">
                                            {e.Country}
                                        </td>
                                        <td data-th="TotalConfirmed">
                                            {e.TotalConfirmed}
                                        </td>
                                        <td data-th="TotalDeaths">
                                            {e.TotalDeaths}
                                        </td>
                                        <td data-th="TotalRecovered">
                                            {e.TotalRecovered}
                                        </td>
                                    </tr>

                                </>
                            )
                        })
                    }

                </tbody>
            </table>
            
        </div>

    )
}
export default Table;