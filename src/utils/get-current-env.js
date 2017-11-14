const getCurrentEnv = () => {
  const liveHostname = 'doopoll.co';
  const stagingHostname = 'dp-staging.surge.sh';
  const localHostname = 'localhost';

  if (typeof window !== 'undefined') {
    console.log(window.location.hostname);
    if (window.location.hostname === localHostname) {
      return 'development';
    } else if (window.location.hostname === stagingHostname) {
      return 'staging';
    } else if (window.location.hostname === liveHostname) {
      return 'production';
    }
  }

  return undefined;
}

module.exports = { getCurrentEnv }
