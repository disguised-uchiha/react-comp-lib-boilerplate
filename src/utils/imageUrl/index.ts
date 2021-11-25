import config from "@app/config";

export const imageUrl = (key: string) => {
  return `${config.cdn}/${key}`;
};

export const imageBucket = (key: string) => {
  return `${config.buckets.s3Image}/${key}`;
};
