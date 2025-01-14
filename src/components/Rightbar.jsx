import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import img1 from '../assests/img1.jpg'
import img2 from '../assests/img2.jpg'
import img3 from '../assests/img3.jpg'
import img4 from '../assests/img4.jpg'
import img5 from '../assests/img5.jpg'
import img6 from '../assests/img6.jpg'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{xs:"none",sm:'block'}}}>
      <Box position="fixed" width={380}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup total={10} sx={{justifyContent:"center"}}>
          <Avatar alt="Remy Sharp" src={img1}/>
          <Avatar alt="Travis Howard" src={img2}/>
          <Avatar alt="Cindy Baker" src={img3} />
          <Avatar alt="Agnes Walker" src={img4} />
          <Avatar alt="Trevor Henderson" src={img5} />
          <Avatar alt="Trevor Henderson" src={img6} />
        </AvatarGroup>
        
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={164} gap={5} sx={{justifyContent:"center"}}>
        {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
          
          
        </ImageList>

        <Typography variant='h6' fontWeight={100}>Latest Conversation</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

        
      </Box>
    </Box>
  )
}
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
 
  
];
export default Rightbar
