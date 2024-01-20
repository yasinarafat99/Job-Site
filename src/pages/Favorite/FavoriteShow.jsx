import { BiSolidInstitution } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import exparnce from "../../assets/images/Exp_brief.svg";
import './fav.css'


function FavoriteShow({ fav }) {
  const {
    id,
    title,
    companyName,
    description,
    location,
    logo,
    position,
    isFavorite,
  } = fav;

  return (
    <>
      {
        <div className="jobFullWidth">
          <div className="jobsCardBG" key={id}>
            <div className="jobCard">
              {/*  */}
              <div className="favoriteIcon">
                <NavLink>
                  {isFavorite ? (
                    <MdOutlineFavorite style={{ color: "rgb(48, 243, 48)" }} />
                  ) : (
                    <MdOutlineFavoriteBorder />
                  )}
                </NavLink>
              </div>
              {/*  */}
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
                  <img src={exparnce} alt="" /> {position}
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
      }
    </>
  );
}

export default FavoriteShow;
