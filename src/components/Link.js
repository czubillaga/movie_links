import LinkBox from "../containers/LinkBox"

const Link = ({name, url}) => {
    return(
        <>
        <p><a href={url}>{name}</a></p>
        </>
    )
}

export default Link;