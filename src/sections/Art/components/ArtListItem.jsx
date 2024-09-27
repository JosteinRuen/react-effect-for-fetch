import PublicationHistoryList from "./PublicationHistoryList"

export default function ArtListItem(props) {
    return (
        <li key={props.key}>
        <div className="art-picture">
          <img
            src={`https://boolean-uk-api-server.fly.dev${props.imageURL}`}
          />
        </div>
        <h3>{props.title}</h3>
        <p>{props.artist}</p>
        <h4>Publication History:</h4>
        <ul>
          <PublicationHistoryList
            publicationHistory={props.publicationHistory}
          />
        </ul>
      </li>
    )
}