/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import image from "../../public/images/coffe.jpg";
import homeimg from "../../public/images/bible_bg.jpeg";
import Link from "next/link";
import "./home.css";

function Page() {
  const [language, setLanguage] = useState(true); //true  -> amharic content will be rendered
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="home-welcome">
        <h1>
          Welcome
          <br />
          እንኳን ደህና መጡ !
        </h1>
      </div>
      {language && (
        <>
          <div className="intro">
            <p className="intro-notice">
              {" "}
              እነዚሀ ሁሉ መጽሐፍት ከሌሎች ጥቂት የእግሊዝኛ መጽሐፍት ጋር በሲዲ ተዘጋጅተው ለግዢ ዝግጁ ናቸው፡፡
              የበለጠ ለመረዳት በtexlap@juno.com ጻፉልን፡፡{" "}
            </p>
            <p className="intro-site-description">
              እንኳን ወደ ጥሩ የአማርኛ መጽሐፍት በደህና መጡ. ይህ ድረ-ገጽ በተለያዩ የክርስቲያን ጉዳዮች ላይ ነፃ፣
              ሊወርዱ የሚችሉ የአማርኛ መጽሃፎችን ይዟል. በዓለም ዙሪያ ባሉ አታሚዎች የተለገሱ እነዚህ መጻሕፍት ወደ
              የእግዚአብሔር እውቀት ከማስጨበጥም አልፎ በዕለት ተዕለት የእግር ጉዞዎ መመሪያ ይሰጥዎታል. አላማችን
              እነዚህን መጽሃፎች በተቻለ መጠን ለብዙ ሰዎች ማካፈል ነው፣ ስለዚህ ነፃነት ይሰማዎት መጽሃፎቹን እና
              ቃሉን ለማሰራጨት!
            </p>
            <h5>
              ደስ ይበላችሁ!! አሁን 1369 መጽሐፍ እኛ ቤተ-መጽሐፍት ዉስጥ አለ፤ ተጨማሪም በመግባት ላይ ነው።
              ላይብረሪያችንን ለመጎብኘት ይህን ማስፈንጠሪያ ይንኩ! መልካም ንባብ!
            </h5>
          </div>
          <div className="coffee-rapper">
            <div className="coffee">
              <Image
                src={image}
                alt="coffee"
                layout="responsive"
                width={350}
                height={250}
              />
              <h4>
                ጤና ይስጥልኝ!! ወደ ትንሿ ቤታችን እንኳን ደህና መጡ። ቡና ፈልቷል ፤ ይቀመጡ። ቡናውን እየጠጡ
                በላይብረሪያችን ያሰባሰብናቸውን መጽሐፍት እንዲመለከቱ እንጋብዝዎታለን። ቶማስ አ ኬምፐስ የተባለው
                በ15ኛው ክፍለ ዘመን የኖረው ሆላንዳዊ ሰው ስለ ጥሩ መጽሐፍት የሚከተለውን ብሏል፤ " ለተጠማ ጎረቤት
                አንድ ብርጭቆ ቀዝቃዛ ውኃ የሚሰጥ ሰው ሽልማትን የሚቀበል ከሆነ፤ የዘላለም ሕየወት ምንጭ የሚያፈልቁ
                መጽሐፍትን ለጎረቤቶቹ የሚያቀርብ ሰው ሽልማት ምንኛ ከዚያ የላቀ ነው!" በመሆኑም እኛም እነዚህን
                ጠዋሚ የሆኑ መጽሐፍት በአልም ሁሉ ላሉ የአማርኛ ቋንቋ አን አንባቢዎች ስናቀርብ ከፍ ያለ ደስታ
                ይሰማናል።
              </h4>
            </div>
            <h4>
              እነዚህን መጽሐፍት በማጥናት ለእለት ተእለት ኑሮ ምሪት ፤ ለዚህ ዘመን እግዚአብሔር ያለውን ዕቅድ
              እንዲሁም ወደፊት የሚሆነውን አስመልክቶ መረዳትን እንደሚያገኙ እናምናለን። እኛ በላፕስሊ/ብሩክስ
              ፋውንዴሽን ያለነው ለመጽሐፍቱ ጸሐፊዎች፤ ለተርጓሚዎች እና ለኤዲተሮች ከፍ ያለ ምስጋና እናቀርባለን።
              እንዲሁም የደራሲነት መብት ያላቸውን መጽሐፍትን በዚህ ዓይነት ሁኔታ እንድናቀርብ ለፈቀዱልን ሁሉ የላቀ
              ምስጋናችንን እናቀርባለን። የትኛውንም መጽሐፍት ለራስዎ መጠቀምም ሆነ ሌሎችን ያለ ክፍያ እንዲጠቀሙ
              ማድረግ ይችላሉ። በመጨሻም በዘኁቁ 6፡24᎑6 የእግዚአብሄር ቃል እንደሚናገረው ፥ " እግዚአብሄር
              ይባርክህ ፤ ይጠብቅህም ፤ እግዚአብሄር ፊቱን ያብራልህ፤ ... እግዚአብሄር ፊቱን ወደአንተ ያንሳ፤ ...
              ሰላሙንም ይስጥሕ"
            </h4>

            <div className="footer">
              <div className="eng-lang">
                <button
                  onClick={() => setLanguage(!language)}
                  className="btn"
                >
                  Read this in English !
                </button>
              </div>
              <div className="feedback">
                <p>
                  ኢትዮጵያውያን ከጨዋ ባህላቸው የተነሳ ሌሎችን ደፍረው እንደማይነቅፉ በደምብ ይታወቃል፡፡ ነገር ግን
                  ላይበራሪያችንን ስትጎበኙ ማንኛውም አይነት አስተያየት በመስጠት እድትረዱን እንጠይቃለን፡፡
                  እንደምታውቁ ችግሮችን ማወቅ ያስፈልጋል፡፡ ምንም አይነት ችግር ብታዩ በስልክ ቁጥር
                  972-578-0825 በመደወል ውይንም ኢሜል አድራሻችን texlap@juno.com በማድረግ
                  እንድታሳውቁን በትሕትና እንጠይቃለን፡፡
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      {!language && (
        <>
          <div className="text-container">
            <p>
              Hello! Welcome to our humble home. Coffee has just boiled - would
              you like a cup? And while you're sipping your coffee, why not look
              through the books we have gathered in our library? Thomas Aquinas,
              who lived in Holland 600 years ago, had this to say about books:
              "If the person who gives a cup of cool water to a thirsty neighbor
              is to receive a reward, how much greater a reward will be given to
              the one who gives his neighbor a book, which may well be to him
              the spring of eternal life?" So, we are most pleased to present
              these valuable books for Amharic readers worldwide! We believe you
              will find that a study of these books will not only lead one to a
              knowledge of God and a close relationship with Him, but will also
              give guidance for ones daily living, an understanding of God's
              plan for this present age, and a knowledge of what the future
              holds. We, the Lapsley/Brooks Foundation, are deeply indebted to
              the authors, translators, and editors who have made this all
              possible.
            </p>

            <p className="quote">
              And, we gratefully thank the copyright holders: Moody Press, Baker
              Book House, Intervarsity Press, Ethiopian Bible Society,SIM Press,
              Kale Hiwot Publishing, Raey Publishing, American Bible Society,
              Paul Enns, Stan Gundry, Bob Thomas, Dallas Theological Seminary,
              African Christian Publishers, Tyndale House Publishers, and
              Zondervan Press.
            </p>

            <p className="thanks">
              And in addition we are indebted to volunteers from Grace Bible
              Church in Dalls, TX who contributed their expertise in putting
              this website together. You are more than welcome to use any or all
              of these books, as well as share them with your friends and
              neighbors. And, we would love to hear from you! Please email us.
            </p>
                <div className="flex justify-center">
                <button className="btn flex justify-center font-bold" onClick={() => setLanguage(!language)}> በአማርኛ ያንብቡ</button>
                </div>
            <p className="blessing">
              Lastly, as it says in Numbers 6:25-26, "May the Lord bless and
              keep you and make His face to shine upon you… and give you peace!"
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Page;
