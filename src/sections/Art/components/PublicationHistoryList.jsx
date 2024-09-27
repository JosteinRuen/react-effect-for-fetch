
export default function PublicationHistoryList(props) {

    return(
        <>
        {props.publicationHistory.map((history, index) => (
            <li key={index}>{history}</li>
          ))}

        </>
    )
}