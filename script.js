function bmi() {
  var h = document.querySelector("#height").value;
  var w = document.querySelector("#weight").value;
  var g = document.querySelector("#gender").value;

  var math = (w / (h / 100) ** 2).toFixed(1);

  var status = "";
  if (g === "male") {
    if (math < 20) {
      console.log("داداش کجایی؟ باد نبرت!یکم بیشتر تغذیه کن");
      status = "داداش کجایی؟ باد نبرت!یکم بیشتر تغذیه کن";
    } else if (math < 25) {
      console.log("ایول هیکل ورزشکاری! با همین فرمون برو جلو");
      status = "ایول هیکل ورزشکاری! با همین فرمون برو جلو";
    } else {
      console.log("داداش وقتشه با دمبل رفیق بشی.اوضاع خطرناکه!");
      status = "داداش وقتشه با دمبل رفیق بشی.اوضاع خطرناکه";
    }
  } else {
    if (math < 19) {
      console.log("خیلی باربی شدی یکم بیشتر تغذیه کن");
      status = "خیلی باربی شدی یکم بیشتر تغذیه کن";
    } else if (math < 24) {
      console.log("مدلینگ خالص شدی عالیه با همین فرمون برو جلو");
      status = "مدلینگ خالص شدی عالیه با هیمن فرمون برو جلو";
    } else {
      console.log(
        "وقتشه با باشگاه رفیق بشی تا از ورژن جدید و خوشتیپت رونمایی کنی",
      );
      status = "وقتشه با باشگاه رفیق بشی تا از ورژن جدید و خوشتیپت رونمایی کنی";
    }
  }
  document.getElementById("bmi-value").innerHTML =
    "عدد جادویی اندام تو:" + math;
  document.getElementById("bmi-status").innerHTML = status;
}
