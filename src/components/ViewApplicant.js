import { getApplicant } from "../Service/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ViewApplicant = () => {
  const [applicantData, setApplicantData] = useState([]);

  useEffect(() => {
    getApplicatsDetails();
  }, []);

  const getApplicatsDetails = async () => {
    const result = await getApplicant();
    setApplicantData(result.data);
  };

  return (
    <div className="col-md-6 position-absolute start-50 translate-middle-x mt-5">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Registration Number</th>
            <th scope="col">Gender</th>
            <th scope="col">Preferences</th>
            <th>Boarding Pass</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {applicantData.map((details) => (
            <tr>
              <td>{details.studentName}</td>
              <td>{details.registrationNumber}</td>
              <td>{details.gender}</td>
              <td>
                {details.hostelPreference.map((dat) => {
                  return <span>{dat}</span>;
                })}
              </td>
              <td>
                <Link
                  to="/boardingPass"
                  class="btn btn-success"
                  role="button"
                >
                  Boarding Pass
                </Link>
              </td>
              <td>
                <Link to="/delApplicant" class="btn btn-danger" role="button">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplicant;
