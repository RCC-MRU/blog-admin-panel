import React from "react";
import Footer from "../Footer";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./NewPost.css";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";

function NewPostMain() {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ));

  // const [data, setData] = useState("");
  // console.log(data);
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="d-flex justify-content-center m-2">
          <div className="col-12 col-md-10 bg-white my-4 cont">
            <div className="container">
              <div className="row my-4">
                {/* <IconContext.Provider value={{ color: "black" }}> */}
                <Link to="/posts">
                  <div className="col-6">
                    {/* <AiOutlineArrowLeft size={25} /> */}
                    <i
                      className="fa fa-arrow-left text-dark fa-lg"
                      aria-hidden="true"
                    ></i>
                  </div>
                </Link>
                {/* </IconContext.Provider> */}
                <div className="col-6 color-black ml-auto">
                  <button className="btn save text-white fw-bolder postbutton px-5">
                    Save{" "}
                    <span className="pl-2">
                      {/* <AiOutlineSave size={25} /> */}
                      <i className="fa fa-save fa-lg"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="container p-4">
              <div className="row">
                <input
                  type="text"
                  placeholder="Title of the post goes here"
                  className="form-control form-border-remove no-outline"
                  name="title"
                  required
                />
              </div>
            </div>

            <div className="py-3">
              <CKEditor editor={ClassicEditor} />
            </div>
          </div>

          <div className="mx-2"></div>

          <div className="col-12 col-md-2 sticky-bar bg-white my-4 cont h-100">
            {/* Button */}
            <section className="d-block text-center px-3 py-3">
              <button className="btn publish font-weight-bolder text-white w-100">
                Publish &nbsp;
                <i className="fa fa-paper-plane fa-lg"></i>
              </button>
              <p className="text-center text-success">Status : published</p>
            </section>

            {/* Link block */}
            <section className="d-block text-center px-3 py-3">
              <b className="fs-5">Permalink</b>
              <input
                type="text"
                className="w-100 mt-3 mb-4 form-control form-border-remove no-outline p-1  "
                placeholder="Link"
              />
            </section>

            {/* Category selection block */}
            <section className="d-block text-center px-3 py-3">
              <b className="fs-5 ">Catogories</b>
              <div className="mt-2 mb-3 ">
                <form action="">
                  <select
                    id="catogory"
                    className="  form-control form-border-remove no-outline"
                  >
                    <option value="Health" className="options">
                      Health
                    </option>
                    <option value="Fitness" className="options">
                      Fitness
                    </option>
                    <option value="Workout" className="options">
                      Workout
                    </option>
                    <option value="Workout" className="options">
                      default
                    </option>
                  </select>
                </form>
              </div>
            </section>

            {/* Image block */}
            <section className="d-block text-center px-3 py-3">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p className="dropbox p-2 ">Drop files here</p>
              </div>
              <div>{images}</div>
            </section>

            {/* Meta description */}
            <section className="d-block text-center px-3 py-3">
              <b className="fs-5">Meta Description</b>
              <div className="form-floating my-4">
                <textarea
                  className="form-control form-border-remove no-outline"
                  placeholder="Meta Description"
                  id="floatingTextarea2"
                ></textarea>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default NewPostMain;

// TODO: css of left and right column resp
// col-md-9 newpost-left p-4 ml-5 bg-white my-4 cont text-white left
// col-md-2 mr-5 sticky-bar bg-white my-4 cont min-vh-100 right
