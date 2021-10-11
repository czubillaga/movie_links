import LinkBox from "../containers/LinkBox"

const Link = ({name, url}) => {
    return(
        <>
        <li><a href={url}><h3>{name}</h3></a></li>
        </>
    )
}

export default Link;