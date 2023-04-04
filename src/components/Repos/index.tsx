import './index.css';

interface RepoProps {
  data: Array<{
    name: string;
    link: string;
  }>
}

function Repos({ data }: RepoProps) {
  return (
    <ul data-test="repos-ul" className="repos">
      {data.map((repo) => (
        <li key={repo.name}>{repo.name} <a href={repo.link}>ver repo</a></li>
      ))}
    </ul>
  );
}

export default Repos;
