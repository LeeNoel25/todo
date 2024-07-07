import dotenv from 'dotenv';

dotenv.config();

const config = {
  master: {
    port: process.env.PORT,
  },
};

export default config;
