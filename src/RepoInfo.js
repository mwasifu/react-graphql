import React from "react";

const RepoInfo = ({ repo }) => {
  return (
    <div>
      <li className="list-group-item" key={repo.id.toString()}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <a className="h5 mb-0 text-decoration-none" href={repo.url}>
              {repo.name}
            </a>
            <p className="small">{repo.description}</p>
          </div>
          <div className="text-nowrap ms-3">
            {repo.licenseInfo?.spdxId}
            
            <span
              className={
                "px-1 py-0 ms-1 d-inline-block btn btn-sm" +
                (repo.viewerSubscription === "SUBSCRIBED"
                  ? "btn-success"
                  : "btn-secondary")
              }
              style={{ fontSize: ".8rem" }}
            >
              {repo.viewerSubscription}
            </span>
          </div>
        </div>
      </li>
    </div>
  );
};

export default RepoInfo;
