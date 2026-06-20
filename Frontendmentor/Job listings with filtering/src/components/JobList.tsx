import jobs from "../data/data.json";
import JobCard from "./JobCard";

function JobList() {
  return (
    <section
      className="max-w-6xl mx-auto px-6 flex flex-col gap-12 md:gap-6">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
        />
      ))}
    </section>
  );
}

export default JobList;