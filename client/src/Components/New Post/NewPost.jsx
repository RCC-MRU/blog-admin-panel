import React from "react";
import "./NewPost.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid bground">
        <div className="row">
          <div className="col-md-9 mx-4 bg-white my-4 cont text-white left">
            <section className="my-3 ">
              <div className="float-start">
                <p className="text-dark fw-bolder">exit icon</p>
              </div>
              <div className="float-end">
                <button className="btn save text-white fw-bolder px-5">
                  Save
                </button>
              </div>
            </section>
            <div className="container p-4">
              <div className="row">
                <input
                  type="text"
                  className="w-100 my-2 fw-bolder title-box border-0 "
                  placeholder="Title of the post goes here"
                />
              </div>
            </div>
            <CKEditor editor={ClassicEditor} />
          </div>

          <div className="col-md-2 mx-4 sticky-bar bg-white my-4 cont min-vh-100 right">
            <button className="btn publish my-4 w-100 fs-5 fw-bolder text-white ">
              Publish
            </button>
            <p className="text-center text-success">Status : published</p>
            <b className="fs-5">Permalink</b>
            <input
              type="text"
              className="w-100 mt-3 mb-4 link-box border-0 p-1  "
              placeholder="Link"
            />

            <b className="fs-5 ">Catogories</b>
            <section className="mt-2 mb-3  mx-5">
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
              <div class="drop-zone mx-3">
                <span class="drop-zone__prompt">
                  Drop file here or click to upload
                </span>
                <input type="file" name="myFile" class="drop-zone__input" />
              </div>
            </section>

            <section class="my-4 mx-1">
              <b className="fs-5">Meta Description</b>
              <div class="form-floating my-4">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                ></textarea>
                <label for="floatingTextarea2">
                  ( Text box max 300 words )
                </label>
              </div>
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
