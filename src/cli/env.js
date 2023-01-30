const parseEnv = () => {
    const args = process.env;
    const entries = Object.entries(args);

    for (const [key, value] of entries) {
    if (key.startsWith('RSS_')) {
      console.log(`${key}=${value}`)
    }
  }
};

parseEnv();
