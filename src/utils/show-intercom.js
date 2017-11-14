const showIntercom = () => {
  if (typeof window !== 'undefined') {
    window.Intercom('show');
  }
}

module.exports = { showIntercom };
