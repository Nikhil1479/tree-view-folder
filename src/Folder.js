import { useState } from "react";

export function Folder({ files }) {
  const [expand, setExpand] = useState(false);

  console.log(files);
  return (
    <div>
      <div>
        {files.isFolder ? (
          <button
            className={expand ? "rotate" : ""}
            onClick={() => setExpand(!expand)}
          >
            {" "}
            {">"}
          </button>
        ) : null}{" "}
        {files.name}
      </div>

      <div>
        {files.isFolder &&
          expand &&
          files.children.map((exp) => (
            <div style={{ paddingLeft: "20px" }}>
              <Folder files={exp} />
            </div>
          ))}
      </div>
    </div>
  );
}
