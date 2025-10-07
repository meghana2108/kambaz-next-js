import React from "react";
import Image from "next/image";
import "./index.css";

const FloatFigures = () => {
  const imageUrl =
    "https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg";

  return (
    <div id="wd-float-divs">
      <p>
        <strong>Figure 2.1.17.a - Floating Images and Content with CSS</strong>
      </p>

      {/* Section 1: Alternating images with text */}
      <div>
        <Image
          className="wd-float-right"
          src={imageUrl}
          alt="Starship"
          width={200}
          height={150}
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic
          ipsum consequatur saepe, laudantium quasi quae perspiciatis quas
          maxime error tenetur repudiandae necessitatibus variatis obcaecat
          quisquam at iisque a?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic
          ipsum consequatur saepe, laudantium quasi quae perspiciatis quas
          maxime error tenetur repudiandae necessitatibus variatis obcaecat
          quisquam at iisque a?
        </p>

        <Image
          className="wd-float-left"
          src={imageUrl}
          alt="Starship"
          width={200}
          height={150}
        />
        <p>
          Eius hic ipsum consequatur saepe, laudantium quasi quae perspiciatis
          quas maxime error tenetur repudiandae necessitatibus variatis obcaecat
          quisquam at iisque a?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic
          ipsum consequatur saepe, laudantium quasi quae perspiciatis quas
          maxime error tenetur repudiandae necessitatibus variatis obcaecat
          quisquam at iisque a?
        </p>

        <Image
          className="wd-float-right"
          src={imageUrl}
          alt="Starship"
          width={200}
          height={150}
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic
          ipsum consequatur saepe, laudantium quasi quae perspiciatis quas
          maxime error tenetur repudiandae necessitatibus variatis obcaecat
          quisquam at iisque a?
        </p>

        <Image
          className="wd-float-left"
          src={imageUrl}
          alt="Starship"
          width={200}
          height={150}
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic
          ipsum consequatur saepe, laudantium quasi quae perspiciatis quas
          maxime error tenetur repudiandae necessitatibus variatis obcaecat
          quisquam at iisque a?
        </p>

        <div className="wd-float-done"></div>
      </div>

      {/* Section 2: Colored divs + right-floated image */}
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <Image
          className="wd-float-right"
          src={imageUrl}
          alt="Starship"
          width={200}
          height={150}
        />
        <div className="wd-float-done"></div>
      </div>
    </div>
  );
};

export default FloatFigures;
