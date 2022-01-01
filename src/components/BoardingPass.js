import { getApplicant } from "../Service/api";
import { useState, useEffect } from 'react';

const BoardingPass = () => {

  const [ applicantData, setApplicantData ] = useState([]);

  useEffect(() => {
    getApplicatsDetails();
  },[]);

  const getApplicatsDetails = async () => {
    const result = await getApplicant();
    setApplicantData(result.data);
  }

  return (
    <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
        
  {applicantData.map(details => (
            <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..."/>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">{details.studentName}</li>
              <li class="list-group-item">{details.registrationNumber}</li>

            </ul>
            </div>
          ))}
    </div>
  );
};

export default BoardingPass;
