import React from 'react';

//importing card ui libraries

import Card from '@mui/material/Card';
import CandidateFormView from '../../Components/FormView/FormView';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';

function CandidateForm() {
  return (
    <>
    <div className="candidate_form">
    <Card sx={{ minWidth: 575 }}>
    <CandidateFormView />
    </Card>
    </div>
    </>
  )
}

export default CandidateForm;