import React from 'react';
import { useRecoilState } from 'recoil';
import Modal from 'react-modal';
import { CameraIcon } from '@heroicons/react/24/outline';
import { modalState } from '../atom/modalAtom';

export default function UploadModal() {
  const filePickerRef = React.useRef(null);
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = React.useState(null);

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedFile(null);
  };

  return (
    <div>
      {open && (
        <Modal
          isOpen={open}
          onRequestClose={closeModal}
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            {!selectedFile ? (
              <CameraIcon
                onClick={() => filePickerRef.current.click()}
                className="cursor-pointer h-14 bg-red-200 p-2 rounded-full border-2 text-red-500"
              />
            ) : (
              <img
                src={selectedFile}
                alt="selected file"
                className="w-full max-h-[250px] object-cover cursor-pointer"
                onClick={() => setSelectedFile(null)}
              />
            )}
            <input type="file" hidden ref={filePickerRef} onChange={addImageToPost} />
            <input
              type="text"
              maxLength="150"
              placeholder="Please enter your caption..."
              className="m-4 border-none text-center w-full focus:ring-0"
            />
            <button
              className="w-full bg-red-600 text-white p-2 shadow-md hover:brightness-125 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
              disabled
            >
              Upload Post
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
