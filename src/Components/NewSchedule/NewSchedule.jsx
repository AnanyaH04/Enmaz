// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import NewScheduleLogo from '../../Images/NewSchedule.png'
// import './NewSchedule.css'
// import Filter from './newFilter';

// export default function AlertDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div className='NewscheduleBody' >
//       <Button 
//       size="small"
//       variant="contained"
//       style={{
//         background: "#004a77",
//         fontSize: "14px",
//         padding: "10px 24px 10px 24px",
//         borderRadius: "100px",
//       }}
//       onClick={handleClickOpen}>
//         Create New Schedule
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//         PaperProps={{
//             style: {
//               backgroundColor: '#FCFCFF',
//               boxShadow: 'none',
//             },
//           }}
//       >
//         <img src={NewScheduleLogo} alt="Form Logo" className='logo' sx={{background:'green'}} />
//         <DialogTitle id="alert-dialog-title" className='NewscheduleBody'>
//           {"Create New Schedule"}
//         </DialogTitle>
//         <DialogContent className='NewscheduleBody'>
//           <DialogContentText id="alert-dialog-description" className='NewscheduleBody'>
//             <Filter/>
//           </DialogContentText>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Filter from './newFilter';
import NewScheduleLogo from '../../Images/NewSchedule.png';
import './NewSchedule.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fit-content',
  background: 'linear-gradient(0deg, rgba(193, 193, 193, 0.11), rgba(193, 193, 193, 0.11)), #FCFCFF',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button 
      variant="contained"
            style={{
              background: "#004a77",
              fontSize: "14px",
              padding: "10px 24px 10px 24px",
              borderRadius: "100px",
            }}
      onClick={handleOpen}>
      Create New Schedule
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box  className='logo' sx={{marginLeft:'50%'}}>
            <img src={NewScheduleLogo} alt="Form Logo" />
          </Box>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:'center'}}>
          Create New Schedule
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Filter/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}