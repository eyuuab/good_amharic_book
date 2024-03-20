import Image from "next/image";
import img1 from "../../../../public/images/New_testament/motina-cov.jpg";
import img2 from "../../../../public/images/New_testament/mattmab-cov-cr.jpg";
import img3 from "../../../../public/images/New_testament/mark-cov-s-cr.jpg";
import img4 from "../../../../public/images/New_testament/tim-nt1-cov-cr.jpg";
import img5 from "../../../../public/images/New_testament/scroll-newcov-cr.jpg";
import img6 from "../../../../public/images/New_testament/sarah-cov.jpg";
import "./style.css";

const BookCard = () => {
  const imageList = [img1, img2, img3, img4, img5, img6];
  const imageTitle = ["Motina", "Mab", "Sower", "Tim", "Scroll", "Sarah"];

  return (
    <div className="container">
      <h1>
        የመጽሃፍት ዝርዝር <br/>
        List of books
      </h1>
    <div className="book-card-container">
      {imageList.map((image, index) => (
        <div className="book-card" key={index}>
          <div className="book-card-img">
            <Image src={image} alt={imageTitle[index]} width={250} height={280} />
          </div>
          <div className="book-card-title">{imageTitle[index]}</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default BookCard;