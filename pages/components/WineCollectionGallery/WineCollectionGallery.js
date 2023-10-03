import WineCollectionItem from "pages/components/WineCollectionItem"

//This component is not used because it is under development.
// It is designed for a slider, with the pomor of which you can whistle a collection of wines.

const WineCollectionGallery = ({collection}) => {
  return (
    <>
      {collection.map((collectionItem) => (
        <WineCollectionItem key={collectionItem.index} item={collectionItem}/>
      ))}
    </>
  )
}

export default WineCollectionGallery
