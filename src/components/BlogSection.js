import React, { useState } from "react";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import { excerpt } from "../utility";

const BlogSection = ({ blogs, user, handleDelete }) => {
  const [toBeDel, setToBeDel] = useState();
  const userId = user?.uid;
  return (
    <div>
      {blogs?.map((item) => (
        <div className="row pb-4" key={item.id}>
          <div className="col-md-5">
            <div className="hover-blogs-img">
              <div className="blogs-img hover--img">
                <img src={item.imgUrl} alt={item.title} />
                <div></div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="text-start">
              <span className="title py-2">{item.title}</span>
              <span className="meta-info">
                <p className="author">{item.author}</p> -&nbsp;
                {item.timestamp.toDate().toDateString()}
              </span>
            </div>
            <div className="short-description text-start">
              {excerpt(item.description, 120)}
            </div>
            <div>
              <Link to={`/detail/${item.id}`}>
                <button className="btn btn-read">Read More</button>
              </Link>
              {userId && item.userId === userId && (
                <>
                  <div style={{ float: "right" }}>
                    <Link to={`/update/${item.id}`}>
                      <FontAwesome
                        name="edit"
                        style={{ cursor: "pointer" }}
                        size="1.5x"
                      />
                    </Link>
                    <FontAwesome
                      name="trash"
                      style={{ margin: "10px 15px", cursor: "pointer" }}
                      size="1.5x"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => setToBeDel(item)}
                    />
                  </div>
                </>
              )}
            </div>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Delete
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    Are you sure you want to delete -> {toBeDel?.title}
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={() => setToBeDel("")}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={() => {
                        handleDelete(toBeDel.id);
                        setToBeDel("");
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;
