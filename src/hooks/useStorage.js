import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  //  This listens for the state change event to monitor the upload progress
  useEffect(() => {
    //references
    var storageRef = projectStorage.ref();
    var collectionRef = projectFirestore.collection("images");
    var imageRef = storageRef.child(file.name);
    var uploadTask = imageRef.put(file); 

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        let percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const imgurl = await imageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({
          url: imgurl,
          createdAt,
        });
        setUrl(imgurl);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
