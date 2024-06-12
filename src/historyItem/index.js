import './index.css'

const HistoryItem = props => {
  const {historyListItems} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyListItems

  return (
    <li className="list-items">
      <div className="time-para">
        <p>{timeAccessed}</p>
      </div>
      <div className="center-container">
        <img src={logoUrl} alt={title} />
        <h1>{title}</h1>
        <p>{domainUrl}</p>
        <div className="delete-img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
