import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: "",
  error: "",
  jobDetails: [],
  searchedJobDetails: [],
  jobApplications: [],
  jobApplied: false,
  jobTitle: "",
  application: [],
  allMyApplications: [],
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    jobLoading(state, { payload }) {
      state.loading = payload;
    },
    jobError(state, { payload }) {
      state.loading = false;
      state.error = payload;
    },
    jobSuccess(state, { payload }) {
      state.success = payload;
    },
    getAllJobs(state, { payload }) {
      state.jobDetails = payload;
    },
    getSearchedJobs(state, { payload }) {
      state.searchedJobDetails = payload;
    },
    applyToJob(state, { payload }) {
      state.jobApplications = payload;
    },
    getJobTitle(state, { payload }) {
      state.jobTitle = payload;
    },
    jobApplicationReducer(state, { payload }) {
      state.application = payload;
    },
    getAllApplications(state, { payload }) {
      state.allMyApplications = payload
    }
  },
});

export const {
  jobLoading,
  jobError,
  getAllJobs,
  applyToJob,
  jobSuccess,
  getJobTitle,
  getSearchedJobs,
  jobApplicationReducer,
  getAllApplications
} = jobSlice.actions;
export const jobLoadingSelector = (state) => state.job.loading;
export const jobDetailSelector = (state) => state.job.jobDetails;
export const jobApplicationSelector = (state) => state.job.jobApplications;
export const jobAppliedSelector = (state) => state.job.jobApplied;
export const searchedJobDetailSelector = (state) =>
  state.job.searchedJobDetails;
export const jobTitleSelector = (state) => state.job.jobTitle;
export const jobErrorSelector = (state) => state.job.error;
export const applicationSelector = (state) => state.job.application;
export const allMyApplicationSelector = (state) => state.job.allMyApplications

export default jobSlice.reducer;
