import './ListItem.css'

const ListItem = props => {
  const {HistoryList, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryList

  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-items">
      <div className="logo-info">
        <p className="paragraph">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo-images" />
        <p className="title">{title}</p>
        <p className="urls">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="button"
        onClick={onDelete}
        testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default ListItem
