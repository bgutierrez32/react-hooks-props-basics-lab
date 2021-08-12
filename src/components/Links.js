function Links(props){
    return(
        <>
        <h3>Links</h3>
        <a href= {props.userData.links.github}> {props.userData.links.github}</a>
        <a href= {props.userData.links.linkedin}> {props.userData.links.linkedin}</a>

        </>
    )

}
export default Links