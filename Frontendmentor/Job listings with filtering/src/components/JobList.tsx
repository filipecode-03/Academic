import jobs from "../data/data.json";
import JobCard from "./JobCard";

interface JobListProps {
  filters: string[];
  addFilter: (tag: string) => void;
}

function JobList({
  filters,
  addFilter,
}: JobListProps) {
  const filteredJobs = jobs.filter((job) => {
    const tags = [
      job.role,
      job.level,
      ...job.languages,
      ...job.tools,
    ];

    return filters.every((filter) =>
      tags.includes(filter)
    );
  });

  return (
    <section
      className="
        max-w-6xl
        mx-auto
        px-6
        flex
        flex-col
        gap-12
        md:gap-6
      "
    >
      {filteredJobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          addFilter={addFilter}
        />
      ))}
    </section>
  );
}

export default JobList;