export interface IProject{
  children: React.ReactNode
}

export interface IProjectContext {
  projectList: IProjects[];
  createProject: (formData: IProjects) => Promise<void>;
}

export interface IProjects {
  id?: number;
  portfolioId?: number;
  name: string;
  description: string;
  repository: string;
  link?: string;
  coverUrl?: string
}