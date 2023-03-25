const LocationInfoBox = ({ info }) => {
    return (
        <div className="absolute top-80 right-50 w-400 min-h-200 p-10 bg-white rounded-md text-[18px] text-black">
            <h2>Event Location Info</h2>
            <ul>
    <li>ID: <strong>{ info.id }</strong></li>
    <li>TITLE: <strong>{ info.title }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
