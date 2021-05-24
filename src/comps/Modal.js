import React from "react";
import { motion } from "framer-motion";
import { projectFirestore } from "../firebase/config";

const Modal = ({
  selectedImg,
  setSelectedImg,
  imgId
}) => {
  // close the modal by clicking outside the image
  const handleClickCloseModal = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };


  const handleDeleteImageFromFirebase = () => {
    // retrieve the image and delete it from Firebase
        projectFirestore
          .collection("images")
          .doc(imgId) 
          .delete()
          .then((res) => {
        // TODO: use Material UI Snackbar component for notifications
        console.log("Picture is deleted successfully!");
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        console.log("problem deleting img");
      });
  };

  return (
    <div>
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
        <button
          className=" logout-button"
          onClick={handleDeleteImageFromFirebase}
        >
          Delete Image
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
