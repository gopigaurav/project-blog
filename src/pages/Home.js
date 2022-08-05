import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import BlogSection from "../components/BlogSection";
import Spinner from "../components/Spinner";
import { db } from "../firebase";
import { toast } from "react-toastify";

const Home = ({ setActive, user }) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "blogs"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(list);
        setLoading(false);
        setActive("home");
      },
      (error) => {
        toast.error(error.message);
      }
    );

    return () => {
      unsub();
    };
  }, [setActive]);

  if (loading) {
    return <Spinner />;
  }

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await deleteDoc(doc(db, "blogs", id));
      toast.success("Blog deleted successfully");
      setLoading(false);
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="container-fluid pb-4 pt-4 padding">
      <div className="container padding">
        <div className="row mx-0">
          <div className="">
            <BlogSection
              blogs={blogs}
              user={user}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
