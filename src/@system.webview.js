/* eslint-disable camelcase */
// import URL from 'oneutil/URL'

module.exports = {
  /** webview.loadUrl */
  loadUrl(quick_object) {
    const quick_url = quick_object.url
    quick_object = null
    my.navigateTo({
      url: `/quickapp2alipay/page/router.push/ie?url=${encodeURI(quick_url)}`
    })
  }
}
