import CollectionItem from "@/pages/components/CollectionItem"

const WineCollectionGallery = ({ collection }) => {

  return (
    <>
      {collection.map((collectionItem) => (
        <CollectionItem key={collectionItem.index} item={collectionItem} />
      ))}
    </>
  );
};

export default WineCollectionGallery;
