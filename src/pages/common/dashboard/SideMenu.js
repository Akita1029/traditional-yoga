import React from "react"
import { 
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from "@mui/material"
import logo from '../../../assets/images/logo-primary.png';
import { menuItems } from "../../../utilities/config";

const SideMenu = ({onSelectMenu, currentMenu, expanded}) => {
    function RenderSubHeader(menuItem) {
        return (
            <ListSubheader component="div" key={menuItem.key}
                sx={{
                    background: 'transparent',
                }}>
                { menuItem.title }
            </ListSubheader>
        )
    }
    
    function RenderMenuItem(menuItem) {
        return (
            <ListItemButton key={menuItem.key}
                selected={currentMenu === menuItem.key}
                onClick={() => onSelectMenu(menuItem)}
                
                sx={{
                    marginX: 2,
                    borderRadius: 2,
                    color: '#F96302',
                    '&, & .MuiListItemIcon-root': {
                        color: '#F96302',
                        minWidth: "30px",
                    },
                    // selected and (selected + hover) states
                    '&.Mui-selected, &.Mui-selected:hover': {
                        bgcolor: '#F96302',
                        '&, & .MuiListItemIcon-root': {
                            color: 'white',
                        },
                    },
                }}>
                <ListItemIcon>
                    {menuItem.icon}
                </ListItemIcon>
                <ListItemText primary={ menuItem.title } />
            </ListItemButton>
        )
    }

    const getSidebarStyle = () => {
        return !expanded ? "dashboard-side-menu" : "dashboard-side-menu hide"
    }

    return (
        <div className={getSidebarStyle()}>
            <div className="side-menu-logo">
                <img src={logo} alt="Dashboard Primary Logo"/>
            </div>
            <List
                component="nav"
            >
            { menuItems.map((menuItem) => (
                menuItem.type === "subheader" ? RenderSubHeader(menuItem) : RenderMenuItem(menuItem)
            ))}
            </List>
        </div>
    )
}

export default SideMenu