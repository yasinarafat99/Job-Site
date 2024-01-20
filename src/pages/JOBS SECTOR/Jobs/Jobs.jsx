import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../../firbase/firebase";
import {
  MdDeleteOutline,
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
} from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { BiSolidInstitution } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import "./Jobs.css";

import exparence from "../../../assets/images/Exp_brief.svg";

function Jobs({ job = {}, deletPost }) {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const {
    id,
    title,
    companyName,
    description,
    location,
    logo,
    position,
    isFavorite,
  } = job;

  const FavJob = async (uniqe) => {
    if (!user) {
      return Swal.fire({
        title: "First sign Up",
        icon: "warning",
      });
    }

    if (user) {
      const jobObj = {
        ...job,
        isFavorite: !isFavorite,
      };
      await axios.put(`http://localhost:9000/jobs/${uniqe}`, jobObj);
      navigate("/favorite");
    }
    if (!isFavorite) {
      toast.success("Favorite added");
    } else {
      toast.warn("Favorite removed");
    }
  };

  return (
    <>
      <div className="jobFullWidth">
        <div className="jobsCardBG">
          <div className="jobCard">
            {/* CRUD Icon */}
            <div className="crudIcon">
              <div className="favoriteIcon">
                <NavLink onClick={() => FavJob(id)}>
                  {isFavorite ? (
                    <MdOutlineFavorite style={{ color: "rgb(48, 243, 48)" }} />
                  ) : (
                    <MdOutlineFavoriteBorder />
                  )}
                </NavLink>
              </div>
              <div className="addIcon">
                <NavLink to={"/createjob"}>
                  <IoIosAddCircleOutline />
                </NavLink>
              </div>
              <div className="editIcon">
                <NavLink to={`/updatejob/${id}`}>
                  <FaRegEdit />
                </NavLink>
              </div>
              <div className="deleteIcon">
                <NavLink onClick={() => deletPost(id)}>
                  <MdDeleteOutline />
                </NavLink>
              </div>
            </div>
            {/* CRUD Icon */}
            <div className="jobCardText">
              <h1>
                <Link to={`/DetailsJob/${id}`}>{title}</Link>
              </h1>
              <p>{description}</p>
              <p className="company">
                {" "}
                <BiSolidInstitution /> {companyName}
              </p>
              <p className="location">
                <FaLocationDot />
                {location}
              </p>
              <p className="jobPosition">
                <img src={exparence} alt="" /> {position}
              </p>
              <div className="applyTodtlsBtn">
                <NavLink to={`/detailsjob/${id}`}>
                  <button>Apply Now</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;
