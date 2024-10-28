import { useState } from "react";
import gitLogo from "../../assets/git.png";
import { Input } from "../../components/Input";
import { ItemRepo } from "../../components/ItemRepo";
import { Container } from "./styles";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
export const Home = () => {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);
      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
      alert("Repositório já adicionado");
    }
  };

  const handleRemoveRepo = (id) => {
    const updatedRepos = repos.filter((repo) => repo.id !== id);
    setRepos(updatedRepos);
  };
  

  return (
    <Container>
      <img src={gitLogo} alt="" width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo, i) => (
        <ItemRepo key={i} repo={repo}  handleRemoveRepo={handleRemoveRepo}/>
      ))}
    </Container>
  );
};
