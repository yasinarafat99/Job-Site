import axios from "axios";
import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

function GetJobs() {
  const [allJob, setAllJob] = useState();



  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:9000/jobs");
      setAllJob(data);
    };
    getData();
  }, []);

  const deletPost = async (uniqe) => {
    await axios.delete(`http://localhost:9000/jobs/${uniqe}`);
    const filterdPost = allJob.filter((job) => job.id !== uniqe);
    setAllJob(filterdPost);
  };

    
  return (
    <>
        {
          allJob &&
          allJob.map((job) => (<Jobs job={job} key={job.id} deletPost={deletPost} /> ))
        
        }
    </>
  )
}

export default GetJobs;