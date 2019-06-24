import React, { Component } from 'react';
import { Paper, Avatar, List, ListItem, ListItemIcon, ListItemText, Divider, Collapse } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Img from '../Images/img1.jpg';
import InnerItem from './innerItem';

class DropDownAbout extends Component {
    state = { }
    data=[
        {
            name: "Sample Name",
            img: Img,
            position: "FrontEnd",
            project: "Unicode Website",
            divider: true
        },
        {
            name: "Sample Name",
            img: Img,
            position: "FrontEnd",
            project: "Unicode Website",
            divider: true
        },
        {
            name: "Sample Name",
            img: Img,
            position: "FrontEnd",
            project: "Unicode Website",
            divider: true
        },
        {
            name: "Sample Name",
            img: Img,
            position: "FrontEnd",
            project: "Unicode Website",
            divider: false
        }
    ]
    render() { 
        const renderStudent = this.data.map(s=>{
            return(
                <React.Fragment>
                    <InnerItem divider={s.divider} project={s.project} name={s.name} img={s.img} />
                </React.Fragment>
            )
        })
        return ( 
            <React.Fragment>
                <Paper>
                    <List component="nav" aria-label="Main mailbox folders">
                        {renderStudent}
                    </List>
                </Paper>
            </React.Fragment>
         );
    }
}
 
export default DropDownAbout;