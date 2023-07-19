import React, { useCallback, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProjectRepository from "../repositories/ProjectRepository";

const ProjectPage = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [project, setProject] = useState({});

  const projectRepository = new ProjectRepository();

  const fetchProject = useCallback(async () => {
    const { response, data } = await projectRepository.getProjectById(id);

    if (!response.ok) {
      setIsError(true);
    }

    setProject(data.data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
    </div>
  );
};

export default ProjectPage;
