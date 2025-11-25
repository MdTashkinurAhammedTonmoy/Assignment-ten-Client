import React from "react";
import bgimage from '../assets/bg-image.jpg';

const FounderSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-32 px-6 text-white"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="max-w-4xl mx-auto">
        <p className="uppercase tracking-widest text-sm mb-4">Message from founder</p>
        <h2 className="text-4xl font-bold leading-snug mb-6">
          First, we eat. Then, we do everything else.
        </h2>
        <p className="text-gray-200 mb-6 text-sm leading-relaxed">
          Consectetur quisque per vel ac aptent praesent convallis aliquam montes.
          Lectus sit inceptos dis dui mattis ad morbi leo luctus duis. Mauris neque dictumst letiuis consequat senectus potenti ad.
        </p>
        <p className="text-gray-200 mb-6 text-sm leading-relaxed">
          Consectetur quisque per vel ac aptent praesent convallis aliquam montes.
          Lectus sit inceptos dis dui mattis ad morbi leo luctus duis. Mauris neque dictumst letiuis consequat senectus potenti ad.
        </p>
        <p className="mt-10 text-2xl">✍️ Reuben Palmer</p>
      </div>
    </section>
  );
};

export default FounderSection;
