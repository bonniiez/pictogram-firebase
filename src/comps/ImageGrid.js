import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
    var { docs } = useFirestore("images");
    return (
        <div className="img-grid">
            { docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                    layout
                    whileHover={{ opacity: 1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedImg(doc.url)}>
                    <motion.img src={doc.url} alt="uploaded pic"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}

                    />

                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;