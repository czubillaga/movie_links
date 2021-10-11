import Link from "./Link";
const LinkList = ({films}) => {
    const LinkNodes = films.map((film) => {
        return(
            <Link class="link" name={film.name} url={film.url} />
        )
    });
    return(
        <ul>
            {LinkNodes}
        </ul>
    )
}

export default LinkList;