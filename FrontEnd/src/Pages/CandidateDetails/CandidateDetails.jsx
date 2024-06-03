import React from "react";
//importing mui carrd components
import Card from '@mui/material/Card';
//importing Components
import CandidateTable from "../../Components/CandidateTable/CandidateTable";

function CandidateDetails() {
  return(
    <>
    <div className="details_contents">
        <h2>
            Candidate Details
        </h2>
        <p>
            Candidate Details are shown below you can edit, create and delete as per your preference
        </p>
    </div>
    
      <Card sx={{ minWidth: 275 }}>
        <CandidateTable />
      </Card>
    </>
  );
}

export default CandidateDetails;
