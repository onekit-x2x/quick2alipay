import URL from "../../js/URL.js"
module.exports = {
  /*  network.getType/// */
  push(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_uri = quick_object.uri;
    var quick_params = quick_object.params;
    /////////////////
    var my_object = {};
    var url = new URL(quick_uri);
    console.log(url)
    if (url.scheme) {
      switch (url.scheme) {
        case "tel":
          my.makePhoneCall({
            phoneNumber: url.host,
          });
          break;
        case "sms":
          my.showModal({
            title: '不支持',
            content: '微信小程序暂不支持发短信',
          });
          break;
        case "http":
        case "https":
          my.navigateTo({
            url: `/onekit/page/router.push/ie?url=${encodeURI(quick_uri)}`
          })
          break;
        case "internal":
          my.showModal({
            title: '带配置',
            content: '请配置要打开的App',
          });
          break;
        case "hap":
          switch (url.host) {
            case "app":
              my.showModal({
                title: '带配置',
                content: '请配置要打开的小程序',
              });
              break;
            case "settings":
            case "app":
              my.showModal({
                title: '不支持',
                content: '微信小程序暂不支持打开手机设置',
              });
              break;
            default:
              throw new Error(url.host);
          }
          // my.showModal({
          //   title: '不支持',
          //   content: '微信小程序暂不支持',
          // });
          break;
        default:
          throw new Error(url.scheme);
      }
    } else {
      if(quick_params){
        my_object.url = quick_uri + `?params=${quick_params.body}`;
      }else{
        my_object.url = quick_uri;
      }
      my.navigateTo(my_object);
    }

  }

  /**router.replace */
  ,
  replace(quick_object) {
    var quick_uri = quick_object.uri;
    /////////////////
    var my_object = {};
    var url = new URL(quick_uri);
    my_object.url = quick_uri;
    my.redirectTo(my_object);
  }
  /**router.back */
  ,
  back(quick_object) {
    var quick_uri = quick_object.uri;
    /////////////////
    var my_object = {};
    var url = new URL(quick_uri);
    my_object.url = quick_uri;
    my.navigateBack(my_object);
  }

  /**router.clear() */
  ,
  clear(quick_object) {
    var my_object = {};
  }
  /**router.getLength */
  ,
  getLength(quick_object) {
    var my_object = {};
  }
  /**router.getState */
  ,
  getState(quick_object) {
    var my_object = {};
  }
  /**router.getPages */
  ,
  getPages(quick_object) {
    var my_object = {};
  }
}