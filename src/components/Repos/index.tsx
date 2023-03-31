import './index.css';

interface RepoProps {
  data: Array<{
    name: string;
    url: string;
  }>
}

function Repos({ data }: RepoProps) {
  return (
    <ul className="repos">
      {data.map((repo) => (
        <li key={repo.name}>{repo.name} <a href={repo.url}>ver repo</a></li>
      ))}
    </ul>
  );
}

export default Repos;
