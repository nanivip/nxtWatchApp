import './index.css'

const Tabs = props => {
  const {clickTabItem, isActive, eachItemDetails} = props
  const {id, buttonText} = eachItemDetails

  const onClickTabItem = () => {
    clickTabItem(id)
  }
  const activeTabButton = isActive ? 'act-tab-btn' : null
  return (
    <li className="li-container">
      <button
        type="button"
        className={`tab-btn ${activeTabButton}`}
        onClick={onClickTabItem}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Tabs
