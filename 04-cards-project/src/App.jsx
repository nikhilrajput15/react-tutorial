import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "3 days ago",
    post: "Software Engineer role in Google Cloud team.",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer position working on Apple Vision Pro apps.",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$70/hour",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Backend Engineer for AI infrastructure systems.",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "SDE role in AWS compute services team.",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Frontend Engineer for next-gen productivity tools.",
    tag1: "Part-Time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Machine Learning Engineer for recommendation systems.",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$95/hour",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Autopilot AI engineer for advanced driving systems.",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$88/hour",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "2 days ago",
    post: "CUDA & AI performance engineer.",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$100/hour",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/salesforce.com",
    companyName: "Salesforce",
    datePosted: "1 week ago",
    post: "Full-stack engineer powering CRM AI platform.",
    tag1: "Part-Time",
    tag2: "Junior Level",
    pay: "$62/hour",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    datePosted: "3 weeks ago",
    post: "Cloud infrastructure engineer for Oracle Cloud.",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$78/hour",
    location: "Bengaluru, India"
  }
];

  return (
    <div className='parent'>
      {jobs.map(function(elem){
        return <Card icon={elem.brandLogo} date={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} company={elem.companyName} post={elem.post} />
      })}
    </div>
  )
}

export default App