import type { Job } from "../types/job";

interface JobCardProps {
  job: Job;
  addFilter: (tag: string) => void;
}

function JobCard({ job, addFilter }: JobCardProps) {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <article className={`relative bg-white rounded-md shadow-lg px-6 pt-8 pb-6 md:flex md:items-center md:justify-between md:px-8
        ${
          job.featured
            ? "border-l-[5px] border-[#5CA5A5]"
            : ""
        }`}>
      <div className="md:flex md:items-center md:gap-6">
        <img src={job.logo} alt={job.company} className="w-14 absolute -top-8 md:static md:w-20"/>
        <div>
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#5CA5A5]">
              {job.company}
            </span>
            {job.new && (
              <span className="bg-[#5CA5A5] text-white text-xs px-2 py-1 pt-2 rounded-full uppercase font-bold">
                New!
              </span>
            )}
            {job.featured && (
              <span className="bg-[#2C3A3A] text-white text-xs px-2 py-1 pt-2 rounded-full uppercase font-bold">
                Featured
              </span>
            )}
          </div>
          <h2 className="font-bold text-lg mt-3 w-fit cursor-pointer hover:text-[#5CA5A5]">
            {job.position}
          </h2>
          <div className="flex gap-2 text-gray-500 mt-3 text-[18px] font-medium">
            <span>{job.postedAt}</span>
            <span>•</span>
            <span>{job.contract}</span>
            <span>•</span>
            <span>{job.location}</span>
          </div>
        </div>
      </div>
      {/* Divider Mobile */}
      <hr className="my-4 md:hidden" />
      {/* Tags */}
      <div className="flex flex-wrap gap-4">
        {tags.map((tag) => (
          <button key={tag} onClick={() => addFilter(tag)}
            className="bg-[#EEF6F6] cursor-pointer text-[#5CA5A5] text-[18px] font-bold px-3 py-1 rounded hover:bg-[#5CA5A5] hover:text-white transition">
            {tag}
          </button>
        ))}
      </div>
    </article>
  );
}

export default JobCard;