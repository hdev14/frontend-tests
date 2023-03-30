import './index.css';

interface RepoProps {
  data: Array<{
    name: string;
    url: string;
  }>
}

function Repos(props: RepoProps) {
  return (
    <ul className="Repo">
      {props.data.map((repo) => (
        <li>{repo.name} <a href={repo.url}>ver repo</a></li>
      ))}
    </ul>
  );
}

export default Repos;
