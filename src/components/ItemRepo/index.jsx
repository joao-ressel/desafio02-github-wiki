/* eslint-disable react/prop-types */
import { ItemContainer } from "./styles";

export const ItemRepo = ({ repo, handleRemoveRepo }) => {
  return (
    <>
      <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url}>Ver repositório</a>
        <br />
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            handleRemoveRepo(repo.id);
          }}
          className="remover"
        >
          Remover
        </a>
        <hr />
      </ItemContainer>
    </>
  );
};
