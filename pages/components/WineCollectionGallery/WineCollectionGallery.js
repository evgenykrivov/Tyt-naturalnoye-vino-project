import PropTypes from "prop-types"
import WineCollectionItem from "pages/components/WineCollectionItem"

//This component is not used because it is under development.
// It is designed for a slider, with the pomor of which you can whistle a collection of wines.

const WineCollectionGallery = ({collection}) => {

  if (!collection) return null
  return (
    <>
      {collection.map(collectionItem => (
        <WineCollectionItem key={collectionItem.index} item={collectionItem} />
      ))}
    </>
  )
}

WineCollectionGallery.propTypes = {
  collection: PropTypes.array.isRequired
}

export default WineCollectionGallery
