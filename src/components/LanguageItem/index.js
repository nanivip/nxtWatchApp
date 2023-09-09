import './index.css'

const LanguageItem = props => {
  const {eachDetails} = props
  const {imageUrl, imageAltText} = eachDetails

  return (
    <div className="img-container">
      <img src={imageUrl} className="image" alt={imageAltText} />
    </div>
  )
}
export default LanguageItem
