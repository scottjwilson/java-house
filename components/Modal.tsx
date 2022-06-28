import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
const overlay = `h-screen w-screen bg-black overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-opacity-70 flex`;
const container = `m-auto w-[500px] p-2`;
const modalstyle = `h-auto flex flex-col shadow-2xl`;
const modalheader = `shadow-lg bg-gray-200 flex justify-between items-center rounded-t p-4`;
const modalbody = `bg-white h-full rounded-b-md`;
const h1 = `text-2xl font-bold`;

export default function Modal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={overlay}>
      <motion.div
        initial={{ y: "50%", opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: "50%", opacity: 0 }}
        className={container}
      >
        <div className={modalstyle}>
          <div className={modalheader}>
            <div>{title && <h1 className={h1}>{title}</h1>}</div>
            <div>
              <button
                onClick={handleClose}
                className="btn btn-circle btn-sm text-xl text-white"
              >
                &times;
              </button>
            </div>
          </div>

          <div className={modalbody}>{children}</div>
        </div>
        {/* </motion.div> */}
      </motion.div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}
