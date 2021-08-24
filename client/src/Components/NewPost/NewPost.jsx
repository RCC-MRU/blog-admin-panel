import React, {  } from "react";
import "./NewPost.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import { AiOutlineSave } from "react-icons/ai";
// import { AiOutlineSend } from "react-icons/ai";
// import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });

  inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });

  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });

  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone--over");
  });
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

  // First time - remove the prompt
  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove();
  }

  // First time - there is no thumbnail element, so lets create it
  if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    dropZoneElement.appendChild(thumbnailElement);
  }

  thumbnailElement.dataset.label = file.name;

  // Show thumbnail for image files
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}

function NewPostMain() {
  // const [data, setData] = useState("");
  // console.log(data);
  return (
    <React.Fragment>
      <div className="container-fluid bground">
        <div className="row">
          <div className="col-md-10 mx-4 bg-white my-4 cont text-white left">
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
                  <button className="btn save text-white fw-bolder px-5">
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
                  className="w-100 my-2 fw-bolder title-box border-0 "
                  placeholder="Title of the post goes here"
                />
              </div>
            </div>
            <CKEditor
              editor={ClassicEditor}
              // value={data}
              // onChange={(e) => setData(e.target.value)}
            />
          </div>

          <div className="col-md-2 mx-4 sticky-bar bg-white my-4 cont min-vh-100 right">
            <button className="btn publish my-4 w-100 fs-5 fw-bolder text-white ">
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
              className="w-100 mt-3 mb-4 link-box border-0 p-1  "
              placeholder="Link"
            />

            <b className="fs-5 ">Catogories</b>
            <section className="mt-2 mb-3 mx-5">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle bg-white text-dark border-0 w-100 link-box"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  undefined
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <a className="dropdown-item active" href="g">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="g">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="g">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="g">
                      Separated link
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            <section>
              <div className="drop-zone mx-3">
                <span className="drop-zone__prompt">
                  Drop file here or click to upload
                </span>
                <input type="file" name="myFile" className="drop-zone__input" />
              </div>
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
