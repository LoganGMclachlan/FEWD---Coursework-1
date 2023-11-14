import Map from "./Map"
import StarRating from "./StarRating"

export default function HostelDetails({hostel}){
    return(
        <div style={{"width":"40%"}}>
            <div className="container details">
                <h2 style={{"margin":"0px","marginBottom":"0px"}}>{hostel.name}</h2>
                <>{hostel.description}</><br/><hr/>

                <div style={{"fontSize":"0.8em"}}>
                    <div style={{"float":"right"}}>
                        <StarRating ratings={hostel.ratings}/>
                        {hostel.cafe
                            ?<label> | Has Cafe</label>
                            :<label> | No Cafe</label>
                        }<br/>
                        {hostel.phone}
                    </div>

                    <>
                        {hostel.email}<br/>{hostel.address}, {hostel.postcode}
                    </>
                </div>
            </div>

            <div className="container">
                <Map locations={[hostel.location]}/>
            </div>
        </div>
    )
}