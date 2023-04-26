import "./index.scss";

import { motion } from "framer-motion";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

import { trackExternalUrlClick } from "../../utils/open-link";

type Props = {
  data: Queries.InstaNodeEdge;
};

const Card = ({ data }: Props) => {
  const openInstagramProfile = () => {
    trackExternalUrlClick("https://www.instagram.com/rishiikc/");
  };

  const image = getImage(data.node.localFile);

  return (
    <motion.div
      key={data.node.id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onClick={openInstagramProfile}
      className="inline-flex w-full items-stretch cursor-pointer aspect-square instagram-gallery-image-wrapper"
    >
      <GatsbyImage className="w-full" alt={data.node.id} image={image} />
    </motion.div>
  );
};

export default Card;
