import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import { useRouter } from "next/router";

const MapHeader = () => {

    let router = useRouter();

    const logout = () => {
        sessionStorage.removeItem("Token");
        router.push("/loggedIn");
      };
      
    return (
        <header className="sticky top-0 flex justify-between items-center p-10 bg-red-800 text-white z-100 right-0 left-0 text-xl">
            <h1 className='text-[25px] mb-4'><Icon icon={locationIcon} /> Wildfire Tracker (Powered By NASA)</h1>
            <button onClick={logout} type="button" className="text-white space-x-3 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">LogOut</button>
        </header>
    )
}

export default MapHeader;
