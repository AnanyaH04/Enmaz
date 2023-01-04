import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import NewScheduleLogo from '../../Images/NewSchedule.png'
import './NewSchedule.css'
import Filter from './newFilter';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='NewscheduleBody' >
      <Button 
      size="small"
      variant="contained"
      style={{
        background: "#004a77",
        fontSize: "14px",
        padding: "10px 24px 10px 24px",
        borderRadius: "100px",
      }}
      onClick={handleClickOpen}>
        Create New Schedule
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
            style: {
              backgroundColor: '#FCFCFF',
              boxShadow: 'none',
            },
          }}
      >
        <img src={NewScheduleLogo} alt="Form Logo" className='logo' sx={{background:'green'}} />
        <DialogTitle id="alert-dialog-title" className='NewscheduleBody'>
          {"Create New Schedule"}
        </DialogTitle>
        <DialogContent className='NewscheduleBody'>
          <DialogContentText id="alert-dialog-description" className='NewscheduleBody'>
            <Filter/>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
