import './index.css'

const HistoryItem = props => {
  const {historyListItems, OnRemoveListItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyListItems

  const onDeleteItem = () => {
    OnRemoveListItem(id)
  }

  return (
    <li className="list-items">
      <div className="time-para">
        <p>{timeAccessed}</p>
      </div>
      <div className="center-container">
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div className="delete-img-container">
        <button type="button" onClick={onDeleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
