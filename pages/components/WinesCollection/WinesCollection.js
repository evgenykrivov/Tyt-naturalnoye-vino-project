import styles from "./WinesCollection.module.scss"

const WinesCollection = () => (
  <>
    <h1 className={styles.mainText}>Коллеция</h1>
    <div className={styles.containerType}>
      <button>Красное</button>
      <button>Розовое</button>
      <button>Белое</button>
      <button>Голубое</button>
    </div>

    <></>
  </>
)

export default WinesCollection
