import type { Job } from "../types/job";

interface JobCardProps {
  job: Job;
  addFilter: (tag: string) => void;
}

function JobCard({ job, addFilter }: JobCardProps) {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <article
      className={`
        relative
        bg-white
        rounded-md
        shadow-lg
        px-6
        pt-8
        pb-6
        mt-12

        md:mt-0
        md:flex
        md:items-center
        md:justify-between
        md:px-8

        ${
          job.featured
            ? "border-l-[5px] border-[#5CA5A5]"
            : ""
        }
      `}
    >
      {/* Logo */}
      <img
        src={job.logo}
        alt={job.company}
        className="
          w-12
          absolute
          -top-6

          md:static
          md:w-20
        "
      />

      {/* Informações */}
      <div className="md:flex md:items-center md:gap-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#5CA5A5]">
              {job.company}
            </span>

            {job.new && (
              <span className="bg-[#5CA5A5] text-white text-xs px-2 py-1 rounded-full uppercase font-bold">
                New!
              </span>
            )}

            {job.featured && (
              <span className="bg-[#2C3A3A] text-white text-xs px-2 py-1 rounded-full uppercase font-bold">
                Featured
              </span>
            )}
          </div>

          <h2 className="font-bold text-lg mt-3 cursor-pointer hover:text-[#5CA5A5]">
            {job.position}
          </h2>

          <div className="flex gap-4 text-gray-500 mt-3 text-sm">
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
    <button
      key={tag}
      onClick={() => addFilter(tag)}
      className="
        bg-[#EEF6F6]
        text-[#5CA5A5]
        font-bold
        px-3
        py-1
        rounded
        hover:bg-[#5CA5A5]
        hover:text-white
        transition
      "
    >
      {tag}
    </button>
  ))}
</div>
    </article>
  );
}

export default JobCard;