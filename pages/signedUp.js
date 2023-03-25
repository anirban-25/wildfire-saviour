import React, { useEffect, useState } from "react";
import Loader from '../components/Loader';
import MapHeader from "../components/MapHeader";
import Maph from "../components/Map";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
function signedUp() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  let router= useRouter();
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const refreshToast = toast.loading('Refreshing...');
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
      toast.success('Feed Updated!',{
        id:refreshToast
      })
    }

    fetchEvents()
  }, [])
  useEffect(() => {
    let token = sessionStorage.getItem("Token");
    if (!token) {
      router.push("/loggedIn");
    }
  }, []);

  return (
    <div>
      <MapHeader/>
      { !loading ? <Maph eventData={eventData} /> : <Loader/> }
    </div>
  );
}

export default signedUp;
