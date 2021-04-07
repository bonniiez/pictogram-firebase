import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsubscribe = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc') // newest documents first 
            .onSnapshot((snapshot) => {
                //listening to realtime updates of collection
                let documents = [];
                snapshot.forEach(doc => {
                    documents.push({
                        ...doc.data(),
                        id: doc.id,
                    });
                });
                setDocs(documents);

            })

        return () => unsubscribe();
    }, [collection]);
    return { docs };
}

export default useFirestore;