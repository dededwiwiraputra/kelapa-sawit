"use client";

import { useRef, useState } from "react";
export default function DragAndDrop() {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>([]);

  function handleChange(e: any) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files);
      for (let i = 0; i < e.target.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.target.files[i]]);
      }
    }
  }

  const handleSubmitFile = async () => {
    // Create a FormData object to append files
    const formData = new FormData();

    // Append each selected file to the FormData object
    files.forEach((file: File) => {
      formData.append("file", file);
    });

    try {
      // Send a POST request to the API endpoint
      const response = await fetch("http://server.sistekhagano.org/predict", {
        method: "POST",
        body: formData,
      });

      // Check if the request was successful (status code 200)
      if (response.ok) {
        // Handle the successful response (e.g., show a success message)
        console.log("Files uploaded successfully!");
      } else {
        // Handle the error response (e.g., show an error message)
        console.error("Failed to upload files");
      }
    } catch (error) {
      // Handle any network or other errors
      console.error("An error occurred:", error);
    }
  };

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]]);
      }
    }
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function removeFile(fileName: any, idx: any) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  return (
    <form
      onDragEnter={handleDragEnter}
      onSubmit={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
    >
      <div className="flex items-center justify-center">
        <div
          className={`${
            dragActive ? "bg-tcp2" : "bg-tcp1"
          } rounded-lg text-center flex flex-col items-center justify-center border-black border-2 p-[0.5rem]`}
        >
          <div className="text-center flex flex-col items-center justify-center border-black border-dashed border-2 rounded-lg px-[3rem] h-[15rem]">
            {/* this input element allows us to select files for upload. We make it hidden so we can activate it when the user clicks select files */}
            <input
              placeholder="fileInput"
              className="hidden"
              ref={inputRef}
              type="file"
              multiple={true}
              onChange={handleChange}
              accept=".jpg, .jpeg, .tiff"
            />

            <p className="text-xl font-bold">
              Drag & Drop files or{" "}
              <span
                className="text-blue-600 cursor-pointer"
                onClick={openFileExplorer}
              >
                <u>Select files</u>
              </span>{" "}
              to upload
            </p>

            <p className="mt-[0.5rem]">Accepted File: .jpg, .jpeg, .tiff</p>

            <div className="flex flex-col items-center p-3">
              {files.map((file: any, idx: any) => (
                <div key={idx} className="flex flex-row space-x-5">
                  <span>{file.name}</span>
                  <span
                    className="text-red-500 cursor-pointer"
                    onClick={() => removeFile(file.name, idx)}
                  >
                    remove
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[8rem]">
        <button
          type="button"
          className="active-button font-bold text-lg text-primary py-2 px-10 rounded-full"
          onClick={handleSubmitFile}
        >
          Mulai Deteksi
        </button>
      </div>
    </form>
  );
}
