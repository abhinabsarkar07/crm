import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import {
  Box,
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
// Import JobApplication class
// import JobApplication from '../../../../BackEnd/models/formModels';

// Validation schema
const validationSchema = yup.object({
  date: yup.date().required('Date is required'),
  candidateName: yup.string().required('Candidate name is required'),
  recruiterName: yup.string().required('Recruiter name is required'),
  status: yup.string().required('Status is required'),
  interview: yup.string().required('Interview is required'),
  submission: yup.string().required('Submission is required'),
  interviewSchedule: yup.date().required('Interview schedule is required'),
  sourceOfSubmission: yup.string().required('Source of submission is required'),
  position: yup.string().required('Position is required'),
  location: yup.string().required('Location is required'),
  vendorName: yup.string().required('Vendor name is required'),
  vendorContact: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Must be a valid phone number')
    .required('Vendor contact is required'),
  company: yup.string().required('Company is required'),
  rate: yup.number().required('Rate is required'),
  employmentType: yup.string().required('Employment type is required'),
  comments: yup.string(),
  followUp2: yup.string(),
  followUp3: yup.string(),
  followUp4: yup.string(),
  qcStatus: yup.string().required('QC status is required'),
});

const CandidateDetailsForm = () => {
  const formik = useFormik({
    initialValues: {
      date: null,
      candidateName: '',
      recruiterName: '',
      status: '',
      interview: '',
      submission: '',
      interviewSchedule: null,
      sourceOfSubmission: '',
      position: '',
      location: '',
      vendorName: '',
      vendorContact: '',
      company: '',
      rate: '',
      employmentType: '',
      comments: '',
      followUp2: '',
      followUp3: '',
      followUp4: '',
      qcStatus: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // handle form submission
      // const jobApplication = new JobApplication(values);
      // await jobApplication.save();
      alert('Form submitted successfully!');
    },
  });

  return (
    <Box sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          Candidate Details Form
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <DatePicker
                selected={formik.values.date}
                onChange={(date) => formik.setFieldValue('date', date)}
                dateFormat="MM/dd/yyyy"
                customInput={
                  <TextField
                    label="Date"
                    fullWidth
                    error={formik.touched.date && Boolean(formik.errors.date)}
                    helperText={formik.touched.date && formik.errors.date}
                  />
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="candidateName"
                name="candidateName"
                label="Candidate Name"
                value={formik.values.candidateName}
                onChange={formik.handleChange}
                error={
                  formik.touched.candidateName &&
                  Boolean(formik.errors.candidateName)
                }
                helperText={
                  formik.touched.candidateName && formik.errors.candidateName
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="recruiterName"
                name="recruiterName"
                label="Recruiter Name"
                value={formik.values.recruiterName}
                onChange={formik.handleChange}
                error={
                  formik.touched.recruiterName &&
                  Boolean(formik.errors.recruiterName)
                }
                helperText={
                  formik.touched.recruiterName && formik.errors.recruiterName
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="status"
                name="status"
                label="Status"
                value={formik.values.status}
                onChange={formik.handleChange}
                error={formik.touched.status && Boolean(formik.errors.status)}
                helperText={formik.touched.status && formik.errors.status}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="interview"
                name="interview"
                label="Interview"
                value={formik.values.interview}
                onChange={formik.handleChange}
                error={
                  formik.touched.interview && Boolean(formik.errors.interview)
                }
                helperText={formik.touched.interview && formik.errors.interview}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="submission"
                name="submission"
                label="Submission"
                value={formik.values.submission}
                onChange={formik.handleChange}
                error={
                  formik.touched.submission && Boolean(formik.errors.submission)
                }
                helperText={formik.touched.submission && formik.errors.submission}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                selected={formik.values.interviewSchedule}
                onChange={(date) => formik.setFieldValue('interviewSchedule', date)}
                dateFormat="MM/dd/yyyy"
                customInput={
                  <TextField
                    label="Interview Schedule"
                    fullWidth
                    error={
                      formik.touched.interviewSchedule &&
                      Boolean(formik.errors.interviewSchedule)
                    }
                    helperText={
                      formik.touched.interviewSchedule &&
                      formik.errors.interviewSchedule
                    }
                  />
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="sourceOfSubmission"
                name="sourceOfSubmission"
                label="Source of Submission"
                value={formik.values.sourceOfSubmission}
                onChange={formik.handleChange}
                error={
                  formik.touched.sourceOfSubmission &&
                  Boolean(formik.errors.sourceOfSubmission)
                }
                helperText={
                  formik.touched.sourceOfSubmission &&
                  formik.errors.sourceOfSubmission
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="position"
                name="position"
                label="Position"
                value={formik.values.position}
                onChange={formik.handleChange}
                error={formik.touched.position && Boolean(formik.errors.position)}
                helperText={formik.touched.position && formik.errors.position}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="location"
                name="location"
                label="Location"
                value={formik.values.location}
                onChange={formik.handleChange}
                error={formik.touched.location && Boolean(formik.errors.location)}
                helperText={formik.touched.location && formik.errors.location}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="vendorName"
                name="vendorName"
                label="Vendor Name"
                value={formik.values.vendorName}
                onChange={formik.handleChange}
                error={
                  formik.touched.vendorName && Boolean(formik.errors.vendorName)
                }
                helperText={formik.touched.vendorName && formik.errors.vendorName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="vendorContact"
                name="vendorContact"
                label="Vendor Contact"
                value={formik.values.vendorContact}
                onChange={formik.handleChange}
                error={
                  formik.touched.vendorContact &&
                  Boolean(formik.errors.vendorContact)
                }
                helperText={
                  formik.touched.vendorContact && formik.errors.vendorContact
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="company"
                name="company"
                label="Company"
                value={formik.values.company}
                onChange={formik.handleChange}
                error={formik.touched.company && Boolean(formik.errors.company)}
                helperText={formik.touched.company && formik.errors.company}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="rate"
                name="rate"
                label="Rate"
                type="number"
                value={formik.values.rate}
                onChange={formik.handleChange}
                error={formik.touched.rate && Boolean(formik.errors.rate)}
                helperText={formik.touched.rate && formik.errors.rate}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="employmentType"
                name="employmentType"
                label="Employment Type"
                value={formik.values.employmentType}
                onChange={formik.handleChange}
                error={
                  formik.touched.employmentType &&
                  Boolean(formik.errors.employmentType)
                }
                helperText={
                  formik.touched.employmentType && formik.errors.employmentType
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="comments"
                name="comments"
                label="Comments"
                multiline
                rows={4}
                value={formik.values.comments}
                onChange={formik.handleChange}
                error={formik.touched.comments && Boolean(formik.errors.comments)}
                helperText={formik.touched.comments && formik.errors.comments}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="followUp2"
                name="followUp2"
                label="Follow Up 2"
                value={formik.values.followUp2}
                onChange={formik.handleChange}
                error={formik.touched.followUp2 && Boolean(formik.errors.followUp2)}
                helperText={formik.touched.followUp2 && formik.errors.followUp2}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="followUp3"
                name="followUp3"
                label="Follow Up 3"
                value={formik.values.followUp3}
                onChange={formik.handleChange}
                error={formik.touched.followUp3 && Boolean(formik.errors.followUp3)}
                helperText={formik.touched.followUp3 && formik.errors.followUp3}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="followUp4"
                name="followUp4"
                label="Follow Up 4"
                value={formik.values.followUp4}
                onChange={formik.handleChange}
                error={formik.touched.followUp4 && Boolean(formik.errors.followUp4)}
                helperText={formik.touched.followUp4 && formik.errors.followUp4}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="qcStatus"
                name="qcStatus"
                label="QC Status"
                value={formik.values.qcStatus}
                onChange={formik.handleChange}
                error={formik.touched.qcStatus && Boolean(formik.errors.qcStatus)}
                helperText={formik.touched.qcStatus && formik.errors.qcStatus}
              />
            </Grid>
            <Grid item xs={12}>
              <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default CandidateDetailsForm;
