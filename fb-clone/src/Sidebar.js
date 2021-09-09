import React from 'react'
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
    <div className="sidebar">
        <SidebarRow src=" https://scontent.fhio2-2.fna.fbcdn.net/v/t1.6435-1/p320x320/189668690_4521491961213242_829688004156073505_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Ys0_zRqE_1oAX9JCcvC&_nc_ht=scontent.fhio2-2.fna&oh=f4bf13367ab2b1b19867d4411d9b8a9d&oe=615BF513" title="Larry Chiem" />
        <SidebarRow
          Icon={LocalHospitalIcon}
          title="COVID-19 Information Center"
        />
        <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>    
        <SidebarRow Icon={PeopleIcon} title='Friends'/>    
        <SidebarRow Icon={ChatIcon} title='Messenger'/>    
        <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>    
        <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>    
        <SidebarRow Icon={ExpandMoreOutlined} title='Expand Mores'/>    
    </div>
    )
}

export default Sidebar
