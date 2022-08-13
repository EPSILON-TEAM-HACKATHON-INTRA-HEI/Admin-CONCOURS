import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import MenuIcon from '@mui/icons-material/Menu';
export default function Sidebar():React.ReactElement{
    const [ok,setOk]=useState(false)
    return(
        <div className='navbar'>
        <React.Fragment key={"hmm"}>
          <Button onClick={()=>{setOk(!ok)}}><MenuIcon />{"test"}</Button>
          <Drawer
            anchor={"left"}
            open={ok}
            onClose={()=>{setOk(!ok)}}
          >
            <List>
        {['Home', 'Statistique'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <HomeIcon color='inherit' /> : <BarChartIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
          </Drawer>
        </React.Fragment>
        <div className="mr-4 text-white logout">Logout</div>
    </div>
    )
}