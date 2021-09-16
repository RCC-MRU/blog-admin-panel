import React, {  } from "react";
import {useState} from "react"
import {useDropzone} from "react-dropzone"; 
import "./NewPost.css";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";


function NewPostMain() {

  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ))



  // const [data, setData] = useState("");
  // console.log(data);
  return (
    <React.Fragment>
      <div className="container-fluid bground">
        <div className="row">
          <div className="col-md-9 newpost-left p-4 ml-5 bg-white my-4 cont text-white left">
            <div className="container">
              <div className="row my-4">
                {/* <IconContext.Provider value={{ color: "black" }}> */}
                  <Link to="/posts" >
                    <div className="col-6">
                      {/* <AiOutlineArrowLeft size={25} /> */}
                      <i className="fa fa-arrow-left text-dark fa-lg" aria-hidden="true"></i>
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
            <CKEditor
              editor={ClassicEditor}
              // value={data}
              // onChange={(e) => setData(e.target.value)}
            />
          </div>

          <div className="col-md-2 mr-5 sticky-bar bg-white my-4 cont min-vh-100 right">
            <button className="btn publish mt-5 mb-3 w-75 ml-4 fs-5 fw-bolder text-white ">
              Publish
              <span className="pl-3">
                {/* <AiOutlineSend size={25} /> */}
                <i className="fa fa-paper-plane fa-lg" aria-hidden="true"></i>
              </span>
            </button>
            <p className="text-center text-success">Status : published</p>
            <b className="fs-5">Permalink</b>
            <input
              type="text"
              className="w-100 mt-3 mb-4 form-control form-border-remove no-outline p-1  "
              placeholder="Link"
            />

            <b className="fs-5 ">Catogories</b>
            <section className="mt-2 mb-3 ">
              
<form action="">

<select id="catogory" className="  form-control form-border-remove no-outline">
  <option value="Health" className="options">Health</option>
  <option value="Fitness" className="options">Fitness</option>
  <option value="Workout" className="options">Workout</option>
  <option value="Workout" className="options">default</option>
</select>

</form>
            </section>
            <section className="dragbox px-2 text-center mt-4 mb-4">
            <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p className="dropbox p-2 " >Drop files here</p>
      </div>
      <div>{images}</div>
              
            </section>

            <section className="my-4 mx-1">
              <b className="fs-5">Meta Description</b>
              <div className="form-floating my-4">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                ></textarea>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NewPostMain;

