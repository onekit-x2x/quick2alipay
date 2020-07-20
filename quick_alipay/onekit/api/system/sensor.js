module.exports = {
  subscribeAccelerometer(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_reserved = quick_object.reserved || false;
    var quick_interval = quick_object.url || "normal";
    var quick_callback = quick_object.callback;
    //////////////////////////
    var my_object = {
      reserved: quick_reserved,
      interval: quick_interval
    }
    my.onAccelerometerChange(function(callback) {
      quick_callback({
        x: callback.x,
        y: callback.z,
        z: callback.y
      })
    })
    my.onAccelerometerChange(my_object)
  }

  /** unsubscribeAccelerometer */
  , unsubscribeAccelerometer(quick_object) {
    my.offAccelerometerChange(function callback(e) {
      console.log(e)
    })
  }
  /**sensor.subscribeCompass */
  , subscribeCompass(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_reserved = quick_object.reserved || false;
    var quick_callback = quick_object.callback
    /////////////////////////
    my.onCompassChange(function(res) {
      quick_callback({
        direction: res.direction
      })
    })
    my.onCompassChange({})
  }

  /**sensor.unsubscribeCompass() */
  , unsubscribeCompass() {
    my.offCompassChange()
    my.offAccelerometerChange(function(res) {})
  }

  /** sensor.subscribeProximity*/
  , subscribeProximity(quick_object) {
    console.log("暂不支持！")
  }
  /**sensor.unsubscribeProximity() */
  , unsubscribeProximity() {
    console.log("暂不支持！")
  }

  /**sensor.subscribeLight */
  , subscribeLight(quick_object) {
    console.log("暂不支持！")
  }

  /**sensor.unsubscribeLight() */
  , unsubscribeLight() {
    console.log("暂不支持！")
  }

  /**sensor.subscribeStepCounter*/
  , subscribeStepCounter(quick_object) {
    console.log(quick_object)
    if (!quick_object) {
      return;
    }
    var quick_reserved = quick_object.reserved
    var quick_callback = quick_object.callback
    var quick_fail = quick_object.fail
    /////////////////////////////
    function check(a1, a2) {
      return ((a1 > 0 && a2 < 0) || (a1 < 0 && a2 > 0));
    }
    var steps = 0;

    function add() {
      steps++;
      quick_callback({
        steps
      });
    }
    var x, y, z;
    my.onAccelerometerChange(function(res) {
      // console.log(res);
      if (x && check(x, res.x)) {
        add();
        x = 0;
      } else {
        if (y && check(y, res.y)) {
          add();
          y = 0;
        } else {
          if (z && check(z, res.z)) {
            add();
            z = 0;
          }
        }
      }
      x = res.x;

      y = res.y;

      z = res.z;

    });
    my.onAccelerometerChange({
      interval: 'game'
    })
  }
  //////////////////////////////
  /**sensor.unsubscribeStepCounter() */
  , unsubscribeStepCounter() {
    my.offCompassChange(function(res) {
      console.log(res)
    })
  }
}