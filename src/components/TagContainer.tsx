import { ReadTags } from "../types";

interface TagProps {
  tag: ReadTags;
}

function TagContainer({ tag }: TagProps) {
  return (
    <div key={tag.id}>
      <div className="flex flex-col sm:flex-row place-items-center sm:justify-around p-3 bg-neutral-content">
        <h2>{tag.name}</h2>
        <span className="text-xl font-thin hidden lg:inline">{"-->"}</span>
        <span>{tag.count}</span>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export { TagContainer };
