import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better mechanic <br className="sm:block hidden" /> a call
        away.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        To get your car fixed at favourable prices.
      </p>
      <Button styles ="mt-10" />
    </div>
   

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;