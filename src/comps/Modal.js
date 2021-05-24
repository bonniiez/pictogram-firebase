import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { motion } from "framer-motion";
import { projectFirestore } from "../firebase/config";
import { withStyles } from "@material-ui/core/styles/";

const styles = (theme) => ({
  width: {
    width: "fit-content",
    float: "right",
    position: "fixed",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
  root: {
    background: '#ff9800',
    fontWeight: 600,
  }
});

const Modal = (props) => {
  const { selectedImg, setSelectedImg, imgId, classes } = props;
  const [openPopup, setOpenPopup] = useState(false);

  // close the modal by clicking outside the image
  const handleClickCloseModal = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  const handleClosePopUp = () => {
    setOpenPopup(false);
  };

  const handleDeleteImageFromFirebase = () => {
    // setSelectedImg(null); 
    // retrieve the image and delete it from Firebase
    projectFirestore
      .collection("images")
      .doc(imgId)
      .delete()
      .then((res) => {
        console.log("Picture is deleted successfully!");
        setOpenPopup(true);        
      })
      .catch((error) => {
        console.log("problem deleting img");
      });
      
  };

  return (
    <Container maxWidth="md">
      <motion.div
        className="backdrop"
        onClick={handleClickCloseModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.img
          src={selectedImg}
          alt="enlarged pic"
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
        />
        <Box mr={2}>
          <Button
            className={classes.width}
            size="small"
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            // m={5}
            onClick={handleDeleteImageFromFirebase}
          >
            Delete
          </Button>
        </Box>
      </motion.div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        ContentProps={{
          classes: {
            root: classes.root
          }
        }}
        open={openPopup}
        autoHideDuration={6000}
        onClose={handleClosePopUp}
        message="Image deleted"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClosePopUp}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      ></Snackbar>
    </Container>
  );
};

export default withStyles(styles)(Modal);
