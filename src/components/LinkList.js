import Link from "./Link";
const LinkList = ({films}) => {
    const LinkNodes = films.map((film) => {
        return(
            <Link name={film.name} url={film.url} />
        )
    });
    return(
        <>
            {LinkNodes}
        </>
    )
}

export default LinkList;