export const loadConfig = async () => {
    try {
      const response = await fetch(__dirname + '/event-config.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error loading config:', error);
      return {};
    }
  };